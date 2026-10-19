---
title: Filter
date: 2024-02-26 19:56:01
permalink: /pages/components/litefilter/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![ExclusiveLiteFilter](/img/components/topnavigationbar/ExclusiveLiteFilter.png)

`ExclusiveLiteFilter` provides data filtering functionality with exclusivity (single selection).

```python
from qfluentwidgets_pro import ExclusiveLiteFilter

filterWidget = ExclusiveLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItem('All')
filterWidget.currentTextChanged.connect(lambda value: print(value))
```

### [OutlinedExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![OutlinedExclusiveLiteFilter](/img/components/topnavigationbar/OutlinedExclusiveLiteFilter.png)

`OutlinedExclusiveLiteFilter` is a filter with an outlined style. Its usage is identical to [ExclusiveLiteFilter](#exclusivelitefilter).

```python
from qfluentwidgets_pro import OutlinedExclusiveLiteFilter

filterWidget = OutlinedExclusiveLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItem('All')
filterWidget.currentTextChanged.connect(lambda value: print(value))
```

### [MultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![MultiSelectionLiteFilter](/img/components/topnavigationbar/MultiSelectionLiteFilter.png)

`MultiSelectionLiteFilter` provides data filtering functionality that supports multiple selections for users.

```python
from qfluentwidgets_pro import MultiSelectionLiteFilter

filterWidget = MultiSelectionLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItems(['Active', 'Completed'])
filterWidget.currentItemsChanged.connect(lambda value: print(value))
```

### [OutlinedMultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/exclusive_filter.py)

![OutlinedMultiSelectionLiteFilter](/img/components/topnavigationbar/OutlinedMultiSelectionLiteFilter.png)

`OutlinedMultiSelectionLiteFilter` is a filter with an outlined style. Its usage is identical to [MultiSelectionLiteFilter](#multiselectionlitefilter).

```python
from qfluentwidgets_pro import OutlinedMultiSelectionLiteFilter

filterWidget = OutlinedMultiSelectionLiteFilter()
filterWidget.addItems(['All', 'Active', 'Completed'])
filterWidget.setCurrentItems(['Active', 'Completed'])
filterWidget.currentItemsChanged.connect(lambda value: print(value))
```

</template>
<template #cpp>

Images are shared with the corresponding Python components on this page for appearance reference. Use the examples below for the C++ APIs.


These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![ExclusiveLiteFilter](/img/components/topnavigationbar/ExclusiveLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::ExclusiveLiteFilter(parent);
widget->addItems({QStringLiteral("All"), QStringLiteral("Images"), QStringLiteral("Code")});
widget->setCurrentItem(QStringLiteral("Code"));
```

### C++ [OutlinedExclusiveLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![OutlinedExclusiveLiteFilter](/img/components/topnavigationbar/OutlinedExclusiveLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::OutlinedExclusiveLiteFilter(parent);
widget->addItems({QStringLiteral("All"), QStringLiteral("Images"), QStringLiteral("Code")});
widget->setCurrentItem(QStringLiteral("Code"));
```

### C++ [MultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![MultiSelectionLiteFilter](/img/components/topnavigationbar/MultiSelectionLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::MultiSelectionLiteFilter(parent);
widget->addItems({QStringLiteral("Qt"), QStringLiteral("C++"), QStringLiteral("Python")});
widget->setCurrentItems({QStringLiteral("Qt"), QStringLiteral("C++")});
```

### C++ [OutlinedMultiSelectionLiteFilter](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/exclusive_filter.h)

![OutlinedMultiSelectionLiteFilter](/img/components/topnavigationbar/OutlinedMultiSelectionLiteFilter.png)

```cpp
#include <components/widgets/exclusive_filter.h>
auto* widget = new qfw::OutlinedMultiSelectionLiteFilter(parent);
widget->addItems({QStringLiteral("Qt"), QStringLiteral("C++"), QStringLiteral("Python")});
widget->setCurrentItems({QStringLiteral("Qt"), QStringLiteral("C++")});
```

</template>
</LanguageTabs>

