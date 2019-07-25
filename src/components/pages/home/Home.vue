<template>
  <div class="index">
    <!-- <Header></Header> -->
    <div class="warp">
      <div class="aside">
        <Aside></Aside>
      </div>
      <div class="main">
        <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/publicTemplate/Header";
import Aside from "@/components/publicTemplate/Aside";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["token","defaultActive"])
  },
  mounted() {
    // this.setToKen("")
  },
  methods: {
    ...mapActions(["setToKen", "setDefaultActive"]),
  },
  components: {
    Header,
    Aside,
  }
};
</script>
<style scoped lang="scss">
@import "../../../assets/scss/header/header.scss";
@import "../../../assets/scss/main.scss";
</style>
