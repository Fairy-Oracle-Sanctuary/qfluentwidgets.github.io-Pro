---
title: 启动页面
date: 2024-03-14 13:52:00
permalink: /zh/pages/components/splashscreen/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [SplashScreen](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/splash_screen/index.html)

![SplashScreen](/img/components/splash_screen/SplashScreen.png)

`SplashScreen` 可用作启动页面，显示 Logo 和标题栏。

使用方式如下：

```python
# coding:utf-8
from qfluentwidgets_pro import SplashScreen
from qfluentwidgets_pro.qframelesswindow import FramelessWindow, StandardTitleBar


class Demo(FramelessWindow):

    def __init__(self):
        super().__init__()
        self.resize(700, 600)
        self.setWindowTitle('PyQt-Fluent-Widgets')
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))

        # 1. 创建启动页面
        self.splashScreen = SplashScreen(self.windowIcon(), self)
        self.splashScreen.setIconSize(QSize(102, 102))

        # 2. 在创建其他子页面前先显示主界面
        self.show()

        # 3. 创建子界面
        self.createSubInterface()

        # 4. 隐藏启动页面
        self.splashScreen.finish()

    def createSubInterface(self):
        loop = QEventLoop(self)
        QTimer.singleShot(3000, loop.quit)
        loop.exec()


if __name__ == '__main__':
    app = QApplication(sys.argv)
    w = Demo()
    w.show()
    app.exec()
```

默认情况下 `SplashScreen` 的标题栏不显示图标和标题，可通过更换标题栏来设置图标和标题：
```python
from qfluentwidgets_pro.qframelesswindow import StandardTitleBar

titleBar = StandardTitleBar(self.splashScreen)
titleBar.setIcon(self.windowIcon())
titleBar.setTitle(self.windowTitle())
splashScreen.setTitleBar(titleBar)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [SplashScreen](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/window/splash_screen.h)

```cpp
#include <window/splash_screen.h>

auto* splash = new qfw::SplashScreen(QIcon(QStringLiteral(":/icons/app.png")), parent);
splash->setIconSize(QSize(96, 96));
splash->show();
// Call splash->finish() after initialization finishes.
```

</template>
</LanguageTabs>
