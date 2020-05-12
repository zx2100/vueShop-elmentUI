<template>
  <div>
    <el-table
      :data="tableData.users"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        >
      </el-table-column>

      <el-table-column
        prop="username"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>

      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>

      <el-table-column
        prop="role_name"
        label="角色">
      </el-table-column>

      <el-table-column
        prop="mg_state"
        label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66">
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column

        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
 props:{
  tableData:{
    type: Object,
    default(){
      return {
        users: []
      }
    }
  }
  
   
 }
  
}
</script>

<style>

</style>