<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginationInfo.currentPage"
      :page-sizes="paginationInfo.pageSizes"
      :page-size="paginationInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props:{
    paginationInfo :{
      "pageSizes":{
        type: Array,
        default(){
          return [1]
        }
      },
      "pageSize": {
        type: Number,
        default(){
          return 1
        }
      },
      "currentPage":{
        type: Number,
        default(){
          return 1
        }
      }
    },
    total:{
      type: Number,
      default(){
        return 0
      }
    },
  },
  methods:{
    handleSizeChange(val){
      this.$emit("handleSizeChange", val)
    },
    handleCurrentChange(val){
      this.$emit("handleCurrentChange", val)
    }
  }
}
</script>

<style>

</style>