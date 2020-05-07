<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      // 删除token,重定向到login登陆页
      window.sessionStorage.removeItem("token")
      this.$router.push('/login')
    }
  }

}
</script>

<style>

</style>