const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function files(dir) {
    return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
function audit(locale) {
    const result = {locale, python: [], cpp: [], broken: []};
    for (const file of files(path.join(root, locale, 'components')).filter(file => file.endsWith('.md'))) {
        const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
        for (const match of text.matchAll(/!\[([^\]]*)\]\((\/img\/[^)]+)\)/g)) {
            if (!fs.existsSync(path.join(root, '.vuepress/public', decodeURI(match[2])))) result.broken.push({file: path.relative(root, file), src: match[2]});
        }
        for (const language of ['python', 'cpp']) {
            const panel = text.split(`<template #${language}>`)[1]?.split('</template>')[0];
            if (!panel) continue;
            for (const section of panel.split(/(?=^#{2,3} )/m).slice(1)) {
                const heading = section.split('\n')[0];
                const name = heading.match(/\[([^\]]+)\]/)?.[1] ?? heading.replace(/^#{2,3} (C\+\+ )?/, '');
                const images = [...section.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)].map(match => match[2]);
                const component = /^\w+$/.test(name) && (/\[/.test(heading) || name === 'QConfig');
                result[language].push({name, component, file: path.relative(root, file), images});
            }
        }
    }
    return result;
}
if (require.main === module) console.log(JSON.stringify([audit('zh'), audit('docs')], null, 2));
module.exports = {audit};
