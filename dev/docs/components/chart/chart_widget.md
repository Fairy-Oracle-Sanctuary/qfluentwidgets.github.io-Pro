---
title: Chart Widget
date: 2024-03-13 13:25:01
permalink: /pages/components/chartwidget/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ChartWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/chart_widget.py)

![ChartWidget](/img/components/chart/Bar.png)

`ChartWidget` renders ECharts charts. Supply an option dictionary with `setOption()` to configure and combine chart types.

Import charts from their module and supply an ECharts option dictionary. The backend requires PySide6 QtWebEngine and QtQuick.

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

`AudioWaveformWidget` can be used to display the sampled audio waveform, suitable for visualization in text-to-speech scenarios.

Pass audio samples rather than a file path. The widget draws the waveform; playback is managed by the caller.

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

Images are shared with the corresponding Python components on this page for appearance reference. Use the examples below for the C++ APIs.


These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ChartWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/chart_widget.h)

![ChartWidget](/img/components/chart/Bar.png)

Link qtfluentwidgets_chart explicitly; Qt WebEngineWidgets and QuickWidgets are required. Set Qt::AA_ShareOpenGLContexts before QApplication. Use setOptionJS() for trusted ECharts configuration containing functions. ECharts 5.6.0 is bundled without a CDN dependency.

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

This visualizes normalized mono PCM; it does not decode or play audio. Use queued signals for updates from producer threads.

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

