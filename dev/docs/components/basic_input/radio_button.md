---
title: Radio Button
date: 2024-02-26 11:29:01
permalink: /pages/components/radiobutton/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [RadioButton](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.RadioButton)

![RadioButton](/img/components/radiobutton/RadioButton.png)

`RadioButton` is used for single selection among a group of alternatives, and its usage is the same as `QRadioButton`. It is generally used in combination with `QButtonGroup`.

```python
w = QWidget()

button1 = RadioButton('Option 1')
button2 = RadioButton('Option 2')
button3 = RadioButton('Option 3')

# Add the radio buttons to an exclusive button group
buttonGroup = QButtonGroup(w)
buttonGroup.addButton(button1)
buttonGroup.addButton(button2)
buttonGroup.addButton(button3)

# The currently selected button changes
buttonGroup.buttonToggled.connect(lambda button: print(button.text()))

# Select the first button
button1.setChecked(True)

# Add the buttons to a vertical layout
layout = QVBoxLayout(w)
layout.addWidget(button1, 0, Qt.AlignCenter)
layout.addWidget(button2, 0, Qt.AlignCenter)
layout.addWidget(button3, 0, Qt.AlignCenter)
```


### [SubtitleRadioButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![](/img/components/radiobutton/SubtitleRadioButton.png)

`SubtitleRadioButton` comes with a title and subtitle, used for single selection within a set of options, and is used in the same way as `QRadioButton`.

```python
from qfluentwidgets_pro import SubtitleRadioButton

button = SubtitleRadioButton('Automatic', 'Check for updates automatically.')
button.setChecked(True)
button.toggled.connect(lambda checked: print(checked))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [RadioButton](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/button.h)

```cpp
#include <components/widgets/button.h>

#include <QButtonGroup>

auto* group = new QButtonGroup(parent);
auto* first = new qfw::RadioButton(QStringLiteral("Option A"), parent);
auto* second = new qfw::RadioButton(QStringLiteral("Option B"), parent);
group->addButton(first, 0);
group->addButton(second, 1);
first->setChecked(true);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `SubtitleRadioButton`

</template>
</LanguageTabs>

