# PuChi 分享页面开发说明

## 下载
```
$ git clone git@github.com:garygchai/puchi_source.git
```

## 安装
```
$ cd puchi_source && npm install
```

## 启动
```
$ npm start
```

## 调试
Open `http://localhost:3000/share`

## 发布
```
$ npm run build
```
最终编译的代码会发布到 `public/static/share` 目录下，请到该目录将所有文件移动到你们的项目目录。

## 页面说明
`views/index.html` 动态分享页面
`static/index.tsx` 动态分享JS文件
`views/share.html` 静态分享页面
PS：不用管CSS和图片资源，已经引入到`static/index.tsx`文件，最终会打包成一个JS文件。
