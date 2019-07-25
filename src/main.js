import Vue from 'vue';
import App from './App';
import router from './router';
import store from './Store/store';
import sidebar from './utils/sidebar';
//引入elementUI
import ElementUI from 'element-ui';
import {
  Loading
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入自定义颜色主题(页面特效动画)
import "animate.css";
// 引入公共样式
import "../src/assets/css/cssReset.css";
import "../src/assets/css/public.css";
// 引入本地存储方法
import utils from './utils/utils';
// 引入分页组件
import pagination from './components/publicTemplate/Pagination';
Vue.component('pagination', pagination);

Vue.use(utils);
Vue.use(ElementUI);
Vue.prototype.$store = store;

Vue.config.productionTip = false;
// 配置全局变量
if (window.localStorage.getItem('TOKEN') != null) {
  global.TOKEN = window.localStorage.getItem('TOKEN');
} else {
  global.TOKEN = null;
}

router.beforeEach((to, from, next) => {
  var token = window.localStorage.getItem("TOKEN");
  if (to.meta.title) { //判断是否有标题
    document.title = to.meta.title
  } else {
    document.title = '学生综合素质评价系统'
  }
  if (token == '' || token == null) {
    //token为空的时候，全局token也的等于空
    global.TOKEN = null;
    if (to.name == 'Login') {
      next()
    } else {
      next('/Login')
    }
  } else {
    //配置全局变量
    if (window.localStorage.getItem('TOKEN') != null) {
      global.TOKEN = window.localStorage.getItem('TOKEN');
    } else {
      global.TOKEN = null;
    }
    // 侧边栏状态持久化
    sidebar.map((item) => {
      if (to.name == item.name) {
        store.dispatch('setDefaultActive', item.Active)
      }
    })
    if (token) {
      // if (to.name == 'Login') {

      // }else{

      // }
    } else {
      next('/Login')
    }
    next()
  }
});

import {
  formatDate
} from "@/utils/date.js";
Vue.filter('formatDate', function (time) { //时间过滤
  var times = time * 1000
  var date = new Date(times);
  return formatDate(date, 'yyyy年MM月dd日 hh:mm:ss');
});

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
})
