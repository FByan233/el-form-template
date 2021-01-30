<template>
    <el-card class="box-card">
        <fb-table 
        :table-data="tableData"
        :options="options"
        :operation="operation"
        :table-columns="tableColumns"
        :page="listQuery.page"
        :page-size="listQuery.size"
        @scopedHandle="scopedHandle"
        >
        <template v-slot:vail="{ row }">
            <el-switch
              v-model="row.vail"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              disabled
              >
            </el-switch>
        </template>
        </fb-table>
    </el-card>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: 'myTable',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {
        tableData:[],
        tableColumns:[
          { prop: 'id', label: '客户代码',width:'170px' },
          { prop: 'person', label: '借用人' },
          { prop: 'type', label: '备件类型' },
          { prop: 'model', label: '备件型号' },
          { prop: 'place', label: '库房位置' },
          { prop: 'timer', label: '创建时间', width: '170px' },
          { prop: 'vail', label: '是否有效', slot: true },
        ],
        options:{
          stripe: true,
          align: 'center',
          loading: true,
          selection: false, // 时候否展示选中框
          showIndex: true, // 是否展示序号
          showTooltip: true // 是否当内容过长被隐藏时显示 tooltip
        },
        operation:{
          label: '详情',
          isShow: true
        },
        listQuery: {
          page: 1,
          size: 10
        }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.initList()
  },
  mounted () {},
  methods: {
    scopedHandle(row) {
      console.log(row)
    },
    initList() {
      let MockList=Mock.mock({
        'list|10': [{
            'id|+1': '@id',
            'person': '@cname',
            'type': '@sentence(1,3)',
            'model': '@sentence(1,3)',
            'place': '@sentence(1,3)',
            'timer': '@datetime',
            'vail|1': [1,0]
        }]
      })
      this.tableData = MockList.list
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
</style>
