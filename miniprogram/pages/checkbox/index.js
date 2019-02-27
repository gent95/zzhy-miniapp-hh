// pages/checkbox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checks: [{
        name: "投影仪",
        value: '0',
        checked: false
      },
      {
        name: "电视机",
        value: '1',
        checked: false
      },
      {
        name: "空调",
        value: '2',
        checked: false
      },
      {
        name: "Wifi",
        value: '3',
        checked: false
      },
      {
        name: "电脑",
        value: '4',
        checked: false
      },
      {
        name: "舞把杆",
        value: '5',
        checked: false
      },
      {
        name: "镜面墙",
        value: '6',
        checked: false
      },
      {
        name: "音响",
        value: '7',
        checked: false
      },
      {
        name: "桌椅",
        value: '8',
        checked: false
      },
      {
        name: "其他",
        value: '9',
        checked: false
      }
    ]
  },

  clicks: function(e) {
    let index = e.currentTarget.dataset.index;
    let arrs = this.data.checks;
    if (arrs[index].checked == false) {
      arrs[index].checked = true;
    } else {
      arrs[index].checked = false;
    }
    this.setData({
      checks: arrs
    })
    console.log(this.data.checks)
  }
})