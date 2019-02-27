// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

const db = cloud.database();

// 云函数入口函数
exports.main = async(event) => {
  event.data._openid = event.userInfo.openId;
  event.data.createTime = new Date();
  return new Promise((resolve,reject)=>{
    db.collection(event.table).add({
      data: event.data
    }).then(res => {
      console.log("添加成功", res);
      resolve(res);
    });
  });
}