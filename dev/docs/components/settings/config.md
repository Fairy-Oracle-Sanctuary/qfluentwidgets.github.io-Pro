---
title: Configuration
date: 2024-03-21 23:31:00
permalink: /pages/components/config/
---

<LanguageTabs>
<template #python>

Python examples target `qfluentwidgets_pro`. Run the fragments after creating `QApplication`; `self` refers to your window, and resource paths must point to your own assets. See the [installation page](/pages/install/).

## Design Principles
The `ConfigItem` class represents a configuration item, and the configuration class `QConfig` is used for reading and writing the values of configuration items. When the value of a `ConfigItem` changes, a `valueChanged(value: object)` signal is sent, and the `QConfig` class will also automatically synchronize the configuration values to the json configuration file.

The configuration file may be tampered with by the user, leading to illegal values for configuration items. Therefore, QFluentWidgets uses the `ConfigValidator` class and its subclasses to validate and correct the values of configuration items.

Json files only support strings, boolean values, lists, and dictionaries. For enum classes or `QColor`, their values cannot be written directly into json files. To solve this problem, QFluentWidgets provides the `ConfigSerializer` class and its subclasses for serializing and deserializing configuration items. For example, the `ColorSerializer` can be used to serialize configuration items whose value type is `QColor`.

The properties of `ConfigItem` are shown in the table below, and the constructors of each subclass can be found in the [API documentation](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/common/config/index.html#qfluentwidgets.common.config.ConfigItem):

| Property     | Data Type          | Description                                                         |
| ------------ | ------------------ | ------------------------------------------------------------------- |
| `group`      | `str`              | The group to which the configuration item belongs                   |
| `name`       | `str`              | The name of the configuration item                                  |
| `default`    | `Any`              | The default value of the configuration item                         |
| `validator`  | `ConfigValidator`  | The configuration validator                                         |
| `serializer` | `ConfigSerializer` | The configuration serializer                                        |
| `restart`    | `bool`             | Whether to restart the application after updating the configuration |

## Usage
You can create and use a custom configuration class `MyConfig` by following these steps:

1. Inherit from `QConfig`
2. Add instances of `ConfigItem` to the class properties of `MyConfig`
3. Create a globally unique `MyConfig` singleton instance `cfg`
4. Call `qconfig.load("/path/to/config.json", cfg)` to load the configuration file
5. Use `cfg.get(cfg.xxx)` to read configuration values, `cfg.set(cfg.xxx, value)` to write configuration values

Below is a simple example:

```python
from enum import Enum

from qfluentwidgets_pro import *


class MvQuality(Enum):
    """ MV quality enumeration class """

    FULL_HD = "Full HD"
    HD = "HD"
    SD = "SD"
    LD = "LD"

    @staticmethod
    def values():
        return [q.value for q in MvQuality]


class MyConfig(QConfig):
    """ Application's Config """

    # main window
    enableAcrylic = ConfigItem("MainWindow", "EnableAcrylic", False, BoolValidator())
    playBarColor = ColorConfigItem("MainWindow", "PlayBarColor", "#225C7F")
    themeMode = OptionsConfigItem("MainWindow", "ThemeMode", "Light", OptionsValidator(["Light", "Dark", "Auto"]), restart=True)
    recentPlaysNumber = RangeConfigItem("MainWindow", "RecentPlayNumbers", 300, RangeValidator(10, 300))

    # online
    onlineMvQuality = OptionsConfigItem("Online", "MvQuality", MvQuality.FULL_HD, OptionsValidator(MvQuality), EnumSerializer(MvQuality))


# Create a config instance and initialize it using the configuration file
cfg = MyConfig()
qconfig.load('config/config.json', cfg)
```

</template>
<template #cpp>

These examples target [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets). Follow the [installation guide](/pages/install/#c-integration), create `QApplication`, and call `Q_INIT_RESOURCE(resource)` first. In these fragments, `parent` is your window pointer. Add widgets to your layout and replace asset paths with your own files.

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

## C++ QConfig

```cpp
auto& config = qfw::QConfig::instance();
auto* volume = new qfw::RangeConfigItem(QStringLiteral("Audio"), QStringLiteral("Volume"), 50, std::make_shared<qfw::RangeValidator>(0, 100));
volume->setParent(parent);
config.registerItem(volume);
config.load(QStringLiteral("config/config.json"));
config.set(*volume, 75);
qDebug() << config.get(*volume).toInt();
QObject::connect(volume, &qfw::ConfigItem::valueChanged, parent, [](const QVariant& value) { qDebug() << value; });
```

C++ uses the `QConfig::instance()` singleton and `registerItem()`. Do not subclass it as in Python: C++ `QConfig` is `final`. Bound configuration items must outlive their cards; the examples parent them to the window.

</template>
</LanguageTabs>
