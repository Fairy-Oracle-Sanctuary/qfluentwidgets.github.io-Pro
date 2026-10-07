---
title: Line Edit
date: 2024-02-27 16:46:00
permalink: /pages/components/lineedit/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [LineEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.LineEdit)

![LineEdit](/img/components/lineedit/LineEdit.png)

`LineEdit` is used for editing single-line text and is used in the same way as `QLineEdit`.

```python
lineEdit = LineEdit()

# Set placeholder text
lineEdit.setPlaceholderText("example@example.com")

# Set text
lineEdit.setText("shokokawaii@foxmail.com")
print(lineEdit.text())

# Enable clear button
lineEdit.setClearButtonEnabled(True)
```

Setting up the completion menu:
```python
stands = [
    "Star Platinum", "Hierophant Green", "Made in Haven",
    "King Crimson", "Silver Chariot", "Crazy diamond"
]
completer = QCompleter(stands, lineEdit)
completer.setCaseSensitivity(Qt.CaseInsensitive)
completer.setMaxVisibleItems(10)

lineEdit.setCompleter(completer)
```

Add actions to line edit:
```python
from qfluentwidgets_pro import Action, FluentIcon

action1 = QAction(FluentIcon.CALENDAR.qicon(), "", triggered=lambda: print("action1 triggered"))
lineEdit.addAction(action1, QLineEdit.TrailingPosition)

action2 = Action(FluentIcon.ADD, "", triggered=lambda: print("action2 triggered"))
lineEdit.addAction(action2, QLineEdit.LeadingPosition)
```

### [SearchLineEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.SearchLineEdit)

![SearchLineEdit](/img/components/lineedit/SearchLineEdit.png)

`SearchLineEdit` adds a search button to the right of [LineEdit](#lineedit). When the button is clicked or the return key is pressed, it sends a `searchSignal(text: str)` signal.

```python
lineEdit = SearchLineEdit()
lineEdit.searchSignal.connect(lambda text: print("Search：" + text))
```

### [PasswordLineEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PasswordLineEdit)

![PasswordLineEdit](/img/components/lineedit/PasswordLineEdit.png)

`PasswordLineEdit` is used to edit passwords, and the button is invisible by default.
```python
lineEdit = PasswordLineEdit()
lineEdit.setText("123456")

# Show password
lineEdit.setPasswordVisible(True)
```


### [PinBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/line_edit.py)

![PinBox](/img/components/lineedit/PinBox.png)

`PinBox` can be used in scenarios where users need to enter specific formats or content, such as PIN codes, verification codes and passwords.

```python
from PySide6.QtWidgets import QLineEdit
from qfluentwidgets_pro import PinBox

pinBox = PinBox()
pinBox.setPinBoxCount(6)
pinBox.setPinBoxFixedWidth(40)
pinBox.setEchoMode(QLineEdit.Password)
pinBox.textChanged.connect(lambda texts: print(''.join(texts)))
```

### TokenLineEdit

![TokenLineEdit](/img/components/lineedit/TokenLineEdit.png)

`TokenLineEdit` is used to add and manager tags.

> The upstream description and screenshot are retained here. This fork does not yet implement `TokenLineEdit`, so no runnable example is provided.

### [LabelLineEdit](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/line_edit.py)

![LabelLineEdit](/img/components/lineedit/LabelLineEdit.png)

`LabelLineEdit` can display a suffix and prefix label.

```python
from qfluentwidgets_pro import LabelLineEdit

lineEdit = LabelLineEdit('https://', '.example')
lineEdit.setFixedWidth(320)
lineEdit.setPlaceholderText('Enter a name')
lineEdit.setText('fairy')
lineEdit.textChanged.connect(lambda text: print(text))
```

### [TextEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextEdit)

![TextEdit](/img/components/lineedit/TextEdit.png)

`TextEdit` is a rich text multiline edit box that can render HTML and Markdown formatted text. It is used in the same way as `QTextEdit`.

```python
textEdit = TextEdit()
textEdit.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# Get plain text
print(textEdit.toPlainText())

# Get rich text
print(textEdit.toHtml())
```


### [PlainTextEdit](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PlainTextEdit)

![PlainTextEdit](/img/components/lineedit/PlainTextEdit.png)

`PlainTextEdit` is a plain text multiline edit box, and is used in the same way as `QPlainTextEdit`.

```python
textEdit = PlainTextEdit()
textEdit.setPlainText("The ape's cries are endless on both shores \n The light boat has crossed ten thousand mountains ")

# Get plain text
print(textEdit.toPlainText())
```

### [TextBrowser](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextBrowser)

![TextBrowser](/img/components/lineedit/TextEdit.png)

`TextBrowser` s a read-only rich text multiline box that can render HTML and Markdown formatted text. It is used in the same way as `QTextBrowser`。

```python
textBrowser = TextBrowser()
textBrowser.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# Get plain text
print(textBrowser.toPlainText())

# Get rich text
print(textBrowser.toHtml())
```


### [CodeEdit](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/code_edit.py)

![CodeEdit](/img/components/lineedit/CodeEdit.png)

`CodeEdit` can be used for displaying and editing code, with built-in syntax highlighting for 20 languages.

CodeEdit requires Pygments and is imported from its module rather than the top-level package.

```python
from qfluentwidgets_pro.components.widgets.code_edit import CodeEdit

codeEdit = CodeEdit()
codeEdit.setLanguage('python')
codeEdit.setPlainText('print("Hello World!")')
codeEdit.setLineNumbersVisible(True)
codeEdit.setIndentSize(4)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [LineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::LineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Type here"));
edit->setText(QStringLiteral("Hello"));
edit->setClearButtonEnabled(true);
edit->setFixedWidth(260);
```

### C++ [SearchLineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::SearchLineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Search"));
QObject::connect(edit, &qfw::SearchLineEdit::searchSignal, parent, [](const QString& text) { qDebug() << text; });
```

### C++ [PasswordLineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::PasswordLineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Password"));
edit->setPasswordVisible(false);
```

### C++ [PlainTextEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::PlainTextEdit(parent);
edit->setPlainText(QStringLiteral("Editable plain text"));
qDebug() << edit->toPlainText();
```

### C++ [TextBrowser](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

```cpp
#include <components/widgets/line_edit.h>

auto* browser = new qfw::TextBrowser(parent);
browser->setHtml(QStringLiteral("<b>Hello</b>"));
browser->setOpenExternalLinks(true);
```

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `PinBox`
- `TokenLineEdit`
- `LabelLineEdit`
- `TextEdit`
- `CodeEdit`

</template>
</LanguageTabs>

