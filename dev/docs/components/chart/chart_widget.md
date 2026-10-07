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

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `ChartWidget`
- `AudioWaveformWidget`

</template>
</LanguageTabs>

