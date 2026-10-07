---
title: 进度环
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/progressring/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ProgressRing](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.ProgressRing)

![ProgressRing](/img/components/progressring/ProgressRing.png)

`ProgressRing` 是一个环形进度条，可以用来表示处理进度或者用作仪表盘，使用方式和 [ProgressBar](/zh/pages/components/progressbar) 相似。

```python
ring = ProgressRing()

# 设置进度环取值范围和当前值
ring.setRange(0, 100)
ring.setValue(30)

# 显示进度环内文本
ring.setTextVisible(True)

# 调整进度环大小
ring.setFixedSize(80, 80)

# 调整厚度
ring.setStrokeWidth(4)
```

调整进度环的文本格式，比如显示温度：
```python
ring.setFormat("%v℃")
```

### [IndeterminateProgressRing](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.IndeterminateProgressRing)

`IndeterminateProgressRing` 用于表示应用程序正在进行某项操作，但该操作的完成时间未知。

```python
spinner = IndeterminateProgressRing()

# 调整大小
spinner.setFixedSize(50, 50)

# 调整厚度
spinner.setStrokeWidth(4)
```

### [MultiSegmentProgressRing](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_ring.py)

![MultiSegmentProgressRing](/img/components/progressring/MultiSegmentProgressRing.png)

`MultiSegmentProgressRing` 支持分段显示不同进度状态，适用于存储空间可视化等场景。

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

`RadialGauge` 可以用来显示一系列的数据，比如速度、进度或者其他可以用角度来表示的度量。

```python
from qfluentwidgets_pro import RadialGauge

gauge = RadialGauge()
gauge.setFixedSize(120, 120)
gauge.setRange(0, 100)
gauge.setValue(65)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `MultiSegmentProgressRing`
- `RadialGauge`

</template>
</LanguageTabs>

