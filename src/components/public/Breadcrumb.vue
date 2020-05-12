<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/console/welcome' }">首页</el-breadcrumb-item>
      <slot name="slotBreadcrumb"> 
        
      </slot>
     
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>