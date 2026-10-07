---
title: 图标组件
date: 2024-07-24 13:52:00
permalink: /zh/pages/components/iconwidget/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [IconWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/icon_widget/index.html#qfluentwidgets.components.widgets.icon_widget.IconWidget)

![IconWidget](/img/components/iconwidget/IconWidget.png)

`IconWidget` 用于显示图标，支持传入 `FluentIconBase`、`QIcon` 和 `str` 类型的图标。

创建一个图标组件并调整图标大小：
```python
w = IconWidget(FluentIcon.AIRPLANE)
w.setFixedSize(20, 20)
```

更换图标：
```python
# 类型为 FluentIconBase 子类
w.setIcon(InfoBarIcon.SUCCESS)
w.setIcon(FluentIcon.AIRPLANE.colored(Qt.red, Qt.blue))

# 类型为 QIcon
w.setIcon(QIcon("/path/to/icon"))

# 类型为 str，代表图标路径
w.setIcon("/path/to/icon")
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [IconWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/icon_widget.h)

```cpp
#include <components/widgets/icon_widget.h>

auto* icon = new qfw::IconWidget(qfw::FluentIcon(qfw::FluentIconEnum::Add), parent);
icon->setFixedSize(32, 32);
```

</template>
</LanguageTabs>
