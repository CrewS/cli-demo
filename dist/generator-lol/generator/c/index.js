"use strict";
var Generator = require('yeoman-generator');
var path = require('path');
module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options);
    }
    makeProjectDirectoryStructure() {
        this.fs.copyTpl(this.templatePath(), this.destinationPath('./'));
    }
};
