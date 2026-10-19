---
title: 骨架屏
date: 2026-10-07 12:00:00
permalink: /zh/pages/components/skeleton/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ArticleSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![ArticleSkeleton](/img/components/python/ArticleSkeleton.png)

文章信息占位骨架，带扫光动画。

```python
from qfluentwidgets_pro import ArticleSkeleton

skeleton = ArticleSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [CirclePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![CirclePersonalInfoSkeleton](/img/components/python/CirclePersonalInfoSkeleton.png)

使用圆形头像的个人信息骨架。

```python
from qfluentwidgets_pro import CirclePersonalInfoSkeleton

skeleton = CirclePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [RectanglePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![RectanglePersonalInfoSkeleton](/img/components/python/RectanglePersonalInfoSkeleton.png)

使用方形头像的个人信息骨架。

```python
from qfluentwidgets_pro import RectanglePersonalInfoSkeleton

skeleton = RectanglePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [SkeletonWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

![SkeletonWidget](/img/components/python/SkeletonWidget.png)

通过矩形和椭圆定义自定义骨架，所有形状共享扫光动画。

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

展示图复用本页对应 Python 组件的截图，供外观参考；C++ 的接口与用法以以下示例为准。


以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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
