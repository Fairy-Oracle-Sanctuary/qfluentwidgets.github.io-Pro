---
title: 常见问题
date: 2023-08-17 16:25:01
permalink: /zh/pages/faq/
---

本页说明 Fairy Oracle Sanctuary 维护的两个社区组件库，不代表上游官方商业产品的销售或授权政策。

## 项目与源码

### 获取组件库需要购买、订阅或联系客户服务吗？

不需要。Python 和 C++ 两个仓库的源码均可免费获取，没有个人版、企业版或永久买断套餐，也不需要联系客服开通使用。

### 两个版本的源代码在哪里？

- **Python / PySide6**：[PySide6-Fluent-Widgets-Pro](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro)。
- **C++ / Qt**：[Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。

项目均由 [Fairy Oracle Sanctuary](https://fairy.ora-san.org/) 维护。Python 项目基于上游免费版扩展；C++ 项目是独立的原生 Qt 实现。它们不是上游官方 QFluentWidgets Pro 或官方商业 C++ 库的发行渠道。

## Python 与 C++

### 两个版本的组件和接口完全一样吗？

不一样。Python 包含免费基础组件和已实现的高级扩展组件，部分扩展仍在持续完善；C++ 目前以免费基础组件为主，尚未包含 Python 项目的整套高级扩展。

组件页提供 Python / C++ 切换，示例按各自仓库的真实接口编写。C++ 暂未实现的组件会明确标注；名称相似的类也可能采用不同接口，不能直接照搬另一种语言的示例。

### C++ 库需要 Python 运行环境吗？

不需要。C++ 库使用 C++17 和 Qt Widgets 实现，通过 CMake 构建静态库，不调用 Python 组件库。程序仍需要相应的 Qt 运行库和插件；具体性能取决于控件、应用逻辑和运行环境。

### 支持哪些环境，怎样运行 Gallery？

Python 使用 Python 3.9+ 和 PySide6；C++ 使用 Qt 5.15.2+ 或 Qt 6.x、CMake 3.16+ 以及支持 C++17 的编译器，编译器需与 Qt 套件兼容。

下载、安装依赖、运行 Gallery 和项目接入方式统一见[安装页](/zh/pages/install/)。页面可切换 Python / C++；不要使用上游商业版体验包作为本项目的安装方式。

### 为什么部分 Python 组件不能从包根目录导入？

部分可选功能采用按需导入，避免把未使用的依赖带入应用。例如聊天、图表、代码编辑器和多媒体应按对应组件页或仓库 README，从具体模块导入。是否可用还取决于该功能所需的依赖和运行时插件。

### 支持 QML 吗？

目前提供的是 Qt Widgets 组件，不是 QML 控件库。文档中的 Python / C++ 示例均面向 Qt Widgets，不能直接作为 QML 组件使用。

## 许可证与贡献

### 免费获取是否意味着任意商用或闭源发布都不受限制？

不是。两个仓库目前均保留 GPLv3 许可证：

- [Python 许可证](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/LICENSE)。
- [C++ 许可证](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/LICENSE)。

GPL 允许商业用途，但使用、修改和分发仍需遵守许可证条款，不能把免费获取理解为任意闭源发布的授权。可参考 [GNU 官方 FAQ](https://www.gnu.org/licenses/gpl-faq.en.html#GPLCommercially)。请同时检查 Qt 和其他依赖的许可要求；本项目不承诺提供上游商业许可证或闭源授权豁免。

### 遇到问题或想贡献代码，应该联系哪里？

请到所用仓库提交 Issue 或 Pull Request，不要联系上游商业版客服处理本项目的问题：

- [Python Issues](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/issues)。
- [C++ Issues](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/issues)。

反馈时注明操作系统、Python / PySide6 或 Qt / 编译器版本、组件名称、报错信息，并尽量提供最小复现。翻译与资源生成方式见[国际化文档](/zh/pages/i18n/)。

## 显示与窗口

### 为什么云母窗口的标题栏区域会显示强调色？

Windows 启用“在标题栏和窗口边框上显示强调色”时，可能影响云母窗口的标题栏外观。可以关闭该系统设置，或在应用中关闭云母特效。云母等原生效果受 Windows 版本和系统设置影响，并非所有平台都具有相同外观。

