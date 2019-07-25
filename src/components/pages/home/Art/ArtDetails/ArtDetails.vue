<template>
  <div id="ArtDetails">
    <div class="header">
      <p class="h_title">艺术素养
        <span class="h_sub_title">&nbsp;>{{name}}</span>
      </p>
    </div>
    <!-- 参加艺术活动项目 -->
    <div class="section">
      <p class="bd_title">参加艺术活动项目</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData"
            border=""
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 0.8)"
            :header-cell-style="tableHeaderColor"
            :cell-style="{textAlign:'center',color:'#0C0C0C'}"
            height="250"
          >
            <el-table-column prop="xjh" label="序号" width="208"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="艺术活动项目" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="级别" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="主办单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="活动时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[4].khjg" label="名次或等第" width="200"></el-table-column>
            <el-table-column
                label="附件"
                min-width="280">
                <template slot-scope="scope">
                  <div v-html="scope.row.pntXsszpjRckhOuts[5].khjg" v-if="scope.row.pntXsszpjRckhOuts[5].khjg != ''">
                  </div>
                  <p v-if="scope.row.pntXsszpjRckhOuts[5].khjg == ''">无</p>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 参加学生艺术团队 -->
    <div class="section">
      <p class="bd_title">参加学生艺术团队</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData2"
            border=""
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 0.8)"
            :header-cell-style="tableHeaderColor"
            :cell-style="{textAlign:'center',color:'#0C0C0C'}"
            height="250"
          >
            <el-table-column prop="xjh" label="序号" width="208"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="学生艺术团队名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="起止时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="考核情况" width="200"></el-table-column>
            <el-table-column
                label="附件"
                min-width="280">
                <template slot-scope="scope">
                  <div v-html="scope.row.pntXsszpjRckhOuts[4].khjg" v-if="scope.row.pntXsszpjRckhOuts[4].khjg != ''">
                  </div>
                  <p v-if="scope.row.pntXsszpjRckhOuts[4].khjg == ''">无</p>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ysSyCjYshdXmList2, ysSyCjXsYstdMcList2 } from "@/api/api";
import utils from "@/utils/index";

export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      loading: false,
      name: '',
      queryObj: {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350206200302220013',
        grade: '2'
      }
    };
  },
  computed: {
    ...mapState(["token","stationPrice"])
  },
  mounted() {
    if(this.getQueryString('encrpy'))this.queryObj.encrpy = this.getQueryString('encrpy');
    if(this.getQueryString('stuNo'))this.queryObj.stuNo = this.getQueryString('stuNo');
    if(this.getQueryString('grade'))this.queryObj.grade = this.getQueryString('grade');

    
    this.ysSyCjYshdXmList2Fun(this.queryObj);// 参加体育比赛项目
    this.ysSyCjXsYstdMcList2Fun();// 运动员国家等级
    
  },
  methods: {
    ...mapActions(["setToKen","setStationPrice"]),
    //获取url参数
    getQueryString(name) {  
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
      var r = window.location.search.substr(1).match(reg);  
      if (r != null) return decodeURI(r[2]);
      return null;  
    },
    ysSyCjYshdXmList2Fun(obj) {
      // 参加艺术活动项目
      ysSyCjYshdXmList2(obj).then(res =>{
        this.tableData = res.data.data
        this.name = this.tableData[0].xm
      })
    },
    ysSyCjXsYstdMcList2Fun(obj) {
      // 参加学生艺术团队名称
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350206200208214047',
        grade: '4',
      }
      ysSyCjXsYstdMcList2(obj).then(res =>{
        this.tableData2 = res.data.data
      })
    },
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "color:#333;font-weight: 500;text-align:center";
      }
    }
  },
  components: {
    
  }
};
</script>
<style scoped lang="scss">

</style>
