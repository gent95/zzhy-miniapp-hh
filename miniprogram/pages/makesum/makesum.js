// pages/makesum/makesum.js
import * as echarts from '../../plugins/ec-canvas/echarts';
const db = wx.cloud.database();

Page({
  currentTab: '报表',
  ec: {
    lazyLoad: true
  },
  data: {
    navs: [{
      text: '报表',
      index: '1'
    }, {
      text: '现场反馈',
      index: '2'
    }, {
      text: '附件',
      index: '3'
    }]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      index: 1
    });
    this.ec1 = this.selectComponent('#mychart1');
    this.ec2 = this.selectComponent('#mychart2');
    this.ec3 = this.selectComponent('#mychart3');
  },

  onLoad: function (option) {
    this.data.chId = option.chId;
    this.initBaoBiaoData();
    this.initImages();
    this.initFeedbackHistory();
    this.findDist();
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
  },

  /**
   * 点击tab切换
   */
  swichNav: function (res) {
    let index = res.currentTarget.dataset.index
    this.setData({
      currentTab: res.currentTarget.dataset.current,
      index: index
    });
    setTimeout(() => {
      if (index == 1) {
        this.ec1 = this.selectComponent('#mychart1');
        this.ec2 = this.selectComponent('#mychart2');
        this.ec3 = this.selectComponent('#mychart3');
        this.initBaoBiaoData();
      }
    }, 500);
  },

  // 点击按钮后初始化图表
  init: function () {
    this.ec1.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });

      let gwGraph = this.initGraph(this.data.gwTable, [4, 6]);
      this.setOption(chart, gwGraph[0], gwGraph[1]);
      this.chart = chart;
      return chart;
    });

    this.ec2.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      let zzGraph = this.initGraph(this.data.zzTable, [3, 5]);
      this.setOption(chart, zzGraph[0], zzGraph[1]);
      this.chart = chart;
      return chart;
    });

    this.ec3.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      this.setOption1(chart, this.initSwsgcGraph());
      this.chart = chart;
      return chart;
    });
  },

  /**
   * 获取数据
   * @param {*} bs 
   */
  getData: function (bs) {},

  /**
   * 装配 option
   * @param {*} chart 
   * @param {*} yAxis 
   * @param {*} barSeries 
   */
  setOption: function (chart, barSeries, yAxis) {
    const option = {
      color: ['#37a2da', '#FFEC8B', '#D15FEE', '#ADFF2F', '#ADD8E6'],
      backgroundColor: '#FFFFFF',
      tooltip: {
        show: true
      },
      legend: {
        show: true
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 40,
        containLabel: true
      },
      xAxis: [{
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }],
      yAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        data: yAxis,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }],
      series: barSeries
    };
    chart.setOption(option);
  },

  setOption1: function (chart, barSeries) {
    const option = {
      color: ['#37a2da', '#FFEC8B', '#D15FEE', '#ADFF2F', '#ADD8E6'],
      backgroundColor: '#FFFFFF',
      tooltip: {
        show: true
      },
      legend: {
        show: true
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 40,
        containLabel: true
      },
      series: barSeries
    };
    chart.setOption(option);
  },
  /**
   * 加载附件
   */
  initImages: function () {
    db.collection('Photo').where({
      "chId": this.data.chId
    }).get().then(res => {
      console.log("图片真实路径", res);
      if (res.data != null && res.data.length > 0) {
        wx.cloud.getTempFileURL({
          fileList: res.data[0].images,
          success: res => {
            this.setData({
              imageSrcs: res.fileList
            });
          }
        });
      }
    });
  },

  /**
   * 初始化现场反馈
   */
  initFeedbackHistory: function () {
    db.collection('FeedbackHistory').where({
      chId: this.data.chId
    }).get().then(res => {
      console.log('检查记录：', res);
      if (res.data != null && res.data.length > 0) {
        wx.cloud.callFunction({
          name: "findFeedbackRemarks",
          data: {
            items: res.data[0].feedbackItems
          }
        }).then(res1 => {
          this.setData({
            fedItems: res1.result
          });
        });

        this.setData({
          userName: res.data[0].feedbackUserName,
          train: res.data[0].train ? "是" : "否"
        });
      }
    });
  },

  /**
   * 当前记录所在科室
   */
  findDist: function () {
    db.collection('CheckHistory').doc(this.data.chId).get().then(res => {
      db.collection('Dist').doc(res.data.distId).get().then(res => {
        this.setData({
          distName: res.data.text
        });
      });
    });
  },

  /**
   * 点击预览图片
   * @param {*} res 
   */
  yulan: function (res) {
    let srclist = [];
    const srcs = res.currentTarget.dataset.srclist;
    for (let i = 0; i < srcs.length; i++) {
      srclist.push(srcs[i].fileID);
    }
    wx.previewImage({
      current: res.currentTarget.dataset.src,
      urls: srclist
    });
  },

  /**
   * 初始化报表页数据
   */
  initBaoBiaoData: function () {
    wx.showLoading({
      title: '加载中...',
    });
    wx.cloud.callFunction({
      name: 'makesum',
      data: {
        chId: this.data.chId
      }
    }).then(res => {
      wx.hideLoading();
      console.log('统计原始数据', res.result);
      wx.setStorageSync('makesumData', res);
      const sum1 = res.result.sum1;
      const gwTable = this.initGwTable(res.result.gwItems);
      const zzTable = this.initZZTable(res.result.zzItems);
      const swsgcTable = this.initSwsgcTable(res.result.swsgcItems);
      this.setData({
        sum1,
        gwTable,
        zzTable,
        swsgcTable
      });
      this.init();
    });


  },

  /**
   * 初始化岗位依存性表格
   */
  initGwTable: function (gwItems) {
    let gwTable = {
      title: '岗位依存性',
      thItems: ['岗位', '观察人数', '时机', '手卫生次数', '依存率(%)', '正确数', '正确率(%)'],
      dataItems: []
    }
    for (let i = 0; i < gwItems.length; i++) {
      let gw = gwItems[i];
      if (gw.bodyNum != 0) {
        gwTable.dataItems.push({
          data: [gw.name, gw.bodyNum, gw.sj, gw.swscs==undefined?0:gw.swscs, gw.ycl == undefined?0:gw.ycl + '%', gw.gf == null?0:gw.gf, gw.gfl==undefined?0:gw.gfl + '%']
        });
      }
    }
    return gwTable;
  },

  /**
   * 初始化指征依存率表格
   * @param {*} param 
   */
  initZZTable: function (zzItems) {
    let zzTable = {
      title: '指征依存性',
      thItems: ['指征', '时机', '手卫生次数', '依存率(%)', '正确数', '正确率(%)'],
      dataItems: []
    }

    for (let i = 0; i < zzItems.length; i++) {
      let zz = zzItems[i];
      if (zz.sj != 0) {
        zzTable.dataItems.push({
          data: [zz.name, zz.sj, zz.swscs, zz.ycl + '%', zz.gf, zz.gfl + '%']
        });
      }
    }
    return zzTable;
  },

  /**
   * 初始化手卫生构成
   * @param {*} param 
   */
  initSwsgcTable: function (swsgcItems) {
    let swsgcTable = {
      title: '手卫生构成',
      thItems: ['手卫生方式', '手卫生次数', '构成比', '正确数', '正确率(%)'],
      dataItems: []
    }
    let count = swsgcItems[0].swscs + swsgcItems[1].swscs;
    for (let i = 0; i < swsgcItems.length; i++) {
      let swsgc = swsgcItems[i];
      if (swsgc.swscs != 0 && swsgc.name != "未采取措施" && swsgc.name != "戴手套") {
        swsgcTable.dataItems.push({
          data: [swsgc.name, swsgc.swscs, Math.round(swsgc.swscs / count * 10000) / 100.00 + '%', swsgc.gf, swsgc.gfl + '%']
        });
      }
    }
    return swsgcTable;
  },

  /**
   * 初始化基础图表
   * @param {*} sourceData 
   * @param {*} indexs 
   * @param {*} nameIndex 
   * @param {*} type 
   */
  initGraph: function (sourceData, indexs, nameIndex, type) {
    let tableData = sourceData;
    let barSeries = [];
    let yAxis = [];
    let name = '';
    if (!nameIndex) {
      nameIndex = 0;
    }
    if (!type) {
      type = 'bar'
    }

    for (let j = 0; j < tableData.dataItems.length; j++) {
      let dt = tableData.dataItems[j].data;
      yAxis.push(dt[0]);
    }

    for (let s = 0; s < indexs.length; s++) {
      let data = [];
      name = sourceData.thItems[indexs[s]];
      for (let i = 0; i < tableData.dataItems.length; i++) {
        let dt = tableData.dataItems[i].data;
        data.push(dt[indexs[s]].split('%')[0]);
      }

      barSeries.push({
        name: name,
        data: data,
        type: type,
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        itemStyle: {}
      });
    }
    return [barSeries, yAxis];
  },

  /**
   * 初始化饼状图
   */
  initSwsgcGraph: function () {
    let tableData = this.data.swsgcTable;
    let data = [];
    for (let i = 0; i < tableData.dataItems.length; i++) {
      data.push({
        'name': tableData.dataItems[i].data[0],
        'value': tableData.dataItems[i].data[1]
      });
    }

    let pie = {
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: data,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }
    return pie;
  }
});