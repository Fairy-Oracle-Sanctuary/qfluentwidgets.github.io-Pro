---
title: Card Widget
date: 2024-07-24 14:22:00
permalink: /pages/components/cardwidget/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [CardWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.CardWidget)

![CardWidget](/img/components/cardwidget/CardWidget.png)

The `CardWidget` is a very flexible and useful UI design pattern that helps developers present various types of information and content in a structured and visually appealing way.

The card component is a container that can hold any type of widgets. Here is a simple example:

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

When user click the `CardWidget`, it will emit `clicked` signal:
```python
card = AppCard(
    icon=":/qfluentwidgets/images/logo.png",
    title="PyQt-Fluent-Widgets",
    content="Shokokawaii Inc."
)
card.clicked.connect(lambda: print("Card is clicked"))
```

The default border radius is 5px. To adjust to 8px:
```python
card.setBorderRadius(8)
```

### [SimpleCardWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.SimpleCardWidget)

`SimpleCardWidget` is the subclass of `CardWidget`, the only different between them is the background color of `SimpleCardWidget` won't change when mouse hovers or leaves.

### [ElevatedCardWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.ElevatedCardWidget)

![ElevatedCardWidget](/img/components/cardwidget/ElevatedCardWidget.png)

The `ElevatedCardWidget` is a card widget with a shadow effect, and the shadow radius gradually increases when the mouse hovers over the card.

Here is a simple usage example:

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


### [HeaderCardWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.HeaderCardWidget)

![HeaderCardWidget](/img/components/cardwidget/HeaderCardWidget.png)

The `HeaderCardWidget` is a card widget with a title, which can be used as an alternative to `QGroupBox`. It already has an internal layout, and you only need to add components to the horizontal layout `viewLayout`.

```python
class SystemRequirementCard(HeaderCardWidget):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle('System requirements')

        self.infoLabel = BodyLabel('This product is compatible with your device. The items with a checkmark symbol meet the system requirements of the developers.', self)
        self.successIcon = IconWidget(InfoBarIcon.SUCCESS, self)
        self.detailButton = HyperlinkLabel('See more', self)

        self.vBoxLayout = QVBoxLayout()
        self.hintLayout = QHBoxLayout()

        self.successIcon.setFixedSize(16, 16)
        self.hintLayout.setSpacing(10)
        self.vBoxLayout.setSpacing(16)
        self.hintLayout.setContentsMargins(0, 0, 0, 0)
        self.vBoxLayout.setContentsMargins(0, 0, 0, 0)

        self.hintLayout.addWidget(self.successIcon)
        self.hintLayout.addWidget(self.infoLabel)
        self.vBoxLayout.addLayout(self.hintLayout)
        self.vBoxLayout.addWidget(self.detailButton)

        self.viewLayout.addLayout(self.vBoxLayout)
```

### [GroupHeaderCardWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/card_widget/index.html#qfluentwidgets.components.widgets.card_widget.GroupHeaderCardWidget)

![GroupHeaderCardWidget](/img/components/cardwidget/GroupHeaderCardWidget.png)

The `GroupHeaderCardWidget` can be used to create a card with a grouped layout, where components are organized into sections. You just need to call `addGroup()` to add components to a new group, and the groups are placed in a vertical layout `vBoxLayout`.

```python
class SettinsCard(GroupHeaderCardWidget):

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setTitle("Basic settings")
        self.setBorderRadius(8)

        self.chooseButton = PushButton("Choose")
        self.comboBox = ComboBox()
        self.lineEdit = SearchLineEdit()

        self.hintIcon = IconWidget(InfoBarIcon.INFORMATION)
        self.hintLabel = BodyLabel("Click the Compile button to start 👉")
        self.compileButton = PrimaryPushButton(FluentIcon.PLAY_SOLID, "Compile")
        self.openButton = PushButton(FluentIcon.VIEW, "Open")
        self.bottomLayout = QHBoxLayout()

        self.chooseButton.setFixedWidth(120)
        self.lineEdit.setFixedWidth(320)
        self.comboBox.setFixedWidth(320)
        self.comboBox.addItems(["Always On", "Always Off"])
        self.lineEdit.setPlaceholderText("Enter the path of py script")

        # set up the layout of bottom toolbar
        self.hintIcon.setFixedSize(16, 16)
        self.bottomLayout.setSpacing(10)
        self.bottomLayout.setContentsMargins(24, 15, 24, 20)
        self.bottomLayout.addWidget(self.hintIcon, 0, Qt.AlignLeft)
        self.bottomLayout.addWidget(self.hintLabel, 0, Qt.AlignLeft)
        self.bottomLayout.addStretch(1)
        self.bottomLayout.addWidget(self.openButton, 0, Qt.AlignRight)
        self.bottomLayout.addWidget(self.compileButton, 0, Qt.AlignRight)
        self.bottomLayout.setAlignment(Qt.AlignVCenter)

        # add widgets to group
        self.addGroup("resource/Rocket.svg", "Build Directory", "Select the output directory for Nuitka", self.chooseButton)
        self.addGroup("resource/Joystick.svg", "Run Terminal", "Set whether to display the command line terminal", self.comboBox)
        group = self.addGroup("resource/Python.svg", "Entry Script", "Select the entry script of the application", self.lineEdit)
        group.setSeparatorVisible(True)

        # add bottom toolbar
        self.vBoxLayout.addLayout(self.bottomLayout)
```

### [DashboardCardWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/dashboard_card.py)

A dashboard card based on `SimpleCardWidget`, with an icon, title, description, switch and custom content.

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

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `DashboardCardWidget`

</template>
</LanguageTabs>
