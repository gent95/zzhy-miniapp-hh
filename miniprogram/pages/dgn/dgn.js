// pages/moudles/dgn/dgn.js
const util = require('../../utils/util.js')
var timer = require('../../utils/wxTimer.js')
const db = wx.cloud.database()
var wxTimer = null;

Page({
    data: {
        sum: 0,
        resultSelect: 1,
        resultSelect1: 1,
        finshied: false,
        picture: false,
        noGuiShade: false,
        imageList: [], //上传图片临时路径列表
        sourceTypeIndex: 2,
        sourceType: ['拍照', '相册', '拍照或相册'],
        countIndex: 8, //上传图片最大数量限制
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9], //上传图片计数
        finshiedItmes: [], //完成项
        gwzzItems: [], //岗位属性
        dist: '选择单元 >',
        wxTimerList: {},
        ckxz: '',
        worktime: '',
        show: {
            right: false,
            right1: false,
            right2: false
        },
        mainActiveIndex: 0,
        activeId: 1,

        checkHistory: {
            distId: '',
            becheckUserList: [],
            fileIDList: [],
            checkOverTime: ''
        },
        checkItem: {
            characters: [], //选择特征
            specsName: '',
            specsRes: '', //是否规范
            noSpecsRemarkList: [] //不规范描述
        },

        beCheckUser: {
            name: '',
            quarterId: '',
            natureId: '',
            workAgeId: '',
            checkItemResult: []
        },

        beCheckUserList: [{
            count: 0,
            name: 'A',
            gangw: '护理',
            checkItemResult: [],
            ckxz: '',
            worktime: ''
        }, {
            count: 0,
            name: 'B',
            gangw: '护理',
            checkItemResult: [],
            ckxz: '',
            worktime: ''
        }, {
            count: 0,
            name: 'C',
            gangw: '护理',
            checkItemResult: [],
            ckxz: '',
            worktime: ''
        }],
        counts: [{
            _id: '0',
            itemName: '护理',
            count: 5
        }]
    },

    /**
     * 页面加载完成时触发
     */
    onLoad: function () {
        this.findDist();
        // this.initQuarters();
        this.initQuartersAndNatures();
        this.initWorkAge();
        this.initWxTimer();
        const character = wx.getStorageSync("character");
        if (!character) {
            this.initCharacter();
        } else {
            this.setData({
                checks: character
            });
        }

        const measure = wx.getStorageSync("measure");
        if (!measure) {
            this.initMeasure();
        } else {
            this.setData({
                checkItems: measure
            });
        }
        this.data.checkHistory.checkDate = util.formatTime(new Date());
    },

    /**
     * 初始化倒计时器
     */
    initWxTimer: function () {
        wxTimer = new timer({
            beginTime: "00:20:00",
            complete: function () {
                wx.showModal({
                    title: '提醒',
                    content: '是否继续检查?',
                    success: res1 => {
                        if (res1.confirm) {
                            wxTimer.stop();
                        } else if (res1.cancel) {
                            wx.navigateTo({
                                url: '../checks/checks'
                            });
                        }
                    }
                });
            }
        });
        wxTimer.start(this);
    },

    /**
     * 点击选择特征时触发
     * @param {*} e 
     */
    clicks: function (e) {
        let index = e.currentTarget.dataset.index;
        let arrs = this.data.checks;
        if (arrs[index].checked == false) {
            if (arrs[index].name == '接触患者后') {
                arrs[index + 1].checked = false;
            } else if (arrs[index].name == '接触患者周边环境后') {
                arrs[index - 1].checked = false;
            }
            arrs[index].checked = true;
        } else {
            arrs[index].checked = false;
        }
        this.setData({
            checks: arrs
        });
    },

    /**
     * 点击顶部加号按钮时
     */
    onPush: function () {
        this.setData({
            tjgcdx: true,
            gwWorkTime: true,
            gwxzIsShow: true,
        });

        let obj = {
            count: '0',
            name: 'D',
            gangw: '护理',
            checkItemResult: [],
            ckxz: '',
            worktime: ''
        }

        this.setData({
            count: obj.count,
            beCheckUserName: 'D',
            gangw: obj.gangw,
            ckxz: obj.ckxz,
            worktime: obj.worktime,
            beCheckUserList: this.data.beCheckUserList.concat(obj),
            selectId: this.data.beCheckUserList.length
        });

        this.data.yuanNum = this.data.beCheckUserList.length - 1;

    },

    /**
     * 点击圆圈按钮时
     */
    clickChecnType: function (res) {
        const num = res.currentTarget.dataset.num;
        const yuan = this.data.beCheckUserList[num];
        this.data.beCheckUserName = yuan.name;
        console.log("选中的圆圈是:", yuan);
        if (yuan.natures) {
            this.setData({
                gwzzItems: yuan.natures
            });
        } else {
            yuan.gangw = '';
        }
        this.setData({
            gwWorkTime: true,
            gwxzIsShow: true,
            tjgcdx: true,
            yuanNum: num,
            ckSec: yuan.gangw,
            ckxz: yuan.ckxz,
            name: yuan.name,
            worktime: yuan.worktime,
            selectId: num
        });
    },

    /**
     * 点击继续按钮时
     */
    onResultClick1: function () {
        if (this.data.checkItem.characters.length < 1) {
            wx.showToast({
                title: '请选择检查结果',
                icon: 'none',
                duration: 1000,
                mask: false
            });
            return;
        }

        this.setData({
            resultSelect: 1,
            finshied: true
        });

        if (this.data.checkHistory.becheckUserList.length > 0) {
            if (undefined == this.data.checkHistory.becheckUserList[this.data.yuanNum].checkItemResult) {
                this.data.checkHistory.becheckUserList[this.data.yuanNum].checkItemResult = [];
            }
        } else {
            wx.showToast({
                title: '被检查人信息不完整',
                icon: 'none',
                duration: 1000,
                mask: false
            });
            return;
        }

        this.data.checkHistory.becheckUserList[this.data.yuanNum].checkItemResult.push(this.data.checkItem);
        const length = this.data.checkHistory.becheckUserList[this.data.yuanNum].checkItemResult.length;
        const t = "beCheckUserList[" + this.data.yuanNum + "]";
        const b = "checkHistory.becheckUserList[" + this.data.yuanNum + "]";
        this.setData({
            [t + ".count"]: length,
            [b + ".count"]: length
        });

        this.concatFinishedItems();
        let xztzs = this.data.checks;
        for (let i = 0; i < xztzs.length; i++) {
            xztzs[i].checked = false;
        }
        this.setData({
            checks: xztzs,
            ckitem: '',
            checkItem: {
                characters: [],
                specsName: '',
                specsRes: '',
                noSpecsRemarkList: []
            }
        });
    },

    /**
     * 动态追加已检查项
     * @param {*} checkItemId 
     */
    concatFinishedItems: function () {
        const list = this.data.checkHistory.becheckUserList;
        let sum = 0;
        let finshiedItmes = [];
        for (let i = 0; list && i < list.length; i++) {
            for (let m = 0; list[i] && list[i].checkItemResult && m < list[i].checkItemResult.length; m++) {
                let tmpFinishedItem = {
                    xztzName: '',
                    checkName: '',
                    icon: '',
                    noSpecs: '',
                    gangw: '',
                    specsName: ''
                };
                let result = list[i].checkItemResult[m];
                tmpFinishedItem.xztzName = list[i].name;
                tmpFinishedItem.gangw = list[i].gangw;
                tmpFinishedItem.specsName = result.specsName;
                if (result.specsRes == "规范") {
                    tmpFinishedItem.icon = 'icon-duigou';
                } else {
                    tmpFinishedItem.icon = 'icon-cuohao';
                    for (let k = 0; result.noSpecsRemarkList && k < result.noSpecsRemarkList.length; k++) {
                        tmpFinishedItem.noSpecs += " " + result.noSpecsRemarkList[k].remark;
                    }
                }
                for (let j = 0; result.characters && j < result.characters.length; j++) {
                    tmpFinishedItem.checkName += " " + result.characters[j].name;
                }
                tmpFinishedItem.checkName = "(" + tmpFinishedItem.checkName + ")";
                tmpFinishedItem.userIndex = i;
                tmpFinishedItem.resultIndex = m;
                finshiedItmes.push(tmpFinishedItem);
                sum = finshiedItmes.length;
            }
        }
        this.setData({
            finshiedItmes,
            sum
        });
    },

    /**
     * 获取已选中的检验特征
     */
    getCheckItem: function () {
        let checkRes = this.data.checks;
        let characters = new Array();
        for (let i = 0; i < checkRes.length; i++) {
            if (checkRes[i].checked) {
                characters.push(checkRes[i]);
            }
        }
        this.data.characters = characters;
        this.data.checkItem.characters = characters;
    },

    /**
     * 点击结束观察按钮时
     */
    onResultClick2: function () {
        this.setData({
            resultSelect: 0
        });

        this.data.checkHistory.checkOverTime = util.formatTime(new Date());
        console.log(new Date() + 'CheckHistory', this.data.checkHistory);
        this.onHrefXCFK();
    },

    /**
     * 关闭遮罩层菜单
     */
    close: function () {
        this.setData({
            moreSet: false,
            tjgcdx: false,
            noGuiShade: false
        });
    },

    /**
     * 点击更多按钮时
     */
    onMoreClick() {
        this.setData({
            moreSet: true
        });
    },

    /**
     * 点击更多菜单
     */
    onMoreMenu() {
        this.setData({
            moreSet: false
        });
    },

    /**
     * 点击已完成按钮
     */
    onFinshied() {
        this.setData({
            resultSelect1: 1,
            finshied: true,
            picture: false
        });
    },

    /**
     * 点击照片按钮
     */
    onPicture() {
        this.setData({
            resultSelect1: 0,
            finshied: false,
            picture: true
        });
    },

    /**
     * 选择上传的图片
     */
    chooseImage() {
        wx.chooseImage({
            sourceType: 2,
            sizeType: 2,
            count: this.data.count[this.data.countIndex],
            success: res => {
                this.setData({
                    imageList: this.data.imageList.concat(res.tempFilePaths)
                });

                if (res.tempFilePaths.length > 0) {
                    this.setData({
                        uploadBtn: true
                    });
                }
            }
        });
    },


    /**
     * 上传文件
     */
    uploadFile: function () {
        let tempFilePaths = this.data.imageList;
        for (let i = 0; i < tempFilePaths.length; i++) {
            let strFileName = tempFilePaths[i].replace(/(.*\/)*([^.]+).*/ig, "$2");
            let fileExt = tempFilePaths[i].replace(/.+\./, "").toLowerCase();
            strFileName = strFileName + wx.getStorageSync("checkHistoryId") + i;
            let cloudPath = strFileName + "." + fileExt;
            const uploadTask = wx.cloud.uploadFile({
                cloudPath,
                filePath: tempFilePaths[i],
                success: res1 => {
                    this.setData({
                        percentShow: false
                    });
                    console.log("文件上传响应对象", res1);
                    this.data.checkHistory.fileIDList.push(res1.fileID);
                }
            });

            uploadTask.onProgressUpdate(res => {
                this.setData({
                    imageSort: i++,
                    percentShow: true,
                    percent: res.progress
                });
            });
        }

        this.setData({
            uploadBtn: false
        });
    },

    /**
     * 删除图片
     */
    removeImg: function (res) {
        wx.showModal({
            title: '提醒',
            content: '是否删除?',
            success: res1 => {
                if (res1.confirm) {
                    this.data.imageList.splice(res.currentTarget.dataset.index, 1);
                    this.setData({
                        imageList: this.data.imageList
                    });
                } else if (res1.cancel) {

                }
            }
        });
    },

    /**
     * 预览图片
     * @param {} e 
     */
    previewImage(e) {
        const current = e.target.dataset.src
        wx.previewImage({
            current,
            urls: this.data.imageList
        });
    },

    sizeTypeChange: function (e) {
        this.setData({
            sizeTypeIndex: e.detail.value
        });
    },

    /**
     * 点击规范
     */
    onGuiFanClick: function (res) {
        if (this.charactersNotNull()) {
            this.setData({
                ckitem: res.currentTarget.dataset.ckindex
            });
            this.genCheckItem(res.currentTarget.dataset.ckindex);
        }
    },

    /**
     * 点击不规范
     */
    onNoGuiFanClick(res) {
        if (this.charactersNotNull()) {
            let nsr = wx.getStorageSync('nsr');
            if (!nsr) {
                this.initNoSpecsRemark();
            } else {
                this.setData({
                    noGuiFanRemaekItems: nsr
                });
            }

            let noGuiShade = false;
            if (res.currentTarget.dataset.ckindex.split('-')[0] == '未采取措施' || res.currentTarget.dataset.ckindex.split('-')[0] == '戴手套') {

            } else {
                noGuiShade = true;
            }

            this.setData({
                ckitem: res.currentTarget.dataset.ckindex,
                noGuiShade
            });
            this.genCheckItem(res.currentTarget.dataset.ckindex);
        }
    },

    /**
     * 判断已选中选择特征是否为空
     */
    charactersNotNull: function () {
        this.getCheckItem();
        if (this.data.checkItem.characters != null && this.data.checkItem.characters.length > 0) {
            return true;
        } else {
            wx.showToast({
                title: '请选择检验特征',
                icon: 'none',
                duration: 1000,
                mask: false
            });
            return false;
        }
    },

    /**
     * 拆分字符串，构造checkItem
     */
    genCheckItem: function (data) {
        this.data.checkItem.specsName = data.split("-")[0];
        this.data.checkItem.specsRes = data.split("-")[1];
    },

    /**
     * 点击现场反馈按钮
     */
    onHrefXCFK: function () {
        this.xcfk_onLoad();
        this.toggleRightPopup1();
    },

    /**
     * 点击手卫生设置按钮
     */
    onHrefSWSSZ: function () {
        this.toggleRightPopup2();
        wx.navigateTo({
            url: '../swssz/swssz?title=手卫生设置&dist=' + this.data.dist + "&distId=" + this.data.distId,
        });
    },

    /**
     * 点击岗位按钮
     */
    onClickGW: function (res) {
        const dataset = res.currentTarget.dataset;
        this.setData({
            ckSec: dataset.cksec,
            gwzzItems: dataset.ckindex
        });
        this.data.beCheckUser.quarterId = dataset.number;
    },
    /**
     * 点击岗位性质按钮
     */
    onClickGWXZ: function (res) {
        this.setData({
            ckxz: res.currentTarget.dataset.ckxz
        });
        this.data.beCheckUser.natureId = res.currentTarget.dataset.natureid;
    },

    /**
     * 点击工作年限按钮
     */
    onClickWorkTime: function (res) {
        this.setData({
            worktime: res.currentTarget.dataset.worktime
        });
        this.data.beCheckUser.workAgeId = res.currentTarget.dataset.workageid;
    },

    /**
     * 点击岗位确定按钮时
     */
    onGwBtn: function () {
        const t = "beCheckUserList[" + this.data.yuanNum + "]";
        const b = "checkHistory.becheckUserList[" + this.data.yuanNum + "]";
        this.setData({
            tjgcdx: false,
            [t + '.num']: this.data.yuanNum,
            [t + '.name']: this.data.beCheckUserName,
            [t + '.gangw']: this.data.ckSec,
            [t + '.ckxz']: this.data.ckxz,
            [t + '.worktime']: this.data.worktime,
            [t + '.natures']: this.data.gwzzItems,

            [b + '.num']: this.data.yuanNum,
            [b + '.name']: this.data.beCheckUserName,
            [b + '.gangw']: this.data.ckSec,
            [b + '.quarterId']: this.data.beCheckUser.quarterId,
            [b + '.natureId']: this.data.beCheckUser.natureId,
            [b + '.workAgeId']: this.data.beCheckUser.workAgeId
        });

        console.log('添加的用户是', this.data.checkHistory.becheckUserList);
        this.concatFinishedItems();
    },

    /**
     * 被检查人失去焦点事件
     * @param {*} res 
     */
    checkBlur: function (res) {
        this.setData({
            beCheckUserName: res.detail.value
        });
        this.data.beCheckUser.name = res.detail.value;
    },

    /**
     * 点击不规范原因弹窗确定按钮时
     */
    onClickNoGuiFan: function () {
        const items = this.data.noGuiFanRemaekItems;
        const ckItems = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].checked) {
                ckItems.push(items[i]);
            }
        }

        this.setData({
            noGuiShade: false,
            ckItems: ckItems
        });
        this.data.checkItem.noSpecsRemarkList = this.data.ckItems;
    },

    /**
     * 多选不规范原因
     * @param {*} res 
     */
    checkboxChange: function (res) {
        const noGuiFanRemaekItems = this.data.noGuiFanRemaekItems
        const values = res.detail.value
        for (let i = 0, lenI = noGuiFanRemaekItems.length; i < lenI; ++i) {
            noGuiFanRemaekItems[i].checked = false
            for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (noGuiFanRemaekItems[i]._id == values[j]) {
                    noGuiFanRemaekItems[i].checked = true
                    break
                }
            }
        }
        this.setData({
            noGuiFanRemaekItems
        });
    },

    /**
     * 初始化岗位性质
     * @param {*} res 
     */
    initNatue: function (quarterId, natureIds) {
        wx.cloud.callFunction({
            name: 'findNaturesByQuarters',
            data: {
                naturesIds: natureIds
            }
        }).then(res => {
            wx.setStorageSync(quarterId, res.result);
            this.setData({
                gwzzItems: res.result
            });
        });
    },

    /**
     * 初始化岗位
     */
    initQuarters: function () {
        let quarters = wx.getStorageSync('quarters');
        if (!quarters) {
            db.collection('Quarters').get().then(res => {
                wx.setStorageSync("quarters", res.data);
                this.setData({
                    gwItems: res.data
                });
            });
        }

        this.setData({
            gwItems: quarters
        });
    },

    /**
     * 初始化岗位和岗位性质
     */
    initQuartersAndNatures: function () {
        wx.cloud.callFunction({
            name: 'findNaturesByQuarters'
        }).then(res => {
            this.setData({
                gwItems: res.result.data
            });
        });
    },

    /**
     * 初始化工龄
     */
    initWorkAge: function () {
        let workage = wx.getStorageSync('workAge');
        if (!workage) {
            db.collection('WorkAge').get().then(res => {
                wx.setStorageSync('workAge', res.data);
                this.setData({
                    gwWorkTimeItems: res.data
                });
            });
        }
        this.setData({
            gwWorkTimeItems: workage
        });
    },

    /** 
     * 初始化选择特征
     */
    initCharacter: function () {
        const Character = new Promise((resolve) => {
            db.collection('Character').get().then(res => {
                resolve(res.data);
            });
        });
        Character.then(value => {
            wx.setStorageSync('character', value);
            this.setData({
                checks: value
            });
        });
    },

    /**
     * 初始化不规范原因
     */
    initNoSpecsRemark: function () {
        const NoSpecsRemark = new Promise((resolve) => {
            db.collection('NoSpecsRemark').get().then(res => {
                resolve(res.data);
            });
        });

        NoSpecsRemark.then(value => {
            wx.setStorageSync('nsr', value);
            this.setData({
                noGuiFanRemaekItems: value
            });
        });
    },

    /**
     * 初始化措施
     */
    initMeasure: function () {
        const Measure = new Promise((resolve) => {
            db.collection("Measure").get().then(res => {
                resolve(res.data);
            });
        });
        Measure.then(value => {
            wx.setStorageSync("measure", value);
            this.setData({
                checkItems: value
            });
        });
    },

    /**
     * 长按已完成项时删除
     */
    onFinishedItemLongTap: function (res) {
        wx.showModal({
            title: '提示',
            content: '确定是否删除？',
            success: res1 => {
                if (res1.confirm) {
                    this.data.checkHistory.becheckUserList[res.currentTarget.dataset.userindex].checkItemResult.splice(res.currentTarget.dataset.resultindex, 1);
                    const t = "beCheckUserList[" + res.currentTarget.dataset.userindex + "]";
                    this.setData({
                        [t + ".count"]: this.data.beCheckUserList[res.currentTarget.dataset.userindex].count - 1,
                        sum: this.data.sum - 1
                    });
                    this.concatFinishedItems();
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        duration: 1000
                    });
                } else if (res1.cancel) {
                    console.log('用户点击取消删除');
                }
            }
        });
    },

    toggle(type) {
        this.setData({
            [`show.${type}`]: !this.data.show[type]
        });
    },

    toggleRightPopup() {
        this.toggle('right');
    },

    toggleRightPopup1() {
        this.toggle('right1');
    },

    toggleRightPopup2() {
        this.toggle('right3');
    },
    /**
     * 初始化科室树
     */
    initDistTree: function () {
        this.toggleRightPopup();
        let distTree = wx.getStorageSync('distTree');
        if (!distTree) {
            wx.cloud.callFunction({
                name: 'findDistTree'
            }).then(res => {
                wx.setStorageSync('distTree', res.result);
                this.setData({
                    items1: res.result
                });
            });
        }

        this.setData({
            items1: distTree
        });
    },

    /**
     * 监听软键盘完成按钮
     * @param {*} res 
     */
    doSearch: function (res) {
        wx.cloud.callFunction({
            name: 'findDistTree',
            data: {
                distname: res.detail
            }
        }).then(res => {
            this.setData({
                items1: res.result
            });
        });
    },

    /**
     * 点击科室分类
     * @param {} param0 
     */
    onClickNav: function ({
        detail
    }) {
        this.setData({
            mainActiveIndex: detail.index || 0
        });
    },

    /**
     * 点击科室
     * @param {*} param0 
     */
    onClickItem: function ({
        detail
    }) {
        this.data.checkHistory.distId = detail._id;
        this.setData({
            dist: detail.text
        });
        setTimeout(() => {
            this.toggleRightPopup();
        }, 1000);
    },

    /**
     * 保存检查记录
     * @param {*} event 
     */
    save: function (event) {
        wx.showToast({
            title: '正在保存',
            icon: 'none',
            duration: 1500,
            mask: false
        });
     
        let ch = {
            distId: event.checkHistory.distId,
            checkDate: event.checkHistory.checkDate,
            _openid: event._openid,
            checkOverTime: event.checkHistory.checkOverTime,
            checkUserId: event.checkHistory.checkUserId,
            isDel: false
        }
        db.collection('CheckHistory').add({
            data: ch
        }).then(ch_res => {
            for (let i = 0; i < event.checkHistory.becheckUserList.length; i++) {
                const ibcu = event.checkHistory.becheckUserList[i];
                if (!ibcu) {
                    continue;
                }
                console.log('ibcu', ibcu);
                let bcu = {
                    quarterId: ibcu.quarterId,
                    natureId: ibcu.natureId,
                    workAgeId: ibcu.workAgeId,
                    name: ibcu.name,
                    _openid: event._openid,
                    chId: ch_res._id
                }
                db.collection('BeCheckUser').add({
                    data: bcu
                }).then(bcu_res => {
                    for (let j = 0; ibcu.checkItemResult && j < ibcu.checkItemResult.length; j++) {
                        const icir = ibcu.checkItemResult[j];
                        let tmpC = [];
                        let tmpN = [];
                        for (let l = 0; l < icir.characters.length; l++) {
                            tmpC.push(icir.characters[l]._id);
                        }
                        for (let m = 0; icir.noGuiFanRemaekItems && m < icir.noGuiFanRemaekItems.length; m++) {
                            tmpN.push(icir.noGuiFanRemaekItems[m]._id);
                        }
                        let cir = {
                            characters: tmpC,
                            _openid: event._openid,
                            beCheckUserId: bcu_res._id,
                            noSpecsRemarks: tmpN,
                            specsName: icir.specsName,
                            specsRes: icir.specsRes
                        }
                        db.collection('UCMDHistory').add({
                            data: cir
                        }).then(cir_res => {
                            // console.log('保存成功！！！checkHistory:' + ch_res._id + "beCheckUser" + bcu_res._id + "checkItem" + cir_res._id);
                        });
                    }
                });
            }

            let photo = {
                _openid: event._openid,
                chId: ch_res._id,
                createTime: util.formatTime(new Date()),
                images: event.checkHistory.fileIDList
            }
            db.collection('Photo').add({
                data: photo
            });

            if (this.data.checkHistory.feedBackHistory) {
                this.data.checkHistory.feedBackHistory.chId = ch_res._id;
                db.collection('FeedbackHistory').add({
                    data: this.data.checkHistory.feedBackHistory
                });
            }

            wx.redirectTo({
                url: "../checks/checks"
            });
        });
    },

    /**
     * 查询当前用户所在科室
     * @param {*} param 
     */
    findDist: function () {
        db.collection('Dist').doc(wx.getStorageSync('distId')).get().then(res => {
            this.setData({
                dist: res.data.text,
                ['checkHistory.distId']: res.data._id
            });
        });
    },

    /**
     * 加载现场反馈
     */
    xcfk_onLoad: function () {
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
            console.log('dcssitems 读写缓存失败');
        }
    },

    /**
     * 点击保存反馈按钮
     */
    onClickOk: function () {
        let items = this.data.items;
        let ckItems = [];

        for (let i = 0; items && i < items.length; i++) {
            if (items[i].checked) {
                ckItems.push(items[i]._id)
            }
        }

        let feedBackHistory = {
            feedbackUserName: this.data.feedbackUserName,
            train: this.data.isYes,
            trainCycle: this.data.trainCycleId,
            feedbackItems: ckItems,
        }

        this.data.checkHistory.feedBackHistory = feedBackHistory;
        console.log(this.data.checkHistory.feedBackHistory);
        // this.toggleRightPopup1();
        this.setData({
            moreSet: false
        });
        const checkHistory = this.data.checkHistory;
        console.log('所有信息', JSON.stringify(checkHistory));
        const event = {
            checkHistory
        }
        this.save(event);
    },

    /**
     * 点击是图标
     */
    onClickYes: function () {
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
    onClickNo: function () {
        this.setData({
            isYes: false
        });
    },

    /**
     * 复选框选中项改变时
     * @param {*} res 
     */
    xcfkCheckboxChange: function (res) {
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
        });
    },

    /**
     * 点击培训时间按钮时触发
     * @param {} res 
     */
    onClickPxtimeItem: function (res) {
        this.setData({
            pxtbk: res.currentTarget.dataset.pxtbk,
            trainCycleId: res.currentTarget.dataset.pxtbk
        });
    },

    /**
     * 被反馈人输入框失去焦点
     * @param {*} res 
     */
    onBlurBeFkr: function (res) {
        this.setData({
            feedbackUserName: res.detail.value
        });
    },

    /**
     * 页面卸载
     */
    onUnload: function () {
        wxTimer.stop();
    },

    /**
     * 预览
     * @param {*} param 
     */
    lookthrow: function (param) {
       getApp().globalData.datasource = this.data.checkHistory;
        wx.navigateTo({
            url: '../yulan/yulan'
        });
    }
});