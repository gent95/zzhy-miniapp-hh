// pages/moudles/xzdy/xzdy.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rightItems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('选择单元传回来的数据',options);
    this.data.chId = options.chId;
    wx.setNavigationBarTitle({
      title: options.title,
    });

    wx.getSystemInfo({
      success: res => {
        let winWidth = res.windowWidth
        let r = 750 / winWidth
        let winHeight = res.windowHeight * r
        this.setData({
          winWidth: winWidth,
          winHeight: winHeight
        });
      }
    });

    let distGroup = wx.getStorageSync("distGroup");
    if (!distGroup) {
      db.collection('DistGroup').get().then(res => {
        wx.setStorageSync("distGroup", res.data)
        this.setData({
          leftItems: res.data
        });
      })
    } else {
      this.setData({
        leftItems: distGroup
      });
    }
  },

  /**
   * 点击左侧列表项
   * @param {*} res 
   */
  onClickBigItem: function(res) {
    this.setData({
      ckitem: res.currentTarget.dataset.ckindex,
      // rightItems: res.currentTarget.dataset.childitems
      rightItems: this.data.rightItems
    });

    var ckid = res.currentTarget.dataset.ckid

    let dist = wx.getStorageSync("dist");
    if(!dist){
      db.collection('Dist').where({
        "groupId": ckid
      }).get().then(res => {
        wx.setStorageSync("dist", res.data)
        this.setData({
          rightItems: res.data
        });
      });
    }else{
      this.setData({
        rightItems: dist
      });
    }
   
  },

  /**
   * 点击右侧列表项
   * @param {} res 
   */
  onClickSmallItem: function(res) {
    if(this.data.chId){
      db.collection('CheckHistory').doc(this.data.chId).remove().then(res=>{
        console.log('删除无效的检查记录',res);
      });
    }
    wx.redirectTo({
      url: '../dgn/dgn?dist=' + res.currentTarget.dataset.ckindex + "&distId=" + res.currentTarget.dataset.distid +"&tag=true"
    });
  },

  /**
   * 监听软键盘完成按钮
   * @param {*} res 
   */
  doSearch: function(res) {
    console.log('输入框查询信息',res);
    db.collection('Dist').where({
      'name': res.detail
    }).get().then(result => {
      this.setData({
        rightItems: result.data
      });
    });
  }
})