---
title: Command Bar
date: 2024-02-26 21:00:00
permalink: /pages/components/commandbar/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

### [CommandBar](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/command_bar/index.html#qfluentwidgets.components.widgets.command_bar.CommandBar)

![CommandBar](/img/components/commandbar/CommandBar.png)

`CommandBar` is used to provide horizontally arranged actions for users to choose from. When there are too many actions to fit in the viewport, `CommandBar` will automatically hide the actions that exceed the viewport into a drop-down menu.

```python
commandBar = CommandBar()

# Add actions one by one
commandBar.addAction(Action(FluentIcon.ADD, 'Add', triggered=lambda: print("Add")))

# Add a separator
commandBar.addSeparator()

# Add actions in batches
commandBar.addActions([
    Action(FluentIcon.EDIT, 'Edit', checkable=True, triggered=lambda: print("Edit")),
    Action(FluentIcon.COPY, 'Copy'),
    Action(FluentIcon.SHARE, 'Share'),
])

# Add always hidden actions
commandBar.addHiddenAction(Action(FluentIcon.SCROLL, 'Sort', triggered=lambda: print('Sort')))
commandBar.addHiddenAction(Action(FluentIcon.SETTING, 'Settings', shortcut='Ctrl+S'))
```

CommandBar can add custom components:

```python
# Create a transparent drop-down menu button
button = TransparentDropDownPushButton(FluentIcon.MENU, 'Menu')
button.setFixedHeight(34)
setFont(button, 12)

menu = RoundMenu(parent=self)
menu.addActions([
    Action(FluentIcon.COPY, 'Copy'),
    Action(FluentIcon.CUT, 'Cut'),
    Action(FluentIcon.PASTE, 'Paste'),
    Action(FluentIcon.CANCEL, 'Cancel'),
    Action('Select all'),
])
button.setMenu(menu)

# Add custom components
commandBar.addWidget(button)
```

By default, `CommandBar` only displays the action's icon. To change the display mode:
```python
# Display text to the right of the icon
commandBar.setToolButtonStyle(Qt.ToolButtonTextBesideIcon)

# Display text under the icon
commandBar.setToolButtonStyle(Qt.ToolButtonTextUnderIcon)
```

### [CommandBarView](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/command_bar/index.html#qfluentwidgets.components.widgets.command_bar.CommandBarView)

![CommandBarView](/img/components/commandbar/CommandBarView.png)


`CommandBarView` is used with `Flyout`, and its usage is almost the same as [CommandBar](#commandbar).

```python
commandBar = CommandBarView()

commandBar.addAction(Action(FluentIcon.SHARE, 'Share'))
commandBar.addAction(Action(FluentIcon.SAVE, 'Save'))
commandBar.addAction(Action(FluentIcon.DELETE, 'Delete'))

commandBar.addHiddenAction(Action(FluentIcon.APPLICATION, 'App', shortcut='Ctrl+A'))
commandBar.addHiddenAction(Action(FluentIcon.SETTING, 'Settings', shortcut='Ctrl+S'))
commandBar.resizeToSuitableWidth()

target = PushButton("Click Me")
Flyout.make(commandBar, target=target, parent=target, aniType=FlyoutAnimationType.FADE_IN)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [CommandBar](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/command_bar.h)

```cpp
#include <components/widgets/command_bar.h>

auto* bar = new qfw::CommandBar(parent);
bar->addAction(new qfw::Action(qfw::FluentIcon(qfw::FluentIconEnum::Add), QStringLiteral("Add"), bar));
bar->addSeparator();
bar->addAction(new qfw::Action(QStringLiteral("Save"), bar));
```

### C++ [CommandBarView](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/command_bar.h)

```cpp
#include <components/widgets/command_bar.h>

auto* bar = new qfw::CommandBarView(parent);
bar->addAction(new qfw::Action(qfw::FluentIcon(qfw::FluentIconEnum::Add), QStringLiteral("Add"), bar));
bar->addSeparator();
bar->addAction(new qfw::Action(QStringLiteral("Save"), bar));
```

</template>
</LanguageTabs>
