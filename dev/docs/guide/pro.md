---
title: Extensions
date: 2023-08-17 15:37:01
permalink: /pages/pro/
---

## Community extensions

This site documents the Python reference implementation and the C++ migration. Consult the LICENSE and third-party notices in the repository you use; this page does not grant an upstream commercial license.

C++ now includes migrated chat, code editing, charts, acrylic materials, and advanced input and layout components. See the [installation guide](/pages/install/) and each component’s C++ tab for supported APIs and remaining gaps.

The tables below retain upstream Pro names for comparison. They do not imply that every type exists in either local repository. FilledFluentWindow is implemented; video playback and GuideWindow still have gaps.

### Basic Inputs

| Component Name                | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| `Chip`                        | A chip used as a filter                                     |
| `OutlinedPushButton`          | An outlined button used as a filter                         |
| `OutlinedToolButton`          | An outlined tool button                                     |
| `RoundPushButton`             | An full round push button                                   |
| `FilledPushButton`            | A filled push button                                        |
| `FilledToolButton`            | A filled tool button                                        |
| `TextPushButton`              | A text push button                                          |
| `TextToolButton`              | A text tool button                                          |
| `LuminaPushButton`            | A lumina push button                                        |
| `GlassPushButton`             | A glass push button                                         |
| `HyperlinkToolButton`         | A hyperlink tool button                                     |
| `TransparentCircleToolButton` | A transparent circular tool button                          |
| `FontComboBox`                | A combo box that allows font selection                      |
| `TreeComboBox`                | A tree-structured combo box                                 |
| `MultiSelectionTreeComboBox`  | A tree-structured combo box that allows multiple selections |
| `MultiSelectionComboBox`      | A combo box that allows multiple selections                 |
| `TransparentComboBox`         | A transparent combo box                                     |
| `ToolTipSlider`               | A slider with tooltips                                      |
| `RangeSlider`                 | A range slider with two handles                             |

### Dialogs & Flyouts

| Component Name                    | Description                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| `Drawer`                          | Drawer widget                                                                      |
| `DropDownColorPalette`            | A dropdown color palette that supports selecting standard colors and custom colors |
| `CustomDropDownColorPalette`      | A custom dropdown color palette                                                    |
| `DropDownColorPicker`             | A dropdown color picker                                                            |
| `CustomDropDownColorPicker`       | A custom dropdown color picker                                                     |
| `FlyoutDialog`                    | A flyout dialog                                                                    |
| `ScreenColorPicker`               | Screen color picker                                                                |
| `ShortcutPicker`                  | Shortcut picker                                                                    |
| `ShortcutDialog`                  | Shortcut dialog                                                                    |
| `IndeterminateProgressRingDialog` | Waiting dialog                                                                     |


### Chat

| Component Name       | Description                                                 |
| -------------------- | ----------------------------------------------------------- |
| `ChatWidget`         | Chat component with typewriter effect and loading animation |
| `SimpleChatTextEdit` | Chat input box                                              |
| `ChatTextEdit`       | Chat input box                                              |

### Date Time
| Component Name        | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `ProCalendarPicker`   | An advanced calendar picker that can disable certain dates |
| `RangeCalendarPicker` | A calendar range picker                                    |


### Layout
| Component Name    | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `WaterfallLayout` | Waterfall layout that supports widgets in different sizes |


### Media
| Component Name          | Description             |
| ----------------------- | ----------------------- |
| `AvatarPicker`          | Avatar picker           |
| `ImageCropper`          | Image cropper           |
| `ImageComparisonSlider` | Image comparison slider |
| `AudiowaveformWidget`   | Audio waveform widget   |

### Charts

Seamlessly integrates with the ECharts charting library, providing more than 20 ready-to-use chart types and supporting arbitrary combinations of various charts. You can either directly pass chart configurations or use the object-oriented approach of pyecharts to create charts.

| Component Name | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `ChartWidget`  | A chart component used to draw any chart supported by ECharts |

### Skeletons

Skeleton screens provide basic placeholders when network requests are slow, and restore the data display when the data is loaded. They provide a natural transition to avoid long periods of blank or flickering screens.

| Class Name              | Description                                   |
| ----------------------- | --------------------------------------------- |
| `Skeleton`              | Base class for skeletons with various layouts |
| `ArticleSkeleton`       | Skeleton for article information              |
| `CirclePersonaSkeleton` | Skeleton for circular user information        |
| `SquarePersonaSkeleton` | Skeleton for square user information          |

### Views
| Component Name                | Description                            |
| ----------------------------- | -------------------------------------- |
| `HorizontalCarousel`          | Horizontal carousel                    |
| `VerticalCarousel`            | Vertical carousel                      |
| `SqueezeCarousel`             | Squeeze carousel                       |
| `HorizontalCircleColorPicker` | Horizontal circle color picker         |
| `VerticalCircleColorPicker`   | Vertical circle color picker           |
| `FlowCircleColorPicker`       | Flow circle color picker               |
| `DropSingleFileWidget`        | Drag & drop single file widget         |
| `DropMultiFilesWidget`        | Drag & drop multiple files widget      |
| `DropSingleFolderWidget`      | Drag & drop single folder widget       |
| `DropMultiFoldersWidget`      | Drag & drop multiple folders widget    |
| `EmptyStatusWidget`           | Empty status widget                    |
| `NoInternetStatusWidget`      | No Internet status widget              |
| `Pager`                       | Pagination component                   |
| `Splitter`                    | Area splitter                          |
| `ToolBox`                     | Tool box                               |
| `TimeLineWidget`              | Time line widget                       |
| `TimeLineCard`                | Time line card                         |
| `RoundListWidget`             | Round border list widget               |
| `RoundListView`               | Round border list view                 |
| `RoundTableWidget`            | Round border table widget              |
| `RoundTableView`              | Round border table view                |
| `LineTableWidget`             | Single line table widget               |
| `LineTableView`               | Single line table view                 |
| `GridTableWidget`             | Grid table widget                      |
| `GridTableView`               | Grid table view                        |
| `AccentCardWidget`            | Card widget with linear gradient color |
| `DashboardCardWidget`         | Dashboard card widget                  |
| `ContentDashboardCardWidget`  | Content dash board card widget         |
| `SlideAniStackedWidget`       | Stacked widget with sliding animation  |

### Status & Info
| Component Name       | Description                         |
| -------------------- | ----------------------------------- |
| `FilledProgressBar`  | Progress bar with filled background |
| `ProgressInfoBar`    | Progress info bar                   |
| `ProgressPushButton` | Progress push button                |
| `StepProgressBar`    | Step progress bar                   |
| `Tag`                | Tag widget                          |
| `Toast`              | Toast information widget            |
| `SimpleToastView`    | Simple toast view                   |
| `StarWidget`         | Star widget                         |
| `SingleScoreWidget`  | Single score widget                 |
| `MultiScoreWidget`   | Multi score widget                  |
| `RadialGauge`        | Radial gauge                        |

### Navigation
| Component Name             | Description                 |
| -------------------------- | --------------------------- |
| `MenuBar`                  | Menu bar                    |
| `ExclusiveLiteFilter`      | Exclusive lite filter       |
| `MultiSelectionLiteFilter` | Multi selection lite filter |
| `TopNavigationBar`         | Top navigation bar          |
| `FilledNavigationBar`      | filled navigation bar       |

### Text
| Component Name          | Description              |
| ----------------------- | ------------------------ |
| `CodeEdit`              | Code editor              |
| `LabelLineEdit`         | Label line edit          |
| `TokenLineEdit`         | Token line edit          |
| `OutlinedTextEdit`      | Outlined text edit       |
| `OutlinedPlainTextEdit` | Outlined plain text edit |
| `OutlinedTextBrowser`   | Outlined text browser    |
| `TextWatermarkWidget`   | Text watermark           |
| `ImageWatermarkWidget`  | Image watermark          |

### Settings
| Component Name                      | Description                                        |
| ----------------------------------- | -------------------------------------------------- |
| `ColorPaletteSettingCard`           | Setting card for the dropdown color palette        |
| `CustomColorPaletteSettingCard`     | Setting card for the custom dropdown color palette |
| `MultiSelectionComboBoxSettingCard` | Setting card for the multi-selection combobox      |
| `ColorPickerSettingCard`            | Setting card for the dropdown color picker         |
| `CustomColorPickerSettingCard`      | Setting card for the custom dropdown color         |
| `ShortcutSettingCard`               | Setting card for the shortcut picker               |

### Window
| Component Name            | Description                  |
| ------------------------- | ---------------------------- |
| `TopFluentWindow`         | Top navigation fluent window |
| `FilledFluentWindow`      | Filled fluent window         |
| `FilledSplitFluentWindow` | Filled split fluent window   |
