// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  let naturesIds = event.naturesIds;
  let natures = [];
  if(naturesIds == null || naturesIds.length < 1){
    return null;
  }
  for (let i = 0; i < naturesIds.length; i++) {
   const nature = await db.collection('Nature').doc(naturesIds[i]).get();
   natures.push(nature.data);
  }
  return natures;
}