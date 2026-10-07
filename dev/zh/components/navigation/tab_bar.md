---
title: 标签栏
date: 2025-01-24 19:00:22
permalink: /zh/pages/components/tabbar/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [TabBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabBar)

![TabBar](/img/components/tabbar/TabBar.png)

`TabBar` 控件支持在一组标签页之间进行切换，并支持动态删除和添加标签。

通过 `addTab()` 可添加标签项，每个标签项需绑定一个全局唯一的 `routeKey`，返回值为 [TabItem](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabItem) 实例。

```python
tabBar = TabBar()

# 添加标签项
tabBar.addTab(
    routeKey="songInfterface",
    text="Song",
    icon="/path/to/icon.png",
    onClick=lambda: print("Click")
)

# 获取当前标签项
print(self.tabBar.currentTab())
```

标签栏常用的信号有：
* `currentChanged(index: int)`: 切换当前选中的标签页
* `tabAddRequested`: 点击右侧的 `+` 按钮时发出此信号，表示请求添加新的标签页
* `tabCloseRequested(index: int)`: 点击标签项的 `×` 按钮时发出此信号，表示请求移除标签页

`TabBar` 通常与 `QStackedWidget` 一同使用，当用户点击不同的标签项时会切换当前页面，下面是个简单的例子：

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.tabBar = TabBar(self)
        self.stackedWidget = QStackedWidget(self)
        self.vBoxLayout = QVBoxLayout(self)
        self.counter = 1

        self.songInterface = QLabel('Song Interface', self)
        self.albumInterface = QLabel('Album Interface', self)
        self.artistInterface = QLabel('Artist Interface', self)

        # 添加标签页
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # 连接信号
        self.stackedWidget.currentChanged.connect(self.onCurrentIndexChanged)
        self.stackedWidget.setCurrentWidget(self.songInterface)
        self.tabBar.tabAddRequested.connect(self.onAddNewTab)
        self.tabBar.tabCloseRequested.connect(self.onCloseTab)

        self.vBoxLayout.setContentsMargins(30, 0, 30, 30)
        self.vBoxLayout.addWidget(self.tabBar, 0, Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.resize(400, 400)

    def addSubInterface(self, widget: QLabel, objectName: str, text: str):
        widget.setObjectName(objectName)
        widget.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(widget)

        # 使用全局唯一的 objectName 作为路由键
        self.tabBar.addTab(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.tabBar.setCurrentTab(widget.objectName())

    def onAddNewTab(self):
        w = QLabel(f"Tab {self.counter}")
        self.addSubInterface(w, w.text(), w.text())
        self.counter += 1

    def onCloseTab(self, index: int):
        item = self.tabBar.tabItem(index)
        widget = self.findChild(QLabel, item.routeKey())
        self.stackedWidget.removeWidget(widget)
        self.tabBar.removeTab(index)
        widget.deleteLater()

```

### [TabWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabWidget)

![TabBar](/img/components/tabbar/TabBar.png)

`TabWidget` 的用法与 `QTabWidget` 相同，但是 `TabWidget` 内部使用了 `TabBar`。

```python
tabWidget = TabWidget()

# 添加页面
tabWidget.addTab(QLabel("Page 1"), "Page 1", QIcon("/path/to/icon.png"))
tabWidget.addTab(QLabel("Page 2"), "Page 2", QIcon("/path/to/icon.png"))

# 设置当前页面
tabWidget.setCurrentIndex(1)
```


### [RoundTabBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/round_tab_bar.py)

![RoundTabBar](/img/components/tabbar/RoundTabBar.png)

`RoundTabBar` 控件支持在一组标签页之间进行切换，并支持动态删除和添加标签。

```python
from qfluentwidgets_pro import RoundTabBar, FluentIcon

tabBar = RoundTabBar()
tabBar.setTabMaximumWidth(200)
tabBar.setMovable(True)
tabBar.addTab('song', 'Song', FluentIcon.MUSIC)
tabBar.addTab('album', 'Album', FluentIcon.ALBUM)
tabBar.setCurrentTab('song')
tabBar.tabCloseRequested.connect(tabBar.removeTab)
tabBar.tabAddRequested.connect(lambda: print('add tab'))
```

### [RoundTabWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/round_tab_widget.py)

![RoundTabWidget](/img/components/tabbar/RoundTabWidget.png)

`RoundTabWidget` 的用法与 `QTabWidget` 相同，但是 `RoundTabWidget` 内部使用了 `RoundTabBar`。

removeTab() 只移除标签页，不销毁页面；不再使用的页面请自行调用 deleteLater()。

```python
from qfluentwidgets_pro import RoundTabWidget, BodyLabel

tabWidget = RoundTabWidget()
tabWidget.setTabMaximumWidth(240)
tabWidget.setMovable(True)
tabWidget.addTab(BodyLabel('Song interface'), 'Song')
tabWidget.addTab(BodyLabel('Album interface'), 'Album')
tabWidget.setCurrentIndex(0)
tabWidget.tabCloseRequested.connect(tabWidget.removeTab)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [TabBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tab_view.h)

```cpp
#include <components/widgets/tab_view.h>

auto* bar = new qfw::TabBar(parent);
bar->addTab(QStringLiteral("first"), QStringLiteral("First"));
bar->addTab(QStringLiteral("second"), QStringLiteral("Second"));
bar->setCurrentIndex(0);
bar->setMovable(true);
bar->setTabsClosable(true);
bar->setTabMaximumWidth(220);
QObject::connect(bar, &qfw::TabBar::tabCloseRequested, parent, [bar](int index) { bar->removeTab(index); });
```

### C++ [TabWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tab_view.h)

```cpp
#include <components/widgets/tab_view.h>

auto* tabs = new qfw::TabWidget(parent);
tabs->addTab(new QWidget(tabs), QStringLiteral("First"));
tabs->addTab(new QWidget(tabs), QStringLiteral("Second"));
tabs->setCurrentIndex(0);
tabs->setTabsClosable(true);
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `RoundTabBar`
- `RoundTabWidget`

</template>
</LanguageTabs>

