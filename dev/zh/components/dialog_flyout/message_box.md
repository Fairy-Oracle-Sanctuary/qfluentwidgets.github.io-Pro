---
title: 消息框
date: 2024-02-26 15:04:01
permalink: /zh/pages/components/messagebox/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [Dialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.Dialog)


![Dialog](/img/components/messagebox/Dialog.png)

`Dialog` 是模态无边框对话框，用于用于消息提示、确认消息和提交内容。该对话框会中断用户操作，直到用户确认知晓后才可关闭。

```python
w = Dialog("标题", "这是一条消息通知", window)

if w.exec():
    print('确认')
else:
    print('取消')
```

修改按钮文本：

```python
w.yesButton.setText("来啦老弟")
w.cancelButton.setText("但是我拒绝")
```

隐藏确定按钮：
```python
w.yesButton.hide()
w.buttonLayout.insertStretch(0, 1)
```

隐藏取消按钮：
```python
w.cancelButton.hide()
w.buttonLayout.insertStretch(0, 1)
```

如果同时使用 `Dialog` 和 `FluentWindow`，可能导致窗口无法拉伸，解决方案如下：
```python
app.setAttribute(Qt.ApplicationAttribute.AA_DontCreateNativeWidgetSiblings)
```

### [MessageBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.MessageBox)


![MessageBox](/img/components/messagebox/MessageBox.png)

`MessageBox` 是模态遮罩对话框，使用方式和 [Dialog](#dialog) 一样。

最好将对话框的父级设置为主窗口，这样遮罩的尺寸就能和主窗口保持一致。

```python
w = MessageBox("标题", "这是一条消息通知", window)

if w.exec():
    print('确认')
else:
    print('取消')
```

### [MessageBoxBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/message_box_base/index.html#qfluentwidgets.components.dialog_box.message_box_base.MessageBoxBase)

如果你想自定义对话框的内容，可继承 `MessageBoxBase` 并往 `viewLayout` 垂直布局中添加组件。下述代码创建了一个输入框对话框：
```python
class CustomMessageBox(MessageBoxBase):
    """ Custom message box """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('打开 URL')
        self.urlLineEdit = LineEdit()

        self.urlLineEdit.setPlaceholderText('输入文件、流或者播放列表的 URL')
        self.urlLineEdit.setClearButtonEnabled(True)

        # 将组件添加到布局中
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)

        # 设置对话框的最小宽度
        self.widget.setMinimumWidth(350)


def showMessage(window):
    w = CustomMessageBox(window)
    if w.exec():
        print(w.urlLineEdit.text())
```

运行效果如下：
![CustomMessageBox](/img/components/messagebox/CustomMessageBox.png)

对话框提供了 `validate() -> bool` 方法，通过重写此方法，可在用户点击确定按钮时验证表单数据，返回 True 代表表单数据正确，对话框会自动关闭。下面是一个示例：

```python
class CustomMessageBox(MessageBoxBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('打开 URL', self)
        self.urlLineEdit = LineEdit(self)

        self.urlLineEdit.setPlaceholderText('输入文件、流或者播放列表的 URL')
        self.urlLineEdit.setClearButtonEnabled(True)

        self.warningLabel = CaptionLabel("URL 不正确")
        self.warningLabel.setTextColor("#cf1010", QColor(255, 28, 32))

        # add widget to view layout
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)
        self.viewLayout.addWidget(self.warningLabel)
        self.warningLabel.hide()

        self.widget.setMinimumWidth(350)

    def validate(self):
        """ 重写验证表单数据的方法 """
        isValid = QUrl(self.urlLineEdit.text()).isValid()
        self.warningLabel.setHidden(isValid)
        return isValid

```

### [WaitingDialog](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/dialog_box/waiting_dialog.py)

显示等待状态的非阻塞对话框，由调用方在任务结束后关闭。

```python
from qfluentwidgets_pro import WaitingDialog

self.waitingDialog = WaitingDialog('Please wait', 'Preparing download...', self)
self.waitingDialog.open()

# 任务完成后关闭
# self.waitingDialog.accept()
```

### [Drawer](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drawer.py)

带阴影的抽屉，可从父组件的左、右、上、下四个方向弹出。

```python
from qfluentwidgets_pro import Drawer, DrawerPosition, BodyLabel

self.drawer = Drawer('Notifications', self)
self.drawer.setDrawerSize(320)
self.drawer.addWidget(BodyLabel('No more notifications'))
self.drawer.open(DrawerPosition.RIGHT)

# 从其他方向弹出
# self.drawer.open(DrawerPosition.LEFT)
# self.drawer.open(DrawerPosition.TOP)
# self.drawer.open(DrawerPosition.BOTTOM)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [Dialog](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/dialog_box/dialog.h)

```cpp
#include <components/dialog_box/dialog.h>

qfw::Dialog dialog(QStringLiteral("Confirm"), QStringLiteral("Continue with this action?"), parent);
if (dialog.exec() == QDialog::Accepted) {
    qDebug() << "Confirmed";
}
```

### C++ [MessageBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/dialog_box/dialog.h)

```cpp
#include <components/dialog_box/dialog.h>

qfw::MessageBox dialog(QStringLiteral("Confirm"), QStringLiteral("Continue with this action?"), parent);
if (dialog.exec() == QDialog::Accepted) {
    qDebug() << "Confirmed";
}
```

### C++ [MessageBoxBase](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/dialog_box/message_box_base.h)

```cpp
#include <components/dialog_box/message_box_base.h>

auto* dialog = new qfw::MessageBoxBase(parent);
dialog->yesButton->setText(QStringLiteral("Save"));
dialog->cancelButton->setText(QStringLiteral("Cancel"));
dialog->exec();
dialog->deleteLater();
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `WaitingDialog`
- `Drawer`

</template>
</LanguageTabs>
