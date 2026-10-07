---
title: Flip View
date: 2024-02-27 19:35:00
permalink: /pages/components/flipview/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [FlipView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/flip_view/index.html#qfluentwidgets.components.widgets.flip_view.FlipView)

![FlipView](/img/components/flipview/FlipView.png)

The `FlipView` component is very suitable for scenarios where a set of images need to be displayed. It can be used to implement a photo viewer where users can view each photo by flipping through the pages.

```python
flipView = HorizontalFlipView()

# Adding images
flipView.addImages(["image1.png", "image2.png"])

# Listen to the signal of current page change
flipView.currentIndexChanged.connect(lambda index: print("Current page:", index))
```

By default, `FlipView` forces all images to be the same size by stretching. You can set the scaling strategy to maintain the aspect ratio of the image:
```python
flipView.setAspectRatioMode(Qt.AspectRatioMode.KeepAspectRatio)
```

The default size of the `FlipView` viewport and images is 480×270. The method to adjust the size is as follows:
```python
flipView.setItemSize(QSize(320, 180))
flipView.setFixedSize(QSize(320, 180))
```

By adding image spacing and adjusting the viewport width, you can achieve the following effect of the flip view:

![FlipViewRound](/img/components/flipview/FlipViewRound.png)

```python
flipView.setFixedSize(QSize(710, 270))
flipView.setSpacing(15)

# Enable rounded corners
flipView.setBorderRadius(15)
```


### [FlipImageDelegate](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/flip_view/index.html#qfluentwidgets.components.widgets.flip_view.FlipImageDelegate)

![CustomFlipView](/img/components/flipview/CustomFlipView.png)

`FlipImageDelegate` is used to control the rendering results of `FlipView`:

```python
class CustomFlipItemDelegate(FlipImageDelegate):
    """ Custom flip item delegate """

    def paint(self, painter: QPainter, option: QStyleOptionViewItem, index: QModelIndex):
        super().paint(painter, option, index)
        painter.save()

        # draw mask
        painter.setBrush(QColor(255, 255, 255, 200))
        painter.setPen(Qt.NoPen)
        rect = option.rect
        rect = QRect(rect.x(), rect.y(), 200, rect.height())
        painter.drawRect(rect)

        # draw text
        painter.setPen(Qt.black)
        painter.setFont(getFont(16, QFont.Bold))
        painter.drawText(rect, Qt.AlignCenter, '🥰\nGlass sauce is great and cute')

        painter.restore()


# Use custom delegate
flipView.setItemDelegate(CustomFlipItemDelegate(flipView))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [FlipView](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/flip_view.h)

This example uses the C++ `HorizontalFlipView` class, whose name or usage differs from Python.

```cpp
#include <components/widgets/flip_view.h>

auto* view = new qfw::HorizontalFlipView(parent);
view->addImages(QList<QString>{QStringLiteral("/path/to/first.png"), QStringLiteral("/path/to/second.png")});
view->setCurrentIndex(0);
view->setBorderRadius(8);
```

### C++ [FlipImageDelegate](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/flip_view.h)

```cpp
#include <components/widgets/flip_view.h>

auto* view = new qfw::HorizontalFlipView(parent);
auto* delegate = new qfw::FlipImageDelegate(view);
view->setItemDelegate(delegate);
view->addImages(QList<QString>{QStringLiteral("/path/to/image.png")});
```

</template>
</LanguageTabs>
