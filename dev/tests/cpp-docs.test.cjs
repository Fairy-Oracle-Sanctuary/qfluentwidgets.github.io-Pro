const assert = require('node:assert/strict');
const { test } = require('node:test');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const read = (locale, file) => readFileSync(resolve(__dirname, '..', locale, file), 'utf8').replace(/\r\n/g, '\n');
const cpp = text => text.split('<template #cpp>')[1]?.split('</template>')[0] ?? text;

test('both install guides explain the optional chart target and a base-only build', () => {
    for (const locale of ['zh', 'docs']) {
        const text = cpp(read(locale, 'guide/install.md'));
        assert.match(text, /set\(QFW_BUILD_CHART OFF/);
        assert.match(text, /target_link_libraries\(my_app PRIVATE qtfluentwidgets qtfluentwidgets_chart\)/);
        for (const dependency of ['WebEngineWidgets', 'QuickWidgets', 'AA_ShareOpenGLContexts', 'QtWebEngineProcess']) {
            assert.ok(text.includes(dependency), dependency);
        }
    }
});

test('bilingual WebEngine examples share the context before QApplication and restore Mica after show', () => {
    const samples = ['zh', 'docs'].map(locale => {
        const text = cpp(read(locale, 'components/window/fluent_window.md'));
        return text.split('### C++ Win11')[1].match(/```cpp\n([\s\S]*?)\n```/)[1];
    });
    assert.equal(samples[0], samples[1]);
    assert.ok(samples[0].indexOf('AA_ShareOpenGLContexts') < samples[0].indexOf('QApplication app'));
    assert.ok(samples[0].indexOf('window.show()') < samples[0].indexOf('window.setMicaEffectEnabled(true)'));
    assert.match(samples[0], /new qfw::FramelessWebEngineView/);
});

test('acrylic documentation has identical compilable snippets and reachable bilingual sidebar entries', () => {
    const blocks = locale => [...read(locale, 'components/material/acrylic.md').matchAll(/```cpp\n([\s\S]*?)\n```/g)].map(match => match[1]);
    assert.deepEqual(blocks('zh'), blocks('docs'));
    assert.equal(blocks('zh').length, 2);
    for (const locale of ['zh', 'en']) {
        const sidebar = readFileSync(resolve(__dirname, '..', '.vuepress/config', locale, 'series.js'), 'utf8');
        assert.ok(sidebar.includes(`${locale === 'zh' ? '/zh' : ''}/pages/components/acrylic/`));
    }
});

test('FilledFluentWindow has a usable bilingual example after its implementation', () => {
    for (const locale of ['zh', 'docs']) {
        const text = cpp(read(locale, 'components/window/fluent_window.md'));
        assert.ok(text.includes('### C++ [FilledFluentWindow]('));
        assert.ok(text.includes('new qfw::FilledFluentWindow(parent)'));
        assert.ok(text.includes('/img/components/fluent_window/FilledFluentWindow.png'));
        assert.ok(!text.includes('- `FilledFluentWindow`'));
        assert.doesNotMatch(cpp(read(locale, 'guide/install.md')), /currently includes only free base|目前仅包含免费基础/);
    }
});
