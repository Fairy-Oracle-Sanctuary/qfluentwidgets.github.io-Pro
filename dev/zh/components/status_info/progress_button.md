---
title: 进度按钮
date: 2024-02-27 13:34:00
permalink: /zh/pages/components/progressbutton/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ProgressPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![ProgressPushButton](/img/components/progressbutton/ProgressPushButton.png)

`ProgressPushButton` 在按钮的基础上增加了进度功能，可以直观地显示操作进度。这种控件常用于需要显示长时间操作进度的场景，如文件下载、数据处理等。

组件不执行下载任务；由业务代码更新进度，任务结束后调用 setProgressing(False)。

```python
from qfluentwidgets_pro import ProgressPushButton

button = ProgressPushButton('Download')
button.setFixedWidth(180)
button.setProgressing(True)
button.setValue(45)
button.stopRequested.connect(lambda: button.setProgressing(False))
```

### [IndeterminateProgressPushButton](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/button.py)

![IndeterminateProgressPushButton](/img/components/progressbutton/IndeterminateProgressPushButton.png)

`IndeterminateProgressPushButton` 在按钮基础上增加了不确定进度环的功能，适用于无法预知完成时间或进度无法精确计算的操作（如网络请求、后台处理等）。

```python
from qfluentwidgets_pro import IndeterminateProgressPushButton

button = IndeterminateProgressPushButton('Loading')
button.setFixedWidth(180)
button.start()

# 任务完成后停止
# button.stop()
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `ProgressPushButton`
- `IndeterminateProgressPushButton`

</template>
</LanguageTabs>

