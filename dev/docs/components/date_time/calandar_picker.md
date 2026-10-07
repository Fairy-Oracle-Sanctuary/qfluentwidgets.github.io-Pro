---
title: Calendar Picker
date: 2024-02-26 14:08:01
permalink: /pages/components/calendarpicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [CalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.CalendarPicker)

![CalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

`CalendarPicker` is used to select a date. When the selected date changes, it will send a `dateChanged` signal.

```python
calendarPicker = CalendarPicker()

# Set the current date
calendarPicker.setDate(QDate(2024, 2, 26))

# Get the current date
print(calendarPicker.date)

# Date changes
calendarPicker.dateChanged.connect(lambda date: print(date.toString()))
```

Set date format:

```python
calendarPicker.setDateFormat(Qt.TextDate)
calendarPicker.setDateFormat('yyyy-M-d')
```

### [FastCalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.FastCalendarPicker)

![FastCalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

The usage of `FastCalendarPicker` is identical to  [CalendarPicker](#calendarpicker), but it has a faster popup speed and lower memory consumption.

### [RangeCalendarPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/range_calendar_picker.py)

![RangeCalendarPicker](/img/components/calendarpicker/RangeCalendarPicker.png)

`RangeCalendarPicker` is used for selecting a date range.

```python
from PySide6.QtCore import QDate
from qfluentwidgets_pro import RangeCalendarPicker

picker = RangeCalendarPicker()
picker.setDateRange(QDate.currentDate(), QDate.currentDate().addDays(7))
picker.rangeChanged.connect(lambda start, end: print(start, end))
```

### [FastRangeCalendarPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/range_calendar_picker.py)

A fast version of the date-range picker, with the same API as `RangeCalendarPicker`.

```python
from PySide6.QtCore import QDate
from qfluentwidgets_pro import FastRangeCalendarPicker

picker = FastRangeCalendarPicker()
picker.setDateRange(QDate.currentDate(), QDate.currentDate().addDays(7))
picker.rangeChanged.connect(lambda start, end: print(start, end))
```

### [CalendarTimePicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/calendar_time_picker.py)

Select a date and time in a single popup.

```python
from PySide6.QtCore import QDateTime
from qfluentwidgets_pro import CalendarTimePicker

picker = CalendarTimePicker()
picker.setDateTime(QDateTime.currentDateTime())
picker.setDateTimeFormat('yyyy-MM-dd HH:mm:ss')
picker.dateTimeChanged.connect(lambda value: print(value.toString()))
```

### [FastCalendarTimePicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/calendar_time_picker.py)

A fast version of the combined date-time picker.

```python
from PySide6.QtCore import QDateTime
from qfluentwidgets_pro import FastCalendarTimePicker

picker = FastCalendarTimePicker()
picker.setDateTime(QDateTime.currentDateTime())
picker.setDateTimeFormat('yyyy-MM-dd HH:mm:ss')
picker.dateTimeChanged.connect(lambda value: print(value.toString()))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [CalendarPicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/date_time/calendar_picker.h)

```cpp
#include <components/date_time/calendar_picker.h>

auto* picker = new qfw::CalendarPicker(parent);
picker->setDate(QDate::currentDate());
QObject::connect(picker, &qfw::CalendarPicker::dateChanged, parent, [](const QDate& date) { qDebug() << date; });
```

### C++ [FastCalendarPicker](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/date_time/fast_calendar_picker.h)

```cpp
#include <components/date_time/fast_calendar_picker.h>

auto* picker = new qfw::FastCalendarPicker(parent);
picker->setDate(QDate::currentDate());
QObject::connect(picker, &qfw::FastCalendarPicker::dateChanged, parent, [](const QDate& date) { qDebug() << date; });
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `RangeCalendarPicker`
- `FastRangeCalendarPicker`
- `CalendarTimePicker`
- `FastCalendarTimePicker`

</template>
</LanguageTabs>
