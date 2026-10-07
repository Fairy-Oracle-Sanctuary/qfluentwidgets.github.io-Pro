---
title: Button
date: 2024-02-25 19:15:01
permalink: /pages/components/button
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

## Standard Buttons
### [PushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PushButton)

![PushButton](/img/components/button/PushButton.jpg)

`PushButton` can be used to display text and icons, works exactly the same as `QPushButton`.

Button without icon:
```python
PushButton('Standard push button')
```

Button with icon, to follow the theme, `PushButton` accepts `FluentIconBase` type icons:
```python
PushButton(FluentIcon.FOLDER, 'Standard push button with icon')
PushButton(QIcon("/path/to/icon.png"), 'Standard push button with icon')
```

### [ToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.ToolButton)

![Tool button](/img/components/button/ToolButton.jpg)

`ToolButton` is only used to display icons, works exactly the same as `QToolButton`.

```python
ToolButton(FluentIcon.SETTING)
ToolButton(QIcon("/path/to/icon.png"))
```

### [PrimaryPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryPushButton)


![PrimaryPushButton](/img/components/button/PrimaryPushButton.jpg)

`PrimaryPushButton` can be used to display text and icons, works exactly the same as `QPushButton`. Use this button when you want to highlight a specific action.


Button without icon:
```python
PrimaryPushButton('Accent style button')
```

Button with icon:
```python
PrimaryPushButton(FluentIcon.UPDATE, 'Accent style button')
PrimaryPushButton(QIcon("/path/to/icon.png"), 'Accent style button with icon')
```


### [PrimaryToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryToolButton)

![Primary Tool button](/img/components/button/PrimaryToolButton.jpg)

`PrimaryToolButton` is only used to display icons, works exactly the same as `QToolButton`. Use this button when you want to highlight a specific action.

```python
PrimaryToolButton(FluentIcon.FOLDER)
PrimaryToolButton(QIcon("/path/to/icon.png"))
```

### [TransparentPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentPushButton)

![TransparentPushButton](/img/components/button/TransparentPushButton.jpg)

`TransparentPushButton` can be used to display text and icons, works exactly the same as `QPushButton`.


Button without icon:
```python
TransparentPushButton('Transparent push button')
```

Button with icon:
```python
TransparentPushButton(FluentIcon.BOOK_SHELF, 'Transparent push button')
TransparentPushButton(QIcon("/path/to/icon.png"), 'Transparent push button')
```

### [TransparentToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentToolButton)

![Transparent Tool button](/img/components/button/TransparentToolButton.jpg)

`TransparentToolButton` is only used to display icons, works exactly the same as `QToolButton`.

```python
TransparentToolButton(FluentIcon.MAIL)
TransparentToolButton(QIcon("/path/to/icon.png"))
```

### [HyperlinkButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.HyperlinkButton)

![HyperlinkButton](/img/components/button/HyperlinkButton.jpg)

`HyperlinkButton` can be used to implement link navigation.

Button without icon:
```python
HyperlinkButton("https://qfluentwidgets.com", 'Hyperlink button')
```

Button with icon:
```python
HyperlinkButton(FluentIcon.LINK, "https://qfluentwidgets.com", 'Hyperlink button')
HyperlinkButton(QIcon("/path/to/icon.png"), "https://qfluentwidgets.com", 'Hyperlink button')
```

Set hyperlink:
```python
button.setUrl("https://www.youtube.com/watch?v=65AuZQ7tlKE")
button.setUrl(QUrl("https://www.youtube.com/watch?v=S0bXDRY1DGM"))
print(button.url)
```

### [HyperlinkToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![HyperlinkToolButton](/img/components/button/HyperlinkToolButton.png)

`HyperlinkToolButton` is used only for displaying an icon, which can redirect to a specified link when clicked.

```python
from qfluentwidgets_pro import HyperlinkToolButton, FluentIcon

button = HyperlinkToolButton(FluentIcon.LINK, 'https://fairy.ora-san.org/')
button.setToolTip('Fairy Oracle Sanctuary')
```

### [FilledPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![FilledPushButton](/img/components/button/FilledPushButton.png)

`FilledPushButton` is used for displaying an icon and text. It can display different background colors according to the level of information. Its usage is identical to `QPushButton`.

```python
from qfluentwidgets_pro import FilledPushButton, FluentIcon

button = FilledPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [FilledToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![FilledToolButton](/img/components/button/FilledToolButton.png)

`FilledToolButton` is used only for displaying an icon. It can display different background colors according to the level of information. Its usage is identical to `QToolButton`.

```python
from qfluentwidgets_pro import FilledToolButton, FluentIcon

button = FilledToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [TextPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![TextPushButton](/img/components/button/TextPushButton.png)

`TextPushButton` is used for displaying an icon and text. It can display different foreground colors according to the level of information. Its usage is identical to `QPushButton`.

```python
from qfluentwidgets_pro import TextPushButton, FluentIcon

button = TextPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [TextToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![TextToolButton](/img/components/button/TextToolButton.png)

`TextToolButton` is used only for displaying an icon. It can display different foreground colors according to the level of information. Its usage is identical to `QToolButton`.

```python
from qfluentwidgets_pro import TextToolButton, FluentIcon

button = TextToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [LuminaPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![LuminaPushButton](/img/components/button/LuminaPushButton.png)

`LuminaPushButton` is used for displaying an icon and text. Its usage is identical to `QPushButton`.

Leave layout margins around the button so its parent does not clip the outer glow.

```python
from PySide6.QtGui import QColor
from qfluentwidgets_pro import LuminaPushButton

button = LuminaPushButton('Continue')
button.setGlowColor(QColor('#38bdf8'))
```

### [OutlinedPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![OutlinedPushButton](/img/components/button/OutlinedPushButton.png)

`OutlinedPushButton`  is used for displaying an icon and text. Its usage is identical to `QPushButton`.

```python
from qfluentwidgets_pro import OutlinedPushButton, FluentIcon

button = OutlinedPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
```

### [OutlinedToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![OutlinedToolButton](/img/components/button/OutlinedToolButton.png)

`OutlinedToolButton` is used only for displaying an icon. Its usage is identical to `QToolButton`

```python
from qfluentwidgets_pro import OutlinedToolButton, FluentIcon

button = OutlinedToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
```

### [RoundPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![RoundPushButton](/img/components/button/RoundPushButton.png)

`RoundPushButton` is used to display icons and text. Its usage is identical to `QPushButton`

```python
from qfluentwidgets_pro import RoundPushButton, FluentIcon

button = RoundPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
```

### [RoundToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![RoundToolButton](/img/components/button/RoundToolButton.png)

`RoundToolButton` is used only for displaying an icon. Its usage is identical to `QToolButton`

```python
from qfluentwidgets_pro import RoundToolButton, FluentIcon

button = RoundToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
```

## Toggle Buttons

Toggle buttons can toggle between `Qt.Checked` and `Qt.Unchecked` states, `toggled(checked: bool)` signal will be emitted when state changes.


### [TogglePushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TogglePushButton)

![TogglePushButton](/img/components/button/TogglePushButton.jpg)

`TogglePushButton` can be used to display text and icons, works exactly the same as `QPushButton`.


Button without icon:
```python
button = TogglePushButton('Toggle push button')
button.toggled.connect(lambda checked: print(f"Button is checked: {checked}"))
```

Button with icon:
```python
TogglePushButton(FluentIcon.SEND, 'Toggle push button')
TogglePushButton(QIcon("/path/to/icon.png"), 'Toggle push button')
```

### [ToggleToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.ToggleToolButton)

![ToggleToolButton](/img/components/button/ToggleToolButton.jpg)

`ToggleToolButton` is only used to display icons, works exactly the same as `QToolButton`.


```python
ToggleToolButton(FluentIcon.GITHUB)
ToggleToolButton(QIcon("/path/to/icon.png"))
```


### [TransparentTogglePushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentTogglePushButton)

![TransparentTogglePushButton](/img/components/button/TransparentTogglePushButton.jpg)

`TransparentTogglePushButton` can be used to display text and icons, works exactly the same as [TogglePushButton](#togglepushbutton).

Button without icon:
```python
button = TransparentTogglePushButton('Transparent toggle button')
button.toggled.connect(lambda checked: print(f"Button is checked: {checked}"))
```

Button with icon:
```python
TransparentTogglePushButton(FluentIcon.BOOK_SHELF, 'Transparent toggle button')
TransparentTogglePushButton(QIcon("/path/to/icon.png"), 'Transparent toggle button')
```

### [TransparentToggleToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentToggleToolButton)

![TransparentToggleToolButton](/img/components/button/TransparentToggleToolButton.jpg)

`TransparentToggleToolButton` is only used to display icons, works exactly the same as [ToggleToolButton](#toggletoolbutton).


```python
TransparentToggleToolButton(FluentIcon.GITHUB)
TransparentToggleToolButton(QIcon("/path/to/icon.png"))
```

### [PillPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PillPushButton)

![PillPushButton](/img/components/button/PillPushButton.jpg)

`PillPushButton` can be used to display text and icons, can be used as tags or filters, works exactly the same as [TogglePushButton](#togglepushbutton).

Button without icon:
```python
PillPushButton('Pill push button')
```

Button with icon:
```python
PillPushButton(FluentIcon.CALENDAR, 'Pill push button')
PillPushButton(QIcon("/path/to/icon.png"), 'Pill push button')
```


### [PillToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PillToolButton)

![PillToolButton](/img/components/button/PillToolButton.jpg)

`PillToolButton` is only used to display icons, can be used as tags or filters, works exactly the same as [TogglePushButton](#togglepushbutton).


```python
PillToolButton(FluentIcon.GITHUB)
PillToolButton(QIcon("/path/to/icon.png"))
```



## Dropdown Buttons
### [DropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.DropDownPushButton)

![DropDownPushButton](/img/components/button/DropdownPushButton.jpg)

`DropDownPushButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = DropDownPushButton(FluentIcon.MAIL, 'Email')

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing?")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("I like singing, rapping, and dancing")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are so beautiful")))

# Add menu
button.setMenu(menu)
```

### [DropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.DropDownToolButton)

![DropDownToolButton](/img/components/button/DropdownToolButton.jpg)

`DropDownToolButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = DropDownToolButton(FluentIcon.MAIL)

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setMenu(menu)
```


### [PrimaryDropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryDropDownPushButton)

![PrimaryDropDownPushButton](/img/components/button/PrimaryDropDownPushButton.jpg)

`PrimaryDropDownPushButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = PrimaryDropDownPushButton(FluentIcon.MAIL, 'Email')

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing?")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("I like singing, rapping, and dancing")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are so beautiful")))

# Add menu
button.setMenu(menu)
```


### [PrimaryDropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryDropDownToolButton)

![PrimaryDropDownToolButton](/img/components/button/PrimaryDropDownToolButton.jpg)

`PrimaryDropDownToolButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = PrimaryDropDownToolButton(FluentIcon.MAIL)

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setMenu(menu)
```


### [TransparentDropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentDropDownPushButton)

![TransparentDropDownPushButton](/img/components/button/TransparentDropDownPushButton.jpg)

`TransparentDropDownPushButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = TransparentDropDownPushButton(FluentIcon.MAIL, 'Email')

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing?")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("I like singing, rapping, and dancing")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are so beautiful")))

# Add menu
button.setMenu(menu)
```

### [TransparentDropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentDropDownToolButton)

![TransparentDropDownToolButton](/img/components/button/TransparentDropDownToolButton.jpg)

`TransparentDropDownToolButton` shows a dropdown menu when clicked, the dropdown menu must be `RoundMenu` or subclasses.

```python
button = TransparentDropDownToolButton(FluentIcon.MAIL)

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setMenu(menu)
```

## Split Button
### [SplitPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.SplitPushButton)

![SplitPushButton](/img/components/button/SplitPushButton.jpg)

`SplitPushButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = SplitPushButton(FluentIcon.GITHUB, 'Split push button')
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("Like singing and dancing RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are too beautiful")))

# Add menu
button.setFlyout(menu)
```

### [SplitToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.SplitToolButton)

![SplitToolButton](/img/components/button/SplitToolButton.jpg)

`SplitToolButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = SplitToolButton(FluentIcon.MAIL)
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setFlyout(menu)
```

### [PrimarySplitPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimarySplitPushButton)

![PrimarySplitPushButton](/img/components/button/PrimarySplitPushButton.jpg)

`PrimarySplitPushButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = PrimarySplitPushButton(FluentIcon.GITHUB, 'Split push button')
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("What are you doing~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("Like singing and dancing RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("Just because you are too beautiful")))

# Add menu
button.setFlyout(menu)
```

### [PrimarySplitToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimarySplitToolButton)

![PrimarySplitToolButton](/img/components/button/PrimarySplitToolButton.jpg)

`PrimarySplitToolButton` consists of two buttons. Clicking the left button triggers the `clicked` signal, while clicking the right button pops up a drop-down menu. The drop-down menu must be `RoundMenu` or its subclass.

```python
button = PrimarySplitToolButton(FluentIcon.MAIL)
button.clicked.connect(lambda: print("Left button clicked"))

# Create menu
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("Sent")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("Saved")))

# Add menu
button.setFlyout(menu)
```

## Labels

### [Chip](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![Chip](/img/components/button/Chip.png)

`Chip` is used to display an icon and text, with a delete button. It can be used as a label for user selection. Its usage is identical to `QPushButton`.

```python
from qfluentwidgets_pro import Chip

chip = Chip('Python')
chip.setChecked(True)
chip.closed.connect(chip.deleteLater)
```

### [Tag](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![Tag](/img/components/button/Tag.png)

`Tag` is used to display an icon and text. Depending on the level of information, it can display different background and foreground colors. Its usage is identical to `QPushButton`.

```python
from qfluentwidgets_pro import Tag

tag = Tag('Completed')
tag.setType('success')
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [PushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PushButton(QStringLiteral("Button"), parent);
button->setFixedWidth(160);
QObject::connect(button, &QPushButton::clicked, parent, [] { qDebug() << "Clicked"; });
```

### C++ [ToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::ToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFixedSize(36, 36);
button->setToolTip(QStringLiteral("Add"));
```

### C++ [PrimaryPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PrimaryPushButton(QStringLiteral("Button"), parent);
button->setFixedWidth(160);
QObject::connect(button, &QPushButton::clicked, parent, [] { qDebug() << "Clicked"; });
```

### C++ [PrimaryToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PrimaryToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFixedSize(36, 36);
button->setToolTip(QStringLiteral("Add"));
```

### C++ [TransparentPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::TransparentPushButton(QStringLiteral("Button"), parent);
button->setFixedWidth(160);
QObject::connect(button, &QPushButton::clicked, parent, [] { qDebug() << "Clicked"; });
```

### C++ [TransparentToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::TransparentToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFixedSize(36, 36);
button->setToolTip(QStringLiteral("Add"));
```

### C++ [HyperlinkButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::HyperlinkButton(QStringLiteral("https://fairy.ora-san.org/"), QStringLiteral("Visit website"), parent);
button->setFixedWidth(180);
```

### C++ [TogglePushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

This example uses the C++ `ToggleButton` class, whose name or usage differs from Python.

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::ToggleButton(QStringLiteral("Toggle"), parent);
button->setChecked(true);
QObject::connect(button, &QPushButton::toggled, parent, [](bool checked) { qDebug() << checked; });
```

### C++ [ToggleToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::ToggleToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFixedSize(36, 36);
button->setToolTip(QStringLiteral("Add"));
```

### C++ [TransparentTogglePushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::TransparentTogglePushButton(QStringLiteral("Button"), parent);
button->setFixedWidth(160);
QObject::connect(button, &QPushButton::clicked, parent, [] { qDebug() << "Clicked"; });
```

### C++ [TransparentToggleToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::TransparentToggleToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFixedSize(36, 36);
button->setToolTip(QStringLiteral("Add"));
```

### C++ [PillPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PillPushButton(QStringLiteral("Button"), parent);
button->setFixedWidth(160);
QObject::connect(button, &QPushButton::clicked, parent, [] { qDebug() << "Clicked"; });
```

### C++ [PillToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PillToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFixedSize(36, 36);
button->setToolTip(QStringLiteral("Add"));
```

### C++ [DropDownPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::DropDownPushButton(QStringLiteral("Actions"), parent);
button->setMenu(menu);
```

### C++ [DropDownToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::DropDownToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setMenu(menu);
```

### C++ [PrimaryDropDownPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::PrimaryDropDownPushButton(QStringLiteral("Actions"), parent);
button->setMenu(menu);
```

### C++ [TransparentDropDownPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::TransparentDropDownPushButton(QStringLiteral("Actions"), parent);
button->setMenu(menu);
```

### C++ [TransparentDropDownToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::TransparentDropDownToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setMenu(menu);
```

### C++ [SplitPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::SplitPushButton(QStringLiteral("Actions"), parent);
button->setFlyout(menu);
```

### C++ [SplitToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::SplitToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFlyout(menu);
```

### C++ [PrimarySplitPushButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::PrimarySplitPushButton(QStringLiteral("Actions"), parent);
button->setFlyout(menu);
```

### C++ [PrimarySplitToolButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Open"), menu));
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
auto* button = new qfw::PrimarySplitToolButton(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
button->setFlyout(menu);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `HyperlinkToolButton`
- `FilledPushButton`
- `FilledToolButton`
- `TextPushButton`
- `TextToolButton`
- `LuminaPushButton`
- `OutlinedPushButton`
- `OutlinedToolButton`
- `RoundPushButton`
- `RoundToolButton`
- `PrimaryDropDownToolButton`
- `Chip`
- `Tag`

</template>
</LanguageTabs>

