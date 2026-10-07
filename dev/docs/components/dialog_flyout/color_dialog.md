---
title: Color Picker
date: 2024-02-26 16:55:01
permalink: /pages/components/colorpicker/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ColorDialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/color_dialog/index.html)

![ColorDialog](/img/components/colordialog/ColorDialog.png)

`ColorDialog` is used to select colors, and when the selected color changes, a `colorChanged(color: QColor)` signal will be sent.

```python
w = ColorDialog(QColor(0, 255, 255), "Choose Background Color", window, enableAlpha=False)
w.colorChanged.connect(lambda color: print(color.name()))
w.exec()
```

### [DropDownColorPalette](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_down_color_palette.py)

![DropDownColorPalette](/img/components/colordialog/DropDownColorPalette.png)

`DropDownColorPalette` provides a range of colors for users to choose from.

```python
from qfluentwidgets_pro import DropDownColorPalette

picker = DropDownColorPalette('#0078d4')
picker.colorChanged.connect(lambda color: print(color.name()))
```

### [DropDownColorPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_down_color_picker.py)

![DropDownColorPicker](/img/components/colordialog/DropDownColorPicker.png)

`DropDownColorPicker` provides a pop-up window for users to adjust and pick colors.

```python
from qfluentwidgets_pro import DropDownColorPicker

picker = DropDownColorPicker('#0078d4')
picker.colorChanged.connect(lambda color: print(color.name()))
```

### [CircleColorPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/circle_color_picker.py)

![CircleColorPicker](/img/components/colordialog/CircleColorPicker.png)

`CircleColorPicker` provides a range of colors for users to choose from.

```python
from qfluentwidgets_pro import CircleColorPicker

picker = CircleColorPicker(['#0078d4', '#16c79a', '#ffc857'])
picker.setCurrentIndex(0)
picker.colorChanged.connect(lambda color: print(color.name()))
```

### [ScreenColorPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/screen_color_picker.py)

![ScreenColorPicker](/img/components/colordialog/ScreenColorPicker.png)

`ScreenColorPicker` is used to pick colors from any location on the screen.

```python
from qfluentwidgets_pro import ScreenColorPicker

picker = ScreenColorPicker('#0078d4')
picker.colorChanged.connect(lambda color: print(color.name()))
picker.setFreezeScreenEnabled(True)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ColorDialog](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/dialog_box/color_dialog.h)

```cpp
#include <components/dialog_box/color_dialog.h>

qfw::ColorDialog dialog(QColor("#0ea5e9"), QStringLiteral("Choose a color"), parent);
QObject::connect(&dialog, &qfw::ColorDialog::colorChanged, parent, [](const QColor& color) { qDebug() << color; });
dialog.exec();
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `DropDownColorPalette`
- `DropDownColorPicker`
- `CircleColorPicker`
- `ScreenColorPicker`

</template>
</LanguageTabs>

