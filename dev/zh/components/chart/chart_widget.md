---
title: 图表组件
date: 2024-03-13 13:25:01
permalink: /zh/pages/components/chartwidget/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ChartWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/chart_widget.py)

![ChartWidget](/img/components/chart/Bar.png)

`ChartWidget` 使用 ECharts 渲染图表，通过 `setOption()` 传入配置字典，可组合多种图表类型。

图表从具体模块按需导入，使用 ECharts 配置字典；需要 PySide6 的 QtWebEngine 和 QtQuick 模块。

```python
from qfluentwidgets_pro.components.widgets.chart_widget import ChartWidget

chart = ChartWidget()
chart.resize(640, 360)
chart.setOption({
    'xAxis': {'type': 'category', 'data': ['Mon', 'Tue', 'Wed']},
    'yAxis': {'type': 'value'},
    'series': [{'type': 'bar', 'data': [12, 20, 15]}],
})
```

### [AudioWaveformWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/audio_waveform.py)

![AudioWaveformWidget](/img/components/chart/AudioWaveformWidget.png)

`AudioWaveformWidget` 可以用于展示采样后的音频波形图，适用于文本转语音场景的可视化。

传入采样值而不是音频文件路径；组件只绘制波形，播放由调用方负责。

```python
from qfluentwidgets_pro import AudioWaveformWidget

waveform = AudioWaveformWidget()
waveform.setFixedSize(520, 120)
waveform.setSamples([0.0, 0.3, -0.5, 0.8, -0.2, 0.1], sampleRate=24000)
waveform.appendSamples([0.4, -0.3, 0.0])
waveform.setSeekEnabled(True)
waveform.seekRequested.connect(lambda milliseconds: print(milliseconds))
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

- `ChartWidget`
- `AudioWaveformWidget`

</template>
</LanguageTabs>

