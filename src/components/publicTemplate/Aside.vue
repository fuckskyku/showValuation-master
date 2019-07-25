<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#ffffff"
          text-color="#384567"
          active-text-color="#000000"
          :unique-opened="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <div class="bd_left"></div>
              <span>思想品德</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="skip('ActivityProject')" class="sub_title" index="1-1">
                <p>活动项目</p>
              </el-menu-item>
              <el-menu-item @click="skip('HonorProject')" class="sub_title" index="1-2">
                <p>先进个人荣誉项目</p>
              </el-menu-item>
              <el-menu-item @click="skip('DisciplinaryProject')" class="sub_title" index="1-3">
                <p>违纪违规项目</p>
              </el-menu-item>
              <el-menu-item @click="skip('IfCrime')" class="sub_title" index="1-4">
                <p>是否有犯罪记录</p>
              </el-menu-item>
              <!-- <el-menu-item @click="skip('MoralDetails')" class="sub_title" index="1-5">
                详情
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <div class="bd_left"></div>
              <span>学业水平</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="skip('DisciplineCompetitionPerformance')" class="sub_title" index="2-1">
                <p>学科竞赛成绩</p>
              </el-menu-item>
              <!-- <el-menu-item @click="skip('AcademicDetails')" class="sub_title" index="2-2">
                <p>详情</p>
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <div class="bd_left"></div>
              <span>身心健康</span>
            </template>
            <el-menu-item-group>
              <el-tooltip class="item" effect="dark" content="《国家学生体质健康标准》测试综合得分" placement="top-end">
                <el-menu-item @click="skip('SynthesisScore')" class="sub_title" index="3-1">
                  <p>《国家学生体质健康标准》测试综合得分</p>
                </el-menu-item>
              </el-tooltip>
              <el-menu-item @click="skip('CompetitionItem')" class="sub_title" index="3-2">
                <p>参加体育比赛项目</p>
              </el-menu-item>
              <el-menu-item @click="skip('NationalAthleteClass')" class="sub_title" index="3-3">
                <p>国家运动员等级</p>
              </el-menu-item>
               <!-- <el-menu-item @click="skip('PhysicalDetails')" class="sub_title" index="3-4">
                <p>详情</p>
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <div class="bd_left"></div>
              <span>艺术素养</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="skip('ArtActivity')" class="sub_title" index="4-1">
                <p>参加艺术活动项目</p>
              </el-menu-item>
              <el-menu-item @click="skip('ArtTeam')" class="sub_title" index="4-2">
                <p>参加学生艺术团队</p>
              </el-menu-item>
              <!-- <el-menu-item @click="skip('ArtDetails')" class="sub_title" index="4-3">
                <p>详情</p>
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <div class="bd_left"></div>
              <span>社会实践</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="skip('SocialPracticeProject')" class="sub_title" index="5-1">
                <p>社会实践参与项目</p>
              </el-menu-item>
              <el-tooltip class="item" effect="dark" content="科技创新、研究性学习成果" placement="top-end">
                <el-menu-item @click="skip('InvestigativeStudy')" class="sub_title" index="5-2">
                  <p>科技创新、研究性学习成果</p>
                </el-menu-item>
              </el-tooltip>
              <el-menu-item @click="skip('Invention')" class="sub_title" index="5-3">
                <p>创造发明成果</p>
              </el-menu-item>
              <!-- <el-menu-item @click="skip('SocialPracticeDetails')" class="sub_title" index="5-4">
                <p>详情</p>
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <div class="bd_left"></div>
              <span>典型案例材料</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="skip('CaseMaterial')" class="sub_title" index="6-1">
                <p>典型案例材料</p>
              </el-menu-item>
              <!-- <el-menu-item @click="skip('CaseDetails')" class="sub_title" index="6-2">
                <p>详情</p>
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import $ from "jquery";

export default {
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {
      menuObj: {

      }
    };
  },
  computed: {
    ...mapState(["token", "defaultActive", "isClose"])
  },
  mounted() {
    // $(".el-menu-item-group__title").css("padding", "0");
    window.addEventListener("beforeunload", e => this.beforeunloadHandler(e));
  },
  methods: {
    ...mapActions(["setToKen", "setDefaultActive", "setIsClose"]),
    beforeunloadHandler(e) {
      // 监听页面关闭重置导航栏
      this.setDefaultActive("1");
    },
    handleSelect(key, keyPath) {
      this.setDefaultActive(key);
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    
  },
  components: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/iconfont/iconfont.css";
@import "../../assets/scss/aside/index.scss";
</style>
