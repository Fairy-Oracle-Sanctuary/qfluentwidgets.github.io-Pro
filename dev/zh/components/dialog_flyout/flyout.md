---
title: 弹出组件
date: 2024-02-26 16:55:01
permalink: /zh/pages/components/flyout/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [Flyout](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.Flyout)

![Flyout](/img/components/flyout/Flyout.png)

`Flyout` 可以收集用户的输入、显示项目的更多详细信息或要求用户确认操作。与对话框不同的是，可以通过点击空白位置来轻松关闭弹出窗口。

下述示例创建了一个包含图标、标题、内容和关闭按钮的弹出窗口：
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
            content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
            target=self.button,
            parent=self,
            isClosable=True,
            aniType=FlyoutAnimationType.PULL_UP
        )
```

也可以在弹出窗口中显示图片：

```python
Flyout.create(
    image="/path/to/image.png",
    title='Lesson 4',
    content="表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！",
    target=self.button,
    parent=self,
    isClosable=False
)
```

下述例子向弹出窗口中添加了自定义组件：

```python
view = FlyoutView(
    title='Lesson 5',
    content="最短的捷径就是绕远路，绕远路才是我的最短捷径。",
    image='/path/to/image.png',
    isClosable=True
)

# 添加按钮
button = PushButton('Action')
button.setFixedWidth(120)
view.addWidget(button, align=Qt.AlignRight)

# 调整布局
view.widgetLayout.insertSpacing(1, 5)
view.widgetLayout.addSpacing(5)

# 显示弹出窗口
w = Flyout.make(view, self.button, self)
view.closed.connect(w.close)
```

`Flyout` 在 macOS 下可能无法使用中文输入法，解决方案是在创建 `Flyout` 的时候将 `isMacInputMethodEnabled` 置为 `True`：
```python
Flyout.make(..., isMacInputMethodEnabled=True)
Flyout.create(..., isMacInputMethodEnabled=True)
```

### [FlyoutViewBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.FlyoutViewBase)

![CustomFlyout](/img/components/flyout/CustomFlyout.png)

`Flyout` 只是个容器，内部的 `view` 可被任何 `FlyoutViewBase` 的子类实例替换，从而自定义窗口内容。

```python
class CustomFlyoutView(FlyoutViewBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.vBoxLayout = QVBoxLayout(self)
        self.label = BodyLabel('这是一场「试炼」，我认为这就是一场为了战胜过去的「试炼」，\n只有战胜了那些幼稚的过去，人才能有所成长。')
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

`FlyoutDialog` 是个对话框容器，内部可被任何 `QWidget` 的子类实例替换，从而自定义对话框内容。

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

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `FlyoutDialog`

</template>
</LanguageTabs>

