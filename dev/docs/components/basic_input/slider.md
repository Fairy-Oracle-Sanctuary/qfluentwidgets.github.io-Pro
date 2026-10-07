---
title: Slider
date: 2024-02-26 11:29:01
permalink: /pages/components/slider/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [Slider](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/slider/index.html#qfluentwidgets.components.widgets.slider.Slider)

![Slider](/img/components/slider/Slider.png)

`Slider` is used for selection within a fixed interval, and its usage is exactly the same as `QSlider`.

Horizontal slider:
```python
slider = Slider(Qt.Horizontal)
slider.setFixedWidth(200)

# Set the value range and current value
slider.setRange(0, 50)
slider.setValue(20)

# Get the current value
print(slider.value())
```

Vertical slider:
```python
Slider(Qt.Vertical)
```

### [ToolTipSlider](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/slider.py)

![ToolTipSlider](/img/components/slider/ToolTipSlider.png)

`ToolTipSlider` is a slider with a tooltip. Its usage is identical to the [Slider](#slider).

```python
from PySide6.QtCore import Qt
from qfluentwidgets_pro import ToolTipSlider

slider = ToolTipSlider(Qt.Horizontal)
slider.setRange(0, 100)
slider.setValue(45)
slider.valueChanged.connect(lambda value: print(value))
```

### [RangeSlider](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/slider.py)

![RangeSlider](/img/components/slider/RangeSlider.png)

`RangeSlider` is used to select a range of values.

```python
from PySide6.QtCore import Qt
from qfluentwidgets_pro import RangeSlider

slider = RangeSlider(Qt.Horizontal)
slider.setRange(0, 100)
slider.setValues(20, 80)
slider.rangeChanged.connect(lambda low, high: print(low, high))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [Slider](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/slider.h)

```cpp
#include <components/widgets/slider.h>

auto* slider = new qfw::Slider(Qt::Horizontal, parent);
slider->setRange(0, 100);
slider->setValue(40);
slider->setFixedWidth(260);
QObject::connect(slider, &QSlider::valueChanged, parent, [](int value) { qDebug() << value; });
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `ToolTipSlider`
- `RangeSlider`

</template>
</LanguageTabs>

