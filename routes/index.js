var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/share', function (req, res, next) {
  res.render('share', { title: 'Express' });
});

router.post('/json/v1/h5/get_titter_info', function (req, res, next) {
  res.send({
    "code": 0,
    "msg": "",
    "times": 1526106388471,
    "data": {
      "pubTime": 1526172060000,
      "imgs": {
        "imgList": [{
          "height": 1104,
          "width": 828,
          "url": "http://sz1.img.tech-chance.com/common/7f4/7f44a5/sz1_83206772f789e60e6522cf4bbd05f99b_828x1104.png"
        },
        {
          "height": 1104,
          "width": 828,
          "url": "http://sz1.img.tech-chance.com/common/7d9/7d9672/sz1_6b8f2886ce7ce08d86c1c492a74a5abe_1242x1242.png"
        },
        {
          "height": 1104,
          "width": 828,
          "url": "http://sz1.img.tech-chance.com/common/86b/86b47f/sz1_a23e851c28d57a169e1d85719600e0a3_500x500.png"
        }]
      },
      "collectCount": 0,
      "jumpUrl": "https://xp.qpic.cn/oscar_pic/0/dea3adda661f4da1ad4d71375821pict/480",
      "playerBase": {
        "birthday": "2000-01-01",
        "sex": 1,
        "headImg": "http://sz1.img.tech-chance.com/common/86b/86b47f/sz1_a23e851c28d57a169e1d85719600e0a3_500x500.png",
        "nickname": "大王",
        "playerId": 1002010,
        "age": 18,
        "isAnonymous": 0,
        "signature": "叼不叼"
      },
      "anonymousPlayer": {
        "headImg": "http://sz1.img.tech-chance.com/anonymous/head/tumenglisb_1.png",
        "nickname": "仙宇小可爱"
       },
      "isAnonymous": 1,
      "likeCount": 50,
      "location": "中国-香港",
      "titterId": 1000140,
      "friendShip": 0,
      "vedioCover": {
        "height": 960,
        "width": 540,
        "url": "https://xp.qpic.cn/oscar_pic/0/dea3adda661f4da1ad4d71375821pict/480"
      },
      "isCollect": 0,
      "commentCount": 200000,
      "titterType": 0,
      // "vedioUrl": "http://v.weishi.qq.com/v.weishi.qq.com/1047_e057d5580cde4eb99acdf6cb6ad8vide.f20.mp4?vkey=672A32D775C075B3CB790AF6E5BDDC13D107736D1EA2F34C3127E9D6259520208E34FE5AECC2C35E62C1574211A8BCF7&guid=0508AFC000E081E13F01036CF26192E5&pver=4.0.0&fromtag=0&personid=h5&fromtag=0",
      // "content": "其实我坐床上发呆的目的不是单纯的看内裤...而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血而是等我妈进来发现我内裤有血（因为不知道该怎么主动说）而是等我妈进来发现我内裤有血（因为不知道该怎么主动说",
      "content": "其实我坐床上发呆的目的不是单纯的看内裤...",
      "jumpType": 0,
      "isLike": 0,
      "longtidude": -10000.0,
      "latitude": -10000.0,
      "imgCount": 1,
      "isHide": 0
    }
  })
})

router.post('/json/v1/h5/titter_comment_list', function (req, res, next) {
  res.send({
    "code": 0,
    "msg": "",
    "times": 1526107824571,
    "data": {
      "count": 5,
      "commentList": [{
        "pubTime": 1526107777693,
        "content": "哈哈哈",
        "toCommentId": 91,
        "toCommentPlayerBase": {
          "birthday": "1991-09-27",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/7d9/7d9672/sz1_6b8f2886ce7ce08d86c1c492a74a5abe_1242x1242.png",
          "nickname": "这个软件的爸爸",
          "playerId": 1000007,
          "age": 26,
          "isAnonymous": 0,
          "signature": "爱你么么哒"
        },
        "s": 98,
        "playerBase": {
          "birthday": "2000-01-01",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/86b/86b47f/sz1_a23e851c28d57a169e1d85719600e0a3_500x500.png",
          "nickname": "大王",
          "playerId": 1002010,
          "age": 18,
          "isAnonymous": 0,
          "signature": "叼不叼"
        },
        "titterId": 1000125,
        "commentId": 98
      }, {
        "pubTime": 1526107768490,
        "content": "傻傻",
        "toCommentId": 90,
        "toCommentPlayerBase": {
          "birthday": "2000-01-01",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/cab/cab3aa/sz1_a927cea91a0586523fe29f697ef59b2e.png",
          "nickname": "名字不长这样就好",
          "playerId": 1000006,
          "age": 18,
          "isAnonymous": 0,
          "signature": "我是博仔"
        },
        "s": 97,
        "playerBase": {
          "birthday": "2000-01-01",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/86b/86b47f/sz1_a23e851c28d57a169e1d85719600e0a3_500x500.png",
          "nickname": "大王",
          "playerId": 1002010,
          "age": 18,
          "isAnonymous": 0,
          "signature": "叼不叼"
        },
        "titterId": 1000125,
        "commentId": 97
      }, {
        "pubTime": 1525421252908,
        "content": "兄弟们",
        "toCommentId": 0,
        "toCommentPlayerBase": {},
        "s": 91,
        "playerBase": {
          "birthday": "1991-09-27",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/7d9/7d9672/sz1_6b8f2886ce7ce08d86c1c492a74a5abe_1242x1242.png",
          "nickname": "这个软件的爸爸",
          "playerId": 1000007,
          "age": 26,
          "isAnonymous": 0,
          "signature": "爱你么么哒"
        },
        "titterId": 1000125,
        "commentId": 91
      }, {
        "pubTime": 1525417931104,
        "content": "不要啦",
        "toCommentId": 62,
        "toCommentPlayerBase": {
          "birthday": "1988-02-12",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/bc1/bc1eb7/sz1_4c7e21233737a7935f94e935c08369ba_750x750.png",
          "nickname": "其实名字不用太长",
          "playerId": 1000004,
          "age": 30,
          "isAnonymous": 0,
          "signature": "捱叼"
        },
        "s": 90,
        "playerBase": {
          "birthday": "2000-01-01",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/cab/cab3aa/sz1_a927cea91a0586523fe29f697ef59b2e.png",
          "nickname": "名字不长这样就好",
          "playerId": 1000006,
          "age": 18,
          "isAnonymous": 0,
          "signature": "我是博仔"
        },
        "titterId": 1000125,
        "commentId": 90
      }, {
        "pubTime": 1525417922601,
        "content": "我抱你啊",
        "toCommentId": 0,
        "toCommentPlayerBase": {},
        "s": 89,
        "playerBase": {
          "birthday": "2000-01-01",
          "sex": 1,
          "headImg": "http://sz1.img.tech-chance.com/common/cab/cab3aa/sz1_a927cea91a0586523fe29f697ef59b2e.png",
          "nickname": "名字不长这样就好",
          "playerId": 1000006,
          "age": 18,
          "isAnonymous": 0,
          "signature": "我是博仔"
        },
        "titterId": 1000125,
        "commentId": 89
      }]
    }
  })
})

module.exports = router
