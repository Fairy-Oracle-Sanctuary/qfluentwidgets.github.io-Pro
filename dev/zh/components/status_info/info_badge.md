---
title: 徽章
date: 2024-02-27 11:25:00
permalink: /zh/pages/components/infobadge/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [InfoBadge](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.InfoBadge)

![InfoBadge](/img/components/infobadge/InfoBadge.png)

`InfoBadge` 是一个小型的通知标记，用于在应用的导航菜单或工具栏上显示未读消息、状态更新或其他重要通知。

徽章支持多种样式，并提供了便捷的类方法来创建实例：
```python
InfoBadge.info(1)
InfoBadge.success(10)
InfoBadge.attension(100)
InfoBadge.warning(1000)
InfoBadge.error(10000)
InfoBadge.custom('1w+', '#005fb8', '#60cdff')
```

徽章通常附着在其他组件上，通过设置 `target` 可指定附着对象：
```python
button = ToolButton(FIF.BASKETBALL, parent)
vBoxLayout.addWidget(button, 0, Qt.AlignHCenter)
InfoBadge.success(1, parent=parent, target=button, position=InfoBadgePosition.TOP_RIGHT)
```

`position` 参数用于设置徽章的位置，组件库内置了 7 种徽章位置：
```python
class InfoBadgePosition(Enum):
    """ Info badge position """
    TOP_RIGHT = 0
    BOTTOM_RIGHT = 1
    RIGHT = 2
    TOP_LEFT = 3
    BOTTOM_LEFT = 4
    LEFT = 5
    NAVIGATION_ITEM = 6
```

如果你想自定义徽章的位置，可继承 `InfoBadgeManager` 并重写 `position()` 方法：
```python
@InfoBadgeManager.register('Custom')
class CustomInfoBadgeManager(InfoBadgeManager):
    """ Custom info badge manager """

    def position(self):
        pos = self.target.geometry().center()
        x = pos.x() - self.badge.width() // 2
        y = self.target.y() - self.badge.height() // 2
        return QPoint(x, y)


# 使用自定义的徽章位置管理器
InfoBadge.success(1, parent=parent, target=button, position="Custom")
```


### [DotInfoBadge](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.DotInfoBadge)

![DotInfoBadge](/img/components/infobadge/DotInfoBadge.png)

`DotInfoBadge` 不显示任何数字或图标，而是显示为一个小圆点，用于表示存在未处理的通知或更新。这个组件在需要提醒用户有新的信息或状态变化，但不需要显示具体数量或类型的情况下非常有用。

```python
DotInfoBadge.info()
DotInfoBadge.success()
DotInfoBadge.attension()
DotInfoBadge.warning()
DotInfoBadge.error()
DotInfoBadge.custom('#005fb8', '#60cdff')
```


### [IconInfoBadge](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.IconInfoBadge)

![IconInfoBadge](/img/components/infobadge/IconInfoBadge.png)

`IconInfoBadge` 在其内部显示一个图标，而不是数字，这个图标可以用来表示特定类型的通知或状态。

```python
IconInfoBadge.info(FluentIcon.ACCEPT_MEDIUM)
IconInfoBadge.success(FluentIcon.ACCEPT_MEDIUM)
IconInfoBadge.attension(FluentIcon.ACCEPT_MEDIUM)
IconInfoBadge.warning(FluentIcon.CANCEL_MEDIUM)
IconInfoBadge.error(FluentIcon.CANCEL_MEDIUM)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [InfoBadge](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/info_badge.h)

```cpp
#include <components/widgets/info_badge.h>

auto* badge = new qfw::InfoBadge(QStringLiteral("8"), parent);
badge->move(20, 20);
```

### C++ [DotInfoBadge](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/info_badge.h)

```cpp
#include <components/widgets/info_badge.h>

auto* badge = new qfw::DotInfoBadge(parent);
badge->move(20, 20);
```

### C++ [IconInfoBadge](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/info_badge.h)

```cpp
#include <components/widgets/info_badge.h>

auto* badge = new qfw::IconInfoBadge(qfw::FluentIcon(qfw::FluentIconEnum::Add).qicon(), parent);
badge->move(20, 20);
```

</template>
</LanguageTabs>
