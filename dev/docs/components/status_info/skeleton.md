---
title: Skeleton placeholders
date: 2026-10-07 12:00:00
permalink: /pages/components/skeleton/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ArticleSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

An article placeholder with a shimmer animation.

```python
from qfluentwidgets_pro import ArticleSkeleton

skeleton = ArticleSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [CirclePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

A personal-info placeholder with a circular avatar.

```python
from qfluentwidgets_pro import CirclePersonalInfoSkeleton

skeleton = CirclePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [RectanglePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

A personal-info placeholder with a rectangular avatar.

```python
from qfluentwidgets_pro import RectanglePersonalInfoSkeleton

skeleton = RectanglePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [SkeletonWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

Define a custom skeleton with rectangles and ellipses sharing one shimmer animation.

```python
from PySide6.QtCore import QRectF
from qfluentwidgets_pro import SkeletonWidget

skeleton = SkeletonWidget()
skeleton.setFixedSize(520, 100)
skeleton.addEllipse(QRectF(0, 10, 80, 80))
skeleton.addRect(QRectF(96, 16, 400, 24), radius=6)
skeleton.addRect(QRectF(96, 60, 280, 24), radius=6)
skeleton.setAnimationEnabled(True)
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

- `ArticleSkeleton`
- `CirclePersonalInfoSkeleton`
- `RectanglePersonalInfoSkeleton`
- `SkeletonWidget`

</template>
</LanguageTabs>
