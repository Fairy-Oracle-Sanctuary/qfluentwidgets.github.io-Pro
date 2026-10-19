---
title: Folder Picker
date: 2024-03-05 23:14:01
permalink: /pages/components/folderpicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [DropSingleFolderWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropSingleFolderWidget](/img/components/folderpicker/DropSingleFolderWidget.png)

`DropSingleFolderWidget` allows you to drag and drop or open a file dialog to select a folder.

```python
from qfluentwidgets_pro import DropSingleFolderWidget

dropWidget = DropSingleFolderWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

### [DropMultiFoldersWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropMultiFoldersWidget](/img/components/folderpicker/DropMultiFoldersWidget.png)

`DropMultiFoldersWidget` allows you to drag and drop or open a file dialog to select multiple folders.

```python
from qfluentwidgets_pro import DropMultiFoldersWidget

dropWidget = DropMultiFoldersWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

</template>
<template #cpp>

Images are shared with the corresponding Python components on this page for appearance reference. Use the examples below for the C++ APIs.


These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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

