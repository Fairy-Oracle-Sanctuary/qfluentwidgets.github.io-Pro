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

文章信息占位骨架，带扫光动画。

```python
from qfluentwidgets_pro import ArticleSkeleton

skeleton = ArticleSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [CirclePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

使用圆形头像的个人信息骨架。

```python
from qfluentwidgets_pro import CirclePersonalInfoSkeleton

skeleton = CirclePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [RectanglePersonalInfoSkeleton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

使用方形头像的个人信息骨架。

```python
from qfluentwidgets_pro import RectanglePersonalInfoSkeleton

skeleton = RectanglePersonalInfoSkeleton()
skeleton.setFixedWidth(520)
skeleton.setAnimationDuration(1500)
skeleton.setAnimationEnabled(True)
```

### [SkeletonWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/skeleton.py)

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

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `ArticleSkeleton`
- `CirclePersonalInfoSkeleton`
- `RectanglePersonalInfoSkeleton`
- `SkeletonWidget`

</template>
</LanguageTabs>
