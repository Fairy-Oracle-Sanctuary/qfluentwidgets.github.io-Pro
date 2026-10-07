---
title: Flyout
date: 2024-02-26 16:55:01
permalink: /pages/components/flyout/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [Flyout](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.Flyout)

![Flyout](/img/components/flyout/Flyout.png)

`Flyout` can collect user input, display more detailed information about a project, or require user confirmation of an operation. Unlike a dialog box, you can easily close the flyout by clicking on a blank position.

The following example creates a flyout containing icons, titles, content, and a close button:
```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton("Click Me", self)
        self.button.clicked.connect(self.showFlyout)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(self.button, 0, Qt.AlignCenter)
        self.resize(600, 500)

    def showFlyout(self):
        Flyout.create(
            icon=InfoBarIcon.SUCCESS,
            title='Lesson 4',
            content="Pay your respects, express your respect, and then move on to another new stage of the whirl!",
            target=self.button,
            parent=self,
            isClosable=True,
            aniType=FlyoutAnimationType.PULL_UP
        )
```

You can also display pictures in the flyout:

```python
Flyout.create(
    image="/path/to/image.png",
    title='Lesson 4',
    content="Pay your respects, express your respect, and then move on to another new stage of the whirl!",
    target=self.button,
    parent=self,
    isClosable=False
)
```

The following example adds a custom component to the flyout:

```python
view = FlyoutView(
    title='Lesson 5',
    content="The shortest shortcut is to take a detour, and taking a detour is my shortest shortcut.",
    image='/path/to/image.png',
    isClosable=True
)

# Add a button
button = PushButton('Action')
button.setFixedWidth(120)
view.addWidget(button, align=Qt.AlignRight)

# Adjust the layout
view.widgetLayout.insertSpacing(1, 5)
view.widgetLayout.addSpacing(5)

# Show the flyout
w = Flyout.make(view, self.button, self)
view.closed.connect(w.close)
```

`Flyout` may not support input methods on macOS. The solution is to set `isMacInputMethodEnabled` to `True` when creating the `Flyout`:
```python
Flyout.make(..., isMacInputMethodEnabled=True)
Flyout.create(..., isMacInputMethodEnabled=True)
```

### [FlyoutViewBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.FlyoutViewBase)

![CustomFlyout](/img/components/flyout/CustomFlyout.png)

`Flyout` is just a container, and the internal `view` can be replaced by any instance of a `FlyoutViewBase` subclass to customize the window content.

```python
class CustomFlyoutView(FlyoutViewBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.vBoxLayout = QVBoxLayout(self)
        self.label = BodyLabel('This is a "trial", I think it is a "trial" to overcome the past, \nOnly by overcoming those childish past, can people grow.')
        self.button = PrimaryPushButton('Action')

        self.button.setFixedWidth(140)

        self.vBoxLayout.setSpacing(12)
        self.vBoxLayout.setContentsMargins(20, 16, 20, 16)
        self.vBoxLayout.addWidget(self.label)
        self.vBoxLayout.addWidget(self.button)


class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.button = PushButton("Click Me", self)
        self.button.clicked.connect(self.showFlyout)

        self.hBoxLayout = QHBoxLayout(self)
        self.hBoxLayout.addWidget(self.button, 0, Qt.AlignCenter)
        self.resize(600, 500)

    def showFlyout(self):
        Flyout.make(CustomFlyoutView(), self.button, self, aniType=FlyoutAnimationType.PULL_UP)
```


### [FlyoutDialog](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/flyout_dialog.py)

![FlyoutDialog](/img/components/flyout/FlyoutDialog.png)

`FlyoutDialog` is a dialog container that can be replaced internally by any instance of `QWidget`, allowing for custom dialog content.

```python
from qfluentwidgets_pro import FlyoutDialog, PushButton

self.flyoutButton = PushButton('Show dialog', self)
self.flyoutDialog = FlyoutDialog('Title', 'Custom dialog content.')
self.flyoutButton.clicked.connect(
    lambda: self.flyoutDialog.showAt(self.flyoutButton, self)
)
self.flyoutDialog.accepted.connect(lambda: print('accepted'))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [Flyout](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/flyout.h)

```cpp
#include <components/widgets/flyout.h>

auto* button = new qfw::PushButton(QStringLiteral("Details"), parent);
QObject::connect(button, &QPushButton::clicked, parent, [button, parent] {
    auto* view = new qfw::FlyoutView(QStringLiteral("Details"), QStringLiteral("A compact popup."));
    qfw::Flyout::make(view, QVariant::fromValue(static_cast<QWidget*>(button)), parent);
});
```

### C++ [FlyoutViewBase](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/flyout.h)

```cpp
#include <components/widgets/flyout.h>

class CustomView : public qfw::FlyoutViewBase {
public:
    explicit CustomView(QWidget* owner = nullptr) : FlyoutViewBase(owner), layout_(new QVBoxLayout(this)) {}
    void addWidget(QWidget* widget, int stretch = 0, Qt::Alignment align = Qt::AlignLeft) override {
        layout_->addWidget(widget, stretch, align);
    }
private:
    QVBoxLayout* layout_;
};
auto* button = new qfw::PushButton(QStringLiteral("Custom popup"), parent);
QObject::connect(button, &QPushButton::clicked, parent, [button, parent] {
    auto* view = new CustomView;
    view->addWidget(new qfw::BodyLabel(QStringLiteral("Custom content"), view));
    qfw::Flyout::make(view, QVariant::fromValue(static_cast<QWidget*>(button)), parent);
});
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `FlyoutDialog`

</template>
</LanguageTabs>

