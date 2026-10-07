---
title: 进度条
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/progressbar/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ProgressBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html)

![ProgressBar](/img/components/progressbar/ProgressBar.png)

`ProgressBar` 用于显示任务进度，用法和 `QProgressBar` 几乎完全相同，但是取消了文本显示功能。

```python
progressBar = ProgressBar()

# 设置取值范围
progressBar.setRange(0, 100)

# 设置当前值
progressBar.setValue(40)
```

`ProgressBar` 可以设置暂停和错误状态，不同状态下进度条的颜色不同：
```python
progressBar.pause()
progressBar.error()
```

恢复运行状态：
```python
bar.resume()
```

自定义进度条的颜色：
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```

### [IndeterminateProgressBar](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html#qfluentwidgets.components.widgets.progress_bar.IndeterminateProgressBar)

`IndeterminateProgressBar` 表示一个正在进行但其完成时间未知的长时间运行任务。这种进度条在没有明确的完成时间或进度信息的情况下非常有用，例如在加载或处理大量数据时。

```python
bar = IndeterminateProgressBar(start=True)
```

`IndeterminateProgressBar` 可以设置暂停和错误状态，不同状态下进度条的颜色不同：
```python
bar.pause()
bar.error()
```

恢复运行状态：
```python
bar.resume()
```

自定义进度条的颜色：
```python
progressBar.setCustomBarColor(QColor(255, 0, 0), QColor(0, 255, 110))
```


### [FilledProgressBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_bar.py)

![FilledProgressBar](/img/components/progressbar/FilledProgressBar.png)

`FilledProgressBar` 用于显示任务进度。

```python
from qfluentwidgets_pro import FilledProgressBar

progressBar = FilledProgressBar()
progressBar.setFixedWidth(320)
progressBar.setRange(0, 100)
progressBar.setValue(65)
```

### [StepProgressBar](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/progress_bar.py)

![StepProgressBar](/img/components/progressbar/StepProgressBar.png)

`StepProgressBar` 用于显示分步骤任务进度。

```python
from qfluentwidgets_pro import StepProgressBar

progressBar = StepProgressBar(count=4)
progressBar.setStepNames(['Start', 'Upload', 'Process', 'Finish'])
progressBar.setCurrent(1)
progressBar.currentChanged.connect(lambda index: print(index))
```

### [TimeLineWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/time_line.py)

![TimeLineWidget](/img/components/progressbar/TimeLineWidget.png)

`TimeLineWidget` 用于显示时间线。

```python
from qfluentwidgets_pro import TimeLineWidget, InfoBarIcon

timeLine = TimeLineWidget()
group = timeLine.addGroup('Today', InfoBarIcon.INFORMATION)
group.addItem('Build the gallery', InfoBarIcon.SUCCESS)
group.addItem('Publish a release', InfoBarIcon.INFORMATION)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `FilledProgressBar`
- `StepProgressBar`
- `TimeLineWidget`

</template>
</LanguageTabs>

