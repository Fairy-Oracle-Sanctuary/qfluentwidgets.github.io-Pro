---
title: 设计师
date: 2023-08-17 16:25:01
permalink: /zh/pages/designer/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本 fork 可以通过 Qt Designer 的控件提升功能使用。下面保留的 Client 图片和视频来自上游，不代表其插件支持本 fork；使用 `qfluentwidgets_pro` 时按“提升控件”操作即可。


### 使用 Client

**下述所有操作，必须在英文路径下完成。**

[Fluent Client](https://client.qfluentwidgets.com/zh/) 集成了设计师插件、可视化 Nuitka 打包和脚手架功能，支持在 Designer 中直接拖拽使用 QFluentWidgets 的组件，所见即所得，让现代化界面搭建如丝般顺滑！可在 [淘宝](https://item.taobao.com/item.htm?ft=t&id=767961666600) 购买使用 Fluent Client。

![Fluent Designer](/img/mirrors/65d22363d4a73.jpg)



下述视频演示了 Fluent Client 的使用：
<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/7UCmcsOlhTk?si=gCyZNmtSOrWERG4P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### 提升控件
右击一个小部件，选择右击菜单上的 `提升为…`。

`提升为` 的作用是把原生部件替换成自定义小部件，在这个例子中是 `qfluentwidgets_pro.PushButton`。

![context menu](/img/designer/promote_context.jpg)

弹出的对话框上需要填写自定义的组件名。头文件填写包名 `qfluentwidgets_pro`，提升的类名称填写 `PushButton`。截图沿用上游示例，截图中的旧包名需要替换。

![promote dialog](/img/designer/promote_dialog.jpg)

完成提升后不会在设计师中看到任何变化，保存 ui 文件后编译为 py 代码，可以发现 `import` 的是 `PushButton`。

```shell
pyside6-uic mainwindow.ui -o ui_mainwindow.py
```

生成代码应包含：

```python
from qfluentwidgets_pro import PushButton
```

<div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/1061709354?h=aa4e0d1455&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PyQt-Fluent-Widgets 搭配 QtDesigner 的正确使用姿势">
    </iframe>
</div>


### 复杂示例
下面是一个使用设计师实现多界面窗口的例子，代码存放在 [examples/window/clock](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/window/clock) 目录中，PySide 切换至对应分支即可：

<div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/1061705002?h=a00c3ce65d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="零样式表 +100 行代码实现 Win11 时钟应用">
    </iframe>
</div>

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ 提升原生 Qt 控件

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PushButton(QStringLiteral("Button"), parent);
```

## C++ 静态库资源初始化

```cpp
Q_INIT_RESOURCE(resource);
```

在 Qt Designer 中放置 `QPushButton`，选择“提升为”，提升类名填写 `qfw::PushButton`，头文件填写 `components/widgets/button.h`。使用安装页的 CMake 配置链接组件库并初始化资源即可。本站展示的上游 Python Designer 插件不是本 C++ 仓库的插件，无需购买它来完成 C++ 控件提升。

</template>
</LanguageTabs>
