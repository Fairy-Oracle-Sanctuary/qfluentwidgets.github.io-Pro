---
title: 工具提示
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/tooltip/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [ToolTipFilter](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/tool_tip/index.html#qfluentwidgets.components.widgets.tool_tip.ToolTipFilter)

![ToolTip](/img/components/tooltip/ToolTip.png)


`ToolTipFilter` 用来将 `QToolTip` 替换成组件库的 `ToolTip`，只要给组件安装上此过滤器即可完成替代。

```python
button = QPushButton('キラキラ')

button.setToolTip('aiko - キラキラ ✨')
button.setToolTipDuration(1000)

# 给按钮安装工具提示过滤器
button.installEventFilter(ToolTipFilter(button, showDelay=300, position=ToolTipPosition.TOP))
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ToolTipFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/tool_tip.h)

```cpp
#include <components/widgets/tool_tip.h>

#include <components/widgets/tool_tip.h>

auto* button = new qfw::PushButton(QStringLiteral("Hover me"), parent);
button->setToolTip(QStringLiteral("A Fluent tooltip"));
button->installEventFilter(new qfw::ToolTipFilter(button, 300, qfw::ToolTipPosition::Top));
```

</template>
</LanguageTabs>
