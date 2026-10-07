---
title: Info Bar
date: 2024-02-27 13:34:00
permalink: /pages/components/infobar/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [InfoBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/info_bar/index.html)

![InfoBar](/img/components/infobar/InfoBar.png)

`InfoBar` is used to display important information that users need to know in the application. This information can be an error message, a warning, or a prompt, letting users know that they need to take action.

The component library provides convenient class methods to create different types of `InfoBar`:

* Success:
    ```python
    InfoBar.success(
        title='Lesson 4',
        content="Express respect, express respect, and then move to another new stage of spin!",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.TOP,
        duration=2000,
        parent=window
    )
    ```

* Warning:
    ```python
    InfoBar.warning(
        title='Lesson 3',
        content="Believe in the spin, just believe it!",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM,
        duration=-1,    # Never disappear
        parent=window
    )
    ```

* Failure:
    ```python
    InfoBar.error(
        title='Lesson 5',
        content="The shortest shortcut is to take a detour, and taking a detour is my shortest shortcut.",
        orient=Qt.Vertical,  # Use vertical layout when the content is too long
        isClosable=True,
        position=InfoBarPosition.BOTTOM_RIGHT,
        duration=-1,
        parent=window
    )
    ```

* Message:
    ```python
    InfoBar.info(
        title='Lesson 5',
        content="The shortest shortcut is to take a detour, and taking a detour is my shortest shortcut.",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM_LEFT,
        duration=-1,
        parent=window
    )
    ```

* Custom:
    ```python
    w = InfoBar.new(
        icon=FluentIcon.GITHUB,
        title='Ripple Dash',
        content="The song of humanity is the song of courage, and the greatness of humanity is the greatness of courage!",
        orient=Qt.Horizontal,
        isClosable=True,
        position=InfoBarPosition.BOTTOM,
        duration=2000,
        parent=window
    )
    w.setCustomBackgroundColor('white', '#202020')
    ```

You can also add buttons and other custom components to the message bar:
```python
w = InfoBar(
    icon=InfoBarIcon.SUCCESS,
    title='Title',
    content="My name is Kira Yoshikage, I'm 33 years old, and I just want to live a quiet life.",
    orient=Qt.Horizontal,
    isClosable=True,
    position=InfoBarPosition.TOP_RIGHT,
    duration=2000,
    parent=window
)

# Add custom components
w.addWidget(PushButton('Action'))
w.show()
```

The pop-up position of the message bar is specified by the `position` parameter:
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

When `InfoBarPosition` is `NONE`, you can place the message bar anywhere. If you want to further manage the message bar position, you can inherit `InfoBarManager`:
```python
@InfoBarManager.register('Custom')
class CustomInfoBarManager(InfoBarManager):
    """ Custom info bar manager """

    def _pos(self, infoBar: InfoBar, parentSize=None):
        p = infoBar.parent()
        parentSize = parentSize or p.size()

        # The position of the first message bar
        x = (parentSize.width() - infoBar.width()) // 2
        y = (parentSize.height() - infoBar.height()) // 2

        # Calculate the position of the current infoBar
        index = self.infoBars[p].index(infoBar)
        for bar in self.infoBars[p][0:index]:
            y += (bar.height() + self.spacing)

        return QPoint(x, y)

    def _slideStartPos(self, infoBar: InfoBar):
        pos = self._pos(infoBar)
        return QPoint(pos.x(), pos.y() - 16)


InfoBar.success(
    title='Lesson 4',
    content="Express respect, express respect, and then move to another new stage of spin!",
    orient=Qt.Horizontal,
    isClosable=True,
    position="Custom",  # Use the custom manager
    duration=2000,
    parent=window
)
```

### [Toast](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/toast.py)

![Toast](/img/components/infobar/Toast.png)

`Toast` is used to display important information that users need to know in the application。

```python
from qfluentwidgets_pro import Toast, ToastPosition

Toast.success(
    'Completed', 'The task has finished.',
    duration=3000, position=ToastPosition.TOP_RIGHT, parent=self
)
```

### [ProgressInfoBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_info_bar.py)

![ProgressInfoBar](/img/components/infobar/ProgressInfoBar.png)

`ProgressInfoBar` not only displays the progress of a task, but can also show additional information. This information typically includes the task's name, description, remaining time, etc. This component is very suitable for situations that require the simultaneous display of task progress and other related information.

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

`ProgressToast` can show the task progress and additional information at the same time.

```python
from qfluentwidgets_pro import ProgressToast

self.progressToast = ProgressToast.info('Downloading...', parent=self)
self.progressToast.setValue(45)
self.progressToast.valueChanged.connect(lambda value: print(value))
```

### [RoundProgressToast](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/round_progress_toast.py)

A toast with an indeterminate circular loading animation.

```python
from qfluentwidgets_pro import RoundProgressToast

self.progressToast = RoundProgressToast.new('Loading...', parent=self)

# Close after the task finishes
# self.progressToast.close()
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `Toast`
- `ProgressInfoBar`
- `ProgressToast`
- `RoundProgressToast`

</template>
</LanguageTabs>
