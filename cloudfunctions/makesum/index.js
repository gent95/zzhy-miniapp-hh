const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database();
const _ = db.command;

exports.main = async (event, context) => {
  const dst = "戴手套";
  const wcqcs = "未采取措施";
  const guifan = "规范";
  let sum1 = {};
  const BecheckUsers = await db.collection('BeCheckUser').where({
    chId: event.chId
  }).get();

  const Quarters = await db.collection('Quarters').field({
    name: true
  }).get();

  const Character = await db.collection('Character').field({
    name: true
  }).get();

  const Measure = await db.collection('Measure').field({
    name: true
  }).get();

  let userids = [];
  let countUCMDHistory = null;
  for (let i = 0; i < BecheckUsers.data.length; i++) {
    const body = BecheckUsers.data[i];
    userids.push(body._id);
    //岗位统计
    for (let j = 0; j < Quarters.data.length; j++) {
      let quarters = Quarters.data[j];
      if (!quarters.bodyNum) {
        quarters.bodyNum = 0;
      }
      if (body.quarterId == quarters._id) {
        quarters.bodyNum++;

        countUCMDHistory = await db.collection('UCMDHistory').where({
          beCheckUserId: body._id
        }).get();

        quarters.sj = countUCMDHistory.data.length;
        let cucgf = 0;
        for (let k = 0; k < countUCMDHistory.data.length; k++) {
          let cuc = countUCMDHistory.data[k];
          if (!quarters.swscs) {
            quarters.swscs = 0;
          }
          if (cuc.specsName != dst && cuc.specsName != wcqcs) {
            quarters.swscs++;
            if (cuc.specsRes == guifan) {
              cucgf++;
            }
          }

          quarters.gf = cucgf;
          quarters.gfl = bfl(cucgf, quarters.sj);
          if (!quarters.ycl) {
            quarters.ycl = 0;
          }
          if (quarters.sj == quarters.swscs) {
            quarters.ycl = 100;
          } else {
            let ycs = quarters.sj - quarters.swscs;
            quarters.ycl = bfl(quarters.gf, quarters.sj);
          }
        }
        Quarters.data[j] = quarters;
      }
    }

    //手卫生构成统计
    for (let s = 0; s < Measure.data.length; s++) {
      let m = Measure.data[s];
      if (!m.swscs) {
        m.swscs = 0;
      }
      for (let ss = 0; ss < countUCMDHistory.data.length; ss++) {
        let cuc = countUCMDHistory.data[ss];
        if (m.name != dst && m.name != wcqcs && m.name == cuc.specsName) {
          m.swscs++;
          if (!m.gf) {
            m.gf = 0;
          }
          if (cuc.specsRes == guifan) {
            m.gf++;
          }
        }
      }

      if (m.swscs != 0) {
        m.gfl = bfl(m.gf, m.swscs);
      } else {
        m.gfl = "--";
      }
      Measure.data[s] = m;
    }
  }

  const UCMDHistory = await db.collection('UCMDHistory').where({
    beCheckUserId: _.in(userids)
  }).get();

  sum1.sj = UCMDHistory.data.length;
  let swscs = 0;
  let gf = 0;
  let gfs = 0;
  for (let i = 0; i < UCMDHistory.data.length; i++) {
    let ucmd = UCMDHistory.data[i];
    //总统计
    let specsName = ucmd.specsName;
    let specsRes = ucmd.specsRes;
    if (specsName != dst && specsName != wcqcs) {
      swscs++;
      if (specsRes == guifan) {
        gf++;
      }
    } else {
      gfs++;
    }

    sum1.swscs = swscs;
    sum1.gf = gf;
    sum1.gfl = bfl(gf, sum1.swscs);
    if (sum1.sj == sum1.swscs) {
      sum1.ycl = 100;
    } else {
      sum1.ycl = bfl(gfs, sum1.sj);
    }

    //指征统计
    for (let j = 0; j < Character.data.length; j++) {
      let character = Character.data[j];
      if (!character.sj) {
        character.sj = 0;
      }
      let zzgf = 0;
      if (ucmd.characters.indexOf(character._id) != -1) {
        character.sj++;
        if (!character.swscs) {
          character.swscs = 0;
        }
        if (ucmd.specsName != dst && ucmd.specsName != wcqcs) {
          character.swscs++;
          if (ucmd.specsRes == guifan) {
            zzgf++;
          }
        }
        character.gf = zzgf;
        character.gfl = bfl(zzgf, character.sj);

        if (character.sj == character.gf) {
          character.ycl = 100;
        } else {
          character.ycl = bfl(character.gf, character.sj);
        }
      }
      Character.data[j] = character;
    }
  }
  let gwItems = Quarters.data;
  let zzItems = Character.data;
  let swsgcItems = Measure.data;
  return {
    sum1,
    gwItems,
    zzItems,
    swsgcItems
  }
}

/**
 * 计算百分率
 * @param {*} fz 分子
 * @param {*} fm 分母
 */
function bfl(fz, fm) {
  return Math.round(fz / fm * 10000) / 100.00;
}