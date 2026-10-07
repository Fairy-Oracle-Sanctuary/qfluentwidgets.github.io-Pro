---
title: Combo Box
date: 2024-02-25 19:15:01
permalink: /pages/components/combobox/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

## [ComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.ComboBox)

![Combo box](/img/components/combobox/ComboBox.png)

When there are too many options, use a drop-down box to display and select content. `ComboBox` inherits from `PushButton` and reimplements most of the `QComboBox` interfaces.

```python
comboBox = ComboBox()

# Add options
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# Signal of current option index change
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

Each option can be bound to data:
```python
comboBox.addItem('leetcode', userData="Sword Pointing to Offer")

# The index corresponding to "leetcode" is 4, and the return value is "Sword Pointing to Offer"
comboBox.itemData(4)
```

After adding options, the first option is selected by default. To deselect:
```python
# Set placeholder text
comboBox.setPlaceholderText("Choose a character")

# Deselect
comboBox.setCurrentIndex(-1)
```

## [ModelComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.model_combo_box.ModelComboBox)

The usage of `ModelComboBox` is exactly the same as `ComboBox`, and it supports setting a custom data model (which must be a subclass of `QAbstractItemModel`), thereby achieving two-way binding between data and the interface.

```python
comboBox = ModelComboBox()

# create data model
model = QStandardItemModel()
model.appendRow(QStandardItem("Item 1"))
model.appendRow(QStandardItem("Item 2"))
model.appendRow(QStandardItem("Item 3"))

# use the data model
comboBox.setModel(model)
```

## [EditableComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.combo_box.EditableComboBox)

![Editable combo box](/img/components/combobox/EditableComboBox.png)

`EditableComboBox` allows users to edit the current option, and pressing enter can add new options. This class inherits from `LineEdit`, and options also cannot be added in Designer.

```python
comboBox = EditableComboBox()

# Add options
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
comboBox.addItems(items)

# Signal of current option index change
comboBox.currentIndexChanged.connect(lambda index: print(comboBox.currentText()))
```

Setting completion suggestions:
```python
# Create a completer
items = ['shoko', '西宫硝子', '宝多六花', '小鸟游六花']
completer = QCompleter(items, comboBox)

# Set the number of options displayed
completer.setMaxVisibleItems(10)

# Set the completer
comboBox.setCompleter(completer)
```

## [EditableModelComboBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/combo_box/index.html#qfluentwidgets.components.widgets.model_combo_box.EditableModelComboBox)

The usage of `EditableModelComboBox` is exactly the same as `EditableComboBox`, and it supports setting a custom data model (which must be a subclass of `QAbstractItemModel`), thereby achieving two-way binding between data and the interface.

```python
comboBox = EditableModelComboBox()

# create data model
model = QStandardItemModel()
model.appendRow(QStandardItem("Item 1"))
model.appendRow(QStandardItem("Item 2"))
model.appendRow(QStandardItem("Item 3"))

# use the data model
comboBox.setModel(model)
```

## [MultiSelectionComboBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/combo_box.py)

![MultiSelectionComboBox](/img/components/combobox/MultiSelectionComboBox.png)

`MultiSelectionComboBox` is used for selecting multiple options at the same time, which are displayed as tags in the dropdown box.

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

`TreeComboBox` allows users to browse and select data in a hierarchical manner.

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

`MultiSelectionTreeComboBox` allows users to browse data hierarchically and select multiple items simultaneously, displaying the selected options as tags within the dropdown box.

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

`TransparentComboBox` is a dropdown box with a transparent background, allowing for customization of the current selection's color.

> The upstream description and screenshot are retained here. This fork does not yet implement `TransparentComboBox`, so no runnable example is provided.

## [FontComboBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/combo_box.py)

![FontComboBox](/img/components/combobox/FontComboBox.png)

`FontComboBox` lists all the system's available fonts for user selection.

```python
from PySide6.QtGui import QFont
from qfluentwidgets_pro import FontComboBox

comboBox = FontComboBox()
comboBox.setCurrentFont(QFont('Segoe UI', 12))
comboBox.currentFontChanged.connect(lambda font: print(font.family()))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `MultiSelectionComboBox`
- `TreeComboBox`
- `MultiSelectionTreeComboBox`
- `TransparentComboBox`
- `FontComboBox`

</template>
</LanguageTabs>

