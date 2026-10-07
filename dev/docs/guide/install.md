---
title: Install
date: 2023-08-17 15:37:01
permalink: /pages/install/
---

Choose your development language for installation and integration instructions. Both repositories are available at no cost; their respective licenses define the terms of use.

<InstallTabs>
<template #python>

[PySide6-Fluent-Widgets-Pro](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro) includes free base components and implemented advanced extensions. It uses PySide6 and the `qfluentwidgets_pro` package name.

## Python requirements

- Python 3.9 or newer; a dedicated virtual environment is recommended.
- PySide6 and `darkdetect`.
- Windows requires `pywin32`; macOS requires `pyobjc`. Neither platform dependency is needed on Linux.

This repository currently has no pip installation configuration. Use the source code; the upstream `pip install PySide6-Fluent-Widgets` command does not install this project.

## Python source and dependencies

```shell
git clone https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro.git
cd PySide6-Fluent-Widgets-Pro
python -m venv .venv
```

Activate the environment in Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Or activate it on macOS / Linux:

```shell
source .venv/bin/activate
```

Install the base dependencies in the activated environment:

```shell
python -m pip install --upgrade pip
python -m pip install PySide6 darkdetect
```

Run only the command matching your operating system:

```shell
# Windows only
python -m pip install pywin32

# macOS only
python -m pip install pyobjc
```

## Python Gallery

Run from the repository root:

```shell
python main.py
```

The Gallery includes base and extension components. The Charts and Chat sidebar actions open separate demo windows. The chat demo simulates streaming locally and does not connect to an AI service.

## Python integration

Copy the `qfluentwidgets_pro` directory into your application, or add the repository root to Python's module search path. Then try this example:

```python
from PySide6.QtWidgets import QApplication, QVBoxLayout, QWidget
from qfluentwidgets_pro import PushButton

app = QApplication([])
window = QWidget()
layout = QVBoxLayout(window)
layout.addWidget(PushButton("Hello, Fluent Widgets!", window))
window.resize(400, 240)
window.show()
app.exec()
```

This project uses `qfluentwidgets_pro`, whereas the upstream free library uses `qfluentwidgets`. Use the correct import path and do not mix PyQt and PySide in the same application.

## Python optional features

Install only the dependencies for features you actually use:

```shell
# Native chat: code highlighting and formulas
python -m pip install -r requirements-chat.txt

# Code editor: syntax highlighting
python -m pip install -r requirements-codeedit.txt

# Acrylic components: CPU image blur
python -m pip install numpy scipy Pillow colorthief
```

Chat, the code editor and charts are not exported from the package root. Import them explicitly:

```python
from qfluentwidgets_pro.components.widgets.chat_widget import ChatWidget, ChatMessage
from qfluentwidgets_pro.components.widgets.code_edit import CodeEdit, CodeLanguage
from qfluentwidgets_pro.components.widgets.chart_widget import ChartWidget
```

Charts require the PySide6 QtWebEngine / QtQuickWidgets modules; native chat does not use a WebView. Without the image-blur dependencies, acrylic images fall back to an unblurred appearance.

For `ModuleNotFoundError`, check that you are using the virtual environment's Python, have installed the dependencies, and have made `qfluentwidgets_pro` accessible to your application.

</template>
<template #cpp>

[Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets) is a native C++ / Qt Widgets library. It currently includes only free base components, not the advanced extensions from the Python project.

## C++ requirements

- Qt 5.15.2 or a newer Qt 5 release, or Qt 6, including the `Widgets` and `Svg` modules.
- CMake 3.16 or newer and a C++17 compiler.
- Building the Gallery also requires Qt `LinguistTools`.

Your compiler and architecture must match the Qt package. For example, `msvc2019_64` requires a compatible 64-bit MSVC toolchain.

## C++ source and Gallery build

```shell
git clone https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets.git
cd Qt-Fluent-Widgets
cmake -S . -B build -DCMAKE_PREFIX_PATH="/path/to/Qt/6.x/compiler_64"
cmake --build build --config Release --parallel
```

Replace `CMAKE_PREFIX_PATH` with your Qt installation directory. With a single-configuration generator such as Ninja, also configure with `-DCMAKE_BUILD_TYPE=Release`. Use a fresh build directory when switching Qt versions or generators.

An example for Windows / MSVC:

```shell
cmake -S . -B build-qt515 -G "Visual Studio 16 2019" -A x64 -DCMAKE_PREFIX_PATH="D:/Qt/5.15.2/msvc2019_64"
cmake --build build-qt515 --config Release --parallel
```

Typical Gallery executable locations:

- Windows / Visual Studio: `build/app/Release/qtfluentwidgets_app.exe`.
- Linux / single-configuration build: `build/app/qtfluentwidgets_app`.
- macOS: usually an application bundle under `build/app`.

## C++ integration

Place the source under `third_party/Qt-Fluent-Widgets`. Add the library subdirectory and link `qtfluentwidgets` in your application's `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.16)
project(MyFluentApp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(QT NAMES Qt6 Qt5 REQUIRED COMPONENTS Widgets Svg)
find_package(Qt${QT_VERSION_MAJOR} REQUIRED COMPONENTS Widgets Svg)

add_subdirectory(
    ${CMAKE_CURRENT_SOURCE_DIR}/third_party/Qt-Fluent-Widgets/qtfluentwidgets
    ${CMAKE_CURRENT_BINARY_DIR}/qtfluentwidgets-build
)

add_executable(my_app main.cpp)
target_link_libraries(my_app PRIVATE qtfluentwidgets)
```

Adding just the `qtfluentwidgets` subdirectory builds the library without the Gallery. The library is static, so initialize its compiled resources at application startup:

```cpp
#include <QApplication>
#include <qtfluentwidgets.h>

int main(int argc, char* argv[]) {
    QApplication app(argc, argv);
    Q_INIT_RESOURCE(resource);

    qfw::setTheme(qfw::Theme::Auto);

    qfw::TopFluentWindow window;
    window.setWindowTitle("My Fluent App");
    window.resize(1000, 700);
    window.show();

    return app.exec();
}
```

## C++ Windows deployment

Linking this static widget library does not statically link the Qt runtime. Use `windeployqt` from the same Qt installation used to build your application to deploy the required runtime libraries and plugins:

```shell
D:/Qt/5.15.2/msvc2019_64/bin/windeployqt.exe --release build-qt515/app/Release/qtfluentwidgets_app.exe
```

If CMake cannot find Qt, check `CMAKE_PREFIX_PATH`. For missing Qt DLLs at runtime, run the matching `windeployqt`. See the [repository README](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets#readme) for further platform and build details.

</template>
</InstallTabs>
