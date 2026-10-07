---
title: 日期选择器
date: 2024-02-26 12:32:01
permalink: /zh/pages/components/datepicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [DatePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/date_picker/index.html#qfluentwidgets.components.date_time.date_picker.DatePicker)

![DatePicker](/img/components/datepicker/DatePicker.png)

`DatePicker` 用于选择日期，当选择的日期发生改变时会发送 `dateChanged` 信号。

```python
datePicker = DatePicker()

# 设置当前日期
datePicker.setDate(QDate(2024, 2, 26))

# 获取当前日期
print(datePicker.date)

# 日期发生改变
datePicker.dateChanged.connect(lambda date: print(date.toString()))
```

可通过继承 `PickerColumnFormatter` 的方式来修改 `DatePicker` 每一列的格式：
```python
class MonthFormatter(PickerColumnFormatter):
    """ Month formatter """

    def encode(self, value):
        # 此处 value 的取值范围为 1-12
        return str(value) + "😊"

    def decode(self, value: str):
        return int(value[:-1])


# 使用自定义的月格式（第一列）
datePicker.setColumnFormatter(0, MonthFormatter())
```

### [ZhDatePicker](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/date_time/date_picker/index.html#qfluentwidgets.components.date_time.date_picker.ZhDatePicker)

![ZhDatePicker](/img/components/datepicker/ZhDatePicker.png)

`ZhDatePicker` 用于选择中文格式的日期，使用方法与 [DatePicker](#datepicker) 相同。

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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
