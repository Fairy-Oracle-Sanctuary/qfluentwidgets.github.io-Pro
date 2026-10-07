---
title: 配置类
date: 2024-03-21 23:31:00
permalink: /zh/pages/components/config/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

## 设计原理
`ConfigItem` 类表示一个配置项，配置类 `QConfig` 类用于读写配置项的值。当 `ConfigItem` 的值发生改变时会发送 `valueChanged(value: object)` 信号，`QConfig` 类也会自动将配置值同步到 json 配置文件中。

配置文件可能被用户篡改，导致配置项的值非法，所以 QFluentWidgets 使用 `ConfigValidator` 类及其子类来验证和修正配置项的值。

json 文件只支持字符串、布尔值、列表和字典，对于枚举类或者 `QColor`，无法直接将它们的值写入 json 文件中。为了解决这个问题，QFluentWidgets 提供了 `ConfigSerializer` 类及其子类来序列化和反序列化配置项。举个栗子，可以使用 `ColorSerializer` 来序列化值类型为 `QColor` 的配置项。

`ConfigItem` 的属性如下表所示，各个子类的构造函数见 [API 文档](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/common/config/index.html#qfluentwidgets.common.config.ConfigItem)：

| 属性         | 数据类型           | 描述                                         |
| ------------ | ------------------ | -------------------------------------------- |
| `group`      | `str`              | 配置项所属的组别                             |
| `name`       | `str`              | 配置项的名字                                 |
| `default`    | `Any`              | 配置项的默认值，当配置值非法时将被默认值替代 |
| `validator`  | `ConfigValidator`  | 配置校验器                                   |
| `serializer` | `ConfigSerializer` | 配置序列化器                                 |
| `restart`    | `bool`             | 配置更新后是否重启应用                       |


## 使用方式
可通过下述步骤创建并使用自定义配置类 `MyConfig`：

1. 继承 `QConfig`
2. 将 `ConfigItem` 实例添加到 `MyConfig` 的类属性中
3. 创建全局唯一的 `MyConfig` 单例 `cfg`
4. 调用 `qconfig.load("/path/to/config.json", cfg)` 加载配置文件
5. 使用 `cfg.get(cfg.xxx)` 读取配置值，`cfg.set(cfg.xxx, value)` 写入配置值

下面是一个简单的例子：

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
    """ Config of application """

    # main window
    enableAcrylic = ConfigItem("MainWindow", "EnableAcrylic", False, BoolValidator())
    playBarColor = ColorConfigItem("MainWindow", "PlayBarColor", "#225C7F")
    themeMode = OptionsConfigItem("MainWindow", "ThemeMode", "Light", OptionsValidator(["Light", "Dark", "Auto"]), restart=True)
    recentPlaysNumber = RangeConfigItem("MainWindow", "RecentPlayNumbers", 300, RangeValidator(10, 300))

    # online
    onlineMvQuality = OptionsConfigItem("Online", "MvQuality", MvQuality.FULL_HD, OptionsValidator(MvQuality), EnumSerializer(MvQuality))


# 创建配置实例并使用配置文件来初始化它
cfg = MyConfig()
qconfig.load('config/config.json', cfg)
```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

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

C++ 使用 `QConfig::instance()` 单例并调用 `registerItem()` 注册配置项，不能继承 Python 示例中的 `QConfig`；C++ 的 `QConfig` 是 `final` 类。卡片关联的配置项必须保持存活，示例将它们的父对象设为窗口。

</template>
</LanguageTabs>
