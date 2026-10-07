---
title: FAQs
date: 2023-08-17 16:25:01
permalink: /pages/faq/
---

This page covers the two community libraries maintained by Fairy Oracle Sanctuary, not the sales or licensing policies of upstream commercial products.

## Project and source code

### Do I need to purchase, subscribe or contact customer support?

No. Source code for both the Python and C++ repositories is available free of charge. There are no personal, enterprise or perpetual purchase tiers, and no customer-support activation is required.

### Where can I find both repositories?

- **Python / PySide6**: [PySide6-Fluent-Widgets-Pro](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro).
- **C++ / Qt**: [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets).

Both projects are maintained by [Fairy Oracle Sanctuary](https://fairy.ora-san.org/). The Python project extends the upstream free version; the C++ project is an independent native Qt implementation. Neither is a distribution channel for official QFluentWidgets Pro or the upstream commercial C++ library.

## Python and C++

### Do both versions have identical components and APIs?

No. Python includes free base components and implemented advanced extensions, some of which remain a work in progress. C++ currently focuses on free base components and does not include the complete set of Python extensions.

Component pages have a Python / C++ switch, with examples based on each repository's actual APIs. Components not yet implemented in C++ are explicitly marked. Similar class names may have different interfaces; do not copy examples directly between languages.

### Does the C++ library require a Python runtime?

No. It uses C++17 and Qt Widgets and builds as a static library with CMake, without calling the Python library. Applications still need the appropriate Qt runtime libraries and plugins. Performance depends on the controls, application logic and environment.

### Which environments are supported, and how do I run the Gallery?

Python uses Python 3.9+ and PySide6. C++ uses Qt 5.15.2+ or Qt 6.x, CMake 3.16+ and a C++17 compiler compatible with the Qt package.

See the [installation page](/pages/install/) for downloads, dependencies, Gallery instructions and project integration. Switch between Python and C++ there; upstream commercial demo packages are not this project's installation method.

### Why are some Python components not exported from the package root?

Some optional features use explicit, on-demand imports to avoid pulling unused dependencies into applications. For chat, charts, code editing and multimedia, follow the component page or repository README and import from the specific module. Required dependencies and runtime plugins must also be available.

### Is QML supported?

These are currently Qt Widgets libraries, not QML control libraries. Python and C++ examples target Qt Widgets and cannot be used directly as QML components.

## Licenses and contributions

### Does free access mean unrestricted commercial or closed-source distribution?

No. Both repositories currently retain GPLv3:

- [Python license](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/LICENSE).
- [C++ license](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/LICENSE).

The GPL permits commercial use, but use, modification and distribution must comply with its terms. Free access is not permission for arbitrary closed-source distribution. See the [official GNU FAQ](https://www.gnu.org/licenses/gpl-faq.en.html#GPLCommercially). Also review Qt and other dependency licenses. This project does not promise an upstream commercial license or an exemption for proprietary distribution.

### Where should I report problems or contribute?

Submit issues or pull requests to the repository you use, rather than contacting upstream commercial support about this project:

- [Python issues](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/issues).
- [C++ issues](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/issues).

Include your operating system, Python / PySide6 or Qt / compiler versions, component name, error details and preferably a minimal reproduction. Translation and resource generation are covered in the [internationalization guide](/pages/i18n/).

## Appearance and windows

### Why does a Mica window's title bar show the accent color?

The Windows setting “Show accent color on title bars and window borders” can affect a Mica window's title-bar appearance. Disable that setting or disable Mica in the application. Native effects depend on the Windows version and system settings; appearance is not identical across platforms.
