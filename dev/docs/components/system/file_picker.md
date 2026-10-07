---
title: File Picker
date: 2024-03-05 23:14:01
permalink: /pages/components/filepicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [DropSingleFileWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropSingleFileWidget](/img/components/filepicker/DropSingleFileWidget.png)

`DropSingleFileWidget` allows you to drag and drop or open a file dialog to select a file of a specified format.

```python
from qfluentwidgets_pro import DropSingleFileWidget

dropWidget = DropSingleFileWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.setFileFilter('Text files (*.txt)')
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

### [DropMultiFilesWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropMultiFilesWidget](/img/components/filepicker/DropMultiFilesWidget.png)

`DropMultiFilesWidget` allows you to drag and drop or open a file dialog to select multiple files of a specified format.

```python
from qfluentwidgets_pro import DropMultiFilesWidget

dropWidget = DropMultiFilesWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.setFileExtensions('*.txt', 'Text files')
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

### [DropAnyWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

A drop area for files and folders, also supporting click-to-select.

```python
from qfluentwidgets_pro import DropAnyWidget

dropWidget = DropAnyWidget()
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

- `DropSingleFileWidget`
- `DropMultiFilesWidget`
- `DropAnyWidget`

</template>
</LanguageTabs>
