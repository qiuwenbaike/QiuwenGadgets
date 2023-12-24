[![NPM version](https://img.shields.io/npm/v/awesome-gadgets.svg)](https://www.npmjs.com/package/awesome-gadgets)
[![Linter](https://github.com/qiuwenbaike/QiuwenGadgets/actions/workflows/lint.yml/badge.svg)](https://github.com/qiuwenbaike/QiuwenGadgets/actions/workflows/lint.yml)

# _Qiuwen_ Gadgets

## 简介 / Introduction

本代码库为[求闻百科][qiuwenbaike]的[界面样式][styles]、[界面脚本][scripts]和[小工具代码库][gadgets]。相关样式表及 JavaScript 优化了求闻百科访客及编者的用户体验，并且为求闻百科用户提供了大量执行常见维护任务的方法。

## 致谢 / Acknowledgement

求闻百科小工具库是基于 [Awesome Gadgets][awesome] 打造的。

Awesome Gadgets 是面向 MediaWiki 网站，用以统一存储、管理并编译全站小工具（Gadget）的工具。小工具开发者只需关心小工具本身的代码实现，无需关心其他方面。工具将自动检查语法、编译并部署到网站。<br>_Awesome Gadgets_ is a tool designed specifically for MediaWiki websites, with the goal of centralizing the storage, management, and compilation of all site-wide gadgets. Developers of these gadgets can solely focus on implementing the code for their creations without the need to worry about other aspects. The tool will automatically check the syntax, compile, and deploy gadgets to the website.

-   使用 esbuild 编译，babel 转译，支持 TypeScript 和 Less<br>It harnesses esbuild for compilation, babel for transpilation, and supports TypeScript and Less
-   部署时将自动部署<br>During deployment, it automatically deploys to the following
    -   `MediaWiki:Gadgets-definition`
    -   `MediaWiki:Gadget-section-*`（支持自动转换中文变体）/ (with automatic conversion for Chinese variations)
    -   `MediaWiki:Gadget-*`（支持自动转换中文变体）/ (with automatic conversion for Chinese variations)
    -   `MediaWiki:Gadget-*.{js, css}`
-   部署后将自动从网站内删除曾经部署过但现在不再需要的页面<br>After deployment, it automatically deletes pages from the website that have been deployed but are no longer needed

## 用法 / Usage

见[文档](docs/how-to-build-or-deploy.md)。<br>See [documentation](docs/how-to-build-or-deploy.md).

## 最佳实践 / Best practices

-   [QiuwenGadgets](https://github.com/qiuwenbaike/QiuwenGadgets) ([@qiuwenbaike](https://github.com/qiuwenbaike))

[qiuwenbaike]: https://www.qiuwenbaike.cn/
[styles]: https://www.qiuwenbaike.cn/wiki/Help:%E7%95%8C%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%B8%8E%E8%84%9A%E6%9C%AC#%E7%95%8C%E9%9D%A2%E6%A0%B7%E5%BC%8F
[scripts]: https://www.qiuwenbaike.cn/wiki/Help:%E7%95%8C%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%B8%8E%E8%84%9A%E6%9C%AC#%E7%95%8C%E9%9D%A2%E8%84%9A%E6%9C%AC
[gadgets]: https://www.qiuwenbaike.cn/wiki/Special:%E5%B0%8F%E5%B7%A5%E5%85%B7
[awesome]: https://github.com/AnYiEE/AwesomeGadgets
