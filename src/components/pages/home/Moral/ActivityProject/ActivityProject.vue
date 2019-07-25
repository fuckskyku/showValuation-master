<template>
  <div id="PartyActivity">
    <div class="h_header">
      <p class="h_title">思想品德
        <span class="h_sub_title">&nbsp;>活动项目</span>
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
          <!-- <div class="bd_title">党团活动</div> -->
          <el-table
            :data="tableData"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 0.6)"
            :header-cell-style="tableHeaderColor"
            :cell-style="{textAlign:'center',color: '#0090FF'}"
            height="600"
          >
            <el-table-column prop="xsbh" label="号数" width="180">
              <template slot-scope="scope">
                <p class="setColor">{{scope.row.xsbh}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="xm" label="学生姓名" width="110">
              <template slot-scope="scope">
                <p class="setColor">{{scope.row.xm}}</p>
              </template>
            </el-table-column>
            <el-table-column label="党团活动">
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[0].count" label="累计次数 (次)" width="176"></el-table-column>
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[0].time" label="累计时间 (小时)" width="176"></el-table-column>
            </el-table-column>
            <el-table-column label="社团活动">
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[1].count" label="累计次数 (次)" width="176"></el-table-column>
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[1].time" label="累计时间 (小时)" width="176"></el-table-column>
            </el-table-column>
            <el-table-column label="志愿服务">
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[2].count" label="累计次数 (次)" width="176"></el-table-column>
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[2].time" label="累计时间 (小时)" width="176"></el-table-column>
            </el-table-column>
            <el-table-column label="公益劳动">
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[3].count" label="累计次数 (次)" width="176"></el-table-column>
              <el-table-column header-align="center" prop="xsPntXsszpjRckhSjTimes[3].time" label="累计时间 (小时)" width="176"></el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  gradeClassList,
  sxPdTimeStatisList,
  sxPdDtHdList
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
      menuData: [],
      tableData: [],
      loading: true
    };
  },
  computed: {
    ...mapState(["token", "popNum"])
  },
  mounted() {
    var that = this;
    this.init();
    // this.$nextTick(() => {
      
    // });
  },
  methods: {
    ...mapActions(["setToKen", "setPopNum"]),
    //获取列表
    init() {
      this.gradeClassListFun();
      
    },
    gradeClassListFun() {
      gradeClassList({}).then(res => {
        this.gradeOptions = res.data.data
        this.graId = this.gradeOptions[0].id
        this.claId = this.gradeOptions[0].zxxx0300OutList[0].id
        this.gradeValue = this.gradeOptions[0].name
        this.classValue = this.gradeOptions[0].zxxx0300OutList[0].bj + '班'
        this.gradeOptions.map(item => {
          if(item.id == this.graId) {
            this.classOptions = item.zxxx0300OutList
          }
        })
        this.sxPdTimeStatisListFun();
      })
    },
    sxPdTimeStatisListFun() {
      sxPdTimeStatisList({
        graId: this.graId,
        claId: this.claId
      }).then(res => {
        if(res.data.code == 200) {
          this.tableData = res.data.data
          this.loading = false
        }
      })
    },
    confirmClass(val) {
      this.loading = true
      this.tableData = []
      this.claId = val;
      this.sxPdTimeStatisListFun();
    },
    selectClass(val) {
      this.graId = val;
      this.classValue = ''
      this.gradeOptions.map(item => {
        if(item.id == val) {
          this.classOptions = item.zxxx0300OutList
        }
      })
    },
    search() {

    },
    reSet() {
      this.init();
    },
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "color:#333333;font-weight: 500;text-align:center";
      }
    }
  }
};
</script>
<style scoped lang="scss">

</style>
