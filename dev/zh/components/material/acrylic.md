---
title: 亚克力材质
date: 2026-10-11
permalink: /zh/pages/components/acrylic/
---

C++ 亚克力组件使用本地背景采样、模糊和主题色叠加；它们属于 `qtfluentwidgets`，无需 WebEngine 或 Python 图像库。窗口云母是另一套系统背景效果，参见[窗口背景恢复](/zh/pages/components/fluentwindow/)。

## C++ 输入框与下拉框

亚克力输入框保留文本编辑、补全和上下文菜单；下拉框将弹出列表替换为亚克力菜单。输入框本身仍沿用 Fluent 输入控件样式。

以下展示图来自 Python 对应组件，供 C++ 外观参考。

![AcrylicLineEdit](/img/components/python/AcrylicLineEdit.png)

![AcrylicComboBox](/img/components/python/AcrylicComboBox.png)

```cpp
#include <components/material/acrylic_line_edit.h>
#include <components/material/acrylic_combo_box.h>
#include <QCompleter>
#include <QVBoxLayout>

auto* layout = new QVBoxLayout(parent);
auto* edit = new qfw::AcrylicLineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Search"));
edit->setCompleter(new QCompleter(QStringList{QStringLiteral("Qt"), QStringLiteral("Fluent")}, edit));
layout->addWidget(edit);
auto* combo = new qfw::AcrylicComboBox(parent);
combo->addItems(QStringList{QStringLiteral("Light"), QStringLiteral("Dark")});
layout->addWidget(combo);
```

可编辑选择器使用 `AcrylicEditableComboBox`，搜索框使用 `AcrylicSearchLineEdit`。配置项选择使用 `AcrylicComboBoxSettingCard`，配置对象必须在卡片使用期间保持有效。

## C++ 提示

![AcrylicToolTip](/img/components/python/AcrylicToolTip.png)

```cpp
#include <components/material/acrylic_tool_tip.h>
#include <components/widgets/button.h>

auto* button = new qfw::PushButton(QStringLiteral("Hover here"), parent);
button->setToolTip(QStringLiteral("Acrylic tooltip"));
button->installEventFilter(new qfw::AcrylicToolTipFilter(button, 300, qfw::ToolTipPosition::Top));
```

菜单类型包括 `AcrylicMenu`、`AcrylicCheckableMenu` 与对应系统托盘菜单；飞出浮层使用 `AcrylicFlyout`。通用材质容器为 `AcrylicWidget`，需要派生类调整裁剪路径时可覆写 `acrylicClipPath()`。

背景采样受平台和可用桌面内容影响。查看效果时，应同时检查亮暗主题、弹出位置和宿主窗口背景。完整交互示例位于 C++ Gallery 的材质页面。
