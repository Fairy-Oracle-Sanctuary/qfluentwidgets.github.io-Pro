---
title: Chat Widget
date: 2024-03-13 13:25:01
permalink: /pages/components/chat/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ChatWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/chat_widget.py)

![ChatWidget](/img/components/chart/ChatWidget.png)

`ChatWidget` is a native PySide6 chat component with incoming/outgoing messages, streamed text, Markdown, code highlighting and customizable toolbars. A formula renderer can be supplied.

The chat uses native QtWidgets and does not make AI requests. Apply streamed updates on the GUI thread; use setFormulaRenderer() to provide a formula renderer.

```python
from qfluentwidgets_pro import FluentIcon
from qfluentwidgets_pro.components.widgets.chat_widget import ChatWidget

chatWidget = ChatWidget()
chatWidget.setMaximumBubbleWidth(640)
chatWidget.setMessageToolBarEnabled(True)
chatWidget.addToolButton(FluentIcon.FOLDER, 'Files',
                         callback=lambda: print('files'), side='left')
chatWidget.addToolButton(FluentIcon.HISTORY, 'History',
                         callback=lambda: print('history'), side='right')
chatWidget.addMessage('Hello!', role='user', name='You')

# Append streamed text using the returned message id
messageId = chatWidget.addMessage('', role='assistant', streaming=True)
chatWidget.appendText(messageId, '**Hello**, ')
chatWidget.appendText(messageId, 'welcome!')
chatWidget.finishMessage(messageId)
chatWidget.sendRequested.connect(lambda text: print(text))
```

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

- `ChatWidget`

</template>
</LanguageTabs>

