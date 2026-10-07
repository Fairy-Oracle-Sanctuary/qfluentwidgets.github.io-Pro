---
title: Icon Widget
date: 2024-07-24 13:52:00
permalink: /pages/components/iconwidget/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [IconWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/icon_widget/index.html#qfluentwidgets.components.widgets.icon_widget.IconWidget)

![IconWidget](/img/components/iconwidget/IconWidget.png)

The `IconWidget` is used to display icons, and supports `FluentIconBase`, `QIcon`, and `str` types of icons.

Create an icon component and adjust the icon size:
```python
w = IconWidget(FluentIcon.AIRPLANE)
w.setFixedSize(20, 20)
```

Change the icon:

```python
# Type is a subclass of FluentIconBase
w.setIcon(InfoBarIcon.SUCCESS)
w.setIcon(FluentIcon.AIRPLANE.colored(Qt.red, Qt.blue))

# Type is QIcon
w.setIcon(QIcon("/path/to/icon"))

# Type is str, representing the icon path
w.setIcon("/path/to/icon")
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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
