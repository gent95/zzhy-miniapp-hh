// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event) => {
  const wxContext = cloud.getWXContext()
  const user = await db.collection('User').where({
    _openid:event.userInfo.openId
  }).get();
  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    count:user.data.length,
    user:user.data
  }
}