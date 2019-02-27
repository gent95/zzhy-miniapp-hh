// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async(event, context) => {
  const Feedback =  await db.collection('Feedback').where({
    _id: _.in(event.items)
  }).get();

  let array = '';
  for (let i = 0; i < Feedback.data.length; i++) {
    array += ', '+Feedback.data[i].remark;
  }

  return array;
}