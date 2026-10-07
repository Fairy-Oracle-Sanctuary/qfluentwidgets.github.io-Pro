---
title: Navigation Dialog
date: 2025-01-24 19:00:22
permalink: /pages/components/navigationdialog/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### TopNavigationDialog

![TopNavigationDialog](/img/components/fluent_window/TopNavigationDialog.png)

`TopNavigationDialog` is a modal dialog with a top navigation bar, suitable for scenarios involving multi‑page settings or functional grouping.

> The upstream description and screenshot are retained here. This fork does not yet implement `TopNavigationDialog`, so no runnable example is provided.

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `TopNavigationDialog`

</template>
</LanguageTabs>

