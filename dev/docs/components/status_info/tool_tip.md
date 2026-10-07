---
title: Tool Tip
date: 2024-02-27 13:34:00
permalink: /pages/components/tooltip/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [ToolTipFilter](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/tool_tip/index.html#qfluentwidgets.components.widgets.tool_tip.ToolTipFilter)

![ToolTip](/img/components/tooltip/ToolTip.png)

`ToolTipFilter` is used to replace `QToolTip` with the `ToolTip` from the component library. Simply installing this filter on a widget can achieve the replacement.

```python
button = QPushButton('キラキラ')

button.setToolTip('aiko - キラキラ ✨')
button.setToolTipDuration(1000)

# Install the tooltip filter for the button
button.installEventFilter(ToolTipFilter(button, showDelay=300, position=ToolTipPosition.TOP))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ToolTipFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tool_tip.h)

```cpp
#include <components/widgets/tool_tip.h>

#include <components/widgets/tool_tip.h>

auto* button = new qfw::PushButton(QStringLiteral("Hover me"), parent);
button->setToolTip(QStringLiteral("A Fluent tooltip"));
button->installEventFilter(new qfw::ToolTipFilter(button, 300, qfw::ToolTipPosition::Top));
```

</template>
</LanguageTabs>
