---
title: 下拉框
date: 2024-02-25 19:15:01
permalink: /zh/pages/components/combobox/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

## [ComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.ComboBox)

![Combo box](/img/components/combobox/ComboBox.png)

当选项过多时，适合使用下拉框展示并选择内容。`ComboBox` 继承自 `PushButton`，重新实现了 `QComboBox` 的大部分接口。

```python
comboBox = ComboBox()

# 添加选项
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# 当前选项的索引改变信号
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

每个选项都可以绑定数据：
```python
comboBox.addItem('leetcode', userData="剑指 Offer")

# "leetcode" 对应的索引为 4，返回值为 "剑指 Offer"
comboBox.itemData(4)
```

添加选项之后默认选中第一个选项，如需取消选中：
```python
# 设置提示文本
comboBox.setPlaceholderText("选择一个脑婆")

# 取消选中
comboBox.setCurrentIndex(-1)
```

## [ModelComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.model_combo_box.ModelComboBox)

`ModelComboBox` 用法与 `ComboBox` 完全相同，并支持设置自定义数据模型（需要是 `QAbstractItemModel` 的子类），从而实现数据与界面的双向绑定。

```python
comboBox = ModelComboBox()

# 创建数据模型
model = QStandardItemModel()
model.appendRow(QStandardItem("Item 1"))
model.appendRow(QStandardItem("Item 2"))
model.appendRow(QStandardItem("Item 3"))

# 使用数据模型
comboBox.setModel(model)
```


## [EditableComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.EditableComboBox)

![Editable combo box](/img/components/combobox/EditableComboBox.png)

`EditableComboBox` 允许用户编辑当前选项，按下回车可添加新选项。这个类继承自 `LineEdit`，同样不能在 Designer 中添加选项。

```python
comboBox = EditableComboBox()

# 添加选项
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# 当前选项的索引改变信号
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

设置补全提示：
```python
# 创建补全器
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
completer = QCompleter(items, comboBox)

# 设置显示的选项数
completer.setMaxVisibleItems(10)

# 设置补全器
comboBox.setCompleter(completer)
```

## [EditableModelComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.model_combo_box.EditableModelComboBox)

`EditableModelComboBox` 用法与 `EditableComboBox` 完全相同，并支持设置自定义数据模型（需要是 `QAbstractItemModel` 的子类），从而实现数据与界面的双向绑定。

```python
comboBox = EditableModelComboBox()

# 创建数据模型
model = QStandardItemModel()
model.appendRow(QStandardItem("Item 1"))
model.appendRow(QStandardItem("Item 2"))
model.appendRow(QStandardItem("Item 3"))

# 使用数据模型
comboBox.setModel(model)
```

## [MultiSelectionComboBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/combo_box.py)

![MultiSelectionComboBox](/img/components/combobox/MultiSelectionComboBox.png)

`MultiSelectionComboBox` 用于同时选择多个选项，并以标签的形式展示在下拉框中。

```python
from qfluentwidgets_pro import MultiSelectionComboBox

comboBox = MultiSelectionComboBox()
comboBox.addItems(['Python', 'C++', 'Rust'])
comboBox.setChipsMode(True)
comboBox.setSelectedIndices({0, 2})
comboBox.selectedTextChanged.connect(lambda texts: print(texts))
```

## [TreeComboBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/tree_combo_box.py)

![TreeComboBox](/img/components/combobox/TreeComboBox.png)

`TreeComboBox` 它允许用户以层级方式浏览和选择数据。

```python
from qfluentwidgets_pro import TreeComboBox

comboBox = TreeComboBox()
group = comboBox.addItem('Languages')
items = comboBox.addItems(['Python', 'C++', 'Rust'], group)
comboBox.setCurrentModelIndex(items[0])
comboBox.currentTextChanged.connect(lambda text: print(text))
```

## [MultiSelectionTreeComboBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/tree_combo_box.py)

![MultiSelectionTreeComboBox](/img/components/combobox/MultiSelectionTreeComboBox.png)

`MultiSelectionTreeComboBox` 它允许用户以层级方式浏览和同时选择多个数据，并以标签的形式展示在下拉框中。

```python
from qfluentwidgets_pro import MultiSelectionTreeComboBox

comboBox = MultiSelectionTreeComboBox()
group = comboBox.addItem('Languages')
items = comboBox.addItems(['Python', 'C++', 'Rust'], group)
comboBox.setChipsMode(True)
comboBox.setSelectedIndexes(items[:2])
comboBox.selectedTextChanged.connect(lambda texts: print(texts))
```

## TransparentComboBox

![TransparentComboBox](/img/components/combobox/TransparentComboBox.png)

`TransparentComboBox` 是透明背景的下拉框，可以自定义当前选项的颜色。

> 此处保留上游组件介绍与截图；当前 fork 尚未实现 `TransparentComboBox`，暂不提供可运行的示例。

## [FontComboBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/combo_box.py)

![FontComboBox](/img/components/combobox/FontComboBox.png)

`FontComboBox` 列出了系统所有可用字体供用户选择。

```python
from PySide6.QtGui import QFont
from qfluentwidgets_pro import FontComboBox

comboBox = FontComboBox()
comboBox.setCurrentFont(QFont('Segoe UI', 12))
comboBox.currentFontChanged.connect(lambda font: print(font.family()))
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ComboBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/combo_box.h)

```cpp
#include <components/widgets/combo_box.h>

auto* combo = new qfw::ComboBox(parent);
combo->addItems({QStringLiteral("Alpha"), QStringLiteral("Beta"), QStringLiteral("Gamma")});
combo->setCurrentIndex(0);
combo->setFixedWidth(220);
QObject::connect(combo, &qfw::ComboBox::currentTextChanged, parent, [](const QString& text) { qDebug() << text; });
```

### C++ [ModelComboBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/model_combo_box.h)

```cpp
#include <components/widgets/model_combo_box.h>

auto* combo = new qfw::ModelComboBox(parent);
combo->addItems({QStringLiteral("Alpha"), QStringLiteral("Beta"), QStringLiteral("Gamma")});
combo->setCurrentIndex(0);
combo->setFixedWidth(220);
QObject::connect(combo, &qfw::ModelComboBox::currentTextChanged, parent, [](const QString& text) { qDebug() << text; });
```

### C++ [EditableComboBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/combo_box.h)

```cpp
#include <components/widgets/combo_box.h>

auto* combo = new qfw::EditableComboBox(parent);
combo->addItems({QStringLiteral("Alpha"), QStringLiteral("Beta"), QStringLiteral("Gamma")});
combo->setCurrentIndex(0);
combo->setFixedWidth(220);
QObject::connect(combo, &qfw::EditableComboBox::currentTextChanged, parent, [](const QString& text) { qDebug() << text; });
```

### C++ [EditableModelComboBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/model_combo_box.h)

```cpp
#include <components/widgets/model_combo_box.h>

auto* combo = new qfw::EditableModelComboBox(parent);
combo->addItems({QStringLiteral("Alpha"), QStringLiteral("Beta"), QStringLiteral("Gamma")});
combo->setCurrentIndex(0);
combo->setFixedWidth(220);
QObject::connect(combo, &qfw::EditableModelComboBox::currentTextChanged, parent, [](const QString& text) { qDebug() << text; });
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `MultiSelectionComboBox`
- `TreeComboBox`
- `MultiSelectionTreeComboBox`
- `TransparentComboBox`
- `FontComboBox`

</template>
</LanguageTabs>

