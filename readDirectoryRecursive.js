
/*
  Author: Gaurav Srivastava
  github: https://github.com/gauravsrivastav
*/
var fs = require('fs');
var path = require('path');
const { execSync, exec } = require('child_process');
const Promise = require('bluebird');

function copyFolder(dir, number) {
  try {
    return new Promise((resolve, reject) => {
      exec('cp -r /Users/omprakash/Desktop/'+number+'/ /Users/omprakash/Desktop/6/'+number+'' , (err, stdout, stderr) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.toString('binary'));
      });        
    })
  } catch (error) {
    console.log('00---', error)
  }
}

function getFilesFromDir(dir, number) {
  return new Promise((resolve, reject) => {
    if (fs.statSync(dir).isDirectory()) {
      copyFolder(dir, number).then(function(copied) {
        resolve(copied)
      });
    }
  }).then(function(data) {
    console.log('============data===========', data)
  })
}

return new Promise((resolve, reject) => {
  var x = [1, 2, 3, 4, 5];
  x.forEach(function(number) {
    getFilesFromDir("/Users/omprakash/Desktop/"+number.toString(), number).then(function(data) {
      resolve(data);
    })
  })
}).then(function(aaya) {
  console.log('============aaya===========', aaya)
})
