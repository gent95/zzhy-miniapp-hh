// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  let tree = [];
  console.log('参数信息', event);

  const where = {
    text: event.distname
  }

  let allDist = [];
  if (!event.distname || event.distname == '') {
    allDist = await db.collection('Dist').get();
  } else {
    allDist = await db.collection('Dist').where(where).get();
  }

  console.log('数据集',allDist.data);

  tree.push({
    text: '所有科室',
    children: allDist.data
  });
  const groupDist = await db.collection('DistGroup').get();
  console.log('集合', groupDist);
  for (let i = 0; i < groupDist.data.length; i++) {
    const distList = await db.collection('Dist').where({
      groupId: groupDist.data[i]._id
    }).get();
    groupDist.data[i].children = distList.data;
    tree.push(groupDist.data[i]);
  }
  return tree;
}