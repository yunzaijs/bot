# BOT PE

BOT PE 是兼容V3环境和喵崽环境的yunzaijs机器人纯净版

[☞点击阅读文档了解更多](https://yunzaijs.com/docs/) [文档镜像](https://yunzaijs.github.io/docs/)

> 开发框架核心库 https://github.com/yunzaijs/core

## 安装

必备条件`Chrome`、`Node.js@18`、`Git`、`Redis-6.2`

```sh
git clone --depth=1 https://github.com/yunzaijs/bot.git ./yunzai-bot
```

```sh
cd yunzai-bot
```

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

```sh
# yarn 不能使用2.x版本，它无法使用link
npm install yarn@1.19.1 -g
yarn --ignore-engines
```

```sh
# 运行
yarn app
```

#Qsign 更新脚本（版本过低/45/237执行以下脚本↓）

- 进入根目录执行
```sh
bash <(curl -sSL gitee.com/lzqmql/qsign/raw/master/qsign)
```
- 如需enka请访问:https://yzbz.fufuidc.com

## 喵崽

> 当前仅有喵崽环境支持几乎所有的米游类插件

> 需要此环境的友友务必执行补丁脚本并安装原神和喵喵插件

- 执行补丁

```sh
node lib/miao-yunzai.js
```

- 安装喵喵插件

```sh
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

- 安装原神插件

```sh
git clone --depth=1 -b next https://github.com/yunzaijs/genshin.git ./plugins/genshin/
```

- 去除环境

```sh
node lib/miao-yunzai.js --delete
```
