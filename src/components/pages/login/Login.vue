<template>
  <div class="login parent">
    <div class="child">
      <div class="h_header">
        <div class="h_body">
          <div class="h_hd">
            <div class="logo">
              <img src="/static/img/logo.png" alt="">
            </div>
            <span>学生综合素质评价信息系统</span>
          </div>
        </div>
      </div>
      <div class="container">
        <!-- <div class="title">学生综合素质评价信息系统</div> -->
        <div class="head">用户登录</div>
        <div class="section">
          <el-form
            :model="loginForm"
            ref="loginForm"
            label-width="100px"
            class="demo-ruleForm"
            :rules="rules"
          >
            <el-form-item label-width="0px" prop="account">
              <div class="icon">用户名：</div>
              <!-- <img class="icon" src="/static/img/login_register_findPassword/ic_number.png" alt=""> -->
              <el-input class="pd70" placeholder="请输入用户名" v-model="loginForm.account" clearable></el-input> 
            </el-form-item>
            <el-form-item label-width="0px" prop="password">
              <!-- <img
                class="icon"
                src="/static/img/login_register_findPassword/ic_password.png"
                alt=""
              > -->
              <div class="icon">密&nbsp;&nbsp;&nbsp;码：</div>
              <el-input class="pd70" placeholder="请输入密码" v-model="loginForm.password" @change="submitLogin('loginForm')" clearable show-password></el-input> 
            </el-form-item>
            <el-button class="submit" @click="submitLogin('loginForm')">登 录</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import store from "@/Store/store";
import { login } from "@/api/api";
import utils from "@/utils/index.js";
import $ from "jquery";

export default {
  data() {
    return {
      codeSrc: "",
      verifyCode: "",
      id: "",
      loginForm: {
        account: "",
        password: "",
        // code: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        // code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["token", "userInfo", "sessionId"])
  },
  created() {},
  mounted() {
    var that = this
    this.$nextTick(() =>{
      $(".pd70 input").css('padding-left','70px');
    })
    // that.saveLocalStorage("TOKEN",'123');
  },
  methods: {
    ...mapActions(["setToKen", "setUserInfo","setTerm"]),
    submitLogin(form) {
      var that = this;
      this.$refs[form].validate(valid => {
        if (valid) {
          //admin admin123
          login({
            userName: this.loginForm.account,
            password: this.loginForm.password
          }).then(res =>{
            if(res.data.code == 200) {
              // 存储token
              this.saveLocalStorage("TOKEN", res.data.data.token);
              this.setToKen(res.data.data.token);
              this.setTerm(res.data.data.term);
              this.skip('ActivityProject');
            }else{
              this.$message.error(res.data.message);
            }
          })
        } else {
          // error submit
          return false;
        }
      });
    },
    skip(type) {
      this.$router.push({
        name: type
      });
    }
  },
  components: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/scss/login/index.scss";
@import "../../../assets/scss/header/header.scss";
</style>
