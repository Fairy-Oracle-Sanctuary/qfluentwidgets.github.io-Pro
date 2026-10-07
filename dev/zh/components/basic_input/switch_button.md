---
title: 开关按钮
date: 2024-02-26 11:29:01
permalink: /zh/pages/components/switchbutton/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [SwitchButton](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/switch_button/index.html#qfluentwidgets.components.widgets.switch_button.SwitchButton)

![SwitchButton](/img/components/switchbutton/SwitchButton.png)

`SwitchButton` 表示两种相互对立的状态间的切换，多用于触发「开/关」，开关状态改变时会发送 `checkedChanged(checked: bool)` 信号。

```python
button = SwitchButton()

button.checkedChanged.connect(lambda checked: print("是否选中按钮：", checked))

# 更改按钮状态
button.setChecked(True)

# 获取按钮是否选中
print(button.isChecked())
```

默认情况下按钮文本为「关/开」，可按照下述操作修改：
```python
button.setOffText("关闭")
button.setOnText("开启")
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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
