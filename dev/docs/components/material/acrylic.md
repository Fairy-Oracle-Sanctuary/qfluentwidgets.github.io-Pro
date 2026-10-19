---
title: Acrylic materials
date: 2026-10-11
permalink: /pages/components/acrylic/
---

C++ acrylic widgets use local backdrop capture, blur, and theme tinting. They belong to `qtfluentwidgets` and require neither WebEngine nor Python image libraries. Window Mica uses a separate system backdrop; see [window backdrop recovery](/pages/components/fluentwindow/).

## C++ line edits and combo boxes

Acrylic line edits retain text editing, completion, and context menus. Combo boxes use acrylic popup lists. The input itself retains the Fluent input style.

The images below show the corresponding Python widgets as appearance references for C++.

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

Use `AcrylicEditableComboBox` for an editable selector and `AcrylicSearchLineEdit` for search input. `AcrylicComboBoxSettingCard` binds a configuration option; keep the configuration object alive while the card uses it.

## C++ tooltips

![AcrylicToolTip](/img/components/python/AcrylicToolTip.png)

```cpp
#include <components/material/acrylic_tool_tip.h>
#include <components/widgets/button.h>

auto* button = new qfw::PushButton(QStringLiteral("Hover here"), parent);
button->setToolTip(QStringLiteral("Acrylic tooltip"));
button->installEventFilter(new qfw::AcrylicToolTipFilter(button, 300, qfw::ToolTipPosition::Top));
```

Menu types include `AcrylicMenu`, `AcrylicCheckableMenu`, and their system-tray counterparts. Use `AcrylicFlyout` for flyouts. `AcrylicWidget` provides a general material container; subclasses can override `acrylicClipPath()` to customize clipping.

Backdrop capture depends on the platform and available desktop content. Check both themes, popup placement, and the host window backdrop. The C++ Gallery material page contains interactive examples.
