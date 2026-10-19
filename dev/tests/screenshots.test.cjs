const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const { audit } = require('../scripts/audit-screenshots.cjs');
const nonVisual = new Set(['SmoothScroll', 'SmoothScrollDelegate', 'FlipImageDelegate', 'QConfig']);
const root = path.resolve(__dirname, '..');

test('every visual component has an image in both documentation languages', () => {
    for (const locale of ['zh', 'docs']) {
        const result = audit(locale);
        assert.deepEqual(result.broken, []);
        for (const language of ['python', 'cpp']) {
            const missing = result[language].filter(section => section.component && !nonVisual.has(section.name) && !section.images.length);
            assert.deepEqual(missing, [], `${locale}/${language}: ${missing.map(section => section.name).join(', ')}`);
        }
    }
});

test('C++ sections share the corresponding Python image and explicitly identify it as a reference', () => {
    for (const locale of ['zh', 'docs']) {
        const result = audit(locale);
        for (const section of result.cpp.filter(section => section.component && !nonVisual.has(section.name))) {
            const python = result.python.find(candidate => candidate.file === section.file && candidate.name === section.name);
            assert.ok(python, `${section.file}: ${section.name}`);
            assert.equal(section.images[0], python.images[0], section.name);
            const source = fs.readFileSync(path.join(root, section.file), 'utf8');
            assert.ok(source.includes(locale === 'zh' ? '展示图复用本页对应 Python' : 'Images are shared with the corresponding Python'));
        }
    }
});

test('new Python captures are valid nonempty PNG files', () => {
    const dir = path.join(root, '.vuepress/public/img/components/python');
    const files = fs.readdirSync(dir).filter(file => file.endsWith('.png'));
    assert.ok(files.length >= 42);
    for (const file of files) {
        const bytes = fs.readFileSync(path.join(dir, file));
        assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', file);
        assert.ok(bytes.readUInt32BE(16) > 0 && bytes.readUInt32BE(20) > 0, file);
    }
});

test('CircleColorPicker example selects a color that exists in its default palette', () => {
    for (const locale of ['zh', 'docs']) {
        const source = fs.readFileSync(path.join(root, locale, 'components/dialog_flyout/color_dialog.md'), 'utf8');
        const section = source.split('### C++ [CircleColorPicker]')[1];
        assert.match(section, /widget->setCurrentIndex\(1\);/);
        assert.doesNotMatch(section, /widget->setColor\(QColor\("#009faa"\)\)/);
    }
});
