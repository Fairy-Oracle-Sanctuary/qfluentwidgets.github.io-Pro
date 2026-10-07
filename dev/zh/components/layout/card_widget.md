---
title: 卡片组件
date: 2024-07-24 14:22:00
permalink: /zh/pages/components/cardwidget/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [CardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.CardWidget)

![CardWidget](/img/components/cardwidget/CardWidget.png)

`CardWidget` 是一种非常灵活和实用的 UI 设计模式,能够帮助开发者以一种结构化和美观的方式展示各种类型的信息和内容。

卡片组件是一个容器，可用于放置任意组件:

```python
class AppCard(CardWidget):

    def __init__(self, icon, title, content, parent=None):
        super().__init__(parent)
        self.iconWidget = IconWidget(icon)
        self.titleLabel = BodyLabel(title, self)
        self.contentLabel = CaptionLabel(content, self)
        self.openButton = PushButton('Open', self)
        self.moreButton = TransparentToolButton(FluentIcon.MORE, self)

        self.hBoxLayout = QHBoxLayout(self)
        self.vBoxLayout = QVBoxLayout()

        self.setFixedHeight(73)
        self.iconWidget.setFixedSize(48, 48)
        self.contentLabel.setTextColor("#606060", "#d2d2d2")
        self.openButton.setFixedWidth(120)

        self.hBoxLayout.setContentsMargins(20, 11, 11, 11)
        self.hBoxLayout.setSpacing(15)
        self.hBoxLayout.addWidget(self.iconWidget)

        self.vBoxLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.setSpacing(0)
        self.vBoxLayout.addWidget(self.titleLabel, 0, Qt.AlignVCenter)
        self.vBoxLayout.addWidget(self.contentLabel, 0, Qt.AlignVCenter)
        self.vBoxLayout.setAlignment(Qt.AlignVCenter)
        self.hBoxLayout.addLayout(self.vBoxLayout)

        self.hBoxLayout.addStretch(1)
        self.hBoxLayout.addWidget(self.openButton, 0, Qt.AlignRight)
        self.hBoxLayout.addWidget(self.moreButton, 0, Qt.AlignRight)

        self.moreButton.setFixedSize(32, 32)
```

点击 `CardWidget` 会发送 `clicked` 信号:
```python
card = AppCard(
    icon=":/qfluentwidgets/images/logo.png",
    title="PyQt-Fluent-Widgets",
    content="Shokokawaii Inc."
)
card.clicked.connect(lambda: print("点击卡片"))
```

默认圆角大小为 5px，下述代码调整为 8px:
```python
card.setBorderRadius(8)
```

### [SimpleCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.SimpleCardWidget)

`SimpleCardWidget` 是 `CardWidget` 子类，二者之间唯一的区别就是 `SimpleCardWidget` 的背景不会随着鼠标进入进出而变化。

### [ElevatedCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.ElevatedCardWidget)

![ElevatedCardWidget](/img/components/cardwidget/ElevatedCardWidget.png)

`ElevatedCardWidget` 是带阴影的卡片组件，鼠标移入时会显示阴影和上移动画。

```python
class EmojiCard(ElevatedCardWidget):

    def __init__(self, iconPath: str, name: str, parent=None):
        super().__init__(parent)
        self.iconWidget = ImageLabel(iconPath, self)
        self.label = CaptionLabel(name, self)

        self.iconWidget.scaledToHeight(68)

        self.vBoxLayout = QVBoxLayout(self)
        self.vBoxLayout.setAlignment(Qt.AlignCenter)
        self.vBoxLayout.addStretch(1)
        self.vBoxLayout.addWidget(self.iconWidget, 0, Qt.AlignCenter)
        self.vBoxLayout.addStretch(1)
        self.vBoxLayout.addWidget(self.label, 0, Qt.AlignHCenter | Qt.AlignBottom)

        self.setFixedSize(168, 176)
```


### [HeaderCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.HeaderCardWidget)

![HeaderCardWidget](/img/components/cardwidget/HeaderCardWidget.png)

`HeaderCardWidget` 是带标题的卡片组件，可用于替代 `QGroupBox`。它的内部已有布局，只需将组件添加到水平布局 `viewLayout` 中即可。

```python
class SystemRequirementCard(HeaderCardWidget):
    """ System requirements card """

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle('系统要求')

        self.infoLabel = BodyLabel('此产品适用于你的设备。具有复选标记的项目符合开发人员的系统要求。', self)
        self.successIcon = IconWidget(InfoBarIcon.SUCCESS, self)
        self.detailButton = HyperlinkLabel('详细信息', self)

        self.vBoxLayout = QVBoxLayout()
        self.hBoxLayout = QHBoxLayout()

        self.successIcon.setFixedSize(16, 16)
        self.hBoxLayout.setSpacing(10)
        self.vBoxLayout.setSpacing(16)
        self.hBoxLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.setContentsMargins(0, 0, 0, 0)

        self.hBoxLayout.addWidget(self.successIcon)
        self.hBoxLayout.addWidget(self.infoLabel)
        self.vBoxLayout.addLayout(self.hBoxLayout)
        self.vBoxLayout.addWidget(self.detailButton)

        self.viewLayout.addLayout(self.vBoxLayout)
```

### [GroupHeaderCardWidget](https://pyqt-fluent-widgets.readthedocs.io/zh_CN/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.GroupHeaderCardWidget)

![GroupHeaderCardWidget](/img/components/cardwidget/GroupHeaderCardWidget.png)

`GroupHeaderCardWidget` 可用于创建上下分组布局的卡片。可通过 `addGroup()` 添加组件到新分组中，分组存放在垂直布局  `vBoxLayout` 中。

```python
class SettinsCard(GroupHeaderCardWidget):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle("基本设置")
        self.setBorderRadius(8)

        self.chooseButton = PushButton("选择")
        self.comboBox = ComboBox()
        self.lineEdit = SearchLineEdit()

        self.hintIcon = IconWidget(InfoBarIcon.INFORMATION)
        self.hintLabel = BodyLabel("点击编译按钮以开始打包 👉")
        self.compileButton = PrimaryPushButton(FluentIcon.PLAY_SOLID, "编译")
        self.openButton = PushButton(FluentIcon.VIEW, "打开")
        self.bottomLayout = QHBoxLayout()

        self.chooseButton.setFixedWidth(120)
        self.lineEdit.setFixedWidth(320)
        self.comboBox.setFixedWidth(320)
        self.comboBox.addItems(["始终显示（首次打包时建议启用）", "始终隐藏"])
        self.lineEdit.setPlaceholderText("输入入口脚本的路径")

        # 设置底部工具栏布局
        self.hintIcon.setFixedSize(16, 16)
        self.bottomLayout.setSpacing(10)
        self.bottomLayout.setContentsMargins(24, 15, 24, 20)
        self.bottomLayout.addWidget(self.hintIcon, 0, Qt.AlignLeft)
        self.bottomLayout.addWidget(self.hintLabel, 0, Qt.AlignLeft)
        self.bottomLayout.addStretch(1)
        self.bottomLayout.addWidget(self.openButton, 0, Qt.AlignRight)
        self.bottomLayout.addWidget(self.compileButton, 0, Qt.AlignRight)
        self.bottomLayout.setAlignment(Qt.AlignVCenter)

        # 添加组件到分组中
        self.addGroup("resource/Rocket.svg", "构建目录", "选择 Nuitka 的输出目录", self.chooseButton)
        self.addGroup("resource/Joystick.svg", "运行终端", "设置是否显示命令行终端", self.comboBox)
        group = self.addGroup("resource/Python.svg", "入口脚本", "选择软件的入口脚本", self.lineEdit)
        group.setSeparatorVisible(True)

        # 添加底部工具栏
        self.vBoxLayout.addLayout(self.bottomLayout)
```

### [DashboardCardWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/dashboard_card.py)

基于 `SimpleCardWidget` 的仪表盘卡片，支持图标、标题、说明、开关和自定义内容。

```python
from qfluentwidgets_pro import DashboardCardWidget, FluentIcon, PushButton

card = DashboardCardWidget(FluentIcon.DOCUMENT, 'Hosts editor', 'Manage the hosts file.')
card.setFixedWidth(480)
card.setChecked(True)
card.checkedChanged.connect(lambda checked: print(checked))
card.addWidget(PushButton('Open editor', card))
card.setCardBackgroundColor('#eef6fc', '#293036')
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [CardWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/card_widget.h)

```cpp
#include <components/widgets/card_widget.h>

auto* card = new qfw::CardWidget(parent);
card->setFixedSize(360, 160);
```

### C++ [SimpleCardWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/card_widget.h)

```cpp
#include <components/widgets/card_widget.h>

auto* card = new qfw::SimpleCardWidget(parent);
card->setFixedSize(360, 160);
```

### C++ [ElevatedCardWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/card_widget.h)

```cpp
#include <components/widgets/card_widget.h>

auto* card = new qfw::ElevatedCardWidget(parent);
card->setFixedSize(360, 160);
```

### C++ [HeaderCardWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/card_widget.h)

```cpp
#include <components/widgets/card_widget.h>

auto* card = new qfw::HeaderCardWidget(parent);
card->setFixedSize(360, 160);
card->setTitle(QStringLiteral("Settings"));
```

### C++ [GroupHeaderCardWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/card_widget.h)

```cpp
#include <components/widgets/card_widget.h>

auto* card = new qfw::GroupHeaderCardWidget(parent);
card->setFixedSize(360, 160);
card->setTitle(QStringLiteral("Settings"));
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `DashboardCardWidget`

</template>
</LanguageTabs>
