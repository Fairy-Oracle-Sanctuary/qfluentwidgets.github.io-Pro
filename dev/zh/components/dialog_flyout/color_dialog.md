---
title: 颜色选择器
date: 2024-02-26 16:55:01
permalink: /zh/pages/components/colorpicker/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ColorDialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/color_dialog/index.html)

![ColorDialog](/img/components/colordialog/ColorDialog.png)

`ColorDialog` 用于选择颜色，选中的颜色发生变化时会发送 `colorChanged(color: QColor)` 信号。

```python
w = ColorDialog(QColor(0, 255, 255), "Choose Background Color", window, enableAlpha=False)
w.colorChanged.connect(lambda color: print(color.name()))
w.exec()
```


### [DropDownColorPalette](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_down_color_palette.py)

![DropDownColorPalette](/img/components/colordialog/DropDownColorPalette.png)

`DropDownColorPalette` 提供了一系列颜色供用户选择。

```python
from qfluentwidgets_pro import DropDownColorPalette

picker = DropDownColorPalette('#0078d4')
picker.colorChanged.connect(lambda color: print(color.name()))
```

### [DropDownColorPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/drop_down_color_picker.py)

![DropDownColorPicker](/img/components/colordialog/DropDownColorPicker.png)

`DropDownColorPicker` 提供了弹出窗口供用户调整和挑选颜色。

```python
from qfluentwidgets_pro import DropDownColorPicker

picker = DropDownColorPicker('#0078d4')
picker.colorChanged.connect(lambda color: print(color.name()))
```

### [CircleColorPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/circle_color_picker.py)

![CircleColorPicker](/img/components/colordialog/CircleColorPicker.png)

`CircleColorPicker` 提供了一系列颜色供用户选择。

```python
from qfluentwidgets_pro import CircleColorPicker

picker = CircleColorPicker(['#0078d4', '#16c79a', '#ffc857'])
picker.setCurrentIndex(0)
picker.colorChanged.connect(lambda color: print(color.name()))
```

### [ScreenColorPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/screen_color_picker.py)

![ScreenColorPicker](/img/components/colordialog/ScreenColorPicker.png)

`ScreenColorPicker` 用于选取屏幕任意位置的颜色。

```python
from qfluentwidgets_pro import ScreenColorPicker

picker = ScreenColorPicker('#0078d4')
picker.colorChanged.connect(lambda color: print(color.name()))
picker.setFreezeScreenEnabled(True)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `DropDownColorPalette`
- `DropDownColorPicker`
- `CircleColorPicker`
- `ScreenColorPicker`

</template>
</LanguageTabs>

