---
title: Image
date: 2024-03-31 14:08:00
permalink: /pages/components/image/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

The Pro examples use `qfluentwidgets_pro` and follow the same concise style as the base components. Create a `QApplication` first; `self` refers to an existing window or content widget. Replace image paths with local files.

### [ImageLabel](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.ImageLabel)

![ImageLabel](/img/components/label/ImageLabel.png)

`ImageLabel` is used to display images or GIFs, ensuring clear rendering without aliasing even on high-DPI screens.

```python
label = ImageLabel("/path/to/image.png")           # Create using str
label = ImageLabel(QImage("/path/to/image.png"))   # Create using QImage
label = ImageLabel(QPixmap("/path/to/image.png"))  # Create using QPixmap

# Rounded corners
label.setBorderRadius(8, 8, 8, 8)
```

Resize the image:

```python
# Scale proportionally to a specified height
label.scaledToHeight(300)

# Scale proportionally to a specified width
label.scaledToWidth(300)

# Force scale to a specified size, ignoring aspect ratio
label.setScaledSize(QSize(300, 300))
```

Change the displayed image:

```python
label.setImage("/path/to/image.png")
label.setImage(QImage("/path/to/image.png"))
label.setImage(QPixmap("/path/to/image.png"))

# If the image resolution changes, the label size needs to be adjusted again
label.scaledToHeight(300)
```

### [AvatarWidget](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/label/index.html#qfluentwidgets.components.widgets.label.AvatarWidget)

![AvatarWidget](/img/components/label/AvatarWidget.png)

`AvatarWidget` is used to display circular avatars, which can be static images or GIFs.

```python
w = AvatarWidget("/path/to/image.png")

# Set the avatar radius
w.setRadius(64)
```

If no image is set, the avatar component can also center and display the first letter of a text:

![AvatarWidget](/img/components/label/TextAvatarWidget.png)

```python
w = AvatarWidget()
w.setRadius(64)

# Set the text
w.setText("Jonny Joestar")
```

### [AvatarPicker](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/avatar_picker.py)

![AvatarPicker](/img/components/imagecropper/AvatarPicker.png)

`AvatarPicker` is used to display circular avatars (static images or GIFs) and supports selecting a cropped local image as the avatar via mouse click.

```python
from qfluentwidgets_pro import AvatarPicker

avatar = AvatarPicker('path/to/avatar.png')
avatar.setRadius(40)
avatar.imageChanged.connect(lambda image: image.save('avatar.png'))
```

### [ImageCropper](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/image_cropper.py)

![ImageCropper](/img/components/imagecropper/ImageCropper.png)

`ImageCropper` is used to crop a user-specified image. It includes built-in rectangular and circular cropping shapes and supports extending custom cropping shapes.

```python
from qfluentwidgets_pro import ImageCropper, CropShape

cropper = ImageCropper('path/to/image.png', self)
cropper.setCropShape(CropShape.CIRCLE)
cropper.imageCropped.connect(lambda image: image.save('cropped.png'))
cropper.exec()
```

### [ImageComparisonSlider](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/image_comparison.py)

![ImageComparisonSlider](/img/components/label/ImageComparisonSlider.png)

`ImageComparisonSlider` allows users to intuitively compare the differences between two images by dragging a slider.

```python
from qfluentwidgets_pro import ImageComparisonSlider

slider = ImageComparisonSlider('path/to/before.png', 'path/to/after.png')
slider.scaledToWidth(430)
slider.setValue(0.5)
slider.valueChanged.connect(lambda value: print(value))
```

### [ImageMagnifierWidget](https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro/blob/main/qfluentwidgets_pro/components/widgets/image_magnifier.py)

![ImageMagnifierWidget](/img/components/label/ImageMagnifierWidget.png)

`ImageMagnifierWidget` allows users to generate a magnified view of a specific area of an image when hovering or focusing the mouse over it, enabling detailed inspection of image particulars.

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

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

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

## C++ Not yet implemented

The C++ repository currently has no corresponding implementations for these components, so no unavailable C++ examples are provided. The Python code cannot be used directly in C++:

- `AvatarPicker`
- `ImageCropper`
- `ImageComparisonSlider`
- `ImageMagnifierWidget`

</template>
</LanguageTabs>

