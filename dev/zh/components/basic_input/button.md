---
title: 按钮
date: 2024-02-25 19:15:01
permalink: /zh/pages/components/button/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

## 普通按钮
### [PushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PushButton)

![PushButton](/img/components/button/PushButton.jpg)

`PushButton` 可用于显示文本和图标，使用方式与 `QPushButton` 完全相同。

不带图标的按钮：
```python
PushButton('Standard push button')
```

带图标的按钮，为了跟随主题，`PushButton` 接受 `FluentIconBase` 类型的图标：
```python
PushButton(FluentIcon.FOLDER, 'Standard push button with icon')
PushButton(QIcon("/path/to/icon.png"), 'Standard push button with icon')
```

### [ToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.ToolButton)

![Tool button](/img/components/button/ToolButton.jpg)

`ToolButton` 只用于显示图标，使用方式与 `QToolButton` 完全相同。

```python
ToolButton(FluentIcon.SETTING)
ToolButton(QIcon("/path/to/icon.png"))
```

### [PrimaryPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryPushButton)


![PrimaryPushButton](/img/components/button/PrimaryPushButton.jpg)

`PrimaryPushButton` 用于显示文本和图标，使用方式与 `QPushButton` 完全相同，当你想要突出显示某种操作时可用此按钮。


不带图标的按钮：
```python
PrimaryPushButton('Accent style button')
```

带图标的按钮：
```python
PrimaryPushButton(FluentIcon.UPDATE, 'Accent style button')
PrimaryPushButton(QIcon("/path/to/icon.png"), 'Accent style button with icon')
```


### [PrimaryToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryToolButton)

![Primary Tool button](/img/components/button/PrimaryToolButton.jpg)

`PrimaryToolButton` 只用于显示图标，使用方式与 `QToolButton` 完全相同，当你想要突出显示某种操作时可用此按钮。

```python
PrimaryToolButton(FluentIcon.FOLDER)
PrimaryToolButton(QIcon("/path/to/icon.png"))
```

### [TransparentPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentPushButton)

![TransparentPushButton](/img/components/button/TransparentPushButton.jpg)

`TransparentPushButton` 用于显示文本和图标，使用方式与 `QPushButton` 完全相同。


不带图标的按钮：
```python
TransparentPushButton('Transparent push button')
```

带图标的按钮：
```python
TransparentPushButton(FluentIcon.BOOK_SHELF, 'Transparent push button')
TransparentPushButton(QIcon("/path/to/icon.png"), 'Transparent push button')
```

### [TransparentToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentToolButton)

![Transparent Tool button](/img/components/button/TransparentToolButton.jpg)

`TransparentToolButton` 只用于显示图标，使用方式与 `QToolButton` 完全相同。

```python
TransparentToolButton(FluentIcon.MAIL)
TransparentToolButton(QIcon("/path/to/icon.png"))
```

### [HyperlinkButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.HyperlinkButton)

![HyperlinkButton](/img/components/button/HyperlinkButton.jpg)

`HyperlinkButton` 可用于实现链接跳转。

不带图标的按钮：
```python
HyperlinkButton("https://qfluentwidgets.com", 'Hyperlink button')
```

带图标的按钮：
```python
HyperlinkButton(FluentIcon.LINK, "https://qfluentwidgets.com", 'Hyperlink button')
HyperlinkButton(QIcon("/path/to/icon.png"), "https://qfluentwidgets.com", 'Hyperlink button')
```

设置超链接：
```python
button.setUrl("https://www.youtube.com/watch?v=65AuZQ7tlKE")
button.setUrl(QUrl("https://www.youtube.com/watch?v=S0bXDRY1DGM"))
print(button.url)
```

### [HyperlinkToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![HyperlinkToolButton](/img/components/button/HyperlinkToolButton.png)

`HyperlinkToolButton` 只用于显示图标，点击时可跳转到指定链接。

```python
from qfluentwidgets_pro import HyperlinkToolButton, FluentIcon

button = HyperlinkToolButton(FluentIcon.LINK, 'https://fairy.ora-san.org/')
button.setToolTip('Fairy Oracle Sanctuary')
```

### [FilledPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![FilledPushButton](/img/components/button/FilledPushButton.png)

`FilledPushButton` 用于显示图标和文本，可根据信息级别显示不同的背景色，使用方式和 `QPushButton` 完全相同。

```python
from qfluentwidgets_pro import FilledPushButton, FluentIcon

button = FilledPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [FilledToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![FilledToolButton](/img/components/button/FilledToolButton.png)

`FilledToolButton` 只用于显示图标，可根据信息级别显示不同的背景色，使用方式和 `QToolButton` 完全相同。

```python
from qfluentwidgets_pro import FilledToolButton, FluentIcon

button = FilledToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [TextPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![TextPushButton](/img/components/button/TextPushButton.png)

`TextPushButton` 用于显示图标和文本，可根据信息级别显示不同的前景色，使用方式和 `QPushButton` 完全相同。

```python
from qfluentwidgets_pro import TextPushButton, FluentIcon

button = TextPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [TextToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![TextToolButton](/img/components/button/TextToolButton.png)

`TextToolButton` 只用于显示图标，可根据信息级别显示不同的前景色，使用方式和 `QToolButton` 完全相同。

```python
from qfluentwidgets_pro import TextToolButton, FluentIcon

button = TextToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
button.setColorScheme('success')
```

### [LuminaPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![LuminaPushButton](/img/components/button/LuminaPushButton.png)

`LuminaPushButton` 用于显示图标和文本，可显示辉光，使用方式与 `QPushButton` 完全相同。

按钮的扫光绘制在边界之外，放入布局时需要预留外边距，避免父组件裁切光效。

```python
from PySide6.QtGui import QColor
from qfluentwidgets_pro import LuminaPushButton

button = LuminaPushButton('Continue')
button.setGlowColor(QColor('#38bdf8'))
```

### [OutlinedPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![OutlinedPushButton](/img/components/button/OutlinedPushButton.png)

`OutlinedPushButton` 用于显示图标和文本，默认可选中，使用方式与 `QPushButton` 完全相同，通常与 `QButtonGroup` 组合使用。

```python
from qfluentwidgets_pro import OutlinedPushButton, FluentIcon

button = OutlinedPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
```

### [OutlinedToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![OutlinedToolButton](/img/components/button/OutlinedToolButton.png)

`OutlinedToolButton` 只用于显示图标，默认可选中，使用方式与 `QToolButton` 完全相同。

```python
from qfluentwidgets_pro import OutlinedToolButton, FluentIcon

button = OutlinedToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
```

### [RoundPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![RoundPushButton](/img/components/button/RoundPushButton.png)

`RoundPushButton` 用于显示图标和文本，默认不可选中，使用方式与 `QPushButton` 完全相同。

```python
from qfluentwidgets_pro import RoundPushButton, FluentIcon

button = RoundPushButton(FluentIcon.ADD, 'Add')
button.clicked.connect(lambda: print('clicked'))
```

### [RoundToolButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![RoundToolButton](/img/components/button/RoundToolButton.png)

`RoundToolButton` 只用于显示图标，默认不可选中，使用方式与 `QToolButton` 完全相同。

```python
from qfluentwidgets_pro import RoundToolButton, FluentIcon

button = RoundToolButton(FluentIcon.ADD)
button.setToolTip('Add')
button.clicked.connect(lambda: print('clicked'))
```

## 状态开关按钮

状态开关按钮可在 `Qt.Checked` 和 `Qt.Unchecked` 两种选中状态间切换，状态发生改变时会发出 `toggled(checked: bool)` 信号。


### [TogglePushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TogglePushButton)

![TogglePushButton](/img/components/button/TogglePushButton.jpg)

`TogglePushButton` 用于显示文本和图标，使用方式与 `QPushButton` 完全相同。


不带图标的按钮：
```python
button = TogglePushButton('Toggle push button')
button.toggled.connect(lambda checked: print(f"Button is checked: {checked}"))
```

带图标的按钮：
```python
TogglePushButton(FluentIcon.SEND, 'Toggle push button')
TogglePushButton(QIcon("/path/to/icon.png"), 'Toggle push button')
```

### [ToggleToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.ToggleToolButton)

![ToggleToolButton](/img/components/button/ToggleToolButton.jpg)

`ToggleToolButton` 只用于显示图标，使用方式与 `QToolButton` 完全相同。


```python
ToggleToolButton(FluentIcon.GITHUB)
ToggleToolButton(QIcon("/path/to/icon.png"))
```


### [TransparentTogglePushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentTogglePushButton)

![TransparentTogglePushButton](/img/components/button/TransparentTogglePushButton.jpg)

`TransparentTogglePushButton` 用于显示文本和图标，使用方式与 [TogglePushButton](#togglepushbutton) 完全相同。

不带图标的按钮：
```python
button = TransparentTogglePushButton('Transparent toggle button')
button.toggled.connect(lambda checked: print(f"Button is checked: {checked}"))
```

带图标的按钮：
```python
TransparentTogglePushButton(FluentIcon.BOOK_SHELF, 'Transparent toggle button')
TransparentTogglePushButton(QIcon("/path/to/icon.png"), 'Transparent toggle button')
```

### [TransparentToggleToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentToggleToolButton)

![TransparentToggleToolButton](/img/components/button/TransparentToggleToolButton.jpg)

`TransparentToggleToolButton` 只用于显示图标，使用方式与 [ToggleToolButton](#toggletoolbutton) 完全相同。


```python
TransparentToggleToolButton(FluentIcon.GITHUB)
TransparentToggleToolButton(QIcon("/path/to/icon.png"))
```

### [PillPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PillPushButton)

![PillPushButton](/img/components/button/PillPushButton.jpg)

`PillPushButton` 用于显示文本和图标，可拿来作为标签或者过滤器，使用方式与 [TogglePushButton](#togglepushbutton) 完全相同。

不带图标的按钮：
```python
PillPushButton('Pill push button')
```

带图标的按钮：
```python
PillPushButton(FluentIcon.CALENDAR, 'Pill push button')
PillPushButton(QIcon("/path/to/icon.png"), 'Pill push button')
```


### [PillToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PillToolButton)

![PillToolButton](/img/components/button/PillToolButton.jpg)

`PillToolButton` 只用于显示图标，可拿来作为标签或者过滤器，使用方式与 [TogglePushButton](#togglepushbutton) 完全相同。


```python
PillToolButton(FluentIcon.GITHUB)
PillToolButton(QIcon("/path/to/icon.png"))
```



## 下拉菜单按钮
### [DropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.DropDownPushButton)

![DropDownPushButton](/img/components/button/DropdownPushButton.jpg)

`DropDownPushButton` 点击时可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = DropDownPushButton(FluentIcon.MAIL, 'Email')

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("你干嘛~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("喜欢唱跳RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("只因你太美")))

# 添加菜单
button.setMenu(menu)
```

### [DropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.DropDownToolButton)

![DropDownToolButton](/img/components/button/DropdownToolButton.jpg)

`DropDownToolButton` 点击时可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = DropDownToolButton(FluentIcon.MAIL)

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("已发送")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("已保存")))

# 添加菜单
button.setMenu(menu)
```


### [PrimaryDropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryDropDownPushButton)

![PrimaryDropDownPushButton](/img/components/button/PrimaryDropDownPushButton.jpg)

`PrimaryDropDownPushButton` 点击时可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = PrimaryDropDownPushButton(FluentIcon.MAIL, 'Email')

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("你干嘛~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("喜欢唱跳RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("只因你太美")))

# 添加菜单
button.setMenu(menu)
```


### [PrimaryDropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimaryDropDownToolButton)

![PrimaryDropDownToolButton](/img/components/button/PrimaryDropDownToolButton.jpg)

`PrimaryDropDownToolButton` 点击时可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = PrimaryDropDownToolButton(FluentIcon.MAIL, 'Email')

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("已发送")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("已保存")))

# 添加菜单
button.setMenu(menu)
```


### [TransparentDropDownPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentDropDownPushButton)

![TransparentDropDownPushButton](/img/components/button/TransparentDropDownPushButton.jpg)

`TransparentDropDownPushButton` 点击时可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = TransparentDropDownPushButton(FluentIcon.MAIL, 'Email')

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("你干嘛~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("喜欢唱跳RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("只因你太美")))

# 添加菜单
button.setMenu(menu)
```

### [TransparentDropDownToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.TransparentDropDownToolButton)

![TransparentDropDownToolButton](/img/components/button/TransparentDropDownToolButton.jpg)

`TransparentDropDownToolButton` 点击时可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = TransparentDropDownToolButton(FluentIcon.MAIL, 'Email')

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("已发送")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("已保存")))

# 添加菜单
button.setMenu(menu)
```

## 拆分按钮
### [SplitPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.SplitPushButton)

![SplitPushButton](/img/components/button/SplitPushButton.jpg)

`SplitPushButton` 由两个按钮组成，点击左侧按钮会触发 `clicked` 信号，点击右侧按钮可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = SplitPushButton(FluentIcon.GITHUB, 'Split push button')
button.clicked.connect(lambda: print("点击左侧按钮"))

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("你干嘛~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("喜欢唱跳RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("只因你太美")))

# 添加菜单
button.setFlyout(menu)
```

### [SplitToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.SplitToolButton)

![SplitToolButton](/img/components/button/SplitToolButton.jpg)

`SplitToolButton` 由两个按钮组成，点击左侧按钮会触发 `clicked` 信号，点击右侧按钮可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = SplitToolButton(FluentIcon.MAIL)
button.clicked.connect(lambda: print("点击左侧按钮"))

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("已发送")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("已保存")))

# 添加菜单
button.setFlyout(menu)
```

### [PrimarySplitPushButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimarySplitPushButton)

![PrimarySplitPushButton](/img/components/button/PrimarySplitPushButton.jpg)

`PrimarySplitPushButton` 由两个按钮组成，点击左侧按钮会触发 `clicked` 信号，点击右侧按钮可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = PrimarySplitPushButton(FluentIcon.GITHUB, 'Split push button')
button.clicked.connect(lambda: print("点击左侧按钮"))

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.BASKETBALL, 'Basketball', triggered=lambda: print("你干嘛~")))
menu.addAction(Action(FluentIcon.ALBUM, 'Sing', triggered=lambda: print("喜欢唱跳RAP")))
menu.addAction(Action(FluentIcon.MUSIC, 'Music', triggered=lambda: print("只因你太美")))

# 添加菜单
button.setFlyout(menu)
```

### [PrimarySplitToolButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.PrimarySplitToolButton)

![PrimarySplitToolButton](/img/components/button/PrimarySplitToolButton.jpg)

`PrimarySplitToolButton` 由两个按钮组成，点击左侧按钮会触发 `clicked` 信号，点击右侧按钮可弹出下拉菜单，且下拉菜单必须是 `RoundMenu` 及其子类。

```python
button = PrimarySplitToolButton(FluentIcon.MAIL)
button.clicked.connect(lambda: print("点击左侧按钮"))

# 创建菜单
menu = RoundMenu(parent=button)
menu.addAction(Action(FluentIcon.SEND_FIL, 'Send', triggered=lambda: print("已发送")))
menu.addAction(Action(FluentIcon.SAVE, 'Save', triggered=lambda: print("已保存")))

# 添加菜单
button.setFlyout(menu)
```

## 标签

### [Chip](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![Chip](/img/components/button/Chip.png)

`Chip` 用于显示图标和文本，带有删除按钮，可作为标签供用户选择，使用方式和 `QPushButton` 完全相同。

```python
from qfluentwidgets_pro import Chip

chip = Chip('Python')
chip.setChecked(True)
chip.closed.connect(chip.deleteLater)
```

### [Tag](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![Tag](/img/components/button/Tag.png)

`Tag` 用于显示图标和文本，根据信息级别可显示不同的背景色和前景色，使用方式和 `QPushButton` 完全相同。

```python
from qfluentwidgets_pro import Tag

tag = Tag('Completed')
tag.setType('success')
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

本例使用 C++ 中的 `ToggleButton`，与 Python 的类名或使用方式不同。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

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

