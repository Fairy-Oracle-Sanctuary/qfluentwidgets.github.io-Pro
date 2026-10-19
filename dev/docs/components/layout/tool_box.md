---
title: Tool box
date: 2026-10-07 12:00:00
permalink: /pages/components/toolbox/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ToolBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/tool_box.py)

![ToolBox](/img/components/python/ToolBox.png)

An animated tool box with at most one expanded item. Set the current index to -1 to collapse all items.

```python
from qfluentwidgets_pro import ToolBox, BodyLabel

toolBox = ToolBox()
toolBox.setFixedWidth(420)
toolBox.addItem(BodyLabel('Blend settings'), 'Blend')
toolBox.addItem(BodyLabel('Color settings'), 'Color')
toolBox.addItem(BodyLabel('Sharpness settings'), 'Sharpness')
toolBox.setAnimationDuration(200)
toolBox.setCurrentIndex(0)
toolBox.currentChanged.connect(lambda index: print(index))
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

### C++ [ToolBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tool_box.h)

![ToolBox](/img/components/python/ToolBox.png)

```cpp
#include <components/widgets/tool_box.h>
auto* widget = new qfw::ToolBox(parent);
widget->addItem(new QWidget(widget), QStringLiteral("General"));
widget->addItem(new QWidget(widget), QStringLiteral("Advanced"));
widget->setCurrentIndex(0);
```

</template>
</LanguageTabs>
