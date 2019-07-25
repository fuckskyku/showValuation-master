<template>
  <div id="MoralDetails">
    <div class="header">
      <p class="h_title">思想品德
        <span class="h_sub_title">&nbsp;>{{name}}</span>
      </p>
    </div>
    <!-- 党团活动 -->
    <div class="section">
      <p class="bd_title">党团活动</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="活动名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="活动地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="活动时长" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="活动内容" width="200"></el-table-column>
            <el-table-column
                label="活动照片及相关附件"
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
    <!-- 社团活动 -->
    <div class="section">
      <p class="bd_title">社团活动</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="活动名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="活动地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="活动时长" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="活动内容" width="200"></el-table-column>
            <el-table-column
                label="活动照片及相关附件"
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
    <!-- 志愿服务 -->
    <div class="section">
      <p class="bd_title">志愿服务</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="活动名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="活动地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="活动时长" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="活动内容" width="200"></el-table-column>
            <el-table-column
                label="活动照片及相关附件"
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
    <!-- 公益劳动 -->
    <div class="section">
      <p class="bd_title">公益劳动</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="活动名称" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="活动地点" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="活动时长" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="活动内容" width="200"></el-table-column>
            <el-table-column
                label="活动照片及相关附件"
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
    <!-- 犯罪记录 -->
    <div class="section">
      <p class="bd_title">犯罪记录</p>
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
            <!-- <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="是否有犯罪记录" width="200"></el-table-column> -->
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="犯罪详情" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="处理情况" width="200"></el-table-column>
            <el-table-column
                label="活动照片及相关附件"
                min-width="280">
                <template slot-scope="scope">
                  <div v-html="scope.row.pntXsszpjRckhOuts[2].khjg" v-if="scope.row.pntXsszpjRckhOuts[2].khjg != ''">
                  </div>
                  <p v-if="scope.row.pntXsszpjRckhOuts[2].khjg == ''">无</p>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 先进个人荣誉 -->
    <div class="section">
      <p class="bd_title">先进个人荣誉</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="荣誉称号" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="获奖时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="获奖级别" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="评选单位" width="200"></el-table-column>
            <el-table-column
                label="获奖描述及附件"
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
    <!-- 违纪违规项目 -->
    <div class="section">
      <p class="bd_title">违纪违规项目</p>
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
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="违纪违规项目" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="处罚类别" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="处罚时间" width="200"></el-table-column>
            <el-table-column
                label="活动照片及相关附件"
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
import { sxPdDtHdList, sxPdStHdList, sxPdZyFwList, sxPdGyLdList, sxPdShYfzJlList2, sxPdWjWgXmList2, sxPdXjGrRyList2 } from "@/api/api";
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
        stuNo: 'G350206200209275511',
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


    this.sxPdDtHdListFun(this.queryObj);// 党团活动
    this.sxPdStHdListFun();// 社团活动测试参数
    this.sxPdZyFwListFun();// 志愿服务测试参数
    this.sxPdGyLdListFun();// 公益劳动测试参数
    this.sxPdShYfzJlList2Fun();// 犯罪记录测试参数
    this.sxPdXjGrRyList2Fun();//  先进个人荣誉测试参数
    this.sxPdWjWgXmList2Fun();// 违纪违规项目测试参数
    
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
    sxPdDtHdListFun(obj) {
      // 党团活动
      sxPdDtHdList(obj).then(res =>{
        this.tableData = res.data.data
        this.name = this.tableData[0].xm
      })
    },
    sxPdStHdListFun(obj) {
      // 社团活动测试参数
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G360502200203051325',
        grade: '4',
      }
      sxPdStHdList(obj).then(res =>{
        this.tableData2 = res.data.data
      })
    },
    sxPdZyFwListFun(obj) {
      // 志愿服务测试参数
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350206200207275518',
        grade: '4',
      }
      sxPdZyFwList(obj).then(res =>{
        this.tableData3 = res.data.data
      })
    },
    sxPdGyLdListFun(obj) {
      // 公益劳动测试参数
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G341226200003145265',
        grade: '4',
      }
      sxPdGyLdList(obj).then(res =>{
        this.tableData4 = res.data.data
      })
    },
    sxPdShYfzJlList2Fun(obj) {
      // 犯罪记录测试参数
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350521200205063511',
        grade: '4',
      }
      sxPdShYfzJlList2(obj).then(res =>{
        this.tableData5 = res.data.data
      })
    },
    sxPdXjGrRyList2Fun(obj) {
      //  先进个人荣誉测试参数
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350521200205063511',
        grade: '4',
      }
      sxPdXjGrRyList2(obj).then(res =>{
        this.tableData6 = res.data.data
      })
    },
    sxPdWjWgXmList2Fun(obj) {
      // 违纪违规项目测试参数
      obj = {
        encrpy: '+ESB3a2iwwrTpWTS2imU5w==',
        stuNo: 'G350521200205063511',
        grade: '4',
      }
      sxPdWjWgXmList2(obj).then(res =>{
        this.tableData7 = res.data.data
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
