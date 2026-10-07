---
title: 列表控件
date: 2024-02-27 20:23:00
permalink: /zh/pages/components/listview/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ListWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListWidget)

![ListWidget](/img/components/listview/ListView.png)

`ListWidget` 提供了一个列表，用户可以在这个列表中选择一个或多个项，这个类的用法和 `QListWidget` 完全相同。

```python
listWidget = ListWidget()

stands = [
    '白金之星', '绿色法皇', "天堂制造", "绯红之王",
    '银色战车', '疯狂钻石', "壮烈成仁", "败者食尘",
    "隐者之紫", "黄金体验", "虚无之王", "纸月之王",
    "骇人恶兽", "男子领域", "华丽挚爱", "牙 Act 4",
    "铁球破坏者", "性感手枪", 'D4C • 爱之列车', "天生完美",
    "软又湿", "佩斯利公园", "奇迹于你", "行走的心",
    "护霜旅行者", "十一月雨", "调情圣手", "片刻静候"
]

# 添加列表项
for stand in stands:
    item = QListWidgetItem(stand)
    item.setIcon(QIcon(':/qfluentwidgets/images/logo.png'))
    listWidget.addItem(item)
```

默认情况下，右键单击某个列表项时不会更新该列的选中状态，如需立即选中可调用下述方法：
```python
listWidget.setSelectRightClickedRow(True)
```

### [ListView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/list_view/index.html#qfluentwidgets.components.widgets.list_view.ListView)

`ListView` 用于展示模型中的数据，使用方法和 `QListView` 完全相同。


### [RoundListWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

![RoundListWidget](/img/components/listview/RoundListView.png)

`RoundListWidget` 用法和 `QListWidget` 完全相同。

```python
from qfluentwidgets_pro import RoundListWidget

listWidget = RoundListWidget()
listWidget.addItems(['Python', 'C++', 'Rust'])
listWidget.setCurrentRow(0)
listWidget.currentTextChanged.connect(lambda text: print(text))
```

### [RoundListView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

`RoundListView` 用法和 `QListWidget` 完全相同。

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

`TransparentRoundListWidget` 用法和 `QListWidget` 完全相同。

```python
from qfluentwidgets_pro import TransparentRoundListWidget

listWidget = TransparentRoundListWidget()
listWidget.addItems(['Python', 'C++', 'Rust'])
listWidget.setCurrentRow(0)
listWidget.currentTextChanged.connect(lambda text: print(text))
```

### [TransparentRoundListView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

`TransparentRoundListView` 用法和 `QListWidget` 完全相同。

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

`CategoryCardListWidget` 用法和 `QListWidget` 完全相同。

```python
from qfluentwidgets_pro import CategoryCardListWidget

listWidget = CategoryCardListWidget()
listWidget.addItems(['Python', 'C++', 'Rust'])
listWidget.setCurrentRow(0)
listWidget.currentTextChanged.connect(lambda text: print(text))
```

### [CategoryCardListView](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/list_view.py)

`CategoryCardListView` 用法和 `QListView` 完全相同。

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

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `RoundListWidget`
- `RoundListView`
- `TransparentRoundListWidget`
- `TransparentRoundListView`
- `CategoryCardListWidget`
- `CategoryCardListView`

</template>
</LanguageTabs>

