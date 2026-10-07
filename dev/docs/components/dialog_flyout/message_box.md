---
title: Message Box
date: 2024-02-26 15:04:01
permalink: /pages/components/messagebox/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [Dialog](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.Dialog)


![Dialog](/img/components/messagebox/Dialog.png)

`Dialog` is a modal, borderless dialog box used for message prompts, confirmation messages, and content submission. This dialog box will interrupt user operations until the user acknowledges it can be closed.

```python
w = Dialog("Title", "This is a message notification", window)

if w.exec():
    print('Confirmed')
else:
    print('Canceled')
```

Change button text:

```python
w.yesButton.setText("Roger")
w.cancelButton.setText("Refuse")
```

Hide the confirm button:
```python
w.yesButton.hide()
w.buttonLayout.insertStretch(0, 1)
```

Hide the cancel button:
```python
w.cancelButton.hide()
w.buttonLayout.insertStretch(0, 1)
```

If `Dialog` and `FluentWindow` are used together, the window may become non-resizable. The solution is as follows:

```python
app.setAttribute(Qt.ApplicationAttribute.AA_DontCreateNativeWidgetSiblings)
```


### [MessageBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/dialog_box/dialog/index.html#qfluentwidgets.components.dialog_box.dialog.MessageBox)

![MessageBox](/img/components/messagebox/MessageBox.png)

`MessageBox` is a modal overlay dialog box used for message prompts, and its usage is the same as [Dialog](#dialog).

It's best to set the parent of the message box to the main window so that the size of the overlay matches the main window.

```python
w = MessageBox("Title", "This is a message notification", window)

if w.exec():
    print('Confirmed')
else:
    print('Canceled')
```


### [MessageBoxBase](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/dialog_box/message_box_base/index.html#qfluentwidgets.components.dialog_box.message_box_base.MessageBoxBase)

If you want to customize the content of the message box, you can inherit `MessageBoxBase` and add components to the `viewLayout` layout. The following code creates an input box dialog:

```python
class CustomMessageBox(MessageBoxBase):
    """ Custom message box """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('Open URL')
        self.urlLineEdit = LineEdit()

        self.urlLineEdit.setPlaceholderText('Enter the URL of a file, stream, or playlist')
        self.urlLineEdit.setClearButtonEnabled(True)

        # Add components to the layout
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)

        # Set the minimum width of the dialog box
        self.widget.setMinimumWidth(350)


def showMessage(window):
    w = CustomMessageBox(window)
    if w.exec():
        print(w.urlLineEdit.text())
```

The running effect is as follows:
![CustomMessageBox](/img/components/messagebox/CustomMessageBox.png)

`MessageBoxBase` provides `validate() -> bool` method, which can be overridden to validate form data when the user clicks the OK button. Returning `True` indicates that the form data is correct, and the dialog box will automatically close. Here is an example:

```python
class CustomMessageBox(MessageBoxBase):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.titleLabel = SubtitleLabel('Open URL', self)
        self.urlLineEdit = LineEdit(self)

        self.urlLineEdit.setPlaceholderText('Enter the URL of a file, stream, or playlist')
        self.urlLineEdit.setClearButtonEnabled(True)

        self.warningLabel = CaptionLabel("Invalid URL")
        self.warningLabel.setTextColor("#cf1010", QColor(255, 28, 32))

        # add widget to view layout
        self.viewLayout.addWidget(self.titleLabel)
        self.viewLayout.addWidget(self.urlLineEdit)
        self.viewLayout.addWidget(self.warningLabel)
        self.warningLabel.hide()

        self.widget.setMinimumWidth(350)

    def validate(self):
        """ Override to validate form data """
        isValid = QUrl(self.urlLineEdit.text()).isValid()
        self.warningLabel.setHidden(isValid)
        return isValid
```

### [WaitingDialog](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/dialog_box/waiting_dialog.py)

A non-blocking waiting dialog, closed by the caller when its task finishes.

```python
from qfluentwidgets_pro import WaitingDialog

self.waitingDialog = WaitingDialog('Please wait', 'Preparing download...', self)
self.waitingDialog.open()

# Close after the task finishes
# self.waitingDialog.accept()
```

### [Drawer](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drawer.py)

A shadowed drawer that slides in from any of its parent's four edges.

```python
from qfluentwidgets_pro import Drawer, DrawerPosition, BodyLabel

self.drawer = Drawer('Notifications', self)
self.drawer.setDrawerSize(320)
self.drawer.addWidget(BodyLabel('No more notifications'))
self.drawer.open(DrawerPosition.RIGHT)

# Other directions
# self.drawer.open(DrawerPosition.LEFT)
# self.drawer.open(DrawerPosition.TOP)
# self.drawer.open(DrawerPosition.BOTTOM)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `WaitingDialog`
- `Drawer`

</template>
</LanguageTabs>
