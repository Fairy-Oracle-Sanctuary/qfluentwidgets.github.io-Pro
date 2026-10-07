---
title: 图片
date: 2024-03-31 14:08:00
permalink: /zh/pages/components/image/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

本页 Pro 示例使用 `qfluentwidgets_pro`，代码风格与基础组件保持一致，仅展示核心用法。运行前需创建 `QApplication`；代码中的 `self` 表示已有的窗口或内容组件，图片路径请替换为本地文件。

### [ImageLabel](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.ImageLabel)

![ImageLabel](/img/components/label/ImageLabel.png)


`ImageLabel` 用于显示图片或者 GIF，在高分屏下也能清晰显示图片而不出现锯齿。

```python
label = ImageLabel("/path/to/image.png")            # 使用 str 创建
label = ImageLabel(QImage("/path/to/image.png"))   # 使用  QImage 创建
label = ImageLabel(QPixmap("/path/to/image.png"))  # 使用 QPixmap 创建

# 圆角
label.setBorderRadius(8, 8, 8, 8)
```

调整图像大小：

```python
# 按比例缩放到指定高度
label.scaledToHeight(300)

# 按比例缩放到指定的宽度
label.scaledToWidth(300)

# 强制缩放到指定大小，忽略比例
label.setScaledSize(QSize(300, 300))
```

更换显示的图片：

```python
label.setImage("/path/to/image.png")
label.setImage(QImage("/path/to/image.png"))
label.setImage(QPixmap("/path/to/image.png"))

# 如果图片分辨率发生变化，需要再次调整标签的大小
label.scaledToHeight(300)
```

### [AvatarWidget](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.AvatarWidget)

![AvatarWidget](/img/components/label/AvatarWidget.png)


`AvatarWidget` 用于显示圆形头像，可以是静态图片或者 GIF。

```python
w = AvatarWidget("/path/to/image.png")

# 设置头像半径
w.setRadius(64)
```

如果不设置图片，头像组件也可以居中显示文本的首字母：

![AvatarWidget](/img/components/label/TextAvatarWidget.png)

```python
w = AvatarWidget()
w.setRadius(64)

# 设置文本
w.setText("乔尼·乔斯达")
```

### [AvatarPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/avatar_picker.py)

![AvatarPicker](/img/components/imagecropper/AvatarPicker.png)

`AvatarPicker` 用于显示圆形头像，可以是静态图片或者 GIF，并支持鼠标点击时选择经过裁剪的本地图片作为头像。

```python
from qfluentwidgets_pro import AvatarPicker

avatar = AvatarPicker('path/to/avatar.png')
avatar.setRadius(40)
avatar.imageChanged.connect(lambda image: image.save('avatar.png'))
```

### [ImageCropper](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/image_cropper.py)

![ImageCropper](/img/components/imagecropper/ImageCropper.png)

`ImageCropper` 用于裁剪用户指定的图像，内置长方形和圆形两种裁剪形状，并支持拓展自定义的裁剪形状。

```python
from qfluentwidgets_pro import ImageCropper, CropShape

cropper = ImageCropper('path/to/image.png', self)
cropper.setCropShape(CropShape.CIRCLE)
cropper.imageCropped.connect(lambda image: image.save('cropped.png'))
cropper.exec()
```

### [ImageComparisonSlider](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/image_comparison.py)

![ImageComparisonSlider](/img/components/label/ImageComparisonSlider.png)

`ImageComparisonSlider` 允许用户通过拖动滑块来直观地比较两张图片的差异效果。

```python
from qfluentwidgets_pro import ImageComparisonSlider

slider = ImageComparisonSlider('path/to/before.png', 'path/to/after.png')
slider.scaledToWidth(430)
slider.setValue(0.5)
slider.valueChanged.connect(lambda value: print(value))
```

### [ImageMagnifierWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/image_magnifier.py)

![ImageMagnifierWidget](/img/components/label/ImageMagnifierWidget.png)

`ImageMagnifierWidget` 允许用户将鼠标悬停或聚焦在图片上时，在特定区域生成一个放大的局部视图，用以查看图片的细节。

```python
from qfluentwidgets_pro import ImageMagnifierWidget

image = ImageMagnifierWidget('path/to/image.png')
image.scaledToWidth(430)
image.setMagnification(2)
image.setRadius(60)
image.setMagnifierEnabled(True)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [ImageLabel](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/label.h)

```cpp
#include <components/widgets/label.h>

auto* image = new qfw::ImageLabel(QStringLiteral("/path/to/image.png"), parent);
image->scaledToWidth(320);
image->setBorderRadius(8, 8, 8, 8);
```

### C++ [AvatarWidget](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/label.h)

```cpp
#include <components/widgets/label.h>

auto* avatar = new qfw::AvatarWidget(QStringLiteral("/path/to/avatar.png"), parent);
avatar->setRadius(24);
```

## C++ 暂未实现的组件

当前 C++ 仓库没有以下组件的对应实现，因此不提供不可用的 C++ 示例。上面的 Python 代码不能直接用于 C++：

- `AvatarPicker`
- `ImageCropper`
- `ImageComparisonSlider`
- `ImageMagnifierWidget`

</template>
</LanguageTabs>

