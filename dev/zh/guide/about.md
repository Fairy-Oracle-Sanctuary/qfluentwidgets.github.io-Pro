---
title: 简介
date: 2023-08-17 15:02:30
permalink: /zh/pages/about/
---

[**PySide6-Fluent-Widgets-Pro**](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro) 是由 [Fairy Oracle Sanctuary](https://fairy.ora-san.org/) 维护的 Fluent Design 风格组件库。本项目基于 QFluentWidgets 免费版的 PySide6 实现，在基础组件之上持续还原、实现和扩展部分高级组件，方便开发者构建桌面应用。

这是社区维护的 fork，与官方 QFluentWidgets Pro 无隶属关系，也不是官方商业版的发行渠道。目前的还原工作仍在进行中，组件用法以本仓库实现和文档示例为准。

## 我们的组件库

- **Python / PySide6**：[PySide6-Fluent-Widgets-Pro](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro)，包含免费基础组件和已实现的高级扩展组件。
- **C++ / Qt**：[Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)，目前仅包含免费基础组件，不包含 Python 项目中的高级扩展组件。

两个仓库均可免费获取源代码，无需选择购买套餐。具体使用条件请查看各自仓库的许可证。

## 特性

- 基于 PySide6，沿用熟悉的 QtWidgets 使用方式。
- 支持亮色、暗色主题及组件内置文案的国际化。
- 提供按钮、选择器、导航、布局、状态提示等基础与扩展组件。
- 原生聊天组件支持流式文本、Markdown、代码高亮和可自定义的工具栏；图表组件使用 ECharts。
- 提供分类 gallery 和简短代码示例，图表、代码编辑等可选功能按需导入。

## 从这里开始

查看 [组件展示与用法](/zh/pages/componentlist/)，或下载 [Python 仓库源码](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro)，运行 `python main.py` 打开 gallery。基础组件和扩展组件均从 `qfluentwidgets_pro` 使用；部分可选组件需要从具体模块导入，详见对应展示页和仓库 README。

C++ / Qt 的构建、运行 gallery 和项目接入方式见[安装页的 C++ 部分](/zh/pages/install/#c-下载与构建-gallery)，组件示例可通过页面顶部的 Python / C++ 切换按钮查看。

## 项目来源与许可证

组件库基于 [zhiyiYo/PyQt-Fluent-Widgets](https://github.com/zhiyiYo/PyQt-Fluent-Widgets) 的免费版 PySide6 实现；本文档站 fork 自 [qfluentwidgets/qfluentwidgets.github.io](https://github.com/qfluentwidgets/qfluentwidgets.github.io)，由 Fairy Oracle Sanctuary 适配和维护。

本项目保留上游的版权署名和许可证，不将上游成果声明为本团队原创。Python 仓库保留 [GPLv3 许可证](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/LICENSE)；C++ 项目的许可证和使用条件请查看其[源码仓库](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。免费获取不替代许可证要求，使用或分发时请同时检查相关依赖的许可文件。

## 致谢

### 上游项目与贡献者

感谢 [zhiyiYo](https://github.com/zhiyiYo) 创建 QFluentWidgets，以及所有参与上游组件库和文档建设的贡献者。本项目的基础组件、设计体系和文档框架建立在他们的工作之上。

[上游组件库贡献者名单](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/graphs/contributors) · [上游文档贡献者名单](https://github.com/qfluentwidgets/qfluentwidgets.github.io/graphs/contributors)

<a href="https://github.com/zhiyiYo/PyQt-Fluent-Widgets/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=zhiyiYo/PyQt-Fluent-Widgets" alt="QFluentWidgets 上游仓库贡献者" loading="lazy">
</a>

### 本项目与贡献者

感谢所有参与本项目组件还原、功能扩展、问题修复、翻译和文档完善的贡献者。欢迎通过仓库的 Issue 和 Pull Request 一起改进项目。

[本项目贡献者名单](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/graphs/contributors) · [C++ 项目贡献者名单](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/graphs/contributors)

Python / PySide6 仓库：

<a href="https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro&amp;v=2" alt="本项目仓库贡献者" loading="lazy">
</a>

C++ / Qt 仓库：

<a href="https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets" alt="本项目 C++ 仓库贡献者" loading="lazy">
</a>

本项目部分组件实现还参考了 [HiyorinI](https://github.com/HiyorinI) 的 [PySide6-Fluent-UI](https://github.com/HiyorinI/PySide6-Fluent-UI)，对应来源说明保留在组件库 README 中。
