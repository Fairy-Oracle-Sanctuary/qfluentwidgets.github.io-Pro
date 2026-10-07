---
title: 单选按钮
date: 2024-02-26 11:29:01
permalink: /zh/pages/components/radiobutton/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [RadioButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/button/index.html#qfluentwidgets.components.widgets.button.RadioButton)

![RadioButton](/img/components/radiobutton/RadioButton.png)

`RadioButton` 用于在一组备选项中进行单选，使用方式与 `QRadioButton` 相同，一般和 `QButtonGroup` 组合使用。

```python
w = QWidget()

button1 = RadioButton('Option 1')
button2 = RadioButton('Option 2')
button3 = RadioButton('Option 3')

# 将单选按钮添加到互斥的按钮组
buttonGroup = QButtonGroup(w)
buttonGroup.addButton(button1)
buttonGroup.addButton(button2)
buttonGroup.addButton(button3)

# 当前选中的按钮发生改变
buttonGroup.buttonToggled.connect(lambda button: print(button.text()))

# 选中第一个按钮
button1.setChecked(True)

# 将按钮添加到垂直布局
layout = QVBoxLayout(w)
layout.addWidget(button1, 0, Qt.AlignCenter)
layout.addWidget(button2, 0, Qt.AlignCenter)
layout.addWidget(button3, 0, Qt.AlignCenter)
```

### [SubtitleRadioButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![](/img/components/radiobutton/SubtitleRadioButton.png)

`SubtitleRadioButton` 带有标题和子标题，用于在一组备选项中进行单选，使用方式与 `QRadioButton` 相同。

```python
from qfluentwidgets_pro import SubtitleRadioButton

button = SubtitleRadioButton('Automatic', 'Check for updates automatically.')
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

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `SubtitleRadioButton`

</template>
</LanguageTabs>

