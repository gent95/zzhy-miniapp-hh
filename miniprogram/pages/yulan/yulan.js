// pages/yulan/yulan.js
Page({
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.generatorData(getApp().globalData.datasource);
  },

  /**
   * 构造数据
   * @param {*} param 
   */
  generatorData: function (sourceData) {
    let items = [];
    for (let i = 0; i < sourceData.becheckUserList.length; i++) {
      const userData = sourceData.becheckUserList[i];
      console.log(userData);
      let item = {
        id: i,
        name: userData.name,
        gangw: userData.gangw,
        checkResults: []
      };
      for (let j = 0; j < userData.checkItemResult.length; j++) {
        let checkResult = userData.checkItemResult[j];
        let result = {
          specsName: checkResult.specsName,
          specsRes: checkResult.specsRes,
          character: '',
          noSpecsRemark: []
        };
        for (let k = 0; k < checkResult.characters.length; k++) {
          let character = checkResult.characters[k];
          result.character += ' ' + character.name;
        }
        for (let l = 0; l < checkResult.noSpecsRemarkList.length; l++) {
          result.noSpecsRemark.push(checkResult.noSpecsRemarkList[l].remark);
        }
        item.checkResults.push(result);
      }
      items.push(item);
    }
    console.log(items);
    this.setData({
      items
    });
  }
})