---
title: Splitter
date: 2026-10-07 12:00:00
permalink: /pages/components/splitter/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [Splitter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/splitter.py)

![Splitter](/img/components/python/Splitter.png)

Works like `QSplitter`, with a draggable handle for resizing child widgets.

```python
from PySide6.QtCore import Qt
from qfluentwidgets_pro import Splitter, TextEdit

splitter = Splitter(Qt.Horizontal)
splitter.addWidget(TextEdit())
splitter.addWidget(TextEdit())
splitter.setSizes([240, 360])
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

### C++ [Splitter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/splitter.h)

![Splitter](/img/components/python/Splitter.png)

```cpp
#include <components/widgets/splitter.h>
auto* widget = new qfw::Splitter(parent);
widget->addWidget(new qfw::TextEdit(widget));
widget->addWidget(new qfw::TextEdit(widget));
widget->setSizes({300, 300});
```

</template>
</LanguageTabs>
