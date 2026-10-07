---
title: 流畅窗口
date: 2024-03-14 13:52:00
permalink: /zh/pages/components/fluentwindow/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

## [FluentWindow](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![FluentWindow](/img/components/fluent_window/FluentWindow.png)

`FluentWindow` 对侧边导航栏和层叠组件进行了封装，使用这个类可以十分方便地创建多界面窗口。

### 添加子界面
只需调用 `addSubInterface()` 方法就能完成子界面的添加：

```python
def addSubInterface(
    self,
    interface: QWidget,
    icon: FluentIconBase | QIcon | str,
    text: str,
    position=NavigationItemPosition.TOP,
    parent: QWidget = None
) -> NavigationTreeWidget
```

各个参数解释如下：
* `interface`: 需要添加的子界面
* `icon`：侧边栏菜单项图标
* `text`：侧边栏菜单项文本
* `position`：侧边栏菜单项的位置
* `parent`：侧边栏父菜单项对应的子界面，或者父菜单项的 `routeKey`

::: warning 警告
调用 `addSubInterface()` 之前必须给子界面设置全局唯一的对象名作为路由键，否则后退功能会出问题，同时侧边栏看不到子界面对应的菜单项。
如果你在界面的左上角看到奇怪的东西，说明忘了调用 `addSubInterface()` 添加某个子界面
:::

下面是个简单的例子，更加复杂的多子界面示例见 [视频教程](/zh/pages/designer/#复杂示例)：

```python
from qfluentwidgets_pro import NavigationItemPosition, FluentWindow, SubtitleLabel, setFont
from qfluentwidgets_pro import FluentIcon as FIF


class Widget(QFrame):

    def __init__(self, text: str, parent=None):
        super().__init__(parent=parent)
        self.label = SubtitleLabel(text, self)
        self.hBoxLayout = QHBoxLayout(self)

        setFont(self.label, 24)
        self.label.setAlignment(Qt.AlignCenter)
        self.hBoxLayout.addWidget(self.label, 1, Qt.AlignCenter)

        # 必须给子界面设置全局唯一的对象名
        self.setObjectName(text.replace(' ', '-'))


class Window(FluentWindow):
    """ 主界面 """

    def __init__(self):
        super().__init__()

        # 创建子界面，实际使用时将 Widget 换成自己的子界面
        self.homeInterface = Widget('Home Interface', self)
        self.musicInterface = Widget('Music Interface', self)
        self.videoInterface = Widget('Video Interface', self)
        self.settingInterface = Widget('Setting Interface', self)
        self.albumInterface = Widget('Album Interface', self)
        self.albumInterface1 = Widget('Album Interface 1', self)

        self.initNavigation()
        self.initWindow()

    def initNavigation(self):
        self.addSubInterface(self.homeInterface, FIF.HOME, 'Home')
        self.addSubInterface(self.musicInterface, FIF.MUSIC, 'Music library')
        self.addSubInterface(self.videoInterface, FIF.VIDEO, 'Video library')

        self.navigationInterface.addSeparator()

        self.addSubInterface(self.albumInterface, FIF.ALBUM, 'Albums', NavigationItemPosition.SCROLL)
        self.addSubInterface(self.albumInterface1, FIF.ALBUM, 'Album 1', parent=self.albumInterface)

        self.addSubInterface(self.settingInterface, FIF.SETTING, 'Settings', NavigationItemPosition.BOTTOM)

    def initWindow(self):
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()
```


### 切换界面

`FluentWindow` 提供了切换当前界面的方法，`interface` 为待切换的子界面：
```python
def switchTo(self, interface: QWidget) -> None
```

`FluentWindow` 内部使用 `StackedWidget` 来存放子界面，切换当前界面时 `StackedWidget` 会发出 `currentChanged(index: int)` 信号：

```python
self.stackedWidget.currentChanged.connect(lambda: print(self.stackedWidget.currentWidget()))
```


### 定制化侧边栏
调整展开状态下侧边导航的宽度：
```python
self.navigationInterface.setExpandWidth(300)
```

默认情况下侧边导航为收缩状态，当窗口宽度超过阈值时才会展开，如果希望禁用收缩并一直保持展开状态：
```python
# 这行代码必须在 setExpandWidth() 后面调用
self.navigationInterface.setCollapsible(False)
```

如果不想禁用收缩，但是希望窗口创建之后侧边栏是展开的：
```python
self.resize(900, 700)

# 需要设置允许侧边导航展开的最小窗口宽度
self.navigationInterface.setMinimumExpandWidth(900)

# 展开导航栏
self.navigationInterface.expand(useAni=False)
```

禁用侧边栏指示器滑动动画：
```python
self.navigationInterface.setIndicatorAnimationEnabled(False)
```

### 定制化标题栏

`FluentWindow` 使用的是 `qframelesswindow` 库提供的自定义标题栏，对应 `titleBar` 属性。标题栏使用水平布局 `hBoxLayout`，内部组件如下：
* `minBtn`：最小化按钮
* `maxBtn`：最大化按钮
* `closeBtn`：关闭按钮
* `iconLabel`：图标标签
* `titleLabel`：标题标签

如需隐藏最大化按钮并禁用标题栏双击最大化功能：
```python
self.titleBar.maxBtn.hide()
self.titleBar.setDoubleClickEnabled(False)
```

插入一个新按钮：

```python
from qfluentwidgets_pro import FluentTitleBarButton   # since v1.11.0

themeButton = FluentTitleBarButton(FIF.CONSTRACT)
self.titleBar.buttonLayout.insertWidget(0, themeButton)
```

如果需要深度自定义标题栏，可以通过 `setTitleBar(titleBar: TitleBarBase)` 替换标题栏。下述示例在标题栏中插入了标签栏和头像组件：

```python
from qfluentwidgets_pro import *

class CustomTitleBar(MSFluentTitleBar):
    """ Title bar with icon and title """

    def __init__(self, parent):
        super().__init__(parent)

        # add buttons
        self.toolButtonLayout = QHBoxLayout()
        color = QColor(206, 206, 206) if isDarkTheme() else QColor(96, 96, 96)
        self.searchButton = TransparentToolButton(FIF.SEARCH_MIRROR.icon(color=color), self)
        self.forwardButton = TransparentToolButton(FIF.RIGHT_ARROW.icon(color=color), self)
        self.backButton = TransparentToolButton(FIF.LEFT_ARROW.icon(color=color), self)

        self.forwardButton.setDisabled(True)
        self.toolButtonLayout.setContentsMargins(20, 0, 20, 0)
        self.toolButtonLayout.setSpacing(15)
        self.toolButtonLayout.addWidget(self.searchButton)
        self.toolButtonLayout.addWidget(self.backButton)
        self.toolButtonLayout.addWidget(self.forwardButton)
        self.hBoxLayout.insertLayout(4, self.toolButtonLayout)

        # 添加标签栏
        self.tabBar = TabBar(self)

        self.tabBar.setMovable(True)
        self.tabBar.setTabMaximumWidth(220)
        self.tabBar.setTabShadowEnabled(False)
        self.tabBar.setTabSelectedBackgroundColor(QColor(255, 255, 255, 125), QColor(255, 255, 255, 50))

        self.tabBar.tabCloseRequested.connect(self.tabBar.removeTab)
        self.tabBar.currentChanged.connect(lambda i: print(self.tabBar.tabText(i)))

        self.hBoxLayout.insertWidget(5, self.tabBar, 1)
        self.hBoxLayout.setStretch(6, 0)

        # 添加头像
        self.avatar = TransparentDropDownToolButton('resource/shoko.png', self)
        self.avatar.setIconSize(QSize(26, 26))
        self.avatar.setFixedHeight(30)
        self.hBoxLayout.insertWidget(7, self.avatar, 0, Qt.AlignRight)
        self.hBoxLayout.insertSpacing(8, 20)

        if sys.platform == "darwin":
            self.hBoxLayout.insertSpacing(8, 52)


    def canDrag(self, pos: QPoint):
        """ 判断鼠标的点击位置是否允许拖拽 """
        if not super().canDrag(pos):
            return False

        pos.setX(pos.x() - self.tabBar.x())
        return not self.tabBar.tabRegion().contains(pos)


class Window(MSFluentWindow):

    def __init__(self):
        super().__init__()
        # 替换标题栏
        self.setTitleBar(CustomTitleBar(self))
```


### 自定义背景色
`FluentWindow` 在云母特效未启用的情况下，浅色模式的背景为淡蓝色，深色模式为深灰色。可调用 `setCustomBackgroundColor()` 来自定义背景色：

```python
self.setCustomBackgroundColor(QColor(242, 242, 242), QColor(25, 33, 42))
```


### 背景失效解决办法
在 Win11 系统下，`FluentWindow` 默认启用了云母特效，如果窗口中使用了 `QWebEngineView` 或者 `QOpenGLWidget`，会导致窗口背景特效失效，同时圆角和阴影也会消失。

下述例子演示了如何正确地在 `FluentWindow` 中使用 Web 引擎；
```python
from qfluentwidgets_pro import SplitFluentWindow, FluentIcon
from qfluentwidgets_pro.qframelesswindow.webengine import FramelessWebEngineView


class Widget(QFrame):

    def __init__(self, parent=None):
        super().__init__(parent=parent)
        self.setObjectName("homeInterface")

        # 1. 将 QWebEngineView 替换成 FramelessWebEngineView
        self.webView = FramelessWebEngineView(self)
        self.webView.load(QUrl("https://www.baidu.com/"))

        self.vBoxLayout = QVBoxLayout(self)
        self.vBoxLayout.setContentsMargins(0, 48, 0, 0)
        self.vBoxLayout.addWidget(self.webView)


class Window(SplitFluentWindow):

    def __init__(self):
        super().__init__()

        # 创建并添加子界面
        self.homeInterface = Widget(self)
        self.addSubInterface(self.homeInterface, FluentIcon.HOME, "Home")

        # 初始化窗口
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()

    # 2. 重新启用云母特效
    w.setMicaEffectEnabled(True)

    app.exec()
```

对于 `QOpenGLWidget`，需要在主界面的构造函数中强制调用 `FluentWindow.updateFrameless()` 并在显示主界面后重新启用云母特效。

## [SplitFluentWindow](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![SplitFluentWindow](/img/components/fluent_window/SplitFluentWindow.png)

`SplitFluentWindow` 使用方式和 [FluentWindow](#fluentwindow) 完全相同。


## [MSFluentWindow](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

![MSFluentWindow](/img/components/fluent_window/MSFluentWindow.png)

`MSFluentWindow` 对 `NavigationBar` 和层叠组件进行了封装，使用这个类可以十分方便地创建多界面窗口，使用方式和 [FluentWindow](#fluentwindow) 相似。

只需调用 `addSubInterface()` 方法就能完成子界面的添加（必须先给子界面设置对象名才能调用此方法）：

```python
def addSubInterface(
    self,
    interface: QWidget,
    icon: FluentIconBase | QIcon | str,
    text: str,
    selectedIcon: FluentIconBase | QIcon | str = None,
    position=NavigationItemPosition.TOP,
    isTransparent=False
)
```

各个参数解释如下：
* `interface`: 需要添加的子界面
* `icon`：侧边栏菜单项图标
* `text`：侧边栏菜单项文本
* `selectedIcon`：侧边栏菜单项选中状态下的图标
* `position`：侧边栏菜单项的位置
* `isTransparent`：是否使用透明背景

下面是个简单的例子，更加复杂的示例见 [卡片例子](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/blob/master/examples/view/card_widget/demo.py)：

```python
from qfluentwidgets_pro import (NavigationItemPosition, MessageBox, setTheme, Theme, MSFluentWindow,
                            NavigationAvatarWidget, qrouter, SubtitleLabel, setFont)
from qfluentwidgets_pro import FluentIcon as FIF


class Widget(QFrame):

    def __init__(self, text: str, parent=None):
        super().__init__(parent=parent)
        self.label = SubtitleLabel(text, self)
        self.hBoxLayout = QHBoxLayout(self)

        setFont(self.label, 24)
        self.label.setAlignment(Qt.AlignCenter)
        self.hBoxLayout.addWidget(self.label, 1, Qt.AlignCenter)
        self.setObjectName(text.replace(' ', '-'))



class Window(MSFluentWindow):

    def __init__(self):
        super().__init__()

        # create sub interface
        self.homeInterface = Widget('Home Interface', self)
        self.appInterface = Widget('Application Interface', self)
        self.videoInterface = Widget('Video Interface', self)
        self.libraryInterface = Widget('library Interface', self)

        self.initNavigation()
        self.initWindow()

    def initNavigation(self):
        self.addSubInterface(self.homeInterface, FIF.HOME, '主页', FIF.HOME_FILL)
        self.addSubInterface(self.appInterface, FIF.APPLICATION, '应用')
        self.addSubInterface(self.videoInterface, FIF.VIDEO, '视频')

        self.addSubInterface(self.libraryInterface, FIF.BOOK_SHELF, '库', FIF.LIBRARY_FILL, NavigationItemPosition.BOTTOM)

        # 添加自定义导航组件
        self.navigationInterface.addItem(
            routeKey='Help',
            icon=FIF.HELP,
            text='帮助',
            onClick=self.showMessageBox,
            selectable=False,
            position=NavigationItemPosition.BOTTOM,
        )

        self.navigationInterface.setCurrentItem(self.homeInterface.objectName())

    def initWindow(self):
        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')

        desktop = QApplication.desktop().availableGeometry()
        w, h = desktop.width(), desktop.height()
        self.move(w//2 - self.width()//2, h//2 - self.height()//2)

    def showMessageBox(self):
        w = MessageBox(
            '支持作者🥰',
            '个人开发不易，如果这个项目帮助到了您，可以考虑请作者喝一瓶快乐水🥤。您的支持就是作者开发和维护项目的动力🚀',
            self
        )
        w.yesButton.setText('来啦老弟')
        w.cancelButton.setText('下次一定')

        if w.exec():
            QDesktopServices.openUrl(QUrl("https://qfluentwidgets.com/zh/price/"))


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()
```

### [FilledFluentWindow](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/window/filled_fluent_window.py)

![FilledFluentWindow](/img/components/fluent_window/FilledFluentWindow.png)

`FilledFluentWindow` 提供了侧边导航功能。

```python
from qfluentwidgets_pro import FilledFluentWindow, BodyLabel, FluentIcon

self.demoWindow = FilledFluentWindow()
homeInterface = BodyLabel('Home interface')
homeInterface.setObjectName('homeInterface')
self.demoWindow.addSubInterface(homeInterface, FluentIcon.HOME, 'Home')
self.demoWindow.resize(960, 700)
self.demoWindow.show()
```

### [TopFluentWindow](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/window/fluent_window.py)

![TopFluentWindow](/img/components/topnavigationbar/TopNavigationBar.png)

`TopFluentWindow` 提供了顶部导航功能。

```python
from qfluentwidgets_pro import TopFluentWindow, BodyLabel, FluentIcon

self.demoWindow = TopFluentWindow()
homeInterface = BodyLabel('Home interface')
homeInterface.setObjectName('homeInterface')
self.demoWindow.addSubInterface(homeInterface, FluentIcon.HOME, 'Home')
self.demoWindow.resize(960, 700)
self.demoWindow.show()
```

## [FluentWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/fluent_window/index.html#)

`FluentWidget` 是一个能够自动跟随主题的无边框窗口组件，在 Win11 下默认开启了云母特效，并支持[自定义标题栏](#定制化标题栏)。

```python
# coding:utf-8
import sys

from qfluentwidgets_pro import FluentWidget, toggleTheme, PushButton
from qfluentwidgets_pro import FluentIcon as FIF


class Window(FluentWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton(FIF.CONSTRACT, '切换主题', self)
        self.vBoxLayout = QVBoxLayout(self)

        # 禁用云母特效
        # self.setMicaEffectEnabled(False)

        # 自定义背景颜色
        # self.setCustomBackgroundColor(Qt.red, Qt.blue)

        # 点击按钮时切换主题
        self.button.clicked.connect(toggleTheme)

        # 留出标题栏的空间
        self.vBoxLayout.setContentsMargins(0, self.titleBar.height(), 0, 0)
        self.vBoxLayout.addWidget(self.button, 0, Qt.AlignmentFlag.AlignCenter)

        self.resize(900, 700)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))
        self.setWindowTitle('PyQt-Fluent-Widgets')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Window()
    w.show()
    app.exec()

```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [FluentWindow](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/window/fluent_window.h)

```cpp
#include <window/fluent_window.h>

auto* window = new qfw::FluentWindow;
window->setAttribute(Qt::WA_DeleteOnClose);
auto* page = new QWidget(window);
page->setObjectName(QStringLiteral("home"));
window->addSubInterface(page, qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon(), QStringLiteral("Home"));
window->resize(1000, 700);
window->show();
```

### C++ [SplitFluentWindow](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/window/fluent_window.h)

```cpp
#include <window/fluent_window.h>

auto* window = new qfw::SplitFluentWindow;
window->setAttribute(Qt::WA_DeleteOnClose);
auto* page = new QWidget(window);
page->setObjectName(QStringLiteral("home"));
window->addSubInterface(page, qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon(), QStringLiteral("Home"));
window->resize(1000, 700);
window->show();
```

### C++ [MSFluentWindow](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/window/fluent_window.h)

```cpp
#include <window/fluent_window.h>

auto* window = new qfw::MSFluentWindow;
window->setAttribute(Qt::WA_DeleteOnClose);
auto* page = new QWidget(window);
page->setObjectName(QStringLiteral("home"));
window->addSubInterface(page, qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon(), QStringLiteral("Home"), qfw::NavigationItemPosition::Top);
window->resize(1000, 700);
window->show();
```

### C++ [TopFluentWindow](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/window/fluent_window.h)

```cpp
#include <window/fluent_window.h>

auto* window = new qfw::TopFluentWindow;
window->setAttribute(Qt::WA_DeleteOnClose);
auto* page = new QWidget(window);
page->setObjectName(QStringLiteral("home"));
window->addSubInterface(page, qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon(), QStringLiteral("Home"), qfw::TopNavigationItemPosition::Left);
window->resize(1000, 700);
window->show();
```

### C++ [FluentWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/window/fluent_window.h)

```cpp
#include <window/fluent_window.h>

auto* window = new qfw::FluentWidget;
window->setAttribute(Qt::WA_DeleteOnClose);
window->resize(600, 400);
window->show();
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `FilledFluentWindow`

</template>
</LanguageTabs>
