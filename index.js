#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `✋Hi, nice to meet yah!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true, 
});

console.log(`
- 👋 I'm Mike Dumais

- 👀 I’m interested in GIS & modern web development

- 🌱 I’m currently learning Node & backend development

- 📫 Email: mdd.dev@live.com

- 🐦 Twitter: @_MikeDu

`)