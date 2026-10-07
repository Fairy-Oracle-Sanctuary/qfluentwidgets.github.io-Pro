---
title: 滑动条
date: 2024-02-26 11:29:01
permalink: /zh/pages/components/slider/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [Slider](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/slider/index.html#qfluentwidgets.components.widgets.slider.Slider)

![Slider](/img/components/slider/Slider.png)

`Slider` 用于在一个固定区间内进行选择，使用方式和 `QSlider` 完全相同。

水平滑动条：
```python
slider = Slider(Qt.Horizontal)
slider.setFixedWidth(200)

# 设置取值范围和当前值
slider.setRange(0, 50)
slider.setValue(20)

# 获取当前值
print(slider.value())
```

垂直滑动条：
```python
Slider(Qt.Vertical)
```

### [ToolTipSlider](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/slider.py)

![ToolTipSlider](/img/components/slider/ToolTipSlider.png)

`ToolTipSlider` 是带工具提示的滑动条，使用方式和 [Slider](#slider) 完全相同。

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

`RangeSlider` 用于选择一个范围值。

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

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `ToolTipSlider`
- `RangeSlider`

</template>
</LanguageTabs>

