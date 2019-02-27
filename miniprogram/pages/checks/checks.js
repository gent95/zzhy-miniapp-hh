// pages/checks/checks.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pagenum:0
  },
  onClickPad: function (res) {
    console.log("chId", res.currentTarget.dataset.chid);
    wx.navigateTo({
      url: '../makesum/makesum?chId=' + res.currentTarget.dataset.chid
    })
  },

  onLoad: function () {
    this.initChecksData();
  },

  /**
   * 点击添加按钮时
   */
  onClickAdd: function () {
    wx.navigateTo({
      url: '../dgn/dgn'
    })
  },

  /**
   * 初始化检验信息列表
   */
  initChecksData: function () {
    wx.showLoading({
      title: "正在加载"
    });
    wx.cloud.callFunction({
      name: 'findChecksData',
     data:{
      pagenum:this.data.pagenum
     }
    }).then(res => {
      console.log(res.result);
      if(res.result.length < 1){
        wx.showToast({
          title: '已加载完所有',
          duration: 1000
        });
        return;
      }
      let tmpdata = null;
      if(this.data.dataList){
        tmpdata = this.data.dataList.concat(res.result);
      }else{
        tmpdata = res.result;
      }
      wx.hideLoading();
      this.setData({
        dataList:tmpdata
      });
    });
  },

  onUnload: function () {
    wx.navigateTo({
      url: '../checks/checks',
    });
  },

  /**
   * 删除检查项
   */
  remove: function (res) {
    this.setData({
      dataset: res.currentTarget.dataset
    });
    console.log('删除第{0}个', this.data.dataset.index);
    wx.showModal({
      title: '提示',
      content: '确定是否删除？',
      success: res1 => {
        if (res1.confirm) {
          db.collection('CheckHistory').doc(this.data.dataset.chid).update({
            data: {
              isDel: true
            }
          }).then(res => {
            this.data.dataList.splice(this.data.dataset.index, 1);
            this.setData({
              dataList: this.data.dataList
            });
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1000
            });
          });
        } else if (res1.cancel) {
          console.log('用户点击取消删除');
        }
      }
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onReachBottom: function () {
    this.data.pagenum++;
    this.initChecksData();
  }
})