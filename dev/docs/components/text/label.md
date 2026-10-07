---
title: Label
date: 2024-02-27 13:34:00
permalink: /pages/components/label/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [FluentLabelBase](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.FluentLabelBase)

![FluentLabel](/img/components/label/FluentLabel.png)

`FluentLabelBase` is used to display text and can switch text color according to the theme. This is an abstract class, and its subclasses are typically used:
* CaptionLabel
* BodyLabel
* StrongBodyLabel
* SubtitleLabel
* TitleLabel
* LargeTitleLabel
* DisplayLabel

You can customize the color of the label:
```python
label = BodyLabel("Label")
label.setTextColor(QColor(0, 255, 0), QColor(255, 0, 0))  # Light theme, dark theme
```

### [HyperlinkLabel](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.HyperlinkLabel)

![HyperlinkLabel](/img/components/label/HyperlinkLabel.png)

`HyperlinkLabel` can automatically jump to the specified link when clicked.

```python
label = HyperlinkLabel(QUrl('https://github.com/'), 'GitHub')

# Show underline
hyperlinkLabel.setUnderlineVisible(True)

# Change hyperlink
label.setUrl('https://github.com/zhiyiYo/')
print(label.url)
```

### [Watermark](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/watermark.py)

A text watermark overlay with configurable angle, opacity and spacing, without intercepting mouse events.

The watermark follows its target size and lets mouse events pass through. Pass the content widget as parent to cover only that area.

```python
from qfluentwidgets_pro import Watermark

self.watermark = Watermark('Fairy Oracle Sanctuary', self)
self.watermark.setAngle(-15)
self.watermark.setOpacity(0.12)
self.watermark.setSpacing(80, 60)
self.watermark.show()
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [FluentLabelBase](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/label.h)

This example uses the C++ `BodyLabel` class, whose name or usage differs from Python.

```cpp
#include <components/widgets/label.h>

auto* label = new qfw::BodyLabel(QStringLiteral("Body text"), parent);
label->setTextInteractionFlags(Qt::TextSelectableByMouse);
```

### C++ [HyperlinkLabel](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/label.h)

```cpp
#include <components/widgets/label.h>

auto* label = new qfw::HyperlinkLabel(QStringLiteral("https://fairy.ora-san.org/"), QStringLiteral("Visit website"), parent);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `Watermark`

</template>
</LanguageTabs>
