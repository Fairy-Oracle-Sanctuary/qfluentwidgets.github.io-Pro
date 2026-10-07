---
title: 时间选择器
date: 2024-02-26 13:45:01
permalink: /zh/pages/components/timepicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [TimePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.TimePicker)

![TimePicker](/img/components/timepicker/TimePicker.png)

`TimePicker` 用于选择 24 小时制的时间，当选择的时间发生改变时会发送 `timeChanged` 信号。

```python
timePicker = TimePicker()

# 设置当前时间
timePicker.setTime(QTime(13, 53, 26))

# 获取当前时间
print(timePicker.time)

# 时间发生改变
timePicker.timeChanged.connect(lambda time: print(time.toString()))
```

可通过继承 `PickerColumnFormatter` 的方式来修改 `TimePicker` 每一列的格式：
```python
class SecondsFormatter(PickerColumnFormatter):
    """ Seconds formatter """

    def encode(self, value):
        return str(value) + "秒"

    def decode(self, value: str):
        return int(value[:-1])


# 使用自定义的秒格式（第三列）
timePicker.setColumnFormatter(2, SecondsFormatter())
```

如果想显示或隐藏某一列：
```python
timePicker.setColumnVisible(0, False)   # 隐藏小时
timePicker.setColumnVisible(1, False)   # 隐藏分钟
timePicker.setColumnVisible(2, True)    # 显示秒
```

### [AMTimePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.AMTimePicker)

![AMTimePicker](/img/components/timepicker/AMTimePicker.png)

`AMTimePicker` 用于选择 AM/PM 小时制的时间，使用方式和 [TimePicker](#timepicker) 相同。

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [TimePicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/date_time/time_picker.h)

```cpp
#include <components/date_time/time_picker.h>

auto* picker = new qfw::TimePicker(parent);
picker->setTime(QTime(9, 30));
picker->setSecondVisible(true);
QObject::connect(picker, &qfw::TimePicker::timeChanged, parent, [](const QTime& time) { qDebug() << time; });
```

### C++ [AMTimePicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/date_time/time_picker.h)

```cpp
#include <components/date_time/time_picker.h>

auto* picker = new qfw::AMTimePicker(parent);
picker->setTime(QTime(9, 30));
picker->setSecondVisible(true);
QObject::connect(picker, &qfw::AMTimePicker::timeChanged, parent, [](const QTime& time) { qDebug() << time; });
```

</template>
</LanguageTabs>
