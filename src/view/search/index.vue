<template>
    <el-card class="box-card">
      <fb-from
        :form="infoForm"
        :form-items="searchTags"
        :select-list="selectList"
        :form-disable="false"
      >
        <el-form-item slot="lastSlot">
          <el-button
            type="primary"
            icon="el-icon-search"
            size="small"
            @click="doSearch"
          >
            查询</el-button
            >
        </el-form-item>
      </fb-from>
    </el-card>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: 'myForm',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {
        infoForm: {},
        selectList: {},
        searchTags: [
          { label: '客户代码', prop: 'id', tag: 'text' },
          { label: '产品型号', prop: 'model', tag: 'number' },
          { label: '封装形式', prop: 'type', tag: 'select' },
          { label: '生产流程', prop: 'processflow', tag: 'select' },
          { label: '生产日期', prop: 'date', tag: 'daterange' }
        ],
    }
  },
  computed: {},
  watch: {},
  created () {
      this.getProcessflowList()
  },
  mounted () {},
  methods: {
      doSearch() {
          console.log(this.infoForm)
      },
      getProcessflowList() {
          let MockList=Mock.mock({
            'list|6': [{
                'id': '@id',
                'name': '@sentence(1,2)'
             }]
        })
        this.$set(this.selectList, 'processflow', MockList.list)
      }
  }
}
</script>

<style scoped>
  .box-card {
    margin:  0 auto;
    width: 1200px;
    box-sizing: border-box;
    padding: 10px;
  }
  ::v-deep .el-card__body {
    padding-bottom: 0;
}
  </style>
