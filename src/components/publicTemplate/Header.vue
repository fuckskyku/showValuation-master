<template>
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
</template>
<script>
import { mapState, mapActions } from "vuex";
import { getStationUserInfo, logout } from "@/api/api";

export default {
  data() {
    return {
      token: "",
      status: "登录",
    };
  },
  computed: {
    ...mapState([ "userInfo", "companyInfo"])
  },
  mounted() {
    this.token = this.getLocalStorage('GLOBAL_TOKEN')
    // this.init()
  },
  methods: {
    ...mapActions(["setToKen", "setCompanyInfo", "setClearStore"]),
  },
  components: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/header/header.scss";
</style>
