#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `âHi, nice to meet yah!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true, 
});

console.log(`
- ð I'm Mike Dumais

- ð Some of my interests are GIS & modern web development

- ð± Iâm currently learning Node & backend development

- ð« Email: mdd.dev@live.com

- ð¦ Twitter: @_MikeDu

`)