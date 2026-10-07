---
title: 文件选择器
date: 2024-03-05 23:14:01
permalink: /zh/pages/components/filepicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [DropSingleFileWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

![DropSingleFileWidget](/img/components/filepicker/DropSingleFileWidget.png)

`DropSingleFileWidget` 可拖拽或打开文件对话框来选择指定格式的文件。

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

`DropMultiFilesWidget` 可拖拽或打开文件对话框来选择指定格式的多个文件。

```python
from qfluentwidgets_pro import DropMultiFilesWidget

dropWidget = DropMultiFilesWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.setFileExtensions('*.txt', 'Text files')
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

### [DropAnyWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_widget.py)

接受文件和文件夹的拖放区域，也可以通过点击选择内容。

```python
from qfluentwidgets_pro import DropAnyWidget

dropWidget = DropAnyWidget()
dropWidget.setFixedSize(360, 140)
dropWidget.selectionChange.connect(lambda paths: print(paths))
dropWidget.draggedChange.connect(lambda paths: print(paths))
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `DropSingleFileWidget`
- `DropMultiFilesWidget`
- `DropAnyWidget`

</template>
</LanguageTabs>
