// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  // event.checkHistory = {
  //   "distId": "XDagBInnuWjcivHy",
  //   "fileIDList": ["cloud://zzhy-hh-775051.7a7a-zzhy-hh-775051/wx5cd2454c05858081XEfa9t7E7L4wifWA0.gif", "cloud://zzhy-hh-775051.7a7a-zzhy-hh-775051/wx5cd2454c05858081XEfa9t7E7L4wifWA3.jpg", "cloud://zzhy-hh-775051.7a7a-zzhy-hh-775051/wx5cd2454c05858081XEfa9t7E7L4wifWA1.gif", "cloud://zzhy-hh-775051.7a7a-zzhy-hh-775051/wx5cd2454c05858081XEfa9t7E7L4wifWA2.jpg"],
  //   "becheckUserList": [{
  //     "quarterId": "XDl-qFsqTi00tlYc",
  //     "workAgeId": "XDmkjInnuWjcivNT",
  //     "checkItemResult": [{
  //       "characters": ["XDahSonnuWjcivH0", "XDvoM1sqTi00tlbu"],
  //       "checkUserId": "",
  //       "noSpecsRemarkList": [],
  //       "specsName": "洗手",
  //       "specsRes": "规范"
  //     }, {
  //       "characters": ["XDahSonnuWjcivH0", "XDvoM1sqTi00tlbu"],
  //       "checkUserId": "",
  //       "noSpecsRemarkList": ["5c3c4269ec54816ba3254cb7", "5c3c4269ec54816ba3254cb9", "5c3c4269ec54816ba3254cbb"],
  //       "specsName": "卫生手消毒",
  //       "specsRes": "不规范"
  //     }],
  //     "name": "555",
  //     "natureId": "XDmAgHkPDdDCJ3SB"
  //   }, {
  //     "quarterId": "",
  //     "workAgeId": "",
  //     "checkItemResult": [{
  //       "noSpecsRemarkList": [],
  //       "specsName": "未采取措施",
  //       "specsRes": "规范",
  //       "characters": ["XDahSonnuWjcivH0", "XDvoM1sqTi00tlbu"],
  //       "checkUserId": ""
  //     }, {
  //       "checkUserId": "",
  //       "noSpecsRemarkList": ["5c3c4269ec54816ba3254cb7", "5c3c4269ec54816ba3254cbb", "5c3c4269ec54816ba3254cbd"],
  //       "specsName": "未采取措施",
  //       "specsRes": "不规范",
  //       "characters": ["XDahSonnuWjcivH0", "XDvoM1sqTi00tlbu"]
  //     }],
  //     "name": "444",
  //     "natureId": ""
  //   }],
  //   "checkOverTime": "2019/01/24 10:00:03"
  // }
  console.log(event.checkHistory);
  console.log(event.becheckUserList);
  let chid;
  try {
    await db.collection('CheckHistory').add({
        // data 字段表示需新增的 JSON 数据
        data: event.checkHistory
       }).then(res => {
         console.log(res)
         chid=res._id;
       })
         .catch(console.error)
    } catch (e) {
      console.error(e)
    }

  for (var i = 0; i < event.becheckUserList.length; i++) {
    try {
      await db.collection('BeCheckUser').add({
      data:{
        quarterId: event.becheckUserList[i].quarterId,
        natureId: event.becheckUserList[i].natureId,
        workAgeId: event.becheckUserList[i].workAgeId,
        name: event.becheckUserList[i].name,
        _openid: event.checkHistory._openid,
        chId: chid
        }
      }).then(res => {
        console.log(res)
      })
      .catch(console.error)
    } catch (e) {
      console.error(e)
    }
  }
  


  


  /*let ch = {
    distId:event.checkHistory.distId,
    checkDate:event.checkHistory.checkDate,
    _openid:event._openid,
    checkOverTime:event.checkHistory.checkOverTime,
    checkUserId:event.checkHistory.checkUserId
  }

  const chPrim =  await db.collection('CheckHistory').add({
    data:ch
  });
  
  await db.collection('CheckHistory').add({
    data:ch
  }).then(ch_res=>{
    for(let i = 0; i<event.checkHistory.becheckUserList.length; i++){
      const ibcu = event.checkHistory.becheckUserList[i];
      let bcu = {
        quarterId:ibcu.quarterId,
        natureId:ibcu.natureId,
        workAgeId:ibcu.workAgeId,
        name:ibcu.name,
        _openid:event._openid,
        chId:ch_res._id
      }
     db.collection('BeCheckUser').add({
        data:bcu
      }).then(bcu_res=>{
        for(let j = 0; j < ibcu.checkItemResult.length; j++){
          const icir = ibcu.checkItemResult[j];
          let cir = {
            characters:icir.characters,
            _openid:event._openid,
            becheckUserId:bcu_res._id,
            noSpecsRemarks:icir.noSpecsRemarkList,
            specsName:icir.specsName,
            specsRes:icir.specsRes
          }
          db.collection('UCMDHistory').add({
            data:cir
          }).then(cir_res=>{
            console.log('保存成功！！！checkHistory:'+ch_res._id+"beCheckUser"+bcu_res._id+"checkItem"+cir_res._id);
          });
        }
      });
    }
  });*/
}