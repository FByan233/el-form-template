<template>
  <div class="VeFrom">
    <el-form
      ref="ruleForm"
      :inline="true"
      :model="form"
      :label-width="labelwidth"
      :disabled="formDisable"
      :rules="rules"
      size="small"
    >
      <template v-for="(item, index) in formItems">
        <el-form-item
          v-if="showItem(item)"
          :label="item.label"
          :key="index"
          :prop="item.prop"
        >
          <el-input
            v-if="isShow(item, 'text')"
            v-model="form[item.prop]"
            :placeholder="item.placeholder || ''"
            :disabled="item.disabled"
            clearable
          />
          <!-- 只能输入数字 -->
          <el-input
            v-if="isShow(item, 'number')"
            v-model="form[item.prop]"
            :placeholder="item.placeholder || ''"
            clearable
            onkeyup="this.value = this.value.replace(/[^\d.]/g,'')"
          />
          <!-- 单选下拉框 -->
          <el-select
            v-if="isShow(item, 'select')"
            v-model="form[item.prop]"
            :placeholder="item.placeholder || ''"
            filterable
            clearable
          >
            <el-option
              v-for="(option, index) in selectList[item.prop]"
              :key="index"
              :label="option.name ? option.name : 'name'"
              :value="option.id ? option.id : 'id'"
            />
          </el-select>
          <!-- 多选下拉框 -->
          <el-select
            v-if="isShow(item, 'multiple')"
            v-model="form[item.prop]"
            :placeholder="item.placeholder || ''"
            multiple
          >
            <el-option
              v-for="(option, index) in selectList[item.prop]"
              :key="index"
              :label="option.name ? option.name : 'name'"
              :value="option.id ? option.id : 'id'"
            />
          </el-select>
          <el-input
            v-if="isShow(item, 'textarea')"
            :placeholder="item.placeholder || ''"
            :rows="item.row ? item.row : 1"
            v-model="form[item.prop]"
            type="textarea"
          />
          <!-- 多选日期 -->
          <el-date-picker
            v-if="isShow(item, 'daterange')"
            v-model="form[item.prop]"
            :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
            :format="item.format || 'yyyy-MM-dd HH:mm:ss'"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
          <!-- 单选日期 -->
          <el-date-picker
            v-if="isShow(item, 'date')"
            v-model="form[item.prop]"
            :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
            :format="item.format || 'yyyy-MM-dd HH:mm:ss'"
            type="date"
            placeholder="选择日期"
          />
          <el-switch
            v-if="isShow(item, 'switch')"
            v-model="form[item.prop]"
            :active-value="item.active ? item.active : 0"
            :inactive-value="item.inactive ? item.inactive : 1"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
      </template>
      <slot/>
      <slot name="lastSlot"/>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'FbFrom',
  components: {},
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    formItems: {
      type: Array,
      default: () => ([])
    },
    labelwidth: {
      type: String,
      default: '120px'
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    formDisable: {
      type: Boolean,
      default: false
    },
    selectList: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    // 校验类型
    isShow(item, tag) {
      return item.tag === tag
    },
    showItem(item) {
      if (item.hide) {
        return !item.hide
      } else {
        return true
      }
    },
    disabledItem(item) {
      if (item.itemDisable) {
        return item.itemDisable
      } else {
        return true
      }
    }
  }
}
</script>
<style scoped>
.VeFrom {
  width: 100%;
}
.el-form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.el-form-item {
    margin-bottom: 15px;
}
</style>
