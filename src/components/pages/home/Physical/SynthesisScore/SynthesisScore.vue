<template>
  <div id="PartyActivity">
    <div class="h_header">
      <p class="h_title">身心健康
        <span class="h_sub_title">&nbsp;>《国家学生体质健康标准》测试综合得分</span>
      </p>
    </div>
    <div class="section">
      <div class="navBar">
        <div class="lt">
          <div class="searchGroup">
            <label for="">年级</label>
            <el-select v-model="gradeValue" placeholder="请选择年级">
              <el-option
                v-for="item in gradeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="searchGroup">
            <label for="">班级</label>
            <el-select v-model="gradeValue" placeholder="请选择班级">
              <el-option
                v-for="item in gradeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
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
            :header-cell-style="tableHeaderColor"
            :cell-style="{textAlign:'center',color:'#0C0C0C'}"
            height="650"
            style="width: 1010px"
          >
            <el-table-column prop="xjh" label="号数" width="208"></el-table-column>
            <el-table-column prop="xm" label="姓名" width="200"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[0].khjg" label="《国家学生体质健康标准》测试综合得分" width="300"></el-table-column>
            <el-table-column prop="pntXsszpjRckhOuts[1].khjg" label="获得名次或等第" width="300"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  jxmlZtNotCount,
  ejxmZtNotCount,
  getListApi,
  audit,
  ALLaudit
} from "@/api/api";
import utils from "@/utils/index";

export default {
  data() {
    return {
      gradeOptions:  [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤发鸭'
      }],
      gradeValue: '',
      keyWord: '',
      queryObj: {},
      menuData: [],
      tableData: []
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
      this.tableData = [
        {
          "loginid": "xmezh2018025",
          "pntXsszpjRckhOuts": [
            {
              "cd": 1,
              "khjg": "团代会",
              "sxmc": "活动名称"
            },
            {
              "cd": 1,
              "khjg": "2018.12.02",
              "sxmc": "活动地点"
            },
            {
              "cd": 1,
              "khjg": "4小时",
              "sxmc": "活动时长"
            },
            {
              "cd": 1,
              "khjg": "全面贯彻落实党中央的正确指导思想",
              "sxmc": "活动内容"
            },
            {
              "cd": 1,
              "khjg": "<p> <a class=\"fId_(131936313985590491)QQ图片20190203093425.jpg fileAttach\" href=\"../../uploadfiles/exchange/(131936313985590491)QQ图片20190203093425.jpg\" target=\"_blank\">QQ图片20190203093425.jpg</a> </p>",
              "sxmc": "附件"
            }
          ],
          "xjh": "G350206200209275511",
          "xm": "尤李尤"
        }
      ]
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
