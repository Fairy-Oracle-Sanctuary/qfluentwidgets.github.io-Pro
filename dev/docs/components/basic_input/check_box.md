---
title: Check Box
date: 2024-02-25 19:15:01
permalink: /pages/components/checkbox/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [CheckBox](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/check_box/index.html#qfluentwidgets.components.widgets.check_box.CheckBox)

![CheckBox](/img/components/checkbox/CheckBox.jpg)

`CheckBox` is used to represent the selection operation, and its usage is the same as `QCheckBox`.

```python
checkBox = CheckBox("Text")

# Check the checkbox
checkBox.setChecked(True)

# Listen for checkbox state change signals
checkBox.stateChanged.connect(lambda: print(checkBox.isChecked()))
```

`CheckBox` also supports tri-state:
![CheckBox](/img/components/checkbox/CheckBoxPartialChecked.jpg)
```python
checkBox.setTristate(True)
checkBox.setCheckState(Qt.PartiallyChecked)
```

### [SubtitleCheckBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/check_box.py)

![SubtitleCheckBox](/img/components/checkbox/SubtitleCheckBox.png)

`SubtitleCheckBox` is a checkbox with a subtitle, and its usage is the same as `QCheckBox`.

```python
from qfluentwidgets_pro import SubtitleCheckBox

button = SubtitleCheckBox('Automatic', 'Check for updates automatically.')
button.setChecked(True)
button.toggled.connect(lambda checked: print(checked))
```

</template>
<template #cpp>

Images are shared with the corresponding Python components on this page for appearance reference. Use the examples below for the C++ APIs.


These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [CheckBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/check_box.h)

![CheckBox](/img/components/checkbox/CheckBox.jpg)

```cpp
#include <components/widgets/check_box.h>

auto* box = new qfw::CheckBox(QStringLiteral("Enable notifications"), parent);
box->setChecked(true);
box->setTristate(true);
QObject::connect(box, &QCheckBox::stateChanged, parent, [](int state) { qDebug() << state; });
```

### C++ [SubtitleCheckBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/subtitle_button.h)

![SubtitleCheckBox](/img/components/checkbox/SubtitleCheckBox.png)

```cpp
#include <components/widgets/subtitle_button.h>
auto* widget = new qfw::SubtitleCheckBox(QStringLiteral("Sync"), QStringLiteral("Keep local changes synchronized"), parent);
widget->setChecked(true);
```

</template>
</LanguageTabs>

