---
title: Breadcrumb Bar
date: 2024-02-26 19:56:01
permalink: /pages/components/breadcrumbbar/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [BreadcrumbBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/breadcrumb/index.html#qfluentwidgets.components.navigation.breadcrumb.BreadcrumbBar)

![BreadcrumbBar](/img/components/breadcrumbbar/BreadCrumbBar.png)

`BreadcrumbBar` serves as an auxiliary and supplementary navigation method. It allows users to know their location within the application and can easily return to their original location.

You can append a node to the right by using `addItem()`. When there are too many nodes to fit in the viewport, the nodes on the left will be folded into the menu:

```python
breadcrumb = BreadcrumbBar()
items = ["Home", "Documents", "Learning Materials", "Action Movies", "Ip Man"]
for item in items:
    # The first parameter is routeKey, which must be globally unique
    breadcrumb.addItem(item, item)
```

When the selected node changes, it will send `currentItemChanged(routeKey: str)` and `currentIndexChanged(index: int)` signals:
```python
breadcrumbBar.currentItemChanged.connect(lambda key: print(key))
```

Adjust the layout and font of the breadcrumb:
```python
qfluentwidgets.setFont(breadcrumbBar, 26)
breadcrumbBar.setSpacing(20)
```

The breadcrumb navigation bar is often used with `QStackedWidget`:

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.setStyleSheet('Demo{background:rgb(255,255,255)}')

        self.breadcrumbBar = BreadcrumbBar(self)
        self.stackedWidget = QStackedWidget(self)

        self.lineEdit = LineEdit(self)
        self.addButton = PrimaryToolButton(FluentIcon.SEND, self)

        self.vBoxLayout = QVBoxLayout(self)
        self.lineEditLayout = QHBoxLayout()

        # Add a new navigation item and sub-interface when the enter key is pressed or the button is clicked
        self.addButton.clicked.connect(lambda: self.addInterface(self.lineEdit.text()))
        self.lineEdit.returnPressed.connect(lambda: self.addInterface(self.lineEdit.text()))
        self.breadcrumbBar.currentItemChanged.connect(self.switchInterface)

        # Adjust the size of the breadcrumb navigation
        setFont(self.breadcrumbBar, 26)
        self.breadcrumbBar.setSpacing(20)
        self.lineEdit.setPlaceholderText('Enter the name of interface')

        # Add two navigation items
        self.addInterface('Home')
        self.addInterface('Documents')

        # Initialize layout
        self.vBoxLayout.setContentsMargins(20, 20, 20, 20)
        self.vBoxLayout.addWidget(self.breadcrumbBar)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.vBoxLayout.addLayout(self.lineEditLayout)

        self.lineEditLayout.addWidget(self.lineEdit, 1)
        self.lineEditLayout.addWidget(self.addButton)
        self.resize(500, 500)

    def addInterface(self, text: str):
        if not text:
            return

        w = SubtitleLabel(text)
        w.setObjectName(uuid1().hex)    # Use a randomly generated route key
        w.setAlignment(Qt.AlignCenter)

        self.lineEdit.clear()
        self.stackedWidget.addWidget(w)
        self.stackedWidget.setCurrentWidget(w)

        self.breadcrumbBar.addItem(w.objectName(), text)

    def switchInterface(self, objectName):
        self.stackedWidget.setCurrentWidget(self.findChild(SubtitleLabel, objectName))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [BreadcrumbBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/breadcrumb.h)

```cpp
#include <components/navigation/breadcrumb.h>

auto* bar = new qfw::BreadcrumbBar(parent);
bar->addItem(QStringLiteral("home"), QStringLiteral("Home"));
bar->addItem(QStringLiteral("settings"), QStringLiteral("Settings"));
bar->setCurrentItem(QStringLiteral("settings"));
QObject::connect(bar, &qfw::BreadcrumbBar::currentItemChanged, parent, [](const QString& key) { qDebug() << key; });
```

</template>
</LanguageTabs>
