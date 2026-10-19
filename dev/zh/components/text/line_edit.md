---
title: 输入框
date: 2024-02-27 16:46:00
permalink: /zh/pages/components/lineedit/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [LineEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.LineEdit)

![LineEdit](/img/components/lineedit/LineEdit.png)

`LineEdit` 用于编辑单行文本，使用方式和 `QLineEdit` 完全相同。

```python
lineEdit = LineEdit()

# 设置提示文本
lineEdit.setPlaceholderText("example@example.com")

# 设置文本
lineEdit.setText("shokokawaii@foxmail.com")
print(lineEdit.text())

# 启用清空按钮
lineEdit.setClearButtonEnabled(True)
```

设置补全菜单：
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

自定义动作：
```python
from qfluentwidgets_pro import Action, FluentIcon

# 在后面添加按钮
action1 = QAction(FluentIcon.CALENDAR.qicon(), "", triggered=lambda: print("action1 triggered"))
lineEdit.addAction(action1, QLineEdit.TrailingPosition)

# 在前面添加按钮
action2 = Action(FluentIcon.ADD, "", triggered=lambda: print("action2 triggered"))
lineEdit.addAction(action2, QLineEdit.LeadingPosition)
```

### [SearchLineEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.SearchLineEdit)

![SearchLineEdit](/img/components/lineedit/SearchLineEdit.png)

`SearchLineEdit` 在 [LineEdit](#lineedit) 右侧添加了搜索按钮，点击按钮或按下回车时会发送 `searchSignal(text: str)` 信号。

```python
lineEdit = SearchLineEdit()
lineEdit.searchSignal.connect(lambda text: print("搜索：" + text))
```

### [PasswordLineEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PasswordLineEdit)

![PasswordLineEdit](/img/components/lineedit/PasswordLineEdit.png)

`PasswordLineEdit` 用于编辑密码，默认情况下按钮不可见。
```python
lineEdit = PasswordLineEdit()
lineEdit.setText("123456")

# 显示密码
lineEdit.setPasswordVisible(True)
```

### [PinBox](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/line_edit.py)

![PinBox](/img/components/lineedit/PinBox.png)

`PinBox` 可用于需要用户输入特定格式或内容的场景，比如 PIN 码、验证码、密码等。

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

`TokenLineEdit` 可用于输入和管理标签。

> 此处保留上游组件介绍与截图；当前 fork 尚未实现 `TokenLineEdit`，暂不提供可运行的示例。

### [LabelLineEdit](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/line_edit.py)

![LabelLineEdit](/img/components/lineedit/LabelLineEdit.png)

`LabelLineEdit` 是带前后缀标签的输入框。

```python
from qfluentwidgets_pro import LabelLineEdit

lineEdit = LabelLineEdit('https://', '.example')
lineEdit.setFixedWidth(320)
lineEdit.setPlaceholderText('Enter a name')
lineEdit.setText('fairy')
lineEdit.textChanged.connect(lambda text: print(text))
```

### [TextEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextEdit)

![TextEdit](/img/components/lineedit/TextEdit.png)

`TextEdit` 是富文本多行编辑框，可以渲染 HTML 和 Markdown 格式的文本，使用方式和 `QTextEdit` 完全相同。

```python
textEdit = TextEdit()
textEdit.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# 获取普通文本
print(textEdit.toPlainText())

# 获取富文本
print(textEdit.toHtml())
```


### [PlainTextEdit](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.PlainTextEdit)

![PlainTextEdit](/img/components/lineedit/PlainTextEdit.png)

`PlainTextEdit` 是普通文本多行编辑框，使用方式和 `QPlainTextEdit` 完全相同。

```python
textEdit = PlainTextEdit()
textEdit.setPlainText("两岸猿声啼不住 \n 轻舟已过万重山 ")

# 获取普通文本
print(textEdit.toPlainText())
```

### [TextBrowser](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/line_edit/index.html#qfluentwidgets.components.widgets.line_edit.TextBrowser)

![TextBrowser](/img/components/lineedit/TextEdit.png)

`TextBrowser` 是只读富文本多行编辑框，可以渲染 HTML 和 Markdown 格式的文本，使用方式和 `QTextBrowser` 完全相同。

```python
textBrowser = TextBrowser()
textBrowser.setMarkdown("## Steel Ball Run \n * Johnny Joestar 🦄 \n * Gyro Zeppeli 🐴 ")

# 获取普通文本
print(textBrowser.toPlainText())

# 获取富文本
print(textBrowser.toHtml())
```

### [CodeEdit](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/code_edit.py)

![CodeEdit](/img/components/lineedit/CodeEdit.png)

`CodeEdit` 可用于显示和编辑代码，内置 20 种语言的语法高亮。

CodeEdit 依赖 Pygments，并从具体模块按需导入，不在顶层包统一导出。

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

展示图复用本页对应 Python 组件的截图，供外观参考；C++ 的接口与用法以以下示例为准。


以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [LineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

![LineEdit](/img/components/lineedit/LineEdit.png)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::LineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Type here"));
edit->setText(QStringLiteral("Hello"));
edit->setClearButtonEnabled(true);
edit->setFixedWidth(260);
```

### C++ [SearchLineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

![SearchLineEdit](/img/components/lineedit/SearchLineEdit.png)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::SearchLineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Search"));
QObject::connect(edit, &qfw::SearchLineEdit::searchSignal, parent, [](const QString& text) { qDebug() << text; });
```

### C++ [PasswordLineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

![PasswordLineEdit](/img/components/lineedit/PasswordLineEdit.png)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::PasswordLineEdit(parent);
edit->setPlaceholderText(QStringLiteral("Password"));
edit->setPasswordVisible(false);
```

### C++ [PlainTextEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

![PlainTextEdit](/img/components/lineedit/PlainTextEdit.png)

```cpp
#include <components/widgets/line_edit.h>

auto* edit = new qfw::PlainTextEdit(parent);
edit->setPlainText(QStringLiteral("Editable plain text"));
qDebug() << edit->toPlainText();
```

### C++ [TextBrowser](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

![TextBrowser](/img/components/lineedit/TextEdit.png)

```cpp
#include <components/widgets/line_edit.h>

auto* browser = new qfw::TextBrowser(parent);
browser->setHtml(QStringLiteral("<b>Hello</b>"));
browser->setOpenExternalLinks(true);
```

### C++ [PinBox](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/extended_line_edit.h)

![PinBox](/img/components/lineedit/PinBox.png)

```cpp
#include <components/widgets/extended_line_edit.h>
auto* widget = new qfw::PinBox(parent);
widget->setPinBoxCount(6);
widget->setEchoMode(QLineEdit::Password);
```

### C++ [LabelLineEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/extended_line_edit.h)

![LabelLineEdit](/img/components/lineedit/LabelLineEdit.png)

```cpp
#include <components/widgets/extended_line_edit.h>
auto* widget = new qfw::LabelLineEdit(QStringLiteral("$"), QStringLiteral("USD"), parent);
widget->setPlaceholderText(QStringLiteral("Amount"));
```

### C++ [TextEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/line_edit.h)

![TextEdit](/img/components/lineedit/TextEdit.png)

```cpp
#include <components/widgets/line_edit.h>
auto* widget = new qfw::TextEdit(parent);
widget->setPlainText(QStringLiteral("Editable text"));
```

### C++ [CodeEdit](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/code_edit.h)

![CodeEdit](/img/components/lineedit/CodeEdit.png)

```cpp
#include <components/widgets/code_edit.h>
auto* widget = new qfw::CodeEdit(parent);
widget->setLanguage(qfw::CodeLanguage::CPP);
widget->setIndentSize(4);
widget->setLineNumbersVisible(true);
widget->setPlainText(QStringLiteral("int main() { return 0; }"));
```

## C++ 暂未实现的组件

当前 C++ 源码尚未提供以下类型的对应实现；保留上游介绍，不提供不可编译的示例。

- `TokenLineEdit`

</template>
</LanguageTabs>

