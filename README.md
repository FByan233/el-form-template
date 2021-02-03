# el-form-template
+ 通过配置数据参数 快速构成后台管理系统常见的搜索 表单和表格页面和功能的实现 

## search 部分
### search 组件跟form表单一样的
- infoForm --> 存放search字段
- selectList --> 下拉框数据
- searchTags -->  对应每个formItem
   参数设置:
      label:formItem的label,
      prop:字段名,
      placeholder:可选,
      tag:类型,包括:
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
- labelwidth: 设置label width宽度,默认:120px
- rules: 设置规则
- formDisable: 是否禁止表单
+ 效果图
![demo-png](/src/assets/demo.png)