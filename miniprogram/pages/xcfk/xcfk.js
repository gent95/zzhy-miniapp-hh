// pages/xcfk/xcfk.js
const db = wx.cloud.database();
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.title,
    });

    wx.getSystemInfo({
      success: res => {
        let winWidth = res.windowWidth
        let r = 750 / winWidth
        let winHeight = res.windowHeight * r;
        this.setData({
          winWidth: winWidth,
          winHeight: winHeight,
          options: options
        });
      }
    });

    try {
      let dcssitems = wx.getStorageSync('dcssitems');
      if (!dcssitems) {
        db.collection('Feedback').get().then(res => {
          wx.setStorageSync("dcssitems", res.data);
          this.setData({
            dcssItems: res.data
          });
        });
      } else {
        this.setData({
          dcssItems: dcssitems
        });
      }

    } catch (e) {
      console.log('dcssitems 读写缓存失败')
    }
  },

  /**
   * 点击保存反馈按钮
   */
  onClickOk: function() {
    let items = this.data.items;
    let ckItems = [];
    let chId = "";

    for (let i = 0; i < items.length; i++) {
      console.log('checked', items[i])
      if (items[i].checked) {
        ckItems.push(items[i]._id)
      }
    }
    chId = this.data.options.chid;
    console.log('现场反馈绑定chid',chId);

    let feedBackHistory = {
      feedbackUserName: this.data.feedbackUserName,
      train: this.data.isYes,
      trainCycle: this.data.trainCycleId,
      feedbackItems: ckItems
    }

    app.global.data.feedBackHistory = feedBackHistory;
    // db.collection('FeedbackHistory').add({
    //   data: feedBackHistory,
    //   success: res => {
    //     wx.redirectTo({
    //       url: '../dgn/dgn?dist=' + this.data.options.dist + "&distId=" + this.data.options.distid + "&chid=" + this.data.options.chid
    //     });
    //   }
    // });
  },

  /**
   * 点击是图标
   */
  onClickYes: function() {
    try {
      let trainCycles = wx.getStorageSync('trainCycles');
      if (!trainCycles) {
        db.collection('TrainingCycle').get().then(res => {
          wx.setStorageSync('trainCycles', trainCycles);
          this.setData({
            trainCycles: res.data,
            isYes: true
          });
        });
      } else {
        this.setData({
          trainCycles: trainCycles,
          isYes: true
        });
      }
    } catch (e) {
      console.log("TrainingCycle 读写缓存失败")
    }

  },

  /**
   * 点击否图标
   */
  onClickNo: function() {
    this.setData({
      isYes: false
    });
  },

  /**
   * 复选框选中项改变时
   * @param {*} res 
   */
  checkboxChange: function(res) {
    console.log('checkbox发生change事件，携带value值为：', res.detail.value)
    const items = this.data.dcssItems
    const values = res.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i]._id === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  },

  /**
   * 点击培训时间按钮时触发
   * @param {} res 
   */
  onClickPxtimeItem: function(res) {
    this.setData({
      pxtbk: res.currentTarget.dataset.pxtbk,
      trainCycleId: res.currentTarget.dataset.pxtbk
    });
  },

  /**
   * 被反馈人输入框失去焦点
   * @param {*} res 
   */
  onBlurBeFkr: function(res) {
    this.setData({
      feedbackUserName: res.detail.value
    })
  }
})