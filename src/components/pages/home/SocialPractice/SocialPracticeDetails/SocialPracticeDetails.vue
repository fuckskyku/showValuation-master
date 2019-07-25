<template>
  <div id="SocialPracticeDetails">
    <div class="header">
      <p class="h_title">社会实践
        <span class="h_sub_title">&nbsp;>{{name}}</span>
      </p>
    </div>
    <!-- 军事训练 -->
    <div class="section">
      <p class="bd_title">军事训练</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="累计时长" width="200"></el-table-column>
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
    <!-- 生产劳动 -->
    <div class="section">
      <p class="bd_title">生产劳动</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="累计时长" width="200"></el-table-column>
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
    <!-- 社会调查 -->
    <div class="section">
      <p class="bd_title">社会调查</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData3"
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="累计时长" width="200"></el-table-column>
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
    <!-- 勤工俭学 -->
    <div class="section">
      <p class="bd_title">勤工俭学</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData4"
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="累计时长" width="200"></el-table-column>
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
    <!-- 参观体验 -->
    <div class="section">
      <p class="bd_title">参观体验</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData5"
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="累计时长" width="200"></el-table-column>
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
    <!-- 研学旅行 -->
    <div class="section">
      <p class="bd_title">研学旅行</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData6"
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="组织单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="累计时长" width="200"></el-table-column>
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
    <!-- 科技创新、研究性学习成果 -->
    <div class="section">
      <p class="bd_title">科技创新、研究性学习成果</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData7"
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="成果名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="级别" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="组办单位" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[4].khjg" label="名次或等第" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[5].khjg" label="成果介绍" width="200"></el-table-column>
            <el-table-column
                label="附件"
                min-width="280">
                <template slot-scope="scope">
                  <div v-html="scope.row.pntXsszpjRckhOuts[6].khjg" v-if="scope.row.pntXsszpjRckhOuts[6].khjg != ''">
                  </div>
                  <p v-if="scope.row.pntXsszpjRckhOuts[6].khjg == ''">无</p>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 创造发明结果 -->
    <div class="section">
      <p class="bd_title">创造发明结果</p>
      <div class="bd_table">
        <div class="bd_content">
          <el-table
            :data="tableData8"
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="成果名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="专利类型" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="获得时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="专利号" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[4].khjg" label="专利介绍" width="200"></el-table-column>
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { shSjJsXlList, shSjScLdList, shSjShDcList, shSjQgJxList, shSjCgTjList, shSjYxLxList, shSjCxList2, shSjCzList2, sxJkYdyGjDjList2 } from "@/api/api";
import utils from "@/utils/index";

export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData7: [],
      tableData8: [],
      loading: false,
      name: '',
      queryObj: {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350206200307040038',
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

    
    this.shSjJsXlListFun(this.queryObj);// 军事训练
    this.shSjScLdListFun();// 生产劳动
    this.shSjShDcListFun();// 社会调查
    this.shSjQgJxListFun();// 勤工俭学
    this.shSjCgTjListFun();// 参观体验
    this.shSjYxLxListFun();// 研学旅行
    this.shSjCxList2Fun();// 科技创新、研究性学习成果
    this.shSjCzList2Fun();// 创造发明结果
    
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
    shSjJsXlListFun(obj) {
      // 军事训练
      shSjJsXlList(obj).then(res =>{
        this.tableData = res.data.data
        this.name = this.tableData[0].xm
      })
    },
    shSjScLdListFun(obj) {
      // 生产劳动
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G412722200102116911',
        grade: '4',
      }
      shSjScLdList(obj).then(res =>{
        this.tableData2 = res.data.data
      })
    },
    shSjShDcListFun(obj) {
      // 社会调查
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G35072220011010092X',
        grade: '4',
      }
      shSjShDcList(obj).then(res =>{
        this.tableData3 = res.data.data
      })
    },
    shSjQgJxListFun(obj) {
      // 勤工俭学
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350881200206050918',
        grade: '4',
      }
      shSjQgJxList(obj).then(res =>{
        this.tableData4 = res.data.data
      })
    },
    shSjCgTjListFun(obj) {
      // 参观体验
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G35072220011010092X',
        grade: '4',
      }
      shSjCgTjList(obj).then(res =>{
        this.tableData5 = res.data.data
        console.log("参观体验",this.tableData5);
        
      })
    },
    shSjYxLxListFun(obj) {
      // 研学旅行
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350211200212050015',
        grade: '4',
      }
      shSjYxLxList(obj).then(res =>{
        this.tableData6 = res.data.data
        console.log("研学旅行",this.tableData6);
      })
    },
    shSjCxList2Fun(obj) {
      // 科技创新、研究性学习成果
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G35020320010830402X',
        grade: '4',
      }
      shSjCxList2(obj).then(res =>{
        this.tableData7 = res.data.data
      })
    },
    shSjCzList2Fun(obj) {
      // 创造发明结果
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350204200111106514',
        grade: '4',
      }
      sxJkYdyGjDjList2(obj).then(res =>{
        this.tableData8 = res.data.data
        console.log("创造发明结果",this.tableData8);
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
