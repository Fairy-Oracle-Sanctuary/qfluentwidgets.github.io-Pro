---
title: 快捷键选择器
date: 2024-02-26 16:55:01
permalink: /zh/pages/components/shortcutpicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ShortcutPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/shortcut_picker.py)

![ShortcutPicker](/img/components/shortcutpicker/ShortcutPicker.png)

`ShortcutPicker` 用于捕获用户按下的快捷键。

```python
from qfluentwidgets_pro import ShortcutPicker

picker = ShortcutPicker('Ctrl+Shift+A')
picker.setDefaultKeySequence('Ctrl+Shift+A')
picker.keySequenceChanged.connect(lambda keys: print(keys.toString()))
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

### C++ [ShortcutPicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/shortcut_picker.h)

![ShortcutPicker](/img/components/shortcutpicker/ShortcutPicker.png)

```cpp
#include <components/widgets/shortcut_picker.h>
auto* widget = new qfw::ShortcutPicker(parent);
widget->setKeySequence(QKeySequence(QStringLiteral("Ctrl+Shift+P")));
```

</template>
</LanguageTabs>

