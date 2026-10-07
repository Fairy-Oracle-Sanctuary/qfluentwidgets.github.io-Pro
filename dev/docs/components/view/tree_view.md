---
title: Tree View
date: 2024-02-27 21:07:00
permalink: /pages/components/treeview/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [TreeWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeWidget)

![TreeWidget](/img/components/treeview/TreeWidget.png)

`TreeWidget` is used to display data with parent-child relationships. The usage of this class is completely the same as `QTreeWidget`.

```python
tree = TreeWidget()

# Add subtree
item1 = QTreeWidgetItem(['JoJo 1 - Phantom Blood'])
item1.addChildren([
    QTreeWidgetItem(['Jonathan Joestar']),
    QTreeWidgetItem(['Dio Brando']),
])
tree.addTopLevelItem(item1)

# Add subtree
item2 = QTreeWidgetItem(['JoJo 3 - Stardust Crusaders'])
item21 = QTreeWidgetItem(['Jotaro Kujo'])
item21.addChildren([
    QTreeWidgetItem(['Kujo Jotaro']),
    QTreeWidgetItem(['Kujo Jolyne']),
])
item2.addChild(item21)
tree.addTopLevelItem(item2)

# Hide header
tree.setHeaderHidden(True)
tree.setFixedSize(300, 380)
```

When the monitor's resolution is high, smooth scrolling may cause the tree to lag. In this case, you can disable smooth scrolling.

```python
tree.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```

### [TreeView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeView)

`TreeView` is used to display data with parent-child relationships. The usage of this class is completely the same as `QTreeView`.

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [TreeWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tree_view.h)

```cpp
#include <components/widgets/tree_view.h>

auto* tree = new qfw::TreeWidget(parent);
auto* root = new QTreeWidgetItem(tree, {QStringLiteral("Root")});
new QTreeWidgetItem(root, {QStringLiteral("Child")});
tree->setHeaderHidden(true);
tree->expandAll();
```

### C++ [TreeView](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tree_view.h)

```cpp
#include <components/widgets/tree_view.h>

#include <QStandardItemModel>

auto* tree = new qfw::TreeView(parent);
auto* model = new QStandardItemModel(tree);
auto* root = new QStandardItem(QStringLiteral("Root"));
root->appendRow(new QStandardItem(QStringLiteral("Child")));
model->appendRow(root);
tree->setModel(model);
tree->setHeaderHidden(true);
```

</template>
</LanguageTabs>
