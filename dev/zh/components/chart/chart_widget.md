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

展示图复用本页对应 Python 组件的截图，供外观参考；C++ 的接口与用法以以下示例为准。


以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ChartWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/chart_widget.h)

![ChartWidget](/img/components/chart/Bar.png)

单独链接 qtfluentwidgets_chart；需 Qt WebEngineWidgets 和 QuickWidgets。在 QApplication 前启用 Qt::AA_ShareOpenGLContexts。setOptionJS() 用于包含函数的受信任 ECharts 配置；内置 ECharts 5.6.0，无 CDN 依赖。

```cpp
#include <QJsonArray>
#include <QJsonObject>
#include <components/widgets/chart_widget.h>
auto* chart = new qfw::ChartWidget(parent);
chart->resize(640, 360);
chart->setOption({
    {"xAxis", QJsonObject{{"type", "category"}, {"data", QJsonArray{"Mon", "Tue", "Wed"}}}},
    {"yAxis", QJsonObject{{"type", "value"}}},
    {"series", QJsonArray{QJsonObject{{"type", "bar"}, {"data", QJsonArray{12, 20, 15}}}}}
});
```

### C++ [AudioWaveformWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/audio_waveform.h)

![AudioWaveformWidget](/img/components/chart/AudioWaveformWidget.png)

只绘制归一化单声道 PCM，不负责音频解码或播放；生产线程请使用排队信号更新 GUI。

```cpp
#include <components/widgets/audio_waveform.h>
auto* waveform = new qfw::AudioWaveformWidget(parent);
waveform->setSamples({0.0f, 0.3f, -0.5f, 0.8f, -0.2f}, 24000);
waveform->appendSamples({0.4f, -0.3f});
waveform->setSeekEnabled(true);
QObject::connect(waveform, &qfw::AudioWaveformWidget::seekRequested, waveform, [](qint64 ms) { qDebug() << ms; });
```

</template>
</LanguageTabs>

