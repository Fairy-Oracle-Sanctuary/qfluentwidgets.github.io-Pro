---
title: Flow Layout
date: 2024-02-26 19:40:01
permalink: /pages/components/flowlayout/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [FlowLayout](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/layout/flow_layout/index.html)

![FlowLayout](/img/components/flowlayout/FlowLayout.png)

`FlowLayout` is able to adapt to the viewport width and automatically wraps when the internal components exceed the viewport width.

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        layout = FlowLayout(self, needAni=True)  # Enable animation

        # Custom animation parameters
        layout.setAnimation(250, QEasingCurve.OutQuad)

        layout.setContentsMargins(30, 30, 30, 30)
        layout.setVerticalSpacing(20)
        layout.setHorizontalSpacing(10)

        layout.addWidget(QPushButton('aiko'))
        layout.addWidget(QPushButton('Liu Jingai'))
        layout.addWidget(QPushButton('Liu Ai Zi'))
        layout.addWidget(QPushButton('aiko Dai Suki'))
        layout.addWidget(QPushButton('aiko too love 😘'))

        self.resize(250, 300)
```

In some situations, the components in a flow layout may overlap. The following method can be used to force a refresh of the layout:
```python
# Remove all widgets
flowLayout.removeAllWidgets()

# Re-add widgets
for w in widgets:
    flowLayout.addWidget(w)
```

### [WaterfallLayout](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/layout/waterfall_layout.py)

![WaterfallLayout](/img/components/flowlayout/WaterfallLayout.png)

`WaterfallLayout` is a type of page layout with multiple columns of equal width but varying height.

```python
from PySide6.QtWidgets import QWidget
from qfluentwidgets_pro import WaterfallLayout, CardWidget

view = QWidget()
layout = WaterfallLayout(view)
layout.setColumnWidth(160)
layout.setHorizontalSpacing(12)
layout.setVerticalSpacing(12)

for height in [100, 150, 80, 120]:
    card = CardWidget()
    card.setFixedHeight(height)
    layout.addWidget(card)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [FlowLayout](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/layout/flow_layout.h)

```cpp
#include <components/layout/flow_layout.h>

auto* container = new QWidget(parent);
auto* layout = new qfw::FlowLayout(container, true);
layout->setHorizontalSpacing(12);
layout->setVerticalSpacing(12);
layout->setAnimation(200, QEasingCurve::OutCubic);
for (int i = 0; i < 5; ++i) {
    layout->addWidget(new qfw::PushButton(QString::number(i + 1), container));
}
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `WaterfallLayout`

</template>
</LanguageTabs>

