// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  db.collection('Dist').where({groupId:event.groupId }).get().then(res => {
    console.log(event.groupId)
    console.log('data',res.data)
    return res.data
  })
}
