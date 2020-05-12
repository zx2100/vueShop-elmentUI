<template>
  <div>
    <el-card class="box-card" >
      <!-- 头部 -->
      <div class="slot-index">
        <slot name="slotIndex"></slot>
      </div>
      <!-- 内容 -->
      <div class="slot-body">
        <slot name="slotBody" class="slot-body"> </slot>
      </div>

      <!-- 底部 -->
       <div class="slot-bottom">
        <slot name="slotBottom"> </slot>
      </div>
    </el-card>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scope>
  .slot-index{
    margin-bottom: 15px;
  }
</style>