---
title: 评分组件
date: 2026-10-07 12:00:00
permalink: /zh/pages/components/ratingwidget/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [RatingWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/rating_widget.py)

只读星级评分，支持小数分值。

```python
from qfluentwidgets_pro import RatingWidget

rating = RatingWidget(4.5)
rating.setDecimals(1)
rating.setValue(3.5)
print(rating.value())
```

### [InteractiveRatingWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/rating_widget.py)

可交互的评分组件，点击星星或使用键盘修改评分。

```python
from qfluentwidgets_pro import InteractiveRatingWidget

rating = InteractiveRatingWidget(3)
rating.setReadOnly(False)
rating.valueChanged.connect(lambda value: print(value))
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

- `RatingWidget`
- `InteractiveRatingWidget`

</template>
</LanguageTabs>
