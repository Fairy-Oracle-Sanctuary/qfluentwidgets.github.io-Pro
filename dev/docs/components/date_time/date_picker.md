---
title: Date Picker
date: 2024-02-26 12:32:01
permalink: /pages/components/datepicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [DatePicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/date_picker/index.html#qfluentwidgets.components.date_time.date_picker.DatePicker)

![DatePicker](/img/components/datepicker/DatePicker.png)

`DatePicker` is used to select a date. When the selected date changes, it will send a `dateChanged` signal.

```python
datePicker = DatePicker()

# Set the current date
datePicker.setDate(QDate(2024, 2, 26))

# Get the current date
print(datePicker.date)

# Date changes
datePicker.dateChanged.connect(lambda date: print(date.toString()))
```

You can modify the format of each column of `DatePicker` by inheriting from `PickerColumnFormatter`:
```python
class MonthFormatter(PickerColumnFormatter):
    """ Month formatter """

    def encode(self, value):
        # Here the range of value is 1-12
        return str(value) + "😊"

    def decode(self, value: str):
        return int(value[:-1])


# Use the custom month format (first column)
datePicker.setColumnFormatter(0, MonthFormatter())
```

### [ZhDatePicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/date_picker/index.html#qfluentwidgets.components.date_time.date_picker.ZhDatePicker)

![ZhDatePicker](/img/components/datepicker/ZhDatePicker.png)

`ZhDatePicker` is used to select dates in Chinese format. The usage is the same as [DatePicker](#datepicker).

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [DatePicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/date_time/date_picker.h)

```cpp
#include <components/date_time/date_picker.h>

auto* picker = new qfw::DatePicker(parent);
picker->setDate(QDate::currentDate());
QObject::connect(picker, &qfw::DatePicker::dateChanged, parent, [](const QDate& date) { qDebug() << date; });
```

### C++ [ZhDatePicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/date_time/date_picker.h)

```cpp
#include <components/date_time/date_picker.h>

auto* picker = new qfw::ZhDatePicker(parent);
picker->setDate(QDate::currentDate());
QObject::connect(picker, &qfw::ZhDatePicker::dateChanged, parent, [](const QDate& date) { qDebug() << date; });
```

</template>
</LanguageTabs>
