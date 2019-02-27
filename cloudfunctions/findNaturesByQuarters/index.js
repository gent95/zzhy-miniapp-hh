// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async(event, context) => {
  const quarters = await db.collection('Quarters').get();
  for(let i = 0; i < quarters.data.length; i++){
    const nature = await db.collection('Nature').where({
      _id:_.in(quarters.data[i].natures)
    }).get();
    quarters.data[i].natures = nature.data;
  }
  return quarters;
}