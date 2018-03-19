const entry = require('./webpack.entry.conf');
const json = require('../../package.json');
const newEntry ={
//    'index':'./entryBuild/index.js',
//    'shop':'./entryBuild/shop.js'
};

for(let name in entry){
   newEntry[name] = entry[name][0]
}

newEntry.vendor = Object.keys(json.dependencies)
// 把package.json dependencies字段的值放进vender中
let config  = {
   entry : newEntry,
   resolve:{
       extensions:['.js','.json','.jsx','css','pcss']
   }
};

module.exports = config;








