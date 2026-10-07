---
title: Progress Button
date: 2024-02-27 13:34:00
permalink: /pages/components/progressbutton/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ProgressPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![ProgressPushButton](/img/components/progressbutton/ProgressPushButton.png)

`ProgressPushButton` adds progress functionality on top of a button, allowing for intuitive visualization of operation progress. This type of control is commonly used in scenarios requiring display of progress for time-consuming operations, such as file downloads or data processing.

The button does not perform downloads; update its progress from your task and call setProgressing(False) when it finishes.

```python
from qfluentwidgets_pro import ProgressPushButton

button = ProgressPushButton('Download')
button.setFixedWidth(180)
button.setProgressing(True)
button.setValue(45)
button.stopRequested.connect(lambda: button.setProgressing(False))
```

### [IndeterminateProgressPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![IndeterminateProgressPushButton](/img/components/progressbutton/IndeterminateProgressPushButton.png)

`IndeterminateProgressPushButton` adds an indeterminate progress ring functionality to the button, making it suitable for operations where the completion time cannot be predicted or the progress cannot be accurately calculated (such as network requests, background processing, etc.).

```python
from qfluentwidgets_pro import IndeterminateProgressPushButton

button = IndeterminateProgressPushButton('Loading')
button.setFixedWidth(180)
button.start()

# Stop after the task finishes
# button.stop()
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `ProgressPushButton`
- `IndeterminateProgressPushButton`

</template>
</LanguageTabs>

