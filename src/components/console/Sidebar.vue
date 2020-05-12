<template>
  <div>
  <!-- 侧边栏 -->
    <el-aside width="200px">
      <!-- 收缩和展开 -->
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    
      <el-menu class="el-menu-vertical-demo"  :collapse="isCollapse" 
      unique-opened router>
          <!-- 一级子菜单 -->
        <el-submenu  v-for='item in menus.data' :key="item.id" :index="item.id + ''">
          <template slot="title">
            <i :class="menus_icon_obj[item.id]"></i>
            <span slot="title">{{ item.authName }}</span>
          </template>
          <el-menu-item-group>
            <!-- 二级子菜单 -->
            <el-menu-item v-for="c in item.children" :index="'/console/' + c.path" 
            :key="c.id">
              <!-- 子菜单的选项 -->
              <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span slot="title">{{ c.authName }}</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

  </div>
</template>

<script>
import { getMenus } from 'network/home.js';
export default {
  data(){
    return {
      isCollapse: false,
      menus: [],
      menus_icon_obj: {
        "125": "el-icon-s-custom",
        "103": "el-icon-s-check",
        "101": "el-icon-s-goods",
        "102": "el-icon-s-order",
        "145": "el-icon-s-marketing"
      }
    }
  },
  mounted () {
    getMenus().then(val => {
      // 不是200则返回
      if (val.meta.status !== 200) return
      this.menus = val
      // console.log(this.menus)
    })
   
    
  }
}
</script>

<style>
  /* .el-menu{
    background-color: #336699;
  } */

  .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  }
  .el-radio-group{
    margin-top: 10px ;
    display: flex;
    justify-content: center;
    
  }
</style>