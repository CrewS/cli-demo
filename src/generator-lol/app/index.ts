'use strict';

const Generator = require('yeoman-generator');
const path = require('path');
const spin = require('io-spin');
const generatorRoot = path.join(__dirname, '../');
import download from '../../util/download';
const fs = require('fs');
module.exports = class extends Generator {
  constructor(args: any, options: any) {
    super(args, options);
    this.argument('cmdType', { type: String, required: true });
  }
  init(cmdType: string, a: string) {
    this._prompting();
  }
  async _prompting() {
    if (!fs.existsSync(this.templatePath())) {
      const spinner = spin('Download templates', 'Box1');
      spinner.start();
      download(this.templatePath())
        .then(() => {
          spinner.stop();
          
        })
        .catch((err) => console.log(err));
    }
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'confirm',
        name: 'init',
        message: 'Would you like to init a egg project'
      }
    ]);

    if (answers.init === true) {
      this.fs.copyTpl(this.templatePath(), this.destinationPath('./'), { appname: answers.name});
    }
    // this.composeWith(require.resolve('../generator/app'));
    // this.log('app name', answers.name);
    // this.log('cool feature', answers.init);
    // const next = await this.prompt([
    //   {
    //     type: 'input',
    //     name: 'type',
    //     message: 'your project type'
    //   }
    // ]);
    // this.log('app type', next.type);
  }
};
