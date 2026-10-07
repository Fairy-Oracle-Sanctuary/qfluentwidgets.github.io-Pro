---
title: Designer
date: 2023-08-17 16:25:01
permalink: /pages/designer/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

This fork supports Qt Designer widget promotion. The Client images and videos below are upstream references, not a claim that its plugin supports this fork. Follow the widget promotion instructions for `qfluentwidgets_pro`.


### Using Client (upstream reference)

**For all the following operations, they must be performed in an English path.**


[Fluent Client](https://client.qfluentwidgets.com/) integrates designer plugins, visual Nuitka packaging, and skeleton functionality, supporting direct drag-and-drop usage of QFluentWidgets components in Designer. What you see is what you get, making the construction of modern interfaces silky smooth! You can purchase from [TaoBao](https://item.taobao.com/item.htm?ft=t&id=767961666600) or [Afdian](https://afdian.com/item/6726fcc4247311ef8c6852540025c377).


![Fluent Designer](/img/mirrors/65d22363d4a73.jpg)

The following video demonstrates the usage of Fluent Client:

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/7UCmcsOlhTk?si=gCyZNmtSOrWERG4P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### Promoting widget
Right click on a widget, select the `Promote to ...` of context menu.

Promoting a widget replaces it with a subclass, in this case `qfluentwidgets_pro.PushButton`.

![context menu](/img/designer/promote_context.jpg)

You will be presented with a dialog to specify the custom widget class the placeholder widget will become.

Set the header file (Python module) to `qfluentwidgets_pro` and the class name to `PushButton`. The screenshots are from upstream; replace their old module name.

![promote dialog](/img/designer/promote_dialog.jpg)

You will not see changes inside Qt Designer. Save `mainwindow.ui` and generate Python code:

```shell
pyside6-uic mainwindow.ui -o ui_mainwindow.py
```

The generated code should import:

```python
from qfluentwidgets_pro import PushButton
```

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/9FLCTLe7InU?si=0TkEWYDYX2OZSaeu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### Complex example
Here is an example that uses a side navigation bar to implement multiple sub-interfaces window.

<div style="position: relative; width:100%; padding-bottom: 56.25%; height: 0;">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" src="https://www.youtube.com/embed/qxZebL0EBOY?si=T0qauzjBjZ3vRxfh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ Promote a native Qt widget

```cpp
#include <components/widgets/button.h>

auto* button = new qfw::PushButton(QStringLiteral("Button"), parent);
```

## C++ Initialize static library resources

```cpp
Q_INIT_RESOURCE(resource);
```

Place a `QPushButton` in Qt Designer and choose Promote to. Set the class to `qfw::PushButton` and the header to `components/widgets/button.h`. Link the library using the installation page's CMake setup and initialize resources. The upstream Python Designer plugin shown on this site is not a plugin for this C++ repository; it is not needed for C++ widget promotion.

</template>
</LanguageTabs>
