const Generator = require('yeoman-generator');
const path = require('path');
const rimraf = require('rimraf');
export = class extends Generator {
  constructor(args: any, options: any) {
    super(args, options);
  }
  clean() {
    const tplPath = path.resolve(this.templatePath(), '../../app/templates');
    rimraf.sync(tplPath);
  }
};
