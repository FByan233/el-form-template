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
      <!-- 分页 -->
      <pagination 
        :total="total"
        :page.sync="listQuery.page"
        :size.sync="listQuery.size"
        @pagination="getList"
      />
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <fb-from
          :form="infoForm"
          :form-items="searchTags"
          :select-list="selectList"
          :rules="formRules"
          :form-disable="false" />
          <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
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
        total: 10,
        listQuery: {
          page: 1,
          size: 10
        },
        dialogVisible:false,
        infoForm: {},
        formRules: {
          id:[{ required: true, message: '请输入客户代码', trigger: 'blur' }],
          person:[{ required: true, message: '请输入借用人', trigger: 'blur' }],
          timer:[{ required: true, message: '请输入创建时间', trigger: 'blur' }]
        },
        searchTags:[
          { label: '客户代码', prop: 'id', tag: 'text'},
          { label: '借用人', prop: 'person', tag: 'text' },
          { label: '备件类型', prop: 'type', tag: 'text' },
          { label: '备件型号', prop: 'model', tag: 'text' },
          { label: '库房位置', prop: 'place', tag: 'text' },
          { label: '创建时间', prop: 'timer', tag: 'text' },
          { label: '是否有效', prop: 'vail', tag: 'switch' }
        ],
        selectList:{}
    }
  },
  computed: {},
  watch: {},
  created () {
    this.initList()
  },
  mounted () {},
  methods: {
    handleClose() {
      this.infoForm=this.$options.data().infoForm
      this.dialogVisible=false
    },
    scopedHandle(row) {
      console.log(row)
      this.infoForm = Object.assign({}, row)
      this.dialogVisible=true
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
    },
    getList(val) {
      console.log(val)
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
