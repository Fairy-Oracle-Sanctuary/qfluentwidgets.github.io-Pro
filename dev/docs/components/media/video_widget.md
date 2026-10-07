---
title: Video Player
date: 2024-03-31 14:08:00
permalink: /pages/components/videowidget/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [VideoWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/multimedia/video_widget/index.html#qfluentwidgets.multimedia.video_widget.VideoWidget)

![VideoWidget](/img/components/mediaplaybar/VideoWidget.png)

`VideoWidget` is used to play local or online videos, with a built-in play bar.

::: tip Tip
PyQt/PySide 6.5.0 and above do not require additional installation of decoders, while lower versions need to install LAV Filters (Windows) or GStreamer (Linux).
:::

The usage is quite simple:

```python
from qfluentwidgets_pro.multimedia import VideoWidget

videoWidget = VideoWidget(self)

videoWidget.setVideo(QUrl.fromLocalFile("D:/Video/aiko - シアワセ.mp4"))
videoWidget.play()
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `VideoWidget`

</template>
</LanguageTabs>
