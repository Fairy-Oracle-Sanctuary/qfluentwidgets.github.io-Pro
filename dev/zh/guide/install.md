---
title: 安装
date: 2023-08-17 15:37:01
permalink: /zh/pages/install/
---

选择开发语言，查看对应组件库的安装与接入方式。两个项目均可免费获取源码，具体使用条件以各自仓库的许可证为准。

<InstallTabs>
<template #python>

[PySide6-Fluent-Widgets-Pro](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro) 包含免费基础组件和已实现的高级扩展组件，使用 PySide6，导入包名为 `qfluentwidgets_pro`。

## Python 环境要求

- Python 3.9 或更高版本，建议使用独立虚拟环境。
- PySide6 与 `darkdetect`。
- Windows 需要 `pywin32`；macOS 需要 `pyobjc`；Linux 不需要这两个平台依赖。

目前仓库没有 pip 安装配置，请从源码使用，不要将上游的 `pip install PySide6-Fluent-Widgets` 当成本项目的安装命令。

## Python 下载与安装依赖

```shell
git clone https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro.git
cd PySide6-Fluent-Widgets-Pro
python -m venv .venv
```

Windows PowerShell 激活虚拟环境：

```powershell
.venv\Scripts\Activate.ps1
```

macOS / Linux 激活虚拟环境：

```shell
source .venv/bin/activate
```

激活后安装基础依赖：

```shell
python -m pip install --upgrade pip
python -m pip install PySide6 darkdetect
```

根据操作系统，额外执行其中一条：

```shell
# 仅 Windows
python -m pip install pywin32

# 仅 macOS
python -m pip install pyobjc
```

## Python 运行 Gallery

在仓库根目录运行：

```shell
python main.py
```

Gallery 已集成基础与扩展组件。侧边栏的“图表”和“聊天”会分别打开独立演示窗口；聊天示例使用本地模拟流式输出，不会连接 AI 服务。

## Python 接入自己的项目

将仓库中的 `qfluentwidgets_pro` 文件夹复制到项目目录，或将仓库根目录加入 Python 模块搜索路径，然后使用以下示例：

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

本项目使用 `qfluentwidgets_pro` 包名；上游免费版使用 `qfluentwidgets`，不要混淆导入路径，也不要在同一应用中混用 PyQt 和 PySide。

## Python 可选功能

仅按需安装，不使用这些功能时无需安装对应依赖。

```shell
# 原生聊天：代码高亮与数学公式
python -m pip install -r requirements-chat.txt

# 代码编辑器：语法高亮
python -m pip install -r requirements-codeedit.txt

# 亚克力组件：CPU 图像模糊
python -m pip install numpy scipy Pillow colorthief
```

聊天、代码编辑器和图表不从包的顶层导出，需要从具体模块导入：

```python
from qfluentwidgets_pro.components.widgets.chat_widget import ChatWidget, ChatMessage
from qfluentwidgets_pro.components.widgets.code_edit import CodeEdit, CodeLanguage
from qfluentwidgets_pro.components.widgets.chart_widget import ChartWidget
```

图表需要 PySide6 的 QtWebEngine / QtQuickWidgets 模块；原生聊天不依赖 WebView。未安装图像模糊依赖时，亚克力图片效果会退化为无模糊显示。

如果出现 `ModuleNotFoundError`，先确认使用的是虚拟环境中的 Python，依赖已安装，而且 `qfluentwidgets_pro` 文件夹可以被当前程序找到。

</template>
<template #cpp>

[Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets) 是原生 C++ / Qt Widgets 组件库，目前仅包含免费基础组件，不包含 Python 项目中的高级扩展组件。

## C++ 环境要求

- Qt 5.15.2 或更高的 Qt 5 版本，或 Qt 6，需包含 `Widgets` 和 `Svg` 模块。
- CMake 3.16 或更高版本，以及支持 C++17 的编译器。
- 构建 Gallery 还需要 Qt `LinguistTools`。

编译器和架构必须与 Qt 安装包一致，例如 `msvc2019_64` 应搭配兼容的 64 位 MSVC 工具链。

## C++ 下载与构建 Gallery

```shell
git clone https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets.git
cd Qt-Fluent-Widgets
cmake -S . -B build -DCMAKE_PREFIX_PATH="/path/to/Qt/6.x/compiler_64"
cmake --build build --config Release --parallel
```

把 `CMAKE_PREFIX_PATH` 替换成实际 Qt 安装目录。使用 Ninja 等单配置生成器时，配置阶段还需添加 `-DCMAKE_BUILD_TYPE=Release`。更换 Qt 版本或生成器时，请使用新的构建目录。

Windows / MSVC 的一个示例：

```shell
cmake -S . -B build-qt515 -G "Visual Studio 16 2019" -A x64 -DCMAKE_PREFIX_PATH="D:/Qt/5.15.2/msvc2019_64"
cmake --build build-qt515 --config Release --parallel
```

常见的 Gallery 可执行文件位置：

- Windows / Visual Studio：`build/app/Release/qtfluentwidgets_app.exe`。
- Linux / 单配置构建：`build/app/qtfluentwidgets_app`。
- macOS：通常生成在 `build/app` 下的应用 bundle 中。

## C++ 接入自己的项目

将源码放到 `third_party/Qt-Fluent-Widgets`，在应用的 `CMakeLists.txt` 中添加组件库子目录并链接 `qtfluentwidgets`：

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

直接添加 `qtfluentwidgets` 子目录即可只构建组件库，不必编译 Gallery。组件库为静态库，程序启动时需要初始化它的资源：

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

## C++ Windows 部署

静态链接组件库不代表 Qt 运行库也被静态链接。使用与构建时相同 Qt 安装目录下的 `windeployqt`，把运行库和插件部署到程序旁边：

```shell
D:/Qt/5.15.2/msvc2019_64/bin/windeployqt.exe --release build-qt515/app/Release/qtfluentwidgets_app.exe
```

如果 CMake 找不到 Qt，检查 `CMAKE_PREFIX_PATH`；如果运行时提示缺少 Qt DLL，执行对应版本的 `windeployqt`。更多平台说明和构建细节见 [仓库 README](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets#readme)。

</template>
</InstallTabs>
