// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
 return new Promise(resolve=>{
   db.collection(event.table).where(event.where).field(event.field).get().then(res=>{
     console.log('查询结果：',res);
     resolve(res);
   });
 });
}