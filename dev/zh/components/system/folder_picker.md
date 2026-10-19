---
title: 文件夹选择器
date: 2024-03-05 23:14:01
permalink: /zh/pages/components/folderpicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [DropSingleFolderWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropSingleFolderWidget](/img/components/folderpicker/DropSingleFolderWidget.png)

`DropSingleFolderWidget` 可拖拽或打开文件对话框来选择一个文件夹。

```python
from qfluentwidgets_pro import DropSingleFolderWidget

dropWidget = DropSingleFolderWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

### [DropMultiFoldersWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropMultiFoldersWidget](/img/components/folderpicker/DropMultiFoldersWidget.png)

`DropMultiFoldersWidget` 可拖拽或打开文件对话框来选择多个文件夹。

```python
from qfluentwidgets_pro import DropMultiFoldersWidget

dropWidget = DropMultiFoldersWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

</template>
<template #cpp>

展示图复用本页对应 Python 组件的截图，供外观参考；C++ 的接口与用法以以下示例为准。


以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [DropSingleFolderWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/drop_widget.h)

![DropSingleFolderWidget](/img/components/folderpicker/DropSingleFolderWidget.png)

```cpp
#include <QDir>
#include <components/widgets/drop_widget.h>
auto* widget = new qfw::DropSingleFolderWidget(parent);
widget->setDefaultDir(QDir::homePath());
QObject::connect(widget, &qfw::DropMultiFilesWidget::selectionChange, widget, [](const QStringList& paths) { qDebug() << paths; });
```

### C++ [DropMultiFoldersWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/drop_widget.h)

![DropMultiFoldersWidget](/img/components/folderpicker/DropMultiFoldersWidget.png)

```cpp
#include <QDir>
#include <components/widgets/drop_widget.h>
auto* widget = new qfw::DropMultiFoldersWidget(parent);
widget->setDefaultDir(QDir::homePath());
QObject::connect(widget, &qfw::DropMultiFilesWidget::selectionChange, widget, [](const QStringList& paths) { qDebug() << paths; });
```

</template>
</LanguageTabs>

