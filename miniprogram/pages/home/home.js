//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
let tag = 0;

Page({
  data: {
    index: 0
  },
  onReady: function () {
    wx.showLoading({
      title: "正在初始化"
    });

    wx.cloud.callFunction({
      name: "getOpenId",
      success: res => {
        wx.hideLoading();
        console.log('统计得到', res.result.count);
        if (res.result.count != 0) {
          console.log('当前访问用户openId', res.result.user[0]._id);
          wx.setStorageSync("checkUserId", res.result.user[0]._id);
          wx.setStorageSync("distId", res.result.user[0].distId);
          wx.redirectTo({
            url: '../checks/checks'
            // url: '../yulan/yulan'
          });
        } else if (tag == 0) {
          tag++;
        }
      }
    });
  },

  onLoad: function () {
    let dist1 = wx.getStorageSync("dist1");
    if (!dist1) {
      db.collection('Dist').get().then(res => {
        wx.setStorageSync("dist1", res.data);
        this.setData({
          array: res.data
        });
      });
    }
    
    this.setData({
      array: dist1
    });
  },
  /**
   * 提交表单
   * @param {*} e 
   */
  onSubmit: function (e) {
    const form = e.detail.value
    form.distId = this.data.array[this.data.index]._id;
    delete form.distname
    console.log('提交的用户信息是', form);
    var tag = true
    for (const key in form) {
      if (!form[key]) {
        tag = false
      }
    }

    if (tag) {
      wx.cloud.callFunction({
        name: 'addObject',
        data: {
          table: "User",
          data: form
        }
      }).then(res => {
        wx.showToast({
          icon: 'success',
          duration: 1500,
          mask: false
        });
        try {
          wx.setStorageSync("checkUserId", res.result._id);
          console.log('checkUserId写入缓存成功');
        } catch (e) {
          console.log('checkUserId写入缓存失败')
        }
        wx.redirectTo({
          url: "../checks/checks"
        });
      });
    } else {
      wx.showToast({
        title: '数据不能为空',
        icon: 'none',
        duration: 1500,
        mask: false
      });
    }
  },

  /**
   * 选择科室时触发
   */
  bindPickerChange: function (event) {
    this.setData({
      index: event.detail.value
    });
  }
})