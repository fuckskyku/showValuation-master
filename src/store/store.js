import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
//数据
const state = {
  defaultActive: '1',
  popNum: '',
  sessionId: '', 
  term: '', 
  token: '', //880A367FF38E46DF826C517294D8A386
  browserHeaderTitle: '',
}

//获取数据（自定义过滤计算）
const getters = {
  getDefaultActive: state => state.defaultActive,
  getPopNum: state => state.popNum,
  getSessionId: state => state.sessionId,
  getTerm: state => state.term,
  gettoKen: state => state.token,
  getBrowserHeaderTitle: state => state.browserHeaderTitle,
}

//提交方法
const mutations = {
  //清空方法
  clearStore(state) {
    if (state) {
      state.sessionId = ''
      state.popNum = ''
      state.term = ''
      state.token = ''
      state.browserHeaderTitle = ''
    }
  },
  defaultActive(state, value) {
    state.defaultActive = value;
  },
  popNum(state, value) {
    state.popNum = value;
  },
  sessionId(state, value) {
    state.sessionId = value;
  },
  term(state, value) {
    state.term = value;
  },
  token(state, value) {
    state.token = value;
  },
  browserHeaderTitle(state, value) {
    state.browserHeaderTitle = value;
  },
};

//提交拦截
const actions = {
  //清空方法
  setClearStore(state) {
    state.commit('clearStore');
  },
  setSessionId(state, value) {
    state.commit('sessionId', value);
  },
  setPopNum(state, value) {
    state.commit('popNum', value);
  },
  setTerm(state, value) {
    state.commit('term', value);
  },
  setDefaultActive(state, value) {
    state.commit('defaultActive', value);
  },
  setToKen(state, value) {
    state.commit('token', value)
  },
  setBrowserHeaderTitle(state, value) {
    state.commit('browserHeaderTitle', value)
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  plugins: [createPersistedState()],
  // plugins: [createPersistedState({
  //   storage: window.sessionStorage
  // })],
  mutations,

});
