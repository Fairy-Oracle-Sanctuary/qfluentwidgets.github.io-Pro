---
title: 媒体播放栏
date: 2024-03-31 14:08:00
permalink: /zh/pages/components/mediaplaybar/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

## [SimpleMediaPlayBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/multimedia/index.html#qfluentwidgets.multimedia.SimpleMediaPlayBar)

![SimpleMediaPlayBar](/img/components/mediaplaybar/SimpleMediaPlayBar.png)

简易媒体播放栏，包含播放按钮、进度条和音量按钮，。

::: tip 提示
PyQt/PySide 6.5.0 及以上版本不需要额外安装解码器，低版本需要安装 LAV Filters（Windows）或者 GStreamer（Linux）。
:::

### 播放音乐
媒体播放栏支持本地和在线音乐，下面是一个简单的例子：

```python
from qfluentwidgets_pro.multimedia import SimpleMediaPlayBar

bar = SimpleMediaPlayBar()

# 在线音乐
url = QUrl("https://files.cnblogs.com/files/blogs/677826/beat.zip?t=1693900324")
bar.player.setSource(url)

# 本地音乐
url = QUrl.fromLocalFile(str(Path("resource/aiko - beat.flac").absolute()))
bar.player.setSource(url)
```

调用下述方法可以改变播放状态：
* `pause()`：暂停播放
* `play()`：继续播放
* `stop()`：结束播放
* `togglePlayState()`：开始/暂停播放
* `setPosition()`：设置播放进度
* `setVolume()`：设置音量

这些方法只是对内部播放器 `player` 的封装，更细粒度的控制方法请查阅 [MediaPlayer](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/multimedia/media_player/index.html#) 的 API 文档。

### 自定义布局
简易媒体播放栏内部为水平布局 `hBoxLayout`，可添加自定义按钮：
```python
from qfluentwidgets_pro import FluentIcon
from qfluentwidgets_pro.multimedia import MediaPlayBarButton

bar.hBoxLayout.addWidget(MediaPlayBarButton(FluentIcon.FULL_SCREEN))
```

## [StandardMediaPlayBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/multimedia/index.html#qfluentwidgets.multimedia.StandardMediaPlayBar)

![StandardMediaPlayBar](/img/components/mediaplaybar/StandardMediaPlayBar.png)

标准媒体播放栏，包含播放按钮、前进后退按钮、进度条和音量按钮，使用方式和 [SimpleMediaPlayBar](#simplemediaplaybar) 几乎一致。

下面是一个简单的例子：

```python
from qfluentwidgets_pro.multimedia import StandardMediaPlayBar

bar = StandardMediaPlayBar()

# 在线音乐
url = QUrl("https://files.cnblogs.com/files/blogs/677826/beat.zip?t=1693900324")
bar.player.setSource(url)

# 本地音乐
url = QUrl.fromLocalFile(str(Path("resource/aiko - beat.flac").absolute()))
bar.player.setSource(url)
```

`StandardMediaPlayBar` 的布局如下图所示：

![StandardMediaPlayBarLayout](/img/components/mediaplaybar/StandardMediaPlayBarLayout.png)

总布局为垂直布局 `vBoxLayout`，内部包含三个按钮布局，可在各个布局中添加自定义按钮或组件。

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

- `SimpleMediaPlayBar`
- `StandardMediaPlayBar`

</template>
</LanguageTabs>
