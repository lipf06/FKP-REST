var path = require('path');

//微信公众号配置文件
var hema = {
    token: '_cqch',
    appid: 'xxxxxxxxxxx',
    appsecret: 'xxxxxxxxxxx',
    encodingAESKey: 'xxxxxxxxxxx'
}

//微信公众号配置文件
var cqch = {
    token: '_cqch',
    appid: 'yyyyyyyyyyyyyyy',
    appsecret: 'yyyyyyyyyyyyyyy',
    encodingAESKey: 'yyyyyyyyyyyyyyy'
}

var static_dir = './public'
var version = '1.0.0'
var config = {
    // 默认首页
    root: 'demoindex',    //dev 或者 pro默认首页

    //本地上传路径
    upload: path.join(static_dir,'/dist/'),
    upload_root: path.join(static_dir,'/dist/uploader'),

    // 用户头像目录
    avatar: path.join(static_dir,'/dist/'),
    avatar_root: path.join(static_dir,'/dist/avatar'),

    // 阿里云图片路径
    goods_img: 'http://jh-ljs-goods.oss-cn-shenzhen.aliyuncs.com/',     //商品
    account_img:'http://jh-ljs-account.oss-cn-shenzhen.aliyuncs.com/',  //用户

    // weixintest: cqch,
    // domaintest: 'test.agzgz.com',

    //微信
    weixin: hema,                      // 微信模块调用参数

    //api
    apiip: "http://120.25.xxx.xxx",    //  api src 参考  根目录/pages/common/apilist.js
    port: ":8080/v1/",                 //  api src port 参考 根目录/pages/common/apilist.js
    domain: 'agzgz.com',

    // 第三方登陆
    auth: {
        github:{  //第三方github登陆
            clientID: 'd65a863ee074f62231c5',
            clientSecret: '9f4a6a2f93c7c23405378c70bb2ae1c618734985',
            callbackURL: 'http://www.agzgz.com/github/callback',
            successUrl: '/dbdemo',
            userKey: 'githubuser',    //save this key to session
            headers: {"user-agent": "love_gz"}
        }
    },

    //部署test环境
    // 测试需要的test环境
    // 开发环境： ./ly dev 启动本地环境
    // 测试环境： pm2 start index.js -- test
    // 生产环境： pm2 start index.js
    test: {
        weixin: cqch,
        domain: 'test.agzgz.com',
        apiip: '192.168.1.100',
        port: ':8088/v1/',
        auth: {
            //本地环境使用github登陆，使用 ./ly dev test
            github:{
                clientID: 'b1ba9181f8928e4cbfa2',
                clientSecret: 'cb598749e899bc20514a4b9f583974fd13457550',
                callbackURL: 'http://localhost:3000/github/callback',
                successUrl: '/dbdemo',
                userKey: 'githubuser',    //save this key to session
                headers: {"user-agent": "bendi"}
            }
        }
    },

    //静态资源路径
    static: {
		dft:  path.join(static_dir,'/dist/1.0.0/'),
		html: path.join(static_dir,'/dist/1.0.0/html'),
		js:   path.join(static_dir,'/dist/1.0.0/js'),
		css:  path.join(static_dir,'/dist/1.0.0/css'),
		img:  path.join(static_dir,'/dist/1.0.0/images'),
        test: {
            dft:  path.join(static_dir,'/dist/1.0.0/dev'),
            html: path.join(static_dir,'/dist/1.0.0/dev/html'),
            js:   path.join(static_dir,'/dist/1.0.0/dev/js'),
            css:  path.join(static_dir,'/dist/1.0.0/dev/css'),
            img:  path.join(static_dir,'/dist/1.0.0/dev/images')
        }
  	},

    // 静态资源映射文件
    // 如果后端使用java/php的模板，将map文件交给后端映射路径
  	mapJson:   path.join(static_dir,'/dist/1.0.0/map.json'),
  	mapDevJson:   path.join(static_dir,'/dist/1.0.0/dev/map.json'),

}

module.exports = config

// 数据库配置见db/config.js
