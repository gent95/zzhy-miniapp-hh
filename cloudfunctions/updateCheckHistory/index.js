// 云函数入口文件
const cloud = require('wx-server-sdk')
// const util = require('../../utils/util.js')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  db.collection('CheckHistory').doc(event._id).update({
    data: {
      // checkOverTime: util.formatTime(new Date())
      checkOverTime: event.checkOverTime
    }
  })
}