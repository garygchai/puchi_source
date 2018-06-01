import './style.less'
const deepAssign = require('deep-assign')

function openApp() {
  // window.location.href = "com.tech-chance.puchi://";//ios app协议
  window.location.href = "puchi://";//ios app协议
  window.setTimeout(function () {
    window.location.href = "https://itunes.apple.com/cn/app/id1368357493?mt=8";
  }, 1500)
}

function showTime(time: number) {
  const dateSrc = new Date(time)
  const dateNow = new Date()
  time = time ? parseInt(String(time / 1000)) : parseInt(String(dateNow.valueOf() / 1000))
  const now = parseInt(String(dateNow.valueOf() / 1000))
  const parseNum = (num: number) => {
    if (num >= 10) {
      return num
    } else {
      return `0${num}`
    }
  }
  const diffDate = (diff: Date, src: Date) => {
    return ((diff.getMonth() + 1) * 30 + diff.getDate()) - ((src.getMonth() + 1) * 30 + src.getDate())
  }
  // 显示今天处理逻辑
  if (diffDate(dateNow, dateSrc) === 0) {
    if (now === time) {
      return '刚刚'
    }
    if (now - time < 60) {
      return `${now - time}秒之前`
    }
    if (now - time >= 60 && now - time < 3600) {
      return `${parseInt(String((now - time) / 60))}分钟之前`
    }
    if (now - time >= 3600 && now - time < 24 * 3600) {
      return `${parseInt(String((now - time) / 3600))}小时之前`
    }
  }
  // 显示昨天处理逻辑
  if (diffDate(dateNow, dateSrc) === 1) {
    return `昨天${dateSrc.getHours()}:${dateSrc.getMinutes()}`
  }
  // 显示日期处理逻辑
  if (diffDate(dateNow, dateSrc) >= 2) {
    return `${dateSrc.getFullYear()}-${parseNum(dateSrc.getMonth() + 1)}-${parseNum(dateSrc.getDate())} ${parseNum(dateSrc.getHours())}:${parseNum(dateSrc.getMinutes())}`
  }
}

function showNum (num: number) {
  if (num < 1000) {
    return num
  }
  if (num >= 1000 && num < 10000) {
    if (num % 1000 === 0) {
      return `${num / 1000}k`
    } else {
      return `${(num / 1000).toFixed(1)}k`
    }
  }
  if (num >= 10000 && num < 100000) {
    if (num % 10000 === 0) {
      return `${num / 10000}w`
    } else {
      return `${(num / 10000).toFixed(1)}w`
    }
  }
  if (num >= 100000) {
    return `10w+`
  }
}

import * as React from 'react'
import * as ReactDom from 'react-dom'
import axios from 'axios'
import { relative } from 'path';

interface IAvatarProps {
  userInfo: {
    headImg?: string,
    nickname?: string,
  },
  pubTime?: number,
  location?: string,
}

interface IVideoProps {
  vedioCover: {
    url: string,
    width: number,
    height: number
  },
  vedioUrl: string,
  visible: boolean
}

interface IImageProps {
  imgList: Array<{
    url: string
  }>,
  visible: boolean,
  link: string
}

interface ICommentProps {
  commentList: Array<{
    commentId: number,
    pubTime: number,
    content: '',
    playerBase: any
  }>
}

class ContentBox extends React.Component<any, any> {
  state = {
    loading: true,
    hidding: false,
    titterInfo: {
      playerBase: {
        headImg: '',
        nickname: ''
      },
      location: '',
      content: '',
      likeCount: '',
      commentCount: '',
      pubTime: 0,
      vedioCover: {
        url: '',
        width: 0,
        height: 0
      },
      jumpUrl: '',
      vedioUrl: '',
      imgs: {
        imgList: [] as any
      }
    },
    commentInfo: {
      commentList: [] as any
    }
    
  }
  async componentWillMount() {
    let titterId = 0
    if (window.location.search.match(/titterId=(\d+)/)) {
      titterId = parseInt(window.location.search.match(/titterId=(\d+)/)[1])
    }
    const http = axios.create({
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });
    try {
      const ret = (await http.post('/json/v1/h5/get_titter_info', `titterId=${titterId}`)).data
      if (ret && ret.data) {
        if (ret.data.isHide) {
          this.setState({
            hidding: true
          })
        } else {
          this.setState({
            titterInfo: deepAssign({}, this.state.titterInfo, ret.data)
          })
        }
      }
    } catch (e) {
      console.error(e)
    }
    try {
      if (!this.state.hidding) {
        const ret = (await http.post('/json/v1/h5/titter_comment_list', `titterId=${titterId}`)).data
        this.setState({
          commentInfo: deepAssign({}, this.state.titterInfo, ret.data)
        })
      }
    } catch (e) {
      console.error(e)
    }
    this.setState({
      loading: false
    })
  }
  render() {
    return (
      <div>
        <LogoBox 
          visible={!this.state.loading}
        />
        <div style={{display: !this.state.loading && !this.state.hidding ? 'block' : 'none'}}>
          <AvatarBox
            userInfo={this.state.titterInfo.playerBase}
            location={this.state.titterInfo.location}
            pubTime={this.state.titterInfo.pubTime}
          />
          <VideoBox
            visible={!!this.state.titterInfo.vedioUrl}
            vedioCover={this.state.titterInfo.vedioCover}
            vedioUrl={this.state.titterInfo.vedioUrl}
          />
          <ImageBox
            visible={!this.state.titterInfo.vedioUrl}
            imgList={this.state.titterInfo.imgs && this.state.titterInfo.imgs.imgList}
            link={this.state.titterInfo.jumpUrl}
          />
          <PersonBox
            content={this.state.titterInfo.content}
            likeCount={this.state.titterInfo.likeCount}
            commentCount={this.state.titterInfo.commentCount}
          />
          <CommentBox
            commentList={this.state.commentInfo.commentList}
          />
        </div>
        <HiddingBox
          visible={this.state.hidding}
        />
        <DownloadBox 
          visible={!this.state.loading}
        />
        <LoadingBox
          visible={this.state.loading}
        />
      </div>
    )
  }
}

class LogoBox extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }
  render() {
    return (
      <div className="logo-box" id="logoBox" style={{display: this.props.visible ? 'block' : 'none'}}>
        <div className="box">
          <i className="logo"></i>
          <a className="open-btn" href="javascript:;" onClick={() => {openApp()}}></a>
        </div>
        <i className="shadow"></i>
      </div>
    )
  }
}

class AvatarBox extends React.Component<IAvatarProps, any> {
  render() {
    return (
      <div className="avatar-box">
        <img className="avatar" src={this.props.userInfo.headImg} />
        <div className="info">
          <p className="nick">{this.props.userInfo.nickname}</p>
          <p>
            <span className="time">{showTime(this.props.pubTime)}</span>
            <span style={{ display: this.props.location ? 'inline-block' : 'none' }} className="location">
              <i className="icon"></i>
              <span>{this.props.location}</span>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

class VideoBox extends React.Component<IVideoProps, any> {
  state = {
    lockHeight: 0
  }
  componentWillReceiveProps (nextProps: IVideoProps) {
    const width = nextProps.vedioCover && nextProps.vedioCover.width || 0
    const height = nextProps.vedioCover && nextProps.vedioCover.height || 0
    if (width < height) {
      this.setState({
        lockHeight: document.documentElement.clientWidth
      })
    }
  }
  render() {
    return (
      <div className="video-box" style={{display: this.props.visible ? 'block' : 'none'}}>
        <video
          id="videoPlayer"
          style={{height: this.state.lockHeight || 'auto'}}
          className="video" src={this.props.vedioUrl}
          poster={this.props.vedioCover && this.props.vedioCover.url}
          controls
        >
        </video>
      </div>
    )
  }
}

class ImageBox extends React.Component<IImageProps, any> {
  render() {
    return (
      <div className="image-box" style={{display: this.props.visible ? 'block' : 'none'}}>
        {
          this.props.imgList && this.props.imgList.map((item, index) => {
            let jumpEl:any
            if (index === 0 && this.props.link) {
              jumpEl = (
                <a className='jump' href={this.props.link}></a>
              )
            }
            return (
              <div style={{position: 'relative'}}>
                {jumpEl}
                <img key={item.url} src={item.url}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

class PersonBox extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      content: props.content,
      showMore: false
    }
  }
  refs: any
  componentWillReceiveProps() {
    if (this.props.content.length > 264) {
      this.setState({
        content: this.props.content.slice(0, 264).concat('...'),
        showMore: true
      })
    } else {
      this.setState({
        content: this.props.content,
        showMore: false
      })
    }
  }
  showEnterBox () {
    this.refs.enterBox.show()
  }
  render() {
    return (
      <div>
        <div className="person-box">
          <div className="operate">
            <a href="javascript:;" onClick={() => {this.showEnterBox()}} className="collect"><i className="icon"></i><i className="separate" /></a>
            <a href="javascript:;" onClick={() => {this.showEnterBox()}} className="comment"><i className="icon"></i>{showNum(this.props.commentCount)}</a>
            <a href="javascript:;" onClick={() => {this.showEnterBox()}} className="like"><i className="icon"></i>{showNum(this.props.likeCount)}</a>
          </div>
          <p className="content">
            {this.state.content}
            <a className="more" href="javascript:;" onClick={openApp} style={{ display: this.state.showMore ? 'block' : 'none' }}></a>
          </p>
          <hr />
        </div>
        <EnterBox
          ref='enterBox'
        />
      </div>
    )
  }
}

class CommentBox extends React.Component<ICommentProps, any> {
  render() {
    return (
      <div className="comment-box">
        <ul>
          {
            this.props.commentList && this.props.commentList.slice(0, 5).map(item => {
              return (
                <li key={item.commentId}>
                  <img className="avatar" src={item.playerBase.headImg} />
                  <div className="comment">
                    <p className="time">{showTime(item.pubTime)}</p>
                    <div className="content">
                      <p className="nick">{`${item.playerBase.nickname}：`}</p>
                      <span className="text">{item.content}</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <a className="more" style={{display: this.props.commentList && this.props.commentList.length > length ? 'inline-block' : 'none'}} href="javascript:;" onClick={openApp}>查看更多评论<i className="icon"></i></a>
      </div>
    )
  }
}

class DownloadBox extends React.Component<any, any> {
  render() {
    return (
      <div className="download-box" id="downloadBox" style={{ display: this.props.visible ? 'block' : 'none' }}>
        <i className="shadow"></i>
        <div className="slogan-box">
          <i className="logo"></i>
          <span className="text">属于你的潮人聚集地</span>
          <a className="download-btn" href="javascript:;" onClick={openApp}></a>
        </div>
      </div>
    )
  }
}

class LoadingBox extends React.Component<any, any> {
  state = {
    height: document.body.scrollHeight
  }
  componentDidMount() {
    this.setState({
      height: document.body.scrollHeight
    })
  }
  render() {
    return (
      <div className="loading-box" style={{ display: this.props.visible ? 'block' : 'none' }}>
        <div className="modal-box" style={{ height: this.state.height }}></div>
        <i className="loading-icon"></i>
      </div>

    )
  }
}

class HiddingBox extends React.Component<any, any> {
  height = document.documentElement.clientHeight
  componentDidMount () {
    setTimeout(() => {
      const logoHeight = document.getElementById('logoBox').clientHeight
      const downloadHeight = document.getElementById('downloadBox').clientHeight
      this.height = document.documentElement.clientHeight - logoHeight - downloadHeight
      document.getElementById('hiddingBox').style.height = this.height + 'px'
    }, 100)
  }
  render() {
    return (
      <div id="hiddingBox" className="hidding-box" style={{ display: this.props.visible ? 'block' : 'none', height: this.height}}>
        <i className="hidding"></i>
      </div>
    )
  }
}

class EnterBox extends React.Component<any, any> {
  state = {
    height: document.body.scrollHeight,
    visible: false
  }
  public show () {
    this.setState({
      visible: true,
      height: document.body.scrollHeight
    })
  }
  public hide () {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div className="enter-box" style={{ display: this.state.visible ? 'block' : 'none' }}>
        <div className="modal-box" style={{ height: this.state.height }}></div>
        <div className="popup-box">
          <a className="enter-btn" href="javascript:;" onClick={openApp}></a>
          <a className="close-btn" href="javascript:;" onClick={() => this.hide()}>X</a>
        </div>
      </div>

    )
  }
}
ReactDom.render(<ContentBox />, document.getElementById('app'))
// export default ContentBox