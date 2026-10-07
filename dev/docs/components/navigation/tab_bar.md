---
title: Tab Bar
date: 2025-01-24 19:00:22
permalink: /pages/components/tabbar/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [TabBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabBar)

![TabBar](/img/components/tabbar/TabBar.png)

`TabBar` supports switching between a set of tabs and allows for dynamic addition and removal of tabs.

Tabs can be added using `addTab()`, and each tab item must be associated with a globally unique `routeKey`. The return value is an instance of [TabItem](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabItem).

```python
tabBar = TabBar()

# add tab item
tabBar.addTab(
    routeKey="songInfterface",
    text="Song",
    icon="/path/to/icon.png",
    onClick=lambda: print("Click")
)

# get current tab item
print(self.tabBar.currentTab())
```

Common signals of `TabBar` include:

* `currentChanged(index: int)`: Emitted when the currently selected tab is changed.
* `tabAddRequested`: Emitted when the `+` button is clicked, indicating a request to add a new tab.
* `tabCloseRequested(index: int)`: Emitted when the `×` button on a tab item is clicked, indicating a request to remove the tab.

`TabBar` is typically used toggether with `QStackedWidget`, allowing the current page to switch when users click on different tab items. Here is a simple example:

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.tabBar = TabBar(self)
        self.stackedWidget = QStackedWidget(self)
        self.vBoxLayout = QVBoxLayout(self)
        self.counter = 1

        self.songInterface = QLabel('Song Interface', self)
        self.albumInterface = QLabel('Album Interface', self)
        self.artistInterface = QLabel('Artist Interface', self)

        # add page
        self.addSubInterface(self.songInterface, 'songInterface', 'Song')
        self.addSubInterface(self.albumInterface, 'albumInterface', 'Album')
        self.addSubInterface(self.artistInterface, 'artistInterface', 'Artist')

        # connect signals to slots
        self.stackedWidget.currentChanged.connect(self.onCurrentIndexChanged)
        self.stackedWidget.setCurrentWidget(self.songInterface)
        self.tabBar.tabAddRequested.connect(self.onAddNewTab)
        self.tabBar.tabCloseRequested.connect(self.onCloseTab)

        self.vBoxLayout.setContentsMargins(30, 0, 30, 30)
        self.vBoxLayout.addWidget(self.tabBar, 0, Qt.AlignHCenter)
        self.vBoxLayout.addWidget(self.stackedWidget)
        self.resize(400, 400)

    def addSubInterface(self, widget: QLabel, objectName: str, text: str):
        widget.setObjectName(objectName)
        widget.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(widget)

        # use the unique objectName as route key
        self.tabBar.addTab(
            routeKey=objectName,
            text=text,
            onClick=lambda: self.stackedWidget.setCurrentWidget(widget)
        )

    def onCurrentIndexChanged(self, index):
        widget = self.stackedWidget.widget(index)
        self.tabBar.setCurrentTab(widget.objectName())

    def onAddNewTab(self):
        w = QLabel(f"Tab {self.counter}")
        self.addSubInterface(w, w.text(), w.text())
        self.counter += 1

    def onCloseTab(self, index: int):
        item = self.tabBar.tabItem(index)
        widget = self.findChild(QLabel, item.routeKey())
        self.stackedWidget.removeWidget(widget)
        self.tabBar.removeTab(index)
        widget.deleteLater()

```

### [TabWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tab_view/index.html#qfluentwidgets.components.widgets.tab_view.TabWidget)

![TabBar](/img/components/tabbar/TabBar.png)


The usage of `TabWidget` is the same as `QTabWidget`, while `TabWidget` uses `TabBar` internally.

```python
tabWidget = TabWidget()

# add pages
tabWidget.addTab(QLabel("Page 1"), "Page 1", QIcon("/path/to/icon.png"))
tabWidget.addTab(QLabel("Page 2"), "Page 2", QIcon("/path/to/icon.png"))

# set current page
tabWidget.setCurrentIndex(1)
```


### [RoundTabBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/round_tab_bar.py)

![RoundTabBar](/img/components/tabbar/RoundTabBar.png)

`RoundTabBar` supports switching between a set of tabs and allows for dynamic addition and removal of tabs.

```python
from qfluentwidgets_pro import RoundTabBar, FluentIcon

tabBar = RoundTabBar()
tabBar.setTabMaximumWidth(200)
tabBar.setMovable(True)
tabBar.addTab('song', 'Song', FluentIcon.MUSIC)
tabBar.addTab('album', 'Album', FluentIcon.ALBUM)
tabBar.setCurrentTab('song')
tabBar.tabCloseRequested.connect(tabBar.removeTab)
tabBar.tabAddRequested.connect(lambda: print('add tab'))
```

### [RoundTabWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/round_tab_widget.py)

![RoundTabWidget](/img/components/tabbar/RoundTabWidget.png)

The usage of `RoundTabWidget` is the same as `QTabWidget`, while `RoundTabWidget` uses `RoundTabBar` internally.

removeTab() removes a tab without deleting its page; call deleteLater() on pages you no longer need.

```python
from qfluentwidgets_pro import RoundTabWidget, BodyLabel

tabWidget = RoundTabWidget()
tabWidget.setTabMaximumWidth(240)
tabWidget.setMovable(True)
tabWidget.addTab(BodyLabel('Song interface'), 'Song')
tabWidget.addTab(BodyLabel('Album interface'), 'Album')
tabWidget.setCurrentIndex(0)
tabWidget.tabCloseRequested.connect(tabWidget.removeTab)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [TabBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tab_view.h)

```cpp
#include <components/widgets/tab_view.h>

auto* bar = new qfw::TabBar(parent);
bar->addTab(QStringLiteral("first"), QStringLiteral("First"));
bar->addTab(QStringLiteral("second"), QStringLiteral("Second"));
bar->setCurrentIndex(0);
bar->setMovable(true);
bar->setTabsClosable(true);
bar->setTabMaximumWidth(220);
QObject::connect(bar, &qfw::TabBar::tabCloseRequested, parent, [bar](int index) { bar->removeTab(index); });
```

### C++ [TabWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tab_view.h)

```cpp
#include <components/widgets/tab_view.h>

auto* tabs = new qfw::TabWidget(parent);
tabs->addTab(new QWidget(tabs), QStringLiteral("First"));
tabs->addTab(new QWidget(tabs), QStringLiteral("Second"));
tabs->setCurrentIndex(0);
tabs->setTabsClosable(true);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `RoundTabBar`
- `RoundTabWidget`

</template>
</LanguageTabs>

