---
title: Table View
date: 2024-02-27 20:23:00
permalink: /pages/components/tableview/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [TableWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableWidget)

![TableWidget](/img/components/tableview/TableView.png)

`TableWidget` provides a table view where users can view and edit data. This component is often used to display and edit structured data, such as a spreadsheet or a database query result. The usage of this class is completely the same as `QTableWidget`.

```python
table = TableWidget(self)

# Enable border and set rounded corners
table.setBorderVisible(True)
table.setBorderRadius(8)

table.setWordWrap(False)
table.setRowCount(3)
table.setColumnCount(5)

# Add table data
songInfos = [
    ['シアワセ', 'aiko', '秘密', '2008', '5:25'],
    ['なんでもないや', 'RADWIMPS', '君の名は。', '2016', '3:16'],
    ['恋をしたのは', 'aiko', '恋をしたのは', '2016', '6:02'],
]
for i, songInfo in enumerate(songInfos):
    for j in range(5):
        table.setItem(i, j, QTableWidgetItem(songInfo[j]))

# Set horizontal header and hide vertical header
table.setHorizontalHeaderLabels(['Title', 'Artist', 'Album', 'Year', 'Duration'])
table.verticalHeader().hide()
```

By default, right-clicking an item in the list does not update the selected state of the row. If you need to select it immediately, you can call the following method:
```python
table.setSelectRightClickedRow(True)
```

When the monitor's resolution is high, smooth scrolling may cause the table to lag. In this case, you can disable smooth scrolling.


```python
table.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```



### [TableView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableView)

The usage of `TableView` is completely the same as `QTableView`.


### [RoundTableWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/table_view.py)

![RoundTableWidget](/img/components/tableview/RoundTableView.png)

The usage of `RoundTableWidget` is exactly the same as `QTableWidget`.

```python
from PySide6.QtWidgets import QTableWidgetItem
from qfluentwidgets_pro import RoundTableWidget

tableWidget = RoundTableWidget()
tableWidget.setColumnCount(2)
tableWidget.setRowCount(2)
tableWidget.setHorizontalHeaderLabels(['Name', 'Value'])
tableWidget.setItem(0, 0, QTableWidgetItem('Python'))
tableWidget.setItem(0, 1, QTableWidgetItem('3.9'))
tableWidget.setItem(1, 0, QTableWidgetItem('Qt'))
tableWidget.setItem(1, 1, QTableWidgetItem('6'))
```

### [RoundTableView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/table_view.py)

The usage of `RoundTableView` is exactly the same as `QTableView`.

```python
from PySide6.QtGui import QStandardItem, QStandardItemModel
from qfluentwidgets_pro import RoundTableView

tableView = RoundTableView()
model = QStandardItemModel(tableView)
model.setHorizontalHeaderLabels(['Name', 'Value'])
model.appendRow([QStandardItem('Python'), QStandardItem('3.9')])
model.appendRow([QStandardItem('Qt'), QStandardItem('6')])
tableView.setModel(model)
```

### [LineTableWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/table_view.py)

![LineTableWidget](/img/components/tableview/LineTableView.png)

The usage of `LineTableWidget` is exactly the same as `QTableWidget`.

```python
from PySide6.QtWidgets import QTableWidgetItem
from qfluentwidgets_pro import LineTableWidget

tableWidget = LineTableWidget()
tableWidget.setColumnCount(2)
tableWidget.setRowCount(2)
tableWidget.setHorizontalHeaderLabels(['Name', 'Value'])
tableWidget.setItem(0, 0, QTableWidgetItem('Python'))
tableWidget.setItem(0, 1, QTableWidgetItem('3.9'))
tableWidget.setItem(1, 0, QTableWidgetItem('Qt'))
tableWidget.setItem(1, 1, QTableWidgetItem('6'))
```

### [LineTableView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/table_view.py)

The usage of `LineTableView` is exactly the same as `QTableView`.

```python
from PySide6.QtGui import QStandardItem, QStandardItemModel
from qfluentwidgets_pro import LineTableView

tableView = LineTableView()
model = QStandardItemModel(tableView)
model.setHorizontalHeaderLabels(['Name', 'Value'])
model.appendRow([QStandardItem('Python'), QStandardItem('3.9')])
model.appendRow([QStandardItem('Qt'), QStandardItem('6')])
tableView.setModel(model)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [TableWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/table_view.h)

```cpp
#include <components/widgets/table_view.h>

auto* table = new qfw::TableWidget(parent);
table->setColumnCount(2);
table->setRowCount(1);
table->setHorizontalHeaderLabels({QStringLiteral("Name"), QStringLiteral("Value")});
table->setItem(0, 0, new QTableWidgetItem(QStringLiteral("Volume")));
table->setItem(0, 1, new QTableWidgetItem(QStringLiteral("50")));
```

### C++ [TableView](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/table_view.h)

```cpp
#include <components/widgets/table_view.h>

#include <QStandardItemModel>

auto* table = new qfw::TableView(parent);
auto* model = new QStandardItemModel(1, 2, table);
model->setHorizontalHeaderLabels({QStringLiteral("Name"), QStringLiteral("Value")});
model->setItem(0, 0, new QStandardItem(QStringLiteral("Volume")));
model->setItem(0, 1, new QStandardItem(QStringLiteral("50")));
table->setModel(model);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `RoundTableWidget`
- `RoundTableView`
- `LineTableWidget`
- `LineTableView`

</template>
</LanguageTabs>

