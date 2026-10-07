---
title: 流式布局
date: 2024-02-26 19:40:01
permalink: /zh/pages/components/flowlayout/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [FlowLayout](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/layout/flow_layout/index.html)

![FlowLayout](/img/components/flowlayout/FlowLayout.png)

`FlowLayout` 能够自适应视口宽度，在内部组件超出视口宽度时自动换行。

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        layout = FlowLayout(self, needAni=True)  # 启用动画

        # 自定义动画参数
        layout.setAnimation(250, QEasingCurve.OutQuad)

        layout.setContentsMargins(30, 30, 30, 30)
        layout.setVerticalSpacing(20)
        layout.setHorizontalSpacing(10)

        layout.addWidget(QPushButton('aiko'))
        layout.addWidget(QPushButton('刘静爱'))
        layout.addWidget(QPushButton('柳井爱子'))
        layout.addWidget(QPushButton('aiko 赛高'))
        layout.addWidget(QPushButton('aiko 太爱啦😘'))

        self.resize(250, 300)
```

在某些情况下，流式布局中的组件可能发生重叠，可使用下述方法强制刷新布局：
```python
# 移除全部组件
flowLayout.removeAllWidgets()

# 重新添加组件
for w in widgets:
    flowLayout.addWidget(w)
```


### [WaterfallLayout](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/layout/waterfall_layout.py)

![WaterfallLayout](/img/components/flowlayout/WaterfallLayout.png)

`WaterfallLayout` 一种多列等宽不等高的页面布局方式。

```python
from PySide6.QtWidgets import QWidget
from qfluentwidgets_pro import WaterfallLayout, CardWidget

view = QWidget()
layout = WaterfallLayout(view)
layout.setColumnWidth(160)
layout.setHorizontalSpacing(12)
layout.setVerticalSpacing(12)

for height in [100, 150, 80, 120]:
    card = CardWidget()
    card.setFixedHeight(height)
    layout.addWidget(card)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [FlowLayout](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/layout/flow_layout.h)

```cpp
#include <components/layout/flow_layout.h>

auto* container = new QWidget(parent);
auto* layout = new qfw::FlowLayout(container, true);
layout->setHorizontalSpacing(12);
layout->setVerticalSpacing(12);
layout->setAnimation(200, QEasingCurve::OutCubic);
for (int i = 0; i < 5; ++i) {
    layout->addWidget(new qfw::PushButton(QString::number(i + 1), container));
}
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `WaterfallLayout`

</template>
</LanguageTabs>

