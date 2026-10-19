---
title: 过滤器
date: 2024-02-26 19:56:01
permalink: /zh/pages/components/litefilter/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![ExclusiveLiteFilter](/img/components/topnavigationbar/ExclusiveLiteFilter.png)

`ExclusiveLiteFilter` 能够提供排他性（单一选择）的数据过滤功能。

```python
from qfluentwidgets_pro import ExclusiveLiteFilter

filterWidget = ExclusiveLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItem('All')
filterWidget.currentTextChanged.connect(lambda value: print(value))
```

### [OutlinedExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![OutlinedExclusiveLiteFilter](/img/components/topnavigationbar/OutlinedExclusiveLiteFilter.png)

`OutlinedExclusiveLiteFilter` 描边样式的过滤器，用法与 [ExclusiveLiteFilter](#exclusivelitefilter) 完全相同。

```python
from qfluentwidgets_pro import OutlinedExclusiveLiteFilter

filterWidget = OutlinedExclusiveLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItem('All')
filterWidget.currentTextChanged.connect(lambda value: print(value))
```

### [MultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![MultiSelectionLiteFilter](/img/components/topnavigationbar/MultiSelectionLiteFilter.png)

`MultiSelectionLiteFilter` 用于为用户提供支持多选的数据过滤功能。

```python
from qfluentwidgets_pro import MultiSelectionLiteFilter

filterWidget = MultiSelectionLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItems(['Active', 'Completed'])
filterWidget.currentItemsChanged.connect(lambda value: print(value))
```

### [OutlinedMultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![OutlinedMultiSelectionLiteFilter](/img/components/topnavigationbar/OutlinedMultiSelectionLiteFilter.png)

`OutlinedMultiSelectionLiteFilter` 描边样式的过滤器，用法与 [MultiSelectionLiteFilter](#multiselectionlitefilter) 完全相同。

```python
from qfluentwidgets_pro import OutlinedMultiSelectionLiteFilter

filterWidget = OutlinedMultiSelectionLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItems(['Active', 'Completed'])
filterWidget.currentItemsChanged.connect(lambda value: print(value))
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

### C++ [ExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![ExclusiveLiteFilter](/img/components/topnavigationbar/ExclusiveLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::ExclusiveLiteFilter(parent);
widget->addItems({QStringLiteral("All"), QStringLiteral("Images"), QStringLiteral("Code")});
widget->setCurrentItem(QStringLiteral("Code"));
```

### C++ [OutlinedExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![OutlinedExclusiveLiteFilter](/img/components/topnavigationbar/OutlinedExclusiveLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::OutlinedExclusiveLiteFilter(parent);
widget->addItems({QStringLiteral("All"), QStringLiteral("Images"), QStringLiteral("Code")});
widget->setCurrentItem(QStringLiteral("Code"));
```

### C++ [MultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![MultiSelectionLiteFilter](/img/components/topnavigationbar/MultiSelectionLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::MultiSelectionLiteFilter(parent);
widget->addItems({QStringLiteral("Qt"), QStringLiteral("C++"), QStringLiteral("Python")});
widget->setCurrentItems({QStringLiteral("Qt"), QStringLiteral("C++")});
```

### C++ [OutlinedMultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![OutlinedMultiSelectionLiteFilter](/img/components/topnavigationbar/OutlinedMultiSelectionLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::OutlinedMultiSelectionLiteFilter(parent);
widget->addItems({QStringLiteral("Qt"), QStringLiteral("C++"), QStringLiteral("Python")});
widget->setCurrentItems({QStringLiteral("Qt"), QStringLiteral("C++")});
```

</template>
</LanguageTabs>

