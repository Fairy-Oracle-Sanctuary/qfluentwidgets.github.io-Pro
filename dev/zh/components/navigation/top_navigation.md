---
title: 顶部导航栏
date: 2024-02-26 19:56:01
permalink: /zh/pages/components/topnavigationbar/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [Pivot](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.Pivot)

![Pivot](/img/components/topnavigationbar/Pivot.png)

`Pivot` 控件支持在一组标签项之间进行切换，被选中的标签项下会显示下划线。

通过 `addItem()` 可添加标签项，每个标签项需绑定一个全局唯一的 `routeKey`，返回值为 [PivotItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.PivotItem) 实例。
```python
pivot = Pivot()

# 添加标签项
pivot.addItem(routeKey="songInterface", text="Song", onClick=lambda: print("Song"))
pivot.addItem(routeKey="albumInterface", text="Album", onClick=lambda: print("Album"))
pivot.addItem(routeKey="artistInterface", text="Artist", onClick=lambda: print("Artist"))

# 设置当前标签项
pivot.setCurrentItem("albumInterface")

# 获取当前标签项
print(pivot.currentItem())
```

顶部导航栏通常与 `QStackedWidget` 一同使用，当用户点击不同的标签项时会切换当前页面。

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.pivot = Pivot(self)
        self.stackedWidget = QStackedWidget(self)
        self.vBoxLayout = QVBoxLayout(self)

        self.songInterface = QLabel('Song Interface', self)
        self.albumInterface = QLabel('Album Interface', self)
        self.artistInterface = QLabel('Artist Interface', self)

        # 添加标签页
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # 连接信号并初始化当前标签页
        self.stackedWidget.currentChanged.connect(self.onCurrentIndexChanged)
        self.stackedWidget.setCurrentWidget(self.songInterface)
        self.pivot.setCurrentItem(self.songInterface.objectName())

        self.vBoxLayout.setContentsMargins(30, 0, 30, 30)
        self.vBoxLayout.addWidget(self.pivot, 0, Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.resize(400, 400)

    def addSubInterface(self, widget: QLabel, objectName: str, text: str):
        widget.setObjectName(objectName)
        widget.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(widget)

        # 使用全局唯一的 objectName 作为路由键
        self.pivot.addItem(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.pivot.setCurrentItem(widget.objectName())
```


### [SegmentedWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidget)

![SegmentedWidget](/img/components/topnavigationbar/SegmentedWidget.png)

`SegmentedWidget` 分段导航控件支持在一组标签项之间进行切换，使用方式和 [Pivot](#pivot) 完全相同，`addItem()` 返回值为 [SegmentedItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidgetItem) 实例。

### [SegmentedToolWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolWidget)

![SegmentedToolWidget](/img/components/topnavigationbar/SegmentedToolWidget.png)

`SegmentedToolWidget` 图标分段导航控件支持在一组图标标签项之间进行切换。

通过 `addItem()` 可添加标签项，每个标签项需绑定一个全局唯一的 `routeKey`，返回值为 [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolItem) 实例。
```python
sw = SegmentedToolWidget()

# 添加标签项
sw.addItem(routeKey="songInterface", icon=FluentIcon.TRANSPARENT, onClick=lambda: print("Song"))
sw.addItem(routeKey="albumInterface", icon=FluentIcon.CHECKBOX, onClick=lambda: print("Album"))
sw.addItem(routeKey="artistInterface", icon=FluentIcon.CONSTRACT, onClick=lambda: print("Artist"))

# 设置当前标签项
sw.setCurrentItem("albumInterface")

# 获取当前标签项
print(sw.currentItem())
```

### [SegmentedToggleToolWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolWidget)

![SegmentedToggleToolWidget](/img/components/topnavigationbar/SegmentedToggleToolWidget.png)

`SegmentedToggleToolWidget` 使用方式和 [SegmentedToolWidget](#segmentedtoolwidget) 完全相同，`addItem()` 的返回值为 [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolItem) 实例。

### [TopNavigationBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/navigation/top_navigation_panel.py)

![TopNavigationBar](/img/components/topnavigationbar/TopNavigationBar.png)

`TopNavigationBar` 提供了顶部导航功能，能够随着宽度的变化而自适应导航项的显示内容。

```python
from qfluentwidgets_pro import TopNavigationBar, FluentIcon

navigationBar = TopNavigationBar()
navigationBar.addItem('home', FluentIcon.HOME, 'Home',
                      onClick=lambda: print('home'))
navigationBar.addItem('settings', FluentIcon.SETTING, 'Settings',
                      onClick=lambda: print('settings'))
navigationBar.setCurrentItem('home')
```

### [MenuBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/menu_bar.py)

![MenuBar](/img/components/topnavigationbar/MenuBar.png)

`MenuBar` 提供了顶部菜单导航功能。

```python
from PySide6.QtGui import QAction
from qfluentwidgets_pro import MenuBar

menuBar = MenuBar(self)
fileMenu = menuBar.addMenu('File(&F)')
fileMenu.addAction(QAction('Open', self, shortcut='Ctrl+O'))
fileMenu.addAction(QAction('Save', self, shortcut='Ctrl+S'))
menuBar.triggered.connect(lambda action: print(action.text()))
```

### [GuideWindow](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/window/guide_window.py)

![GuideWindow](/img/components/topnavigationbar/GuideWindow.png)

`GuideWindow` 提供了分步向导功能。

每一步的内容由调用方提供；保留窗口引用，避免显示后被回收。

```python
from qfluentwidgets_pro import GuideWindow, BodyLabel

self.guideWindow = GuideWindow()
self.guideWindow.addPage(BodyLabel('Welcome'))
self.guideWindow.addPage(BodyLabel('Configuration'))
self.guideWindow.addPage(BodyLabel('Ready'))
self.guideWindow.finished.connect(lambda: print('finished'))
self.guideWindow.show()
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [Pivot](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/pivot.h)

```cpp
#include <components/navigation/pivot.h>

auto* pivot = new qfw::Pivot(parent);
pivot->addItem(QStringLiteral("first"), QStringLiteral("First"));
pivot->addItem(QStringLiteral("second"), QStringLiteral("Second"));
pivot->setCurrentItem(QStringLiteral("first"));
QObject::connect(pivot, &qfw::Pivot::currentItemChanged, parent, [](const QString& key) { qDebug() << key; });
```

### C++ [SegmentedWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/segmented_widget.h)

```cpp
#include <components/navigation/segmented_widget.h>

auto* pivot = new qfw::SegmentedWidget(parent);
pivot->addItem(QStringLiteral("first"), QStringLiteral("First"));
pivot->addItem(QStringLiteral("second"), QStringLiteral("Second"));
pivot->setCurrentItem(QStringLiteral("first"));
QObject::connect(pivot, &qfw::Pivot::currentItemChanged, parent, [](const QString& key) { qDebug() << key; });
```

### C++ [SegmentedToolWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/segmented_widget.h)

```cpp
#include <components/navigation/segmented_widget.h>

auto* bar = new qfw::SegmentedToolWidget(parent);
bar->addItem(QStringLiteral("add"), qfw::FluentIcon(qfw::FluentIconEnum::Add).qicon());
bar->addItem(QStringLiteral("home"), qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon());
bar->setCurrentItem(QStringLiteral("add"));
```

### C++ [SegmentedToggleToolWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/segmented_widget.h)

```cpp
#include <components/navigation/segmented_widget.h>

auto* bar = new qfw::SegmentedToggleToolWidget(parent);
bar->addItem(QStringLiteral("add"), qfw::FluentIcon(qfw::FluentIconEnum::Add).qicon());
bar->addItem(QStringLiteral("home"), qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon());
bar->setCurrentItem(QStringLiteral("add"));
```

### C++ [TopNavigationBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/top_navigation_interface.h)

本例使用 C++ 中的 `TopNavigationInterface`，与 Python 的类名或使用方式不同。

```cpp
#include <components/navigation/top_navigation_interface.h>

#include <components/navigation/top_navigation_interface.h>

auto* navigation = new qfw::TopNavigationInterface(parent);
navigation->addItem(QStringLiteral("home"), qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon(), QStringLiteral("Home"));
navigation->setCurrentItem(QStringLiteral("home"));
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `MenuBar`
- `GuideWindow`

</template>
</LanguageTabs>

