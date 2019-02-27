# 数据库结构文档
``` js
//科室分类
var distGroupTable={
    id:'',
    name:'科室分类',
}

//科室
var distTable = {
    id:1,
    name:'',
    groupId:''

}

//用户
var user={
    id:1,
    name:''
}

//观察特征
var character = {
    id:1,
    name:'', //名称
    icon:'' //图标
}

//措施
var measure = {
    id:1,
    name:''
}

//上传照片表
var photoTable ={
    id:1,
    path:'', //图片存储路径
    chId:''//检查历史记录id
}

//岗位
var quartersTable = {
    id:1,
    name:'',
    natures:[]
}

//岗位性质
var natureTable = {
    id:1,
    name:''
}

//工龄
var workAge = {
    id:1,
    remark:''
}


//现场反馈项
var feedback ={
    id:1,
    remark:'' //描述信息
}

//反馈记录
var feedbackHistory ={
    id:1, 
    feedbackUserName:'', //反馈人姓名
    train:1, //是否培训过 1:是,0:否
    trainCycle:''
    feedbackItems:[1,2],
    chId:''//检查历史记录id
}

//手卫生设置
var seetingTable = {
    occsain:1, //时机设置 1:开启,0:关闭
    occsainNum:1, //时机数

    timeOutTip:1,//限时提醒 1:开启,0:关闭
    timeOut:20, //时长

    choose:1, //是否选择不规范原因

    supervisor:1, //本月督导次数提醒
    chId:''//检查历史记录id
}

//不规范描述
var noSpecsRemark = {
    id:1,
    remark:''
}

//检查记录表（废弃）
var checkHistory={
    id:'',
    checkUuser:1, //首页录入用户
    beCheckUsers:[{
        name:'', //检查人
        quartersId:1, //岗位
        natureId:1, //岗位性质
        workAgeId:1, //工龄
        checkItems:[{
            characters:[1,2,3], //选择特征
            specs:1, //是否规范
            noSpecsRemarks:[1,2,3] //不规范描述
        }]
    }], //被检查人,添加页面所录入的用户
    distId:1, //科室
    checkDate:'', //检查时间
    checkTime:'', //监测时间
    images:[1,2,3],
    feedbackHId:1,
    seetingId:1
}

//检查历史记录
var checkHistory={
    id:'',
    checkUuser:1, //首页录入用户
    distId:1, //科室
    checkDateTime:'', //检查时间
    checkOverTime:'' //结束时间
}

//被检查人
var beCheckUser={
        name:'', //检查人
        quartersId:1, //岗位
        natureId:1, //岗位性质
        workAgeId:1, //工龄
        checkItems:[],
        chId:''//检查历史记录id
}

//检查项
var checkItem = {
            characters:[1,2,3], //选择特征
            specsName:'',
            specsRes:1, //是否规范
            noSpecsRemarks:[1,2,3] //不规范描述
}
```
# 实现思路
> 1.首页的科室、职务、岗位做成下拉框选项

> 2.数据需要从检查记录表查询后做统计处理，再传入到前台循环可视化展示
  
>3.报表页面数据从后台根据条件查询并得到统计结果，请求得到data信息和y轴信息并供前台显示

>4.现场反馈数据也是从检查记录表中根据检查记录id得到

>5.附件页面图片从反馈记录表中得到图片id，根据id再去图片表里获取图片路径并展示

> 6.检查步骤

   1）点击选择单元，选中科室信息，回显到页面，js将科室信息记录到临时检查记录对象

   2）点击更多设置，将现场反馈数据保存到反馈记录表，并将反馈记录id记录到临时检查记录对象

   3）点击手卫生设置，将手卫生设置信息记录到手卫生设置表，时机数和限时时间填写后回显到上层页面

   4）是否选择不规范原因，数据库记录值，空值前台不规范原因是否弹出，
      此处的不规范原因默认作为不选择

   5）本月单元督导次数用于记录当前微信账号信息，作为微信报告推送实现
  
> 7.点击圆饼弹出弹窗，选中信息后动态填充到当前选中圆饼中；点击加号后弹出单床将选择和录入的信息动态填充到刚刚添加的圆饼中
> 8.中间一栏里的时间根据系统设置的分钟数做，秒数级别的倒计时，倒计时完毕时，做弹窗提醒，后边的完成量作为总的完成量统计，仅前台显示
  
> 9.选择特尔正部分需要做多选处理，暂时未单选
  
> 10.点击继续时将上部分选择特征结果数据保存到检查记录临时对象，已完成列表中罗列完成项信息
  
>11.照片上传时直接将照片上传到数据库，并记录id，将id保存到检查记录临时对象中
  
>12.点击结束观察时，将检查记录临时对象持久化到数据库，并直接跳转到统计当前检查记录对的报表页面



