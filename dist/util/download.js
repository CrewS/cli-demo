"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const download = require('download-git-repo');
exports.default = (target) => {
    console.log(target);
    return new Promise((resolve, reject) => {
        download('direct:https://github.com/CrewS/egg-project.git#master', target, { clone: true }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(target);
            }
        });
    });
};
