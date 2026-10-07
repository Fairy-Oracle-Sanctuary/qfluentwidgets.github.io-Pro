---
title: Rating widgets
date: 2026-10-07 12:00:00
permalink: /pages/components/ratingwidget/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [RatingWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/rating_widget.py)

A read-only star rating supporting fractional values.

```python
from qfluentwidgets_pro import RatingWidget

rating = RatingWidget(4.5)
rating.setDecimals(1)
rating.setValue(3.5)
print(rating.value())
```

### [InteractiveRatingWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/rating_widget.py)

An interactive rating that can be changed with mouse or keyboard.

```python
from qfluentwidgets_pro import InteractiveRatingWidget

rating = InteractiveRatingWidget(3)
rating.setReadOnly(False)
rating.valueChanged.connect(lambda value: print(value))
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

- `RatingWidget`
- `InteractiveRatingWidget`

</template>
</LanguageTabs>
