---
title: 分页器
date: 2024-02-27 11:25:00
permalink: /zh/pages/components/pager/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [PipsPager](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/pips_pager/index.html#qfluentwidgets.components.widgets.pips_pager.PipsPager)

![PipsPager](/img/components/pager/PipsPager.png)

`PipsPager` 是一种轻量的分页组件，控件上的每个圆点代表一个页面。这个控件在一些需要页面切换的场景下非常有用，例如图片轮播器或用户向导界面。

```python
pager = PipsPager(Qt.Horizontal)

# 设置页数
pager.setPageNumber(15)

# 设置圆点数量
pager.setVisibleNumber(8)

# 始终显示前进和后退按钮
pager.setNextButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)
pager.setPreviousButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)

# 设置当前页码
pager.setCurrentIndex(3)
```

当前页码发生改变时会发出信号 `currentIndexChanged(index: int)`：
```python
pager.currentIndexChanged.connect(lambda index: print(index, pager.currentIndex()))
```

### [Pager](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/pager.py)

![Pager](/img/components/pager/Pager.png)

`Pager` 提供了分页功能，当数据量过多时，使用分页分解数据。

```python
from qfluentwidgets_pro import Pager

pager = Pager(pages=12, maxVisible=5)
pager.setCurrentPage(1)
pager.currentPageChanged.connect(lambda page: print(page))
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [PipsPager](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/pips_pager.h)

```cpp
#include <components/widgets/pips_pager.h>

auto* pager = new qfw::PipsPager(Qt::Horizontal, parent);
pager->setPageNumber(8);
pager->setVisibleNumber(5);
pager->setCurrentIndex(0);
QObject::connect(pager, &qfw::PipsPager::currentIndexChanged, parent, [](int index) { qDebug() << index; });
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `Pager`

</template>
</LanguageTabs>

