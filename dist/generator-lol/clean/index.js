"use strict";
const Generator = require('yeoman-generator');
const path = require('path');
const rimraf = require('rimraf');
module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options);
    }
    clean() {
        const tplPath = path.resolve(this.templatePath(), '../../app/templates');
        rimraf.sync(tplPath);
    }
};
