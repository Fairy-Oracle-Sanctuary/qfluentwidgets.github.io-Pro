---
title: Time Picker
date: 2024-02-26 13:45:01
permalink: /pages/components/timepicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [TimePicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.TimePicker)

![TimePicker](/img/components/timepicker/TimePicker.png)

`TimePicker` is used to select time in 24-hour format. When the selected time changes, it will send a `timeChanged` signal.

```python
timePicker = TimePicker()

# Set the current time
timePicker.setTime(QTime(13, 53, 26))

# Get the current time
print(timePicker.time)

# Time changes
timePicker.timeChanged.connect(lambda time: print(time.toString()))
```

You can modify the format of each column of `TimePicker` by inheriting from `PickerColumnFormatter`:
```python
class SecondsFormatter(PickerColumnFormatter):
    """ Seconds formatter """

    def encode(self, value):
        return str(value) + " seconds"

    def decode(self, value: str):
        return int(value[:-6])

# Use the custom seconds format (third column)
timePicker.setColumnFormatter(2, SecondsFormatter())
```

If you want to show or hide a certain column:
```python
timePicker.setColumnVisible(0, False)   # Hide hours
timePicker.setColumnVisible(1, False)   # Hide minutes
timePicker.setColumnVisible(2, True)    # Show seconds
```

### [AMTimePicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.AMTimePicker)

![AMTimePicker](/img/components/timepicker/AMTimePicker.png)

`AMTimePicker` is used to select time in AM/PM format. The usage is the same as [TimePicker](#timepicker).

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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
