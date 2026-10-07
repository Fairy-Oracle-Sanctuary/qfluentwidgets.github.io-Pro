---
title: 表格控件
date: 2024-02-27 20:23:00
permalink: /zh/pages/components/tableview/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [TableWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableWidget)

![TableWidget](/img/components/tableview/TableView.png)

`TableWidget` 提供了一个表格视图，用户可以在这个表格中查看和编辑数据。这个组件通常用于展示和编辑结构化的数据，例如一个电子表格或者一个数据库的查询结果。这个类的使用方式和 `QTableWidget` 完全相同。

```python
table = TableWidget(self)

# 启用边框并设置圆角
table.setBorderVisible(True)
table.setBorderRadius(8)

table.setWordWrap(False)
table.setRowCount(3)
table.setColumnCount(5)

# 添加表格数据
songInfos = [
    ['シアワセ', 'aiko', '秘密', '2008', '5:25'],
    ['なんでもないや', 'RADWIMPS', '君の名は。', '2016', '3:16'],
    ['恋をしたのは', 'aiko', '恋をしたのは', '2016', '6:02'],
]
for i, songInfo in enumerate(songInfos):
    for j in range(5):
        table.setItem(i, j, QTableWidgetItem(songInfo[j]))

# 设置水平表头并隐藏垂直表头
table.setHorizontalHeaderLabels(['Title', 'Artist', 'Album', 'Year', 'Duration'])
table.verticalHeader().hide()
```

默认情况下，右键单击某个列表项时不会更新该列的选中状态，如需立即选中可调用下述方法：
```python
table.setSelectRightClickedRow(True)
```

当显示器的分辨率较高时，平滑滚动可能导致表格卡顿，这时候可以禁用平滑滚动：

```python
table.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```



### [TableView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/table_view/index.html#qfluentwidgets.components.widgets.table_view.TableView)

`TableView` 使用方法和 `QTableView` 完全相同。


### [RoundTableWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/table_view.py)

![RoundTableWidget](/img/components/tableview/RoundTableView.png)

`RoundTableWidget` 用法和 `QTableWidget` 完全相同。

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

`RoundTableView` 用法和 `QTabelView` 完全相同。

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

`LineTableWidget` 用法和 `QTableWidget` 完全相同。

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

`LineTableView` 用法和 `QTabelView` 完全相同。

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

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `RoundTableWidget`
- `RoundTableView`
- `LineTableWidget`
- `LineTableView`

</template>
</LanguageTabs>

