---
title: 标签
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/label/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [FluentLabelBase](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.FluentLabelBase)

![FluentLabel](/img/components/label/FluentLabel.png)

`FluentLabelBase` 用于显示文本，可以跟随主题切换文本颜色。这是个抽象类，通常使用它的子类：
* CaptionLabel
* BodyLabel
* StrongBodyLabel
* SubtitleLabel
* TitleLabel
* LargeTitleLabel
* DisplayLabel

可以自定义标签的颜色：
```python
label = BodyLabel("标签")
label.setTextColor(QColor(0, 255, 0), QColor(255, 0, 0))  # 浅色主题，深色主题
```

### [HyperlinkLabel](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.HyperlinkLabel)

![HyperlinkLabel](/img/components/label/HyperlinkLabel.png)

`HyperlinkLabel` 可在点击时自动跳转到指定链接。

```python
label = HyperlinkLabel(QUrl('https://github.com/'), 'GitHub')

# 显示下划线
hyperlinkLabel.setUnderlineVisible(True)

# 更换超链接
label.setUrl('https://github.com/zhiyiYo/')
print(label.url)
```

### [Watermark](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/watermark.py)

覆盖在目标组件上的文本水印，支持角度、透明度和间距设置，不拦截鼠标事件。

水印会跟随目标组件尺寸变化，且不拦截鼠标；需要覆盖某个内容区时，把该内容区作为 parent 传入。

```python
from qfluentwidgets_pro import Watermark

self.watermark = Watermark('Fairy Oracle Sanctuary', self)
self.watermark.setAngle(-15)
self.watermark.setOpacity(0.12)
self.watermark.setSpacing(80, 60)
self.watermark.show()
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [FluentLabelBase](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/label.h)

本例使用 C++ 中的 `BodyLabel`，与 Python 的类名或使用方式不同。

```cpp
#include <components/widgets/label.h>

auto* label = new qfw::BodyLabel(QStringLiteral("Body text"), parent);
label->setTextInteractionFlags(Qt::TextSelectableByMouse);
```

### C++ [HyperlinkLabel](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/label.h)

```cpp
#include <components/widgets/label.h>

auto* label = new qfw::HyperlinkLabel(QStringLiteral("https://fairy.ora-san.org/"), QStringLiteral("Visit website"), parent);
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `Watermark`

</template>
</LanguageTabs>
