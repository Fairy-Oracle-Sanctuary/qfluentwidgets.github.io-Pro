---
title: 微调框
date: 2024-02-27 17:42:00
permalink: /zh/pages/components/spinbox/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [SpinBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.SpinBox)

![SpinBox](/img/components/spinbox/SpinBox.png)

`SpinBox` 用于让用户在一定范围内选择一个整数值，使用方法和 `QSpinBox` 完全相同。`CompactSpinBox` 是紧凑版本的 `SpinBox`。

```python
spinBox = SpinBox()

# 设置取值范围
spinBox.setRange(0, 100)

# 设置当前值
spinBox.setValue(30)

# 监听数值改变信号
spinBox.valueChanged.connect(lambda value: print("当前值：", value))

# 获取当前值
print(spinBox.value())
```

### [DoubleSpinBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DoubleSpinBox)

![DoubleSpinBox](/img/components/spinbox/DoubleSpinBox.png)

`DoubleSpinBox` 用于让用户在一定范围内选择一个整数值，使用方法和 `QDoubleSpinBox` 完全相同。`CompactDoubleSpinBox` 是紧凑版本的 `DoubleSpinBox`。

```python
spinBox = DoubleSpinBox()

# 设置取值范围
spinBox.setRange(-100, 100)

# 设置当前值
spinBox.setValue(30.5)

# 监听数值改变信号
spinBox.valueChanged.connect(lambda value: print("当前值：", value))

# 获取当前值
print(spinBox.value())
```


### [TimeEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.TimeEdit)

![TimeEdit](/img/components/spinbox/TimeEdit.png)

`TimeEdit` 用于让用户在一定时间范围内选择一个时间，使用方法和 `QTimeEdit` 完全相同。`CompactTimeEdit` 是紧凑版本的 `TimeEdit`。

```python
timeEdit = TimeEdit()

# 设置取值范围
timeEdit.setTimeRange(QTime(0, 0, 0), QTime(11, 59, 59))

# 设置当前值
timeEdit.setTime(QTime(1, 1, 1))

# 监听数值改变信号
timeEdit.timeChanged.connect(lambda time: print("当前时间：", time.toString()))

# 获取当前值
print(timeEdit.time())
```


### [DateEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DateEdit)

![DateEdit](/img/components/spinbox/DateEdit.png)

`DateEdit` 用于让用户在一定日期范围内选择一个日期，使用方法和 `QDateEdit` 完全相同。`CompactDateEdit` 是紧凑版本的 `DateEdit`。

```python
dateEdit = DateEdit()

# 设置取值范围
dateEdit.setDateRange(QDate(2024, 1, 1), QDate(2024, 11, 11))

# 设置当前值
dateEdit.setDate(QDate(2024, 2, 2))

# 监听数值改变信号
dateEdit.dateChanged.connect(lambda date: print("当前日期：", date.toString()))

# 获取当前值
print(dateEdit.date())
```

### [DateTimeEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/spin_box/index.html#qfluentwidgets.components.widgets.spin_box.DateTimeEdit)

![DateTimeEdit](/img/components/spinbox/DateTimeEdit.png)

`DateTimeEdit` 用于让用户在一定日期范围内选择一个日期，使用方法和 `QDateTimeEdit` 完全相同。`CompactDateTimeEdit` 是紧凑版本的 `DateTimeEdit`。

```python
dt = DateTimeEdit()

# 设置取值范围
dt.setDateTimeRange(QDate(2024, 1, 1, 0, 0, 0), QDate(2024, 11, 11, 11, 59, 59))

# 设置当前值
dt.setDateTime(QDateTime(2024, 2, 2, 12, 0, 0))

# 监听数值改变信号
dt.dateTimeChanged.connect(lambda dateTime: print("当前日期时间：", dateTime.toString()))

# 获取当前值
print(dt.dateTime())
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `TimeEdit`
- `DateEdit`
- `DateTimeEdit`

</template>
</LanguageTabs>
