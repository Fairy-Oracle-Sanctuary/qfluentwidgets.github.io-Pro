---
title: 消息条
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/infobar/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [InfoBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_bar/index.html)

![InfoBar](/img/components/infobar/InfoBar.png)

`InfoBar` 用于在应用程序中显示重要的、用户需要知道的信息。这个信息可以是一个错误消息，一个警告，或者一个提示，让用户知道他们需要采取行动。

组件库提供了便捷的类方法来创建不同类型的 `InfoBar`：

* 成功：
    ```python
    InfoBar.success(
        title='Lesson 4',
        content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.TOP,
        duration=2000,
        parent=window
    )
    ```

* 警告：
    ```python
    InfoBar.warning(
        title='Lesson 3',
        content="相信回旋吧，只相信便是！",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM,
        duration=-1,    # 永不消失
        parent=window
    )
    ```

* 失败：
    ```python
    InfoBar.error(
        title='Lesson 5',
        content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
        orient=Qt.Vertical,  # 内容太长时可使用垂直布局
        isClosable=True,
        position=InfoBarPosition.BOTTOM_RIGHT,
        duration=-1,
        parent=window
    )
    ```

* 消息：
    ```python
    InfoBar.info(
        title='Lesson 5',
        content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM_LEFT,
        duration=-1,
        parent=window
    )
    ```

* 自定义：
    ```python
    w = InfoBar.new(
        icon=FluentIcon.GITHUB,
        title='波纹疾走',
        content="人类的赞歌就是勇气的赞歌，人类的伟大就是勇气的伟大！",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM,
        duration=2000,
        parent=window
    )
    w.setCustomBackgroundColor('white', '#202020')
    ```

也可以往消息条上添加按钮等自定义组件：
```python
w = InfoBar(
    icon=InfoBarIcon.SUCCESS,
    title='Title',
    content="我的名字是吉良吉影，年龄 33 岁，只想过平静的生活。",
    orient=Qt.Horizontal,
    isClosable=True,
    position=InfoBarPosition.TOP_RIGHT,
    duration=2000,
    parent=window
)

# 添加自定义组件
w.addWidget(PushButton('Action'))
w.show()
```

消息条的弹出位置由 `position` 参数指定：
```python
class InfoBarPosition(Enum):
    """ Info bar position """
    TOP = 0
    BOTTOM = 1
    TOP_LEFT = 2
    TOP_RIGHT = 3
    BOTTOM_LEFT = 4
    BOTTOM_RIGHT = 5
    NONE = 6
```

当 `InfoBarPosition` 为 `NONE` 时，可以将消息条放在任意位置，如果想进一步管理消息条位置，可继承 `InfoBarManager`：
```python
@InfoBarManager.register('Custom')
class CustomInfoBarManager(InfoBarManager):
    """ 自定义消息条管理器 """

    def _pos(self, infoBar: InfoBar, parentSize=None):
        p = infoBar.parent()
        parentSize = parentSize or p.size()

        # 第一个消息条的位置
        x = (parentSize.width() - infoBar.width()) // 2
        y = (parentSize.height() - infoBar.height()) // 2

        # 计算当前 infoBar 的位置
        index = self.infoBars[p].index(infoBar)
        for bar in self.infoBars[p][0:index]:
            y += (bar.height() + self.spacing)

        return QPoint(x, y)

    def _slideStartPos(self, infoBar: InfoBar):
        pos = self._pos(infoBar)
        return QPoint(pos.x(), pos.y() - 16)



InfoBar.success(
    title='Lesson 4',
    content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
    orient=Qt.Horizontal,
    isClosable=True,
    position="Custom",  # 使用自定义管理器
    duration=2000,
    parent=window
)
```


### [Toast](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/toast.py)

![Toast](/img/components/infobar/Toast.png)

`Toast` 用于在应用程序中显示重要的、用户需要知道的信息。

```python
from qfluentwidgets_pro import Toast, ToastPosition

Toast.success(
    'Completed', 'The task has finished.',
    duration=3000, position=ToastPosition.TOP_RIGHT, parent=self
)
```

### [ProgressInfoBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_info_bar.py)

![ProgressInfoBar](/img/components/infobar/ProgressInfoBar.png)

`ProgressInfoBar` 它不仅显示任务的完成进度，还可以显示额外的信息。这些信息通常包括任务的名称、描述、剩余时间等。这种组件非常适合用于需要同时展示任务进度和其他相关信息的场合。

```python
from qfluentwidgets_pro import ProgressInfoBar

self.progressInfoBar = ProgressInfoBar.new(
    'Download', 'Downloading a file...', parent=self
)
self.progressInfoBar.setValue(45)
self.progressInfoBar.setRemainingTime('12 seconds')
```

### [ProgressToast](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_toast.py)

![ProgressToast](/img/components/infobar/ProgressToast.png)

`ProgressToast` 可以同时显示任务进度和提示信息。

```python
from qfluentwidgets_pro import ProgressToast

self.progressToast = ProgressToast.info('Downloading...', parent=self)
self.progressToast.setValue(45)
self.progressToast.valueChanged.connect(lambda value: print(value))
```

### [RoundProgressToast](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/round_progress_toast.py)

带圆形加载动画的提示组件，用于无法确定进度的任务。

```python
from qfluentwidgets_pro import RoundProgressToast

self.progressToast = RoundProgressToast.new('Loading...', parent=self)

# 任务完成后关闭
# self.progressToast.close()
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [InfoBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/info_bar.h)

```cpp
#include <components/widgets/info_bar.h>

qfw::InfoBar::success(QStringLiteral("Saved"), QStringLiteral("Your changes have been saved."), Qt::Horizontal, true, 3000, qfw::InfoBarPosition::TopRight, parent);
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `Toast`
- `ProgressInfoBar`
- `ProgressToast`
- `RoundProgressToast`

</template>
</LanguageTabs>
