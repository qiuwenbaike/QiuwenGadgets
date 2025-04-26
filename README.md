[![NPM version](https://img.shields.io/npm/v/awesome-gadgets.svg)](https://www.npmjs.com/package/awesome-gadgets)
[![Linter](https://github.com/qiuwenbaike/QiuwenGadgets/actions/workflows/lint.yml/badge.svg)](https://github.com/qiuwenbaike/QiuwenGadgets/actions/workflows/lint.yml)

# _Qiuwen_ Gadgets

## 简介 / Introduction

本代码库为[求闻百科][qiuwenbaike]的[界面样式][styles]、[界面脚本][scripts]和[小工具代码库][gadgets]。相关样式表及 JavaScript 优化了求闻百科访客及编者的用户体验，并且为求闻百科用户提供了大量执行常见维护任务的方法。

## 致谢 / Acknowledgement

求闻百科小工具库是基于 [Awesome Gadgets][awesome] 打造的。

**Awesome Gadgets** 是专为 MediaWiki 设计的全站小工具（Gadget）统一管理解决方案。开发者只需专注于核心代码实现，其余工作（包括语法检查、编译与部署、资源管理）将由本工具自动完成。<br>**Awesome Gadgets** is a comprehensive solution for centralized management of site-wide Gadgets (CSS/JavaScript and related pages) on MediaWiki platforms. It allows developers to focus exclusively on core code implementation, while automating auxiliary processes including syntax validation, compilation and deployment, and resource management.

## 核心特性 / Key Features

🤖 **智能部署系统**<br>**Smart Deployment System**

- **自动生成与部署**<br>**Automated Generation & Deployment**
    - `MediaWiki:Gadgets-definition`
    - `MediaWiki:Gadget-section-*`（中文变体自动转换）/(with auto-conversion for Chinese variants)
    - `MediaWiki:Gadget-*`（中文变体自动转换）/(with auto-conversion for Chinese variants)
    - `MediaWiki:*.{js, css}`
- **自动清理遗留页面**<br>**Automatic Legacy Cleanup**
    - 自动删除不再需要的部署页面<br>Automatically purge deprecated deployment pages

🌐 **MediaWiki 深度集成**<br>**Native MediaWiki Integration**

- **ResourceLoader 模块支持**<br>**ResourceLoader Module Support**
    - [模块引用指南](docs/how-to-use-exports-and-require-in-mediawiki.md)<br>[Module Import Guide](docs/how-to-use-exports-and-require-in-mediawiki.md)
- **多站点管理**<br>**Multi-site Management**
    - 支持多站点部署与独立控制<br>Support cross-site deployment with independent toggle controls

🚀 **现代编译工具链**<br>**Next-Gen Compilation Toolchain**

- **高效编译引擎**<br>**Optimized Compilation**
    - 使用 esbuild 构建，通过 Babel 转译确保兼容性<br>Build with esbuild and transpile via Babel for maximum compatibility
- **现代语法支持**<br>**Modern Syntax Support**
    - 支持 TypeScript 和 Less 模块<br>Support TypeScript and Less modules
    - 兼容 [jsx-dom](https://www.npmjs.com/package/jsx-dom) 与 Vue 组件<br>Compatible with [jsx-dom](https://www.npmjs.com/package/jsx-dom) and Vue components
        - [JSX/TSX 集成指南](docs/how-to-use-jsx-and-tsx-with-jsxdom.md)<br>[JSX/TSX Integration Guide](docs/how-to-use-jsx-and-tsx-with-jsxdom.md)
        - [Vue 组件指南](docs/how-to-use-vue.md)<br>[Vue Component Guide](docs/how-to-use-vue.md)

## 快速开始 / Getting Started

完整使用指南请参阅：[构建与部署文档](docs/how-to-build-or-deploy.md)<br>See full documentation: [Build & Deployment Guide](docs/how-to-build-or-deploy.md)

## 最佳实践 / Best Practices

- [QiuwenGadgets](https://github.com/qiuwenbaike/QiuwenGadgets) - 生产环境实现案例<br>Production-ready implementation maintained by [@qiuwenbaike](https://github.com/qiuwenbaike)

[qiuwenbaike]: https://www.qiuwenbaike.cn/
[styles]: https://www.qiuwenbaike.cn/wiki/Help:%E7%95%8C%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%B8%8E%E8%84%9A%E6%9C%AC#%E7%95%8C%E9%9D%A2%E6%A0%B7%E5%BC%8F
[scripts]: https://www.qiuwenbaike.cn/wiki/Help:%E7%95%8C%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%B8%8E%E8%84%9A%E6%9C%AC#%E7%95%8C%E9%9D%A2%E8%84%9A%E6%9C%AC
[gadgets]: https://www.qiuwenbaike.cn/wiki/Special:%E5%B0%8F%E5%B7%A5%E5%85%B7
[awesome]: https://github.com/AnYiEE/AwesomeGadgets
