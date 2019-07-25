<template>
  <div class="">
    <div class="header">
      <p>典型案例材料</p>
    </div>
    <div class="section">
      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { settingstationprice } from "@/api/api";
import utils from "@/utils/index";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["token","stationPrice"])
  },
  mounted() {
    
  },
  methods: {
    ...mapActions(["setToKen","setStationPrice"]),
    
  },
  components: {
    
  }
};
</script>
<style scoped lang="scss">

</style>
