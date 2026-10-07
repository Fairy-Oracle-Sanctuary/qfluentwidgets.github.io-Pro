---
title: Pager
date: 2024-02-27 11:25:00
permalink: /pages/components/pager/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [PipsPager](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/pips_pager/index.html#qfluentwidgets.components.widgets.pips_pager.PipsPager)

![PipsPager](/img/components/pager/PipsPager.png)

`PipsPager` is a lightweight pagination component, where each dot on the control represents a page. This control is very useful in scenarios where page switching is needed, such as image carousels or user guide interfaces.

```python
pager = PipsPager(Qt.Horizontal)

# Set the number of pages
pager.setPageNumber(15)

# Set the number of dots
pager.setVisibleNumber(8)

# Always display forward and backward buttons
pager.setNextButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)
pager.setPreviousButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)

# Set the current page number
pager.setCurrentIndex(3)
```

When the current page number changes, the signal `currentIndexChanged(index: int)` will be emitted:
```python
pager.currentIndexChanged.connect(lambda index: print(index, pager.currentIndex()))
```

### [Pager](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/pager.py)

![Pager](/img/components/pager/Pager.png)

`Pager` provides paging functionality, which is used to break down data when there is too much of it.

```python
from qfluentwidgets_pro import Pager

pager = Pager(pages=12, maxVisible=5)
pager.setCurrentPage(1)
pager.currentPageChanged.connect(lambda page: print(page))
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [PipsPager](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/pips_pager.h)

```cpp
#include <components/widgets/pips_pager.h>

auto* pager = new qfw::PipsPager(Qt::Horizontal, parent);
pager->setPageNumber(8);
pager->setVisibleNumber(5);
pager->setCurrentIndex(0);
QObject::connect(pager, &qfw::PipsPager::currentIndexChanged, parent, [](int index) { qDebug() << index; });
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `Pager`

</template>
</LanguageTabs>

