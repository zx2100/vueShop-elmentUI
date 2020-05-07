<template>
  <div class="login_container">
    <!-- 登陆盒子 -->
    <div class="login_box">
      <!-- 头像框 -->
      <div class="avatar_box">
        <img src="~assets/logo.png" alt />
      </div>
      <!-- 登陆表单 -->
      <el-form
        ref="loginFrom"
        :model="loginForm"
        label-width="0"
        class="login_from"
        :rules="fromRules"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 登陆和重置2个按钮 -->
        <div class="login_btn">
          <el-button type="success" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginFrom">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入用户登陆函数
import { userLogin } from "network/home.js";
// 导入消息盒子
export default {
  data() {
    return {
      // 登陆表单的数据绑定
      loginForm: {
        username: "admin",
        password: "123456"
      },
      fromRules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 25, message: "长度在 3 到 25 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetLoginFrom() {
      this.$refs.loginFrom.resetFields();
    },
    login() {
      // 判断是否验证通过
      this.$refs.loginFrom.validate(value => {
        if (!value) return;
        // 用户登陆，返回一个promise对象
        userLogin(this.loginForm).then(value => {
          // 判断是否登陆成功
          // console.log(value)
          if (value.meta.status != 200) {
            this.$message.error("登陆失败");
            // 登陆失败，则返回
            return;
          }
          // 提示登陆成功
          this.$message.success("登陆成功");
          // 存放token
          // console.log(value)
          window.sessionStorage.setItem("token", value.data.token)
          this.$router.push("/console")
        });
      });
    }
  }
};
</script>

<style scope lang="less">
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 40vw;
  height: 400px;
  background-color: #fff;
  border-radius: 3px;
  // 头像框
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    img {
      background-color: #eee;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.login_from {
  padding: 0 20px;
  font-size: 16px;
  .login_btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>