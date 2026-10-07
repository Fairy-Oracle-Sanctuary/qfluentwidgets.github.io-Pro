---
title: Progress Bar
date: 2024-02-27 13:34:00
permalink: /pages/components/progressbar/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ProgressBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html)

![ProgressBar](/img/components/progressbar/ProgressBar.png)

`ProgressBar` is used to display task progress. Its usage is almost identical to `QProgressBar`, but it cancels the text display function.

```python
progressBar = ProgressBar()

# Set the range of values
progressBar.setRange(0, 100)

# Set the current value
progressBar.setValue(40)
```

`ProgressBar` can be set to pause and error states, and the color of the progress bar is different in different states:
```python
progressBar.pause()
progressBar.error()
```

Resume running state:
```python
bar.resume()
```

Customize the color of the progress bar:
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```

### [IndeterminateProgressBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html#qfluentwidgets.components.widgets.progress_bar.IndeterminateProgressBar)

`IndeterminateProgressBar` represents a long-running task that is in progress but its completion time is unknown. This type of progress bar is very useful when there is no clear completion time or progress information, such as when loading or processing a large amount of data.

```python
bar = IndeterminateProgressBar(start=True)
```

`IndeterminateProgressBar` can be set to pause and error states, and the color of the progress bar is different in different states:
```python
bar.pause()
bar.error()
```

Resume running state:
```python
bar.resume()
```

Customize the color of the progress bar:
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```

### [FilledProgressBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_bar.py)

![FilledProgressBar](/img/components/progressbar/FilledProgressBar.png)

`FilledProgressBar` is used to display task progress.

```python
from qfluentwidgets_pro import FilledProgressBar

progressBar = FilledProgressBar()
progressBar.setFixedWidth(320)
progressBar.setRange(0, 100)
progressBar.setValue(65)
```

### [StepProgressBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_bar.py)

![StepProgressBar](/img/components/progressbar/StepProgressBar.png)

`StepProgressBar` is used to display the progress of step-by-step tasks.

```python
from qfluentwidgets_pro import StepProgressBar

progressBar = StepProgressBar(count=4)
progressBar.setStepNames(['Start', 'Upload', 'Process', 'Finish'])
progressBar.setCurrent(1)
progressBar.currentChanged.connect(lambda index: print(index))
```

### [TimeLineWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/time_line.py)

![TimeLineWidget](/img/components/progressbar/TimeLineWidget.png)

`TimeLineWidget` is used to display time line

```python
from qfluentwidgets_pro import TimeLineWidget, InfoBarIcon

timeLine = TimeLineWidget()
group = timeLine.addGroup('Today', InfoBarIcon.INFORMATION)
group.addItem('Build the gallery', InfoBarIcon.SUCCESS)
group.addItem('Publish a release', InfoBarIcon.INFORMATION)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ProgressBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/progress_bar.h)

```cpp
#include <components/widgets/progress_bar.h>

auto* progress = new qfw::ProgressBar(parent);
progress->setRange(0, 100);
progress->setValue(40);
progress->setFixedWidth(260);
```

### C++ [IndeterminateProgressBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/progress_bar.h)

```cpp
#include <components/widgets/progress_bar.h>

auto* progress = new qfw::IndeterminateProgressBar(parent);
progress->start();
// Call progress->stop() when the operation completes.
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `FilledProgressBar`
- `StepProgressBar`
- `TimeLineWidget`

</template>
</LanguageTabs>

