---
title: Progress Ring
date: 2024-02-27 13:34:00
permalink: /pages/components/progressring/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ProgressRing](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.ProgressRing)

![ProgressRing](/img/components/progressring/ProgressRing.png)

`ProgressRing` is a circular progress bar that can be used to represent processing progress or as a dashboard, its usage is similar to [ProgressBar](/zh/pages/components/progressbar).

```python
ring = ProgressRing()

# Set the range and current value of the progress ring
ring.setRange(0, 100)
ring.setValue(30)

# Display text inside the progress ring
ring.setTextVisible(True)

# Adjust the size of the progress ring
ring.setFixedSize(80, 80)

# Adjust thickness
ring.setStrokeWidth(4)
```

Adjust the text format of the progress ring, for example, to display temperature:
```python
ring.setFormat("%v℃")
```

### [IndeterminateProgressRing](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.IndeterminateProgressRing)

`IndeterminateProgressRing` is used to indicate that the application is performing an operation, but the completion time of this operation is unknown.

```python
spinner = IndeterminateProgressRing()

# Adjust the size
spinner.setFixedSize(50, 50)

# Adjust thickness
spinner.setStrokeWidth(4)
```


### [MultiSegmentProgressRing](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_ring.py)

![MultiSegmentProgressRing](/img/components/progressring/MultiSegmentProgressRing.png)

`MultiSegmentProgressRing` supports displaying different progress states in segments, making it suitable for scenarios such as storage space visualization.

```python
from PySide6.QtGui import QColor
from qfluentwidgets_pro import MultiSegmentProgressRing

ring = MultiSegmentProgressRing()
ring.setFixedSize(120, 120)
ring.setSegments([
    (0.45, QColor('#0078d4')),
    (0.30, QColor('#16c79a')),
    (0.25, QColor('#ffc857')),
])
ring.setText('Storage')
```

### [RadialGauge](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_ring.py)

![RadialGauge](/img/components/progressring/RadialGauge.png)

`RadialGauge` can be used to display a range of data, such as speed, progress, or other measurements that can be represented by angles.

```python
from qfluentwidgets_pro import RadialGauge

gauge = RadialGauge()
gauge.setFixedSize(120, 120)
gauge.setRange(0, 100)
gauge.setValue(65)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ProgressRing](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/progress_ring.h)

```cpp
#include <components/widgets/progress_ring.h>

auto* progress = new qfw::ProgressRing(parent);
progress->setRange(0, 100);
progress->setValue(40);
progress->setFixedSize(64, 64);
```

### C++ [IndeterminateProgressRing](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/progress_ring.h)

```cpp
#include <components/widgets/progress_ring.h>

auto* progress = new qfw::IndeterminateProgressRing(parent);
progress->start();
// Call progress->stop() when the operation completes.
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `MultiSegmentProgressRing`
- `RadialGauge`

</template>
</LanguageTabs>

