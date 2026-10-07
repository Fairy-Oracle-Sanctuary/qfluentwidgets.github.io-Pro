---
title: Top Navigation Bar
date: 2024-02-26 19:56:01
permalink: /pages/components/topnavigationbar/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [Pivot](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.Pivot)

![Pivot](/img/components/topnavigationbar/Pivot.png)

The `Pivot` widget supports switching between a set of tab items, with an underline appearing under the selected tab item.

You can add tab items through `addItem()`, each tab item needs to be bound to a globally unique `routeKey`. The return value is a [PivotItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.PivotItem) instance.
```python
pivot = Pivot()

# Add tab items
pivot.addItem(routeKey="songInterface", text="Song", onClick=lambda: print("Song"))
pivot.addItem(routeKey="albumInterface", text="Album", onClick=lambda: print("Album"))
pivot.addItem(routeKey="artistInterface", text="Artist", onClick=lambda: print("Artist"))

# Set the current tab item
pivot.setCurrentItem("albumInterface")

# Get the current tab item
print(pivot.currentItem())
```

The top navigation bar is often used with `QStackedWidget`. When users click on different tab items, the current page will be switched.

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.pivot = Pivot(self)
        self.stackedWidget = QStackedWidget(self)
        self.vBoxLayout = QVBoxLayout(self)

        self.songInterface = QLabel('Song Interface', self)
        self.albumInterface = QLabel('Album Interface', self)
        self.artistInterface = QLabel('Artist Interface', self)

        # Add tabs
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # Connect signal and initialize the current tab
        self.stackedWidget.currentChanged.connect(self.onCurrentIndexChanged)
        self.stackedWidget.setCurrentWidget(self.songInterface)
        self.pivot.setCurrentItem(self.songInterface.objectName())

        self.vBoxLayout.setContentsMargins(30, 0, 30, 30)
        self.vBoxLayout.addWidget(self.pivot, 0, Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.resize(400, 400)

    def addSubInterface(self, widget: QLabel, objectName: str, text: str):
        widget.setObjectName(objectName)
        widget.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(widget)

        # Use the globally unique objectName as the route key
        self.pivot.addItem(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.pivot.setCurrentItem(widget.objectName())
```

### [SegmentedWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidget)

![SegmentedWidget](/img/components/topnavigationbar/SegmentedWidget.png)

The `SegmentedWidget` segmented navigation widget supports switching between a set of tab items. Its usage is exactly the same as [Pivot](#pivot), and the return value of `addItem()` is a [SegmentedItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidgetItem) instance.

### [SegmentedToolWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolWidget)

![SegmentedToolWidget](/img/components/topnavigationbar/SegmentedToolWidget.png)

The `SegmentedToolWidget` icon segmented navigation widget supports switching between a set of icon tab items.

You can add tab items through `addItem()`, each tab item needs to be bound to a globally unique `routeKey`. The return value is a [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolItem) instance.
```python
sw = SegmentedToolWidget()

# Add tab items
sw.addItem(routeKey="songInterface", icon=FluentIcon.TRANSPARENT, onClick=lambda: print("Song"))
sw.addItem(routeKey="albumInterface", icon=FluentIcon.CHECKBOX, onClick=lambda: print("Album"))
sw.addItem(routeKey="artistInterface", icon=FluentIcon.CONSTRACT, onClick=lambda: print("Artist"))

# Set the current tab item
sw.setCurrentItem("albumInterface")

# Get the current tab item
print(sw.currentItem())
```

### [SegmentedToggleToolWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolWidget)

![SegmentedToggleToolWidget](/img/components/topnavigationbar/SegmentedToggleToolWidget.png)

The usage of `SegmentedToggleToolWidget` is exactly the same as [SegmentedToolWidget](#segmentedtoolwidget), and the return value of `addItem()` is a [SegmentedToolItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolItem) instance.

### [TopNavigationBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/navigation/top_navigation_panel.py)

![TopNavigationBar](/img/components/topnavigationbar/TopNavigationBar.png)

`TopNavigationBar` provides top navigation functionality.

```python
from qfluentwidgets_pro import TopNavigationBar, FluentIcon

navigationBar = TopNavigationBar()
navigationBar.addItem('home', FluentIcon.HOME, 'Home',
                      onClick=lambda: print('home'))
navigationBar.addItem('settings', FluentIcon.SETTING, 'Settings',
                      onClick=lambda: print('settings'))
navigationBar.setCurrentItem('home')
```

### [MenuBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/menu_bar.py)

![MenuBar](/img/components/topnavigationbar/MenuBar.png)

`MenuBar` provides top menu navigation functionality.

```python
from PySide6.QtGui import QAction
from qfluentwidgets_pro import MenuBar

menuBar = MenuBar(self)
fileMenu = menuBar.addMenu('File(&F)')
fileMenu.addAction(QAction('Open', self, shortcut='Ctrl+O'))
fileMenu.addAction(QAction('Save', self, shortcut='Ctrl+S'))
menuBar.triggered.connect(lambda action: print(action.text()))
```

### [GuideWindow](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/window/guide_window.py)

![GuideWindow](/img/components/topnavigationbar/GuideWindow.png)

`GuideWindow` provides the guide step functionality.

Supply the content of each step and retain the window reference.

```python
from qfluentwidgets_pro import GuideWindow, BodyLabel

self.guideWindow = GuideWindow()
self.guideWindow.addPage(BodyLabel('Welcome'))
self.guideWindow.addPage(BodyLabel('Configuration'))
self.guideWindow.addPage(BodyLabel('Ready'))
self.guideWindow.finished.connect(lambda: print('finished'))
self.guideWindow.show()
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [Pivot](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/pivot.h)

```cpp
#include <components/navigation/pivot.h>

auto* pivot = new qfw::Pivot(parent);
pivot->addItem(QStringLiteral("first"), QStringLiteral("First"));
pivot->addItem(QStringLiteral("second"), QStringLiteral("Second"));
pivot->setCurrentItem(QStringLiteral("first"));
QObject::connect(pivot, &qfw::Pivot::currentItemChanged, parent, [](const QString& key) { qDebug() << key; });
```

### C++ [SegmentedWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/segmented_widget.h)

```cpp
#include <components/navigation/segmented_widget.h>

auto* pivot = new qfw::SegmentedWidget(parent);
pivot->addItem(QStringLiteral("first"), QStringLiteral("First"));
pivot->addItem(QStringLiteral("second"), QStringLiteral("Second"));
pivot->setCurrentItem(QStringLiteral("first"));
QObject::connect(pivot, &qfw::Pivot::currentItemChanged, parent, [](const QString& key) { qDebug() << key; });
```

### C++ [SegmentedToolWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/segmented_widget.h)

```cpp
#include <components/navigation/segmented_widget.h>

auto* bar = new qfw::SegmentedToolWidget(parent);
bar->addItem(QStringLiteral("add"), qfw::FluentIcon(qfw::FluentIconEnum::Add).qicon());
bar->addItem(QStringLiteral("home"), qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon());
bar->setCurrentItem(QStringLiteral("add"));
```

### C++ [SegmentedToggleToolWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/segmented_widget.h)

```cpp
#include <components/navigation/segmented_widget.h>

auto* bar = new qfw::SegmentedToggleToolWidget(parent);
bar->addItem(QStringLiteral("add"), qfw::FluentIcon(qfw::FluentIconEnum::Add).qicon());
bar->addItem(QStringLiteral("home"), qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon());
bar->setCurrentItem(QStringLiteral("add"));
```

### C++ [TopNavigationBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/navigation/top_navigation_interface.h)

This example uses the C++ `TopNavigationInterface` class, whose name or usage differs from Python.

```cpp
#include <components/navigation/top_navigation_interface.h>

#include <components/navigation/top_navigation_interface.h>

auto* navigation = new qfw::TopNavigationInterface(parent);
navigation->addItem(QStringLiteral("home"), qfw::FluentIcon(qfw::FluentIconEnum::Home).qicon(), QStringLiteral("Home"));
navigation->setCurrentItem(QStringLiteral("home"));
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `MenuBar`
- `GuideWindow`

</template>
</LanguageTabs>

