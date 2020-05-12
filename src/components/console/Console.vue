<template>
  <div class="console-container">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div>
          <div>
             <img src="~assets/logo.png" alt="">
          </div>
          <span>后台管理系统</span>
        </div>
        <el-button class="exitButton" type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <Sidebar>
        </Sidebar>

        <!-- 右侧主要区 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
   </el-container>
  </div>
  
  
</template>

<script scope>
import Sidebar from "components/console/Sidebar"
export default {
  methods:{
    logout(){
      // 删除token,重定向到login登陆页
      window.sessionStorage.removeItem("token")
      this.$router.push('/login')
    }
  },
  components:{
    Sidebar
  },
  
  
   
}
</script>

<style lang="less" scope >
  .el-header{
    background-color: #336699;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    // border-bottom: 1px solid #fff;
    font-size: 24px;
    > div {
      display: flex;
      align-items: center;
    }
    > div img{
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
    > div div{
      height: 40px;
      width: 40px;
      background-color: #fff;
      border-radius: 50%;
      padding: 3px;
    }
    > div  span {
      margin-left: 10px;
    }
  }
  .exitButton{
    background-color: #336699;
  }
  .el-aside{
    // background-color: #336699;
    overflow-x:hidden;
  }

  .el-main{
    background-color: #eaedf1;
  }
  .console-container{
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
</style>