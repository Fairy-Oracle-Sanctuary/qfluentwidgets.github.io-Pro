---
title: Spin Box
date: 2024-02-27 17:42:00
permalink: /pages/components/spinbox/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [SpinBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.SpinBox)

![SpinBox](/img/components/spinbox/SpinBox.png)

`SpinBox` is used to allow users to select an integer value within a certain range, and it is used in the same way as `QSpinBox`. `CompactSpinBox` is the compact version of `SpinBox`.

```python
spinBox = SpinBox()

# Set the range of values
spinBox.setRange(0, 100)

# Set the current value
spinBox.setValue(30)

# Listen for value change signal
spinBox.valueChanged.connect(lambda value: print("Current value:", value))

# Get the current value
print(spinBox.value())
```

### [DoubleSpinBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DoubleSpinBox)

![DoubleSpinBox](/img/components/spinbox/DoubleSpinBox.png)

`DoubleSpinBox` is used to allow users to select a floating-point value within a certain range, and it is used in the same way as `QDoubleSpinBox`. `CompactDoubleSpinBox` is the compact version of `DoubleSpinBox`.

```python
spinBox = DoubleSpinBox()

# Set the range of values
spinBox.setRange(-100, 100)

# Set the current value
spinBox.setValue(30.5)

# Listen for value change signal
spinBox.valueChanged.connect(lambda value: print("Current value:", value))

# Get the current value
print(spinBox.value())
```


### [TimeEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.TimeEdit)

![TimeEdit](/img/components/spinbox/TimeEdit.png)

`TimeEdit` is used to allow users to select a time within a certain time range, and it is used in the same way as `QTimeEdit`. `CompactTimeEdit` is the compact version of `TimeEdit`.

```python
timeEdit = TimeEdit()

# Set the range of values
timeEdit.setTimeRange(QTime(0, 0, 0), QTime(11, 59, 59))

# Set the current value
timeEdit.setTime(QTime(1, 1, 1))

# Listen for value change signal
timeEdit.timeChanged.connect(lambda time: print("Current time:", time.toString()))

# Get the current value
print(timeEdit.time())
```


### [DateEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DateEdit)

![DateEdit](/img/components/spinbox/DateEdit.png)

`DateEdit` is used to allow users to select a date within a certain date range, and it is used in the same way as `QDateEdit`. `CompactDateEdit` is the compact version of `DateEdit`.

```python
dateEdit = DateEdit()

# Set the range of values
dateEdit.setDateRange(QDate(2024, 1, 1), QDate(2024, 11, 11))

# Set the current value
dateEdit.setDate(QDate(2024, 2, 2))

# Listen for value change signal
dateEdit.dateChanged.connect(lambda date: print("Current date:", date.toString()))

# Get the current value
print(dateEdit.date())
```

### [DateTimeEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DateTimeEdit)

![DateTimeEdit](/img/components/spinbox/DateTimeEdit.png)

`DateTimeEdit` is used to allow users to select a date and time within a certain range, and it is used in the same way as `QDateTimeEdit`. `CompactDateTimeEdit` is the compact version of `DateTimeEdit`.

```python
dt = DateTimeEdit()

# Set the range of values
dt.setDateTimeRange(QDate(2024, 1, 1, 0, 0, 0), QDate(2024, 11, 11, 11, 59, 59))

# Set the current value
dt.setDateTime(QDateTime(2024, 2, 2, 12, 0, 0))

# Listen for value change signal
dt.dateTimeChanged.connect(lambda dateTime: print("Current date and time:", dateTime.toString()))

# Get the current value
print(dt.dateTime())
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [SpinBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/spin_box.h)

```cpp
#include <components/widgets/spin_box.h>

auto* spin = new qfw::SpinBox(parent);
spin->setRange(0, 100);
spin->setValue(20);
QObject::connect(spin, QOverload<int>::of(&QSpinBox::valueChanged), parent, [](int value) { qDebug() << value; });
```

### C++ [DoubleSpinBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/spin_box.h)

```cpp
#include <components/widgets/spin_box.h>

auto* spin = new qfw::DoubleSpinBox(parent);
spin->setRange(0.0, 100.0);
spin->setDecimals(2);
spin->setValue(12.5);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `TimeEdit`
- `DateEdit`
- `DateTimeEdit`

</template>
</LanguageTabs>
