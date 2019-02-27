const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;
exports.main = async (event, context) => {
  let resultSet = [];
  const CheckHistory = await db.collection("CheckHistory").where({
    _openid: event.userInfo.openId,
    isDel: false
  }).orderBy("checkDate", "desc").get();

  console.log(CheckHistory.data);

  for (let i = 0; i < CheckHistory.data.length; i++) {
    let _id = CheckHistory.data[i]._id;
    console.log('莫名其妙的id', CheckHistory.data[i]._id)
    let checkDate = CheckHistory.data[i].checkDate.split(" ")[0];
    let checkTime = CheckHistory.data[i].checkDate.split(" ")[1].substring(0, 5) + "-";
    if (CheckHistory.data[i].checkOverTime) {
      checkTime += CheckHistory.data[i].checkOverTime.split(" ")[1].substring(0, 5);
    } else {
      db.collection('CheckHistory').doc(CheckHistory.data[i]._id).remove();
    }

    const Dist = await db.collection('Dist').doc(CheckHistory.data[i].distId).get();
    let checkDist = Dist.data.text;
    console.log('科室信息', Dist.data);

    const User = await db.collection('User').where({
      _openid: event.userInfo.openId
    }).get();
    let checkUser = User.data[0].name;

    let checkPeople = '';
    let peopleIds = [];
    const BeCheckUser = await db.collection("BeCheckUser").where({
      chId: _id
    }).get();
    let Peoples = BeCheckUser.data;
    for (let i = 0; i < Peoples.length; i++) {
      peopleIds.push(Peoples[i]._id);
      if (Peoples[i].quarterId) {
        const Quarters = await db.collection('Quarters').doc(Peoples[i].quarterId).get();
        if (checkPeople.indexOf(Quarters.data.name) == -1) {
          checkPeople += " " + Quarters.data.name + ":";
          const BecheckUserCount = await db.collection("BeCheckUser").where({
            chId: _id,
            quarterId: Peoples[i].quarterId
          }).count();
          checkPeople += BecheckUserCount.total + "人";
        }
      }
    }

    const suc = await db.collection('UCMDHistory').where({
      beCheckUserId: _.in(peopleIds),
      specsRes: '规范'
    }).count();

    const all = await db.collection('UCMDHistory').where({
      beCheckUserId: _.in(peopleIds)
    }).count();

    let checkQualified = Math.round(suc.total / all.total * 10000) / 100.00;
    if (isNaN(checkQualified)) {
      checkQualified = 0;
    }
    let c = checkQualified + "%";

    resultSet.push({
      _id,
      checkDate,
      checkTime,
      checkDist,
      checkUser,
      checkPeople,
      checkQualified: c
    });
  }
  return resultSet
}