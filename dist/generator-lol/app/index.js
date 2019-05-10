'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = require('yeoman-generator');
const path = require('path');
const spin = require('io-spin');
const generatorRoot = path.join(__dirname, '../');
const download_1 = require("../../util/download");
const fs = require('fs');
module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options);
        this.argument('cmdType', { type: String, required: true });
    }
    init(cmdType, a) {
        this._prompting();
    }
    _prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fs.existsSync(this.templatePath())) {
                const spinner = spin('Download templates', 'Box1');
                spinner.start();
                download_1.default(this.templatePath())
                    .then(() => {
                    spinner.stop();
                })
                    .catch((err) => console.log(err));
            }
            const answers = yield this.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Your project name',
                    default: this.appname
                },
                {
                    type: 'confirm',
                    name: 'init',
                    message: 'Would you like to init a egg project'
                }
            ]);
            if (answers.init === true) {
                this.fs.copyTpl(this.templatePath(), this.destinationPath('./'), { appname: answers.name });
            }
        });
    }
};
