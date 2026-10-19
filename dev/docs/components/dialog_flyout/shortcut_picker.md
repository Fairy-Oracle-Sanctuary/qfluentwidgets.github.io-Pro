---
title: Shortcut Picker
date: 2024-02-26 16:55:01
permalink: /pages/components/shortcutpicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ShortcutPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/shortcut_picker.py)

![ShortcutPicker](/img/components/shortcutpicker/ShortcutPicker.png)

`ShortcutPicker` is used to capture the shortcut keys pressed by the user.

```python
from qfluentwidgets_pro import ShortcutPicker

picker = ShortcutPicker('Ctrl+Shift+A')
picker.setDefaultKeySequence('Ctrl+Shift+A')
picker.keySequenceChanged.connect(lambda keys: print(keys.toString()))
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

### C++ [ShortcutPicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/shortcut_picker.h)

![ShortcutPicker](/img/components/shortcutpicker/ShortcutPicker.png)

```cpp
#include <components/widgets/shortcut_picker.h>
auto* widget = new qfw::ShortcutPicker(parent);
widget->setKeySequence(QKeySequence(QStringLiteral("Ctrl+Shift+P")));
```

</template>
</LanguageTabs>

