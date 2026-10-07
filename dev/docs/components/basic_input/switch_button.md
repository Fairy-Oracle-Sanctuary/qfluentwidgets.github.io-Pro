---
title: Switch Button
date: 2024-02-26 11:29:01
permalink: /pages/components/switchbutton/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [SwitchButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/switch_button/index.html#qfluentwidgets.components.widgets.switch_button.SwitchButton)

![SwitchButton](/img/components/switchbutton/SwitchButton.png)

`SwitchButton` represents the switch between two opposing states, often used to trigger "on/off". When the switch state changes, it will send a `checkChanged(checked: bool)` signal.

```python
button = SwitchButton()

button.checkedChanged.connect(lambda checked: print("Is the button selected: ", checked))

# Change button status
button.setChecked(True)

# Get whether the button is selected
print(button.isChecked())
```

By default, the button text is "Off/On", which can be modified as follows:
```python
button.setOffText("Close")
button.setOnText("Open")
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [SwitchButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/switch_button.h)

```cpp
#include <components/widgets/switch_button.h>

auto* button = new qfw::SwitchButton(QStringLiteral("Notifications"), parent);
button->setChecked(true);
QObject::connect(button, &qfw::SwitchButton::checkedChanged, parent, [](bool checked) { qDebug() << checked; });
```

</template>
</LanguageTabs>
