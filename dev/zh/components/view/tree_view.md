---
title: 树状控件
date: 2024-02-27 21:07:00
permalink: /zh/pages/components/treeview/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [TreeWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeWidget)

![TreeWidget](/img/components/treeview/TreeWidget.png)

`TreeWidget` 用于展示具有父子关系的数据，使用方法和 `QTreeWidget` 完全相同。

```python
tree = TreeWidget()

# 添加子树
item1 = QTreeWidgetItem(['JoJo 1 - Phantom Blood'])
item1.addChildren([
    QTreeWidgetItem(['Jonathan Joestar']),
    QTreeWidgetItem(['Dio Brando']),
])
tree.addTopLevelItem(item1)

# 添加子树
item2 = QTreeWidgetItem(['JoJo 3 - Stardust Crusaders'])
item21 = QTreeWidgetItem(['Jotaro Kujo'])
item21.addChildren([
    QTreeWidgetItem(['空条承太郎']),
    QTreeWidgetItem(['空条蕉太狼']),
])
item2.addChild(item21)
tree.addTopLevelItem(item2)

# 隐藏表头
tree.setHeaderHidden(True)
tree.setFixedSize(300, 380)
```

当显示器的分辨率较高时，平滑滚动可能导致卡顿，这时候可以禁用平滑滚动：

```python
tree.scrollDelagate.verticalSmoothScroll.setSmoothMode(SmoothMode.NO_SMOOTH)
```


### [TreeView](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tree_view/index.html#qfluentwidgets.components.widgets.tree_view.TreeView)

`TreeView` 用于展示具有父子关系的数据，使用方法和 `QTreeView` 完全相同。

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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
