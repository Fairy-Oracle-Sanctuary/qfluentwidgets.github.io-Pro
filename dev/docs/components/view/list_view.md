---
title: List View
date: 2024-02-27 20:23:00
permalink: /pages/components/listview/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ListWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListWidget)

![ListWidget](/img/components/listview/ListView.png)

`ListWidget` provides a list where users can select one or more items. The usage of this class is completely the same as `QListWidget`.

```python
listWidget = ListWidget()

stands = [
    'Star Platinum', 'Green Emperor', "Heaven's Door", "King Crimson",
    'Silver Chariot', 'Crazy Diamond', "Killer Queen", "Dirty Deeds Done Dirt Cheap",
    "Hermit Purple", "Gold Experience", "The World", "King Nothing",
    "Scary Monsters", "Man's World", "Love Deluxe", "Tusk Act 4",
    "Ball Breaker", "Sex Pistols", 'D4C • Love Train', "Made in Heaven",
    "Soft & Wet", "Paisley Park", "Hey Ya!", "Walking Heart",
    "Frost Traveler", "November Rain", "Flirting Master", "Wait a Moment"
]

# Add list items
for stand in stands:
    item = QListWidgetItem(stand)
    item.setIcon(QIcon(':/qfluentwidgets/images/logo.png'))
    listWidget.addItem(item)
```

By default, right-clicking an item in the list does not update the selected state of the row. If you need to select it immediately, you can call the following method:
```python
listWidget.setSelectRightClickedRow(True)
```

### [ListView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListView)

`ListView` is used to display data in the model. The usage is completely the same as `QListView`.


### [RoundListWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

![RoundListWidget](/img/components/listview/RoundListView.png)

The usage of `RoundListWidget` is completely the same as `QListWidget`.

```python
from qfluentwidgets_pro import RoundListWidget

listWidget = RoundListWidget()
listWidget.addItems(['Python', 'C++', 'Rust'])
listWidget.setCurrentRow(0)
listWidget.currentTextChanged.connect(lambda text: print(text))
```

### [RoundListView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

The usage of `RoundListView` is completely the same as `QListView`.

```python
from PySide6.QtGui import QStandardItem, QStandardItemModel
from qfluentwidgets_pro import RoundListView

listView = RoundListView()
model = QStandardItemModel(listView)
for text in ['Python', 'C++', 'Rust']:
    model.appendRow(QStandardItem(text))
listView.setModel(model)
listView.setCurrentIndex(model.index(0, 0))
```

### [TransparentRoundListWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

![TransparentRoundListWidget](/img/components/listview/TransparentRoundListView.png)

The usage of `TransparentRoundListWidget` is completely the same as `QListWidget`.

```python
from qfluentwidgets_pro import TransparentRoundListWidget

listWidget = TransparentRoundListWidget()
listWidget.addItems(['Python', 'C++', 'Rust'])
listWidget.setCurrentRow(0)
listWidget.currentTextChanged.connect(lambda text: print(text))
```

### [TransparentRoundListView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

The usage of `TransparentRoundListView` is completely the same as `QListView`.

```python
from PySide6.QtGui import QStandardItem, QStandardItemModel
from qfluentwidgets_pro import TransparentRoundListView

listView = TransparentRoundListView()
model = QStandardItemModel(listView)
for text in ['Python', 'C++', 'Rust']:
    model.appendRow(QStandardItem(text))
listView.setModel(model)
listView.setCurrentIndex(model.index(0, 0))
```

### [CategoryCardListWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

![CategoryCardListWidget](/img/components/listview/CategoryCardListView.png)

The usage of `CategoryCardListWidget` is completely the same as `QListWidget`.

```python
from qfluentwidgets_pro import CategoryCardListWidget

listWidget = CategoryCardListWidget()
listWidget.addItems(['Python', 'C++', 'Rust'])
listWidget.setCurrentRow(0)
listWidget.currentTextChanged.connect(lambda text: print(text))
```

### [CategoryCardListView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

The usage of `CategoryCardListView` is completely the same as `QListView`.

```python
from PySide6.QtGui import QStandardItem, QStandardItemModel
from qfluentwidgets_pro import CategoryCardListView

listView = CategoryCardListView()
model = QStandardItemModel(listView)
for text in ['Python', 'C++', 'Rust']:
    model.appendRow(QStandardItem(text))
listView.setModel(model)
listView.setCurrentIndex(model.index(0, 0))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ListWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/list_view.h)

```cpp
#include <components/widgets/list_view.h>

auto* list = new qfw::ListWidget(parent);
list->addItems({QStringLiteral("First"), QStringLiteral("Second")});
list->setCurrentRow(0);
```

### C++ [ListView](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/list_view.h)

```cpp
#include <components/widgets/list_view.h>

#include <QStandardItemModel>

auto* view = new qfw::ListView(parent);
auto* model = new QStandardItemModel(view);
model->appendRow(new QStandardItem(QStringLiteral("First")));
view->setModel(model);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `RoundListWidget`
- `RoundListView`
- `TransparentRoundListWidget`
- `TransparentRoundListView`
- `CategoryCardListWidget`
- `CategoryCardListView`

</template>
</LanguageTabs>

