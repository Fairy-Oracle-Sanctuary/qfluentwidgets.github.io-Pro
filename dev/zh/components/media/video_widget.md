---
title: 视频播放器
date: 2024-03-31 14:08:00
permalink: /zh/pages/components/videowidget/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [VideoWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/multimedia/video_widget/index.html#qfluentwidgets.multimedia.video_widget.VideoWidget)

![VideoWidget](/img/components/mediaplaybar/VideoWidget.png)

`VideoWidget` 用于播放本地或者在线视频，自带播放栏。

::: tip 提示
PyQt/PySide 6.5.0 及以上版本不需要额外安装解码器，低版本需要安装 LAV Filters（Windows）或者 GStreamer（Linux）。
:::

使用方式较为简单：

```python
from qfluentwidgets_pro.multimedia import VideoWidget

videoWidget = VideoWidget(self)

videoWidget.setVideo(QUrl.fromLocalFile("D:/Video/aiko - シアワセ.mp4"))
videoWidget.play()
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `VideoWidget`

</template>
</LanguageTabs>
