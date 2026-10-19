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

![ArticleSkeleton](/img/components/python/ArticleSkeleton.png)

An article placeholder with a shimmer animation.

```python
from qfluentwidgets_pro import ArticleSkeleton

skeleton = ArticleSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [CirclePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![CirclePersonalInfoSkeleton](/img/components/python/CirclePersonalInfoSkeleton.png)

A personal-info placeholder with a circular avatar.

```python
from qfluentwidgets_pro import CirclePersonalInfoSkeleton

skeleton = CirclePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [RectanglePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![RectanglePersonalInfoSkeleton](/img/components/python/RectanglePersonalInfoSkeleton.png)

A personal-info placeholder with a rectangular avatar.

```python
from qfluentwidgets_pro import RectanglePersonalInfoSkeleton

skeleton = RectanglePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [SkeletonWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![SkeletonWidget](/img/components/python/SkeletonWidget.png)

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

Images are shared with the corresponding Python components on this page for appearance reference. Use the examples below for the C++ APIs.


These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ArticleSkeleton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/skeleton.h)

![ArticleSkeleton](/img/components/python/ArticleSkeleton.png)

```cpp
#include <components/widgets/skeleton.h>
auto* widget = new qfw::ArticleSkeleton(parent);
widget->setFixedSize(420, 180);
widget->setAnimationEnabled(true);
```

### C++ [CirclePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/skeleton.h)

![CirclePersonalInfoSkeleton](/img/components/python/CirclePersonalInfoSkeleton.png)

```cpp
#include <components/widgets/skeleton.h>
auto* widget = new qfw::CirclePersonalInfoSkeleton(parent);
widget->setFixedSize(420, 180);
widget->setAnimationEnabled(true);
```

### C++ [RectanglePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/skeleton.h)

![RectanglePersonalInfoSkeleton](/img/components/python/RectanglePersonalInfoSkeleton.png)

```cpp
#include <components/widgets/skeleton.h>
auto* widget = new qfw::RectanglePersonalInfoSkeleton(parent);
widget->setFixedSize(420, 180);
widget->setAnimationEnabled(true);
```

### C++ [SkeletonWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/skeleton.h)

![SkeletonWidget](/img/components/python/SkeletonWidget.png)

```cpp
#include <components/widgets/skeleton.h>
auto* widget = new qfw::SkeletonWidget(parent);
widget->setFixedSize(420, 180);
widget->addEllipse(QRectF(16, 16, 64, 64));
widget->addRect(QRectF(100, 20, 200, 20), 4);
```

</template>
</LanguageTabs>
