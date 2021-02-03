# el-form-template
+ 仅仅页面demo
+ 利用elementUI框架二次封装组件 快速构成简单的后台管理系统常见的搜索 表单和表格页面和功能的实现 
## 使用方法
+ 复制component下的form和table组件,可全局注册组件或单独页面引用并注册
## search 部分
### search 组件跟form表单组件一样的
+ infoForm --> 存放search字段
+ selectList --> 下拉框数据
+ labelwidth: 设置labelwidth宽度,默认:120px
+ rules: 设置规则
+ formDisable: 是否禁止表单
+ searchTags --> 对应每个formItem,配置项:
    关键字|类型
    --|:--:
    text|input输入框
    number|只能输入数字的输入框
    select|单选下拉框
    multiple|多选下拉框
    textarea|文本框
    daterange|日期区间
    date|日期选择
    switch|switch
## table组件
+ tableColumns --> 对应每一列 
+ 配置项: <br/>
   - tableColumns:[ { prop: 'vail', label: '是否有效', slot: true, width:'170px' }] <br/>
      prop->对应的字段 <br/>  
      label-> 表头名称 <br/>
      slot->开启插槽可自定义表格当中的类型 <br/>
   - options:{ <br/>
          stripe: true, // 开启斑马背景 <br/>
          align: 'center', //文本居中显示 <br/> 
          loading: true, // loading动画 <br/>
          selection: false, // 时候否展示选中框 <br/>
          showIndex: true, // 是否展示序号 <br/>
          showTooltip: true // 是否当内容过长被隐藏时显示 tooltip <br/>
        },
    - operation:{ <br/>
          label: '详情', // 操作位title <br/>
          isShow: true // 是否展示 <br/>
        },
## Pagination组件
+ [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
## 效果图
![demo-png](/src/assets/demo.png)
