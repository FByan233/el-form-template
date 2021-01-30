<template>
  <div class="table-container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      :stripe="options.stripe"
      :header-cell-style="{background:cellbackground,color:cellColor}"
      tooltip-effect="dark"
      style="width: 100%"
      fit
      border
      highlight-current-row
      @row-click="rowClick"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="options.selection" type="selection" width="55" align="center"/>
      <el-table-column v-if="options.showIndex" label="序号" type="index" width="55" align="center">
        <template slot-scope="scope">
          <span v-if="page&&pageSize">{{ (page-1)*pageSize+scope.$index+1 }}</span>
          <span v-else>{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item,index) in tableColumns"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :show-overflow-tooltip="options.showTooltip?options.showTooltip:true"
        :align="options.align"
        :width="item.width?item.width:null"
        header-align="center"
      >
        <template slot-scope="scope">
          <slot v-if="item.slot" :name="item.prop" v-bind="scope" />
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="operation.isShow"
        :label="operation.label"
        :prop="operation.label"
        :width="operation.width?operation.width:null"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="scopedHandle(scope.row)">{{ operation.label }}</el-button>
        </template>
      </el-table-column>
      <slot/>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'FbTable',
  props: {
    tableData: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({})
    },
    operation: {
      type: Object,
      default: () => ({})
    },
    tableColumns: {
      type: Array,
      default: () => ([])
    },
    page: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    cellbackground: {
      type: String,
      default: '#55A7FB'
    },
    cellColor: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      multipleTable: [],
      selectedIndex: ''
    }
  },
  methods: {
    // 选中checkbox
    handleSelectionChange(val) {
      this.multipleTable = val
      this.$emit('rowClick', this.multipleTable)
    },
    // 当某一行被点击时
    rowClick(val, column, event) {
      this.multipleTable.push(val)
      this.$refs.multipleTable.clearSelection(val)
      this.$refs.multipleTable.toggleRowSelection(val)
      this.$emit('rowClick', this.multipleTable)
    },
    // 查看详情
    scopedHandle(val) {
      this.$emit('scopedHandle', val)
    }
  }
}
</script>
