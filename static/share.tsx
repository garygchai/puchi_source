import * as React from 'react'
import * as ReactDom from 'react-dom'

class ContentBox extends React.Component<any, any> {
    handleClick () {
        window.location.href = "puchi://";//ios app协议
        window.setTimeout(function () {
            window.location.href = "https://itunes.apple.com/cn/app/id1368357493?mt=8";
        }, 1500)
    }
    render () {
        return (
            <div className="content">
                <a id="openBtn" className="open-btn" href="javascript:;" onClick={() => this.handleClick()}></a>
            </div>
        )
    }
}

ReactDom.render(<ContentBox />, document.getElementById('app'))