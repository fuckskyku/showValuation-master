<template>
  <div id="PhysicalDetails">
    <div class="header">
      <p class="h_title">身心健康
        <span class="h_sub_title">&nbsp;>{{name}}</span>
      </p>
    </div>
    <!-- 参加体育比赛项目 -->
    <div class="section">
      <p class="bd_title">参加体育比赛项目</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="比赛项目" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="级别" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="主办单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="比赛时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[4].khjg" label="比赛名次或等第" width="200"></el-table-column>
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
    <!-- 运动员国家等级 -->
    <div class="section">
      <p class="bd_title">运动员国家等级</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="运动员国家技术等级" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="运动项目" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="颁证单位" width="200"></el-table-column>
            <el-table-column
                label="附件"
                min-width="280">
                <template slot-scope="scope">
                  <div v-html="scope.row.pntXsszpjRckhOuts[3].khjg" v-if="scope.row.pntXsszpjRckhOuts[3].khjg != ''">
                  </div>
                  <p v-if="scope.row.pntXsszpjRckhOuts[3].khjg == ''">无</p>
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
import { sxJkCjTyBsXmList2, sxJkYdyGjDjList2 } from "@/api/api";
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
        stuNo: 'G350206200203305513',
        grade: '4'
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

    
    this.sxJkCjTyBsXmList2Fun(this.queryObj);// 参加体育比赛项目
    this.sxJkYdyGjDjList2Fun();// 运动员国家等级
    
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
    sxJkCjTyBsXmList2Fun(obj) {
      // 参加体育比赛项目
      sxJkCjTyBsXmList2(obj).then(res =>{
        this.tableData = res.data.data
        this.name = this.tableData[0].xm
      })
    },
    sxJkYdyGjDjList2Fun(obj) {
      // 运动员国家等级
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350202200110010016',
        grade: '4',
      }
      sxJkYdyGjDjList2(obj).then(res =>{
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
