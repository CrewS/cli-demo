const path = require('path');
const download = require('download-git-repo');

export default (target: any) => {
  console.log(target)
  return new Promise((resolve, reject) => {
    download(
      'direct:https://github.com/CrewS/egg-project.git#master',
      target,
      { clone: true },
      (err: any) => {
        if (err) {
          reject(err);
        } else {
          // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
          resolve(target);
        }
      }
    );
  });
};
