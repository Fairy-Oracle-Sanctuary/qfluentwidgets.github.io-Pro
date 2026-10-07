---
title: 复选框
date: 2024-02-25 19:15:01
permalink: /zh/pages/components/checkbox/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [CheckBox](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/check_box/index.html#qfluentwidgets.components.widgets.check_box.CheckBox)

![CheckBox](/img/components/checkbox/CheckBox.jpg)

`CheckBox` 用于在一组备选项中进行多选，使用方式与 `QCheckBox` 相同。

```python
checkBox = CheckBox("Text")

# 选中复选框
checkBox.setChecked(True)

# 监听复选框状态改变信号
checkBox.stateChanged.connect(lambda: print(checkBox.isChecked()))
```

`CheckBox` 同样支持三态：
![CheckBox](/img/components/checkbox/CheckBoxPartialChecked.jpg)
```python
checkBox.setTristate(True)
checkBox.setCheckState(Qt.PartiallyChecked)
```

### [SubtitleCheckBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/check_box.py)

![SubtitleCheckBox](/img/components/checkbox/SubtitleCheckBox.png)

`SubtitleCheckBox` 是带子标题的复选框，使用方式与 `QCheckBox` 相同。

```python
from qfluentwidgets_pro import SubtitleCheckBox

button = SubtitleCheckBox('Automatic', 'Check for updates automatically.')
button.setChecked(True)
button.toggled.connect(lambda checked: print(checked))
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [CheckBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/check_box.h)

```cpp
#include <components/widgets/check_box.h>

auto* box = new qfw::CheckBox(QStringLiteral("Enable notifications"), parent);
box->setChecked(true);
box->setTristate(true);
QObject::connect(box, &QCheckBox::stateChanged, parent, [](int state) { qDebug() << state; });
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `SubtitleCheckBox`

</template>
</LanguageTabs>

