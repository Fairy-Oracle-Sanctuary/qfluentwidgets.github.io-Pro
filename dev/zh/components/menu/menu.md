---
title: 菜单
date: 2024-02-26 19:56:01
permalink: /zh/pages/components/menu/
---

<LanguageTabs>
<template #python>

Python 示例对应 `qfluentwidgets_pro`。代码片段需在创建 `QApplication` 后使用，`self` 表示你的窗口，资源路径请替换为实际文件。安装方式见[安装页](/zh/pages/install/)。

### [RoundMenu](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/menu/index.html#qfluentwidgets.components.widgets.menu.RoundMenu)

![RoundMenu](/img/components/menu/RoundMenu.png)

`RoundMenu` 用于提供一系列动作供用户选择，使用方式和 `QMenu` 类似。

::: tip 提示
PyQt/PySide 6.7.0 及以上版本的菜单阴影在 Win11 下显示异常，可将组件库升级到 v1.6.2 来修复此问题，详情参见 [Issue #848](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/848)。
:::

```python
menu = RoundMenu()

# 逐个添加动作，Action 继承自 QAction，接受 FluentIconBase 类型的图标
menu.addAction(Action(FluentIcon.COPY, '复制', triggered=lambda: print("复制成功")))
menu.addAction(Action(FluentIcon.CUT, '剪切', triggered=lambda: print("剪切成功")))

# 批量添加动作
menu.addActions([
    Action(FluentIcon.PASTE, '粘贴'),
    Action(FluentIcon.CANCEL, '撤销')
])

# 添加分割线
menu.addSeparator()

menu.addAction(QAction('全选', shortcut='Ctrl+A'))
```

添加子菜单：

```python
submenu = RoundMenu("添加到", self)

submenu.setIcon(FluentIcon.ADD)
submenu.addActions([
    Action(FluentIcon.VIDEO, '视频'),
    Action(FluentIcon.MUSIC, '音乐'),
])

menu.addMenu(submenu)
```

`RoundMenu` 支持添加自定义组件作为菜单项：

![WidgetMenu](/img/components/menu/WidgetMenu.png)

```python
class ProfileCard(QWidget):
    """ Profile card """

    def __init__(self, avatarPath: str, name: str, email: str, parent=None):
        super().__init__(parent=parent)
        self.avatar = AvatarWidget(avatarPath, self)
        self.nameLabel = BodyLabel(name, self)
        self.emailLabel = CaptionLabel(email, self)
        self.logoutButton = HyperlinkButton('https://qfluentwidgets.com/', '注销', self)

        self.emailLabel.setTextColor(QColor(96, 96, 96), QColor(206, 206, 206))
        setFont(self.logoutButton, 13)

        self.setFixedSize(307, 82)
        self.avatar.setRadius(24)
        self.avatar.move(2, 6)
        self.nameLabel.move(64, 13)
        self.emailLabel.move(64, 32)
        self.logoutButton.move(52, 48)


class Demo(QWidget):

    def __init__(self):
        super().__init__()

    def contextMenuEvent(self, e) -> None:
        menu = RoundMenu(parent=self)

        # add custom widget
        card = ProfileCard('resource/shoko.png', '硝子酱', 'shokokawaii@outlook.com', menu)
        menu.addWidget(card, selectable=False)

        menu.addSeparator()
        menu.addActions([
            Action(FluentIcon.PEOPLE, '管理账户和设置'),
            Action(FluentIcon.SHOPPING_CART, '支付方式'),
            Action(FluentIcon.CODE, '兑换代码和礼品卡'),
        ])
        menu.addSeparator()
        menu.addAction(Action(FluentIcon.SETTING, '设置'))
        menu.exec(e.globalPos())
```

### [CheckableMenu](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/menu/index.html#qfluentwidgets.components.widgets.menu.CheckableMenu)

![CheckableMenu](/img/components/menu/CheckableMenu.png)

`CheckableMenu` 允许用户选中内部的动作，通常与 `QActionGroup` 一起使用。

```python
class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.createTimeAction = Action(FluentIcon.CALENDAR, "创建日期", checkable=True)
        self.shootTimeAction = Action(FluentIcon.CAMERA, "拍摄日期", checkable=True)
        self.modifiedTimeAction = Action(FluentIcon.EDIT, "修改日期", checkable=True)
        self.nameAction = Action(FluentIcon.FONT, "名字", checkable=True)

        self.ascendAction = Action(FluentIcon.UP, "升序", checkable=True)
        self.descendAction = Action(FluentIcon.DOWN, "降序", checkable=True)

        # 将动作添加到动作组
        self.actionGroup1 = QActionGroup(self)
        self.actionGroup1.addAction(self.createTimeAction)
        self.actionGroup1.addAction(self.shootTimeAction)
        self.actionGroup1.addAction(self.modifiedTimeAction)
        self.actionGroup1.addAction(self.nameAction)

        self.actionGroup2 = QActionGroup(self)
        self.actionGroup2.addAction(self.ascendAction)
        self.actionGroup2.addAction(self.descendAction)

        # 选中动作
        self.shootTimeAction.setChecked(True)
        self.ascendAction.setChecked(True)

    def contextMenuEvent(self, e):
        menu = CheckableMenu(parent=self, indicatorType=MenuIndicatorType.RADIO)

        menu.addActions([
            self.createTimeAction, self.shootTimeAction,
            self.modifiedTimeAction, self.nameAction
        ])
        menu.addSeparator()
        menu.addActions([self.ascendAction, self.descendAction])

        menu.exec(e.globalPos(), aniType=MenuAnimationType.DROP_DOWN)
```

### [SystemTrayMenu](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/menu/index.html#qfluentwidgets.components.widgets.menu.SystemTrayMenu)

`SystemTrayMenu` 用作系统托盘菜单，与 `QSystemTrayIcon` 一起使用。

```python
class SystemTrayIcon(QSystemTrayIcon):

    def __init__(self, parent):
        super().__init__(parent=parent)
        self.setIcon(parent.windowIcon())

        self.menu = SystemTrayMenu(parent=parent)
        self.menu.addActions([
            Action('🎤   唱'),
            Action('🕺   跳'),
            Action('🤘🏼   RAP'),
            Action('🎶   Music'),
            Action('🏀   篮球', triggered=self.ikun),
        ])
        self.setContextMenu(self.menu)

    def ikun(self):
        print("""巅峰产生虚伪的拥护，黄昏见证真正的使徒 🏀

                       ⠰⢷⢿⠄
                   ⠀⠀⠀⠀⠀⣼⣷⣄
                   ⠀⠀⣤⣿⣇⣿⣿⣧⣿⡄
                   ⢴⠾⠋⠀⠀⠻⣿⣷⣿⣿⡀
                   ⠀⢀⣿⣿⡿⢿⠈⣿
                   ⠀⠀⠀⢠⣿⡿⠁⠀⡊⠀⠙
                   ⠀⠀⠀⢿⣿⠀⠀⠹⣿
                   ⠀⠀⠀⠀⠹⣷⡀⠀⣿⡄
                   ⠀⠀⠀⠀⣀⣼⣿⠀⢈⣧
        """)


class Demo(QWidget):

    def __init__(self):
        super().__init__()
        self.setLayout(QHBoxLayout())
        self.label = QLabel('Right-click system tray icon', self)
        self.layout().addWidget(self.label)

        self.resize(500, 500)
        self.setWindowIcon(QIcon(':/qfluentwidgets/images/logo.png'))

        self.systemTrayIcon = SystemTrayIcon(self)
        self.systemTrayIcon.show()

```

</template>
<template #cpp>

以下代码对应 [Qt-Fluent-Widgets](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets)。请先按[安装说明](/zh/pages/install/#c-接入自己的项目)接入组件库，创建 `QApplication` 并调用 `Q_INIT_RESOURCE(resource)`；片段中的 `parent` 是你的窗口指针。创建控件后加入自己的布局，图片和资源路径需替换为项目实际路径。

```cpp
#include <qtfluentwidgets.h>
#include <QDebug>
#include <memory>
```

### C++ [RoundMenu](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/menu.h)

```cpp
#include <components/widgets/menu.h>

auto* menu = new qfw::RoundMenu(QString(), parent);
auto* action = new qfw::Action(QStringLiteral("Open"), menu);
QObject::connect(action, &QAction::triggered, parent, [] { qDebug() << "Open"; });
menu->addAction(action);
menu->addSeparator();
menu->addAction(new qfw::Action(QStringLiteral("Save"), menu));
menu->execAt(parent->mapToGlobal(QPoint(20, 20)));
```

### C++ [CheckableMenu](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/menu.h)

```cpp
#include <components/widgets/menu.h>

auto* menu = new qfw::CheckableMenu(QString(), parent);
auto* action = new QAction(QStringLiteral("Show toolbar"), menu);
action->setCheckable(true);
action->setChecked(true);
menu->addAction(action);
menu->execAt(parent->mapToGlobal(QPoint(20, 20)));
```

### C++ [SystemTrayMenu](https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets/blob/main/qtfluentwidgets/components/widgets/menu.h)

```cpp
#include <components/widgets/menu.h>

#include <QSystemTrayIcon>

auto* menu = new qfw::SystemTrayMenu(QString(), parent);
menu->addAction(new qfw::Action(QStringLiteral("Show window"), menu));
auto* tray = new QSystemTrayIcon(QIcon(QStringLiteral(":/icons/app.png")), parent);
tray->setContextMenu(menu);
tray->show();
```

</template>
</LanguageTabs>
