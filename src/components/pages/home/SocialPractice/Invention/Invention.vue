<template>
  <div id="PartyActivity">
    <div class="h_header">
      <p class="h_title">社会实践
        <span class="h_sub_title">&nbsp;>创造发明成果</span>
      </p>
    </div>
    <div class="section">
      <div class="navBar">
        <div class="lt">
          <div class="searchGroup">
            <label for="">年级</label>
            <el-select v-model="gradeValue" @change="selectClass" placeholder="请选择年级">
              <el-option
                v-for="item in gradeOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="searchGroup">
            <label for="">班级</label>
            <el-select v-model="classValue" @change="confirmClass" placeholder="请选择班级">
              <el-option
                v-for="item in classOptions"
                :key="item.id"
                :label="item.bj+'班'"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="searchGroup">
            <label for="">搜索</label>
            <el-input v-model="keyWord" placeholder="请输入内容" @change="search"></el-input>
          </div>
        </div>
        <div class="rt">
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
        </div>
      </div>
      
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
            height="650"
          >
            <el-table-column prop="xjh" label="号数" width="208"></el-table-column>
            <el-table-column prop="xm" label="姓名" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="创造发明成果" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="专利类型" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[2].khjg" label="时间" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[3].khjg" label="专利号" width="200"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  shSjCzList,
  gradeClassList
} from "@/api/api";
import utils from "@/utils/index";

export default {
  data() {
    return {
      gradeOptions: [],
      classOptions: [],
      gradeValue: '',
      classValue: '',
      graId: '',
      claId: '',
      keyWord: '',
      queryObj: {},
      tableData: [],
      loading: true
    };
  },
  computed: {
    ...mapState(["token", "popNum"])
  },
  mounted() {
    var that = this;
    // this.queryObj = this.$route.query;
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    ...mapActions(["setToKen", "setPopNum"]),
    //获取列表
    init() {
      this.gradeClassListFun();
    },
    gradeClassListFun() {
      gradeClassList({}).then(res => {
        this.gradeOptions = res.data.data;
        this.graId = this.gradeOptions[0].id;
        this.claId = this.gradeOptions[0].zxxx0300OutList[0].id;
        this.gradeValue = this.gradeOptions[0].name;
        this.classValue = this.gradeOptions[0].zxxx0300OutList[0].bj + '班';
        this.gradeOptions.map(item => {
          if(item.id == this.graId) {
            this.classOptions = item.zxxx0300OutList;
          }
        });
        this.getListFun();
      })
    },
    getListFun() {
      shSjCzList({
        graId: this.graId,
        claId: this.claId,
      }).then(res => {
        this.tableData = res.data.data;
        this.loading = false
      })
    },
    confirmClass(val) {
      this.loading = true
      this.tableData = [];
      this.claId = val;
      this.getListFun();
    },
    selectClass(val) {
      this.graId = val;
      this.classValue = '';
      this.gradeOptions.map(item => {
        if(item.id == val) {
          this.classOptions = item.zxxx0300OutList;
        }
      })
    },
    search() {
      
    },
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "color:#333;font-weight: 500;text-align:center";
      }
    }
  }
};
</script>
<style scoped lang="scss">

</style>
