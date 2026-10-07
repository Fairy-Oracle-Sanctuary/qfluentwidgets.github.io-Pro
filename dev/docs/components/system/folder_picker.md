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

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `DropSingleFolderWidget`
- `DropMultiFoldersWidget`

</template>
</LanguageTabs>

