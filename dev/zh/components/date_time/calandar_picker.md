---
title: 日历选择器
date: 2024-02-26 14:08:01
permalink: /zh/pages/components/calendarpicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [CalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.CalendarPicker)

![CalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

`CalendarPicker` 用于选择日期，当选择的日期发生改变时会发送 `dateChanged` 信号。

```python
calendarPicker = CalendarPicker()

# 设置当前日期
calendarPicker.setDate(QDate(2024, 2, 26))

# 获取当前日期
print(calendarPicker.date)

# 日期发生改变
calendarPicker.dateChanged.connect(lambda date: print(date.toString()))
```

设置日期格式：

```python
calendarPicker.setDateFormat(Qt.TextDate)
calendarPicker.setDateFormat('yyyy-M-d')
```

### [FastCalendarPicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/calendar_picker/index.html#qfluentwidgets.components.date_time.calendar_picker.FastCalendarPicker)

![FastCalendarPicker](/img/components/calendarpicker/CalendarPicker.png)

`FastCalendarPicker` 用法和 [CalendarPicker](#calendarpicker) 完全一致，但是弹出速度更快，内存占用更小。

### [RangeCalendarPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/range_calendar_picker.py)

![RangeCalendarPicker](/img/components/calendarpicker/RangeCalendarPicker.png)

`RangeCalendarPicker` 用于选择日期范围。

```python
from PySide6.QtCore import QDate
from qfluentwidgets_pro import RangeCalendarPicker

picker = RangeCalendarPicker()
picker.setDateRange(QDate.currentDate(), QDate.currentDate().addDays(7))
picker.rangeChanged.connect(lambda start, end: print(start, end))
```

### [FastRangeCalendarPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/range_calendar_picker.py)

日期范围选择器的快速版本，用法与 `RangeCalendarPicker` 一致。

```python
from PySide6.QtCore import QDate
from qfluentwidgets_pro import FastRangeCalendarPicker

picker = FastRangeCalendarPicker()
picker.setDateRange(QDate.currentDate(), QDate.currentDate().addDays(7))
picker.rangeChanged.connect(lambda start, end: print(start, end))
```

### [CalendarTimePicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/calendar_time_picker.py)

在同一弹窗中选择日期和时间。

```python
from PySide6.QtCore import QDateTime
from qfluentwidgets_pro import CalendarTimePicker

picker = CalendarTimePicker()
picker.setDateTime(QDateTime.currentDateTime())
picker.setDateTimeFormat('yyyy-MM-dd HH:mm:ss')
picker.dateTimeChanged.connect(lambda value: print(value.toString()))
```

### [FastCalendarTimePicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/date_time/calendar_time_picker.py)

日期时间选择器的快速版本。

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

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `RangeCalendarPicker`
- `FastRangeCalendarPicker`
- `CalendarTimePicker`
- `FastCalendarTimePicker`

</template>
</LanguageTabs>
