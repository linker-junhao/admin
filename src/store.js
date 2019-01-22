import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleType: [
      { id: '1', type_text: '企业概况' },
      { id: '2', type_text: '物联智能' },
      { id: '3', type_text: '成功案例' },
      { id: '4', type_text: '文化事业' },
      { id: '5', type_text: '最新动态' },
      { id: '6', type_text: '联系我们' },
      { id: '7', type_text: '通知公告' },
      { id: '8', type_text: '合作伙伴' },
      { id: '9', type_text: '解决方案' },
      { id: '10', type_text: '文化动态' }
    ],
    apiBaseUrl: 'http://localhost:8888/cms/api/admin',
    authorization: ''
  },
  getters: {
    typeMapObject: state => {
      let target = state.articleType
      let ret = {}
      for (let item of target) {
        ret[item.id] = item.type_text
      }
      return ret
    },
    articleThumbPic: state => {
      return {
        apiUrl: state.apiBaseUrl + '/article/thumb_pic',
        authHeader: { Authorization: state.authorization }
      }
    }
  },
  mutations: {
    replaceArticleType (state, newVal) {
      state.articleType = newVal
    }
  },
  actions: {}
})
