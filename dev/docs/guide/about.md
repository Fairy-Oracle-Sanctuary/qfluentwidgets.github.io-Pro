---
title: About
date: 2023-08-17 15:02:30
permalink: /pages/about/
---

[**PySide6-Fluent-Widgets-Pro**](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro) is a Fluent Design component library maintained by [Fairy Oracle Sanctuary](https://fairy.ora-san.org/). Built on the free PySide6 implementation of QFluentWidgets, it restores, implements and extends selected advanced components for desktop applications.

This is a community-maintained fork, not an official QFluentWidgets Pro release or commercial distribution channel. Restoration remains a work in progress; use this repository's implementation and documentation as the reference for its APIs.

## Our component libraries

- **Python / PySide6**: [PySide6-Fluent-Widgets-Pro](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro), including free base components and implemented advanced extensions.
- **C++ / Qt**: [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets), currently including only free base components, without the advanced extensions in the Python project.

Source code for both repositories is available free of charge, with no purchase tiers. Refer to each repository's license for its usage terms.

## Features

- Based on PySide6, following familiar QtWidgets usage patterns.
- Light and dark themes, with internationalization for built-in component text.
- Base and extended buttons, pickers, navigation, layouts and status widgets.
- Native chat with streamed text, Markdown, code highlighting and customizable toolbars; ECharts-based charts.
- A categorized gallery and concise code examples, with optional features such as charts and code editing imported on demand.

## Getting started

Explore the [component examples](/pages/componentlist/), or download the [Python repository](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro) and run `python main.py` to open the gallery. Base and extended components use `qfluentwidgets_pro`; some optional components are imported from their specific modules, as described on their component pages and in the repository README.

For C++ / Qt builds, the gallery and project integration, see the [C++ installation section](/pages/install/#c-source-and-gallery-build). Use the Python / C++ switch on component pages to select examples.

## Project origins and licenses

The library builds on the free PySide6 implementation of [zhiyiYo/PyQt-Fluent-Widgets](https://github.com/zhiyiYo/PyQt-Fluent-Widgets). This documentation website is a fork of [qfluentwidgets/qfluentwidgets.github.io](https://github.com/qfluentwidgets/qfluentwidgets.github.io), adapted and maintained by Fairy Oracle Sanctuary.

Upstream copyright notices and licenses are retained; upstream work is not presented as our team's original work. The Python repository retains its [GPLv3 license](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/LICENSE). See the [C++ repository](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets) for its license and usage terms. Free access does not replace license requirements; also check dependency licenses when using or distributing the libraries.

## Acknowledgements

### Upstream projects and contributors

Thank you to [zhiyiYo](https://github.com/zhiyiYo) for creating QFluentWidgets, and to everyone who contributed to its library and documentation. This project's base components, design foundation and documentation framework build on their work.

[Upstream library contributors](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/graphs/contributors) · [Upstream documentation contributors](https://github.com/qfluentwidgets/qfluentwidgets.github.io/graphs/contributors)

<a href="https://github.com/zhiyiYo/PyQt-Fluent-Widgets/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=zhiyiYo/PyQt-Fluent-Widgets" alt="Contributors to the upstream QFluentWidgets repository" loading="lazy">
</a>

### Our project and contributors

Thank you to everyone contributing component implementations, extensions, fixes, translations and documentation to this project. Issues and pull requests are welcome.

[Our project contributors](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/graphs/contributors) · [C++ project contributors](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/graphs/contributors)

Python / PySide6 repository:

<a href="https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro&amp;v=2" alt="Contributors to our project repository" loading="lazy">
</a>

C++ / Qt repository:

<a href="https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/graphs/contributors" target="_blank" rel="noopener noreferrer">
    <img src="https://contrib.rocks/image?repo=Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets" alt="Contributors to our C++ repository" loading="lazy">
</a>

Some implementations also reference [PySide6-Fluent-UI](https://github.com/HiyorinI/PySide6-Fluent-UI) by [HiyorinI](https://github.com/HiyorinI), as credited in the library README.
