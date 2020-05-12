<template>
  <div>
    <!-- 面包屑导航 -->
    <breadcrumb> 
      <div slot="slotBreadcrumb">
         <el-breadcrumb-item>用户管理</el-breadcrumb-item>
         <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </div>
    </breadcrumb>
      
     <!--卡片  -->
   <card>
     <cardIndex slot="slotIndex"> </cardIndex>
     <userTable slot="slotBody" :tableData="users"></userTable>
     <pagination slot="slotBottom"
      :paginationInfo="paginationInfo"
      :total="total"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"

     > </pagination>
   </card>

  </div>
</template>

<script>
// 导入面包屑导航
import breadcrumb from "components/public/Breadcrumb"
import card from "components/public/card/Card"
import userTable from "./children/Table"
import pagination from "components/public/card/Pagination"
// 作为Card的slot插入
import cardIndex from "components/public/card/Search"

// 功能函数
import { getUsers } from "network/home.js"


export default {
  components:{
    breadcrumb,
    card,
    cardIndex,
    userTable,
    pagination
  },
  data(){
    return {
      // 获取到的用户数据
      users:{},
      // 获取用户请求参数构建
      queryUser: {
        query: "",
        pagenum: "1",
        pagesize: "2"
      },
      total: 0,
      // 固定分页大小
      pagesize: 0
      
    }
  },
  created(){
    // 获取用户列表参数
    getUsers(this.queryUser).then(value => {
      // 判断是否获取成功
      console.log(value)
      if (value.meta.status != 200) return this.$message.error("获取用户列表失败")
      this.users = value.data
      this.total = value.data.total
      // 固定分页可选择大小。
      this.pagesize = parseInt(this.queryUser.pagesize)
    })
  },
  methods:{
    p_getUsers(){
      getUsers(this.queryUser).then(value => {
      // 判断是否获取成功
      if (value.meta.status != 200) return this.$message.error("获取用户列表失败")
      this.users = value.data
      })
    },
    // 页码尺寸发生改变
    handleSizeChange(val){
      // this.queryUser.pagenum = val
      this.queryUser.pagesize = val
      this.p_getUsers()

    },
    // 
    handleCurrentChange(val){
      this.queryUser.pagenum = val
      this.p_getUsers()

    },
    
  },
  computed:{
    paginationInfo(){
      
      return {
        pageSizes: [this.pagesize,this.pagesize*2,this.pagesize*3],
        pageSize: parseInt(this.queryUser.pagesize),
        currentPage: 1,
      }
    }
  }
}
</script>

<style>

</style>