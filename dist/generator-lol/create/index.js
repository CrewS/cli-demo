"use strict";
const Generator = require('yeoman-generator');
const path = require('path');
module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options);
    }
    create(name) {
        this.fs.copyTpl(this.templatePath('controller._ts'), this.destinationPath(`./app/controller/${name}.ts`), {
            name
        });
        this.fs.copyTpl(this.templatePath('service._ts'), this.destinationPath(`./app/service/${name}.ts`), {
            name
        });
        this.fs.copyTpl(this.templatePath('view.tpl'), this.destinationPath(`./app/view/${name}.tpl`), {
            name
        });
    }
};
