<template>
    <div class="main">
        <div class="form-container">
            <h2 class="form-title">登 陆</h2>
            <el-form label-position="right" label-width="50px" :model="formLogin">
                <el-form-item label="用户">
                    <el-input v-model="formLogin.user_name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLogin.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit()">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import RESTfulReq from '../../utils/RESTfulReq'

let initObj = {
  tab: null,
  networkReq: null
}
export default {
  name: 'Login',
  components: {},
  mounted: function () {
  },
  beforeMount: function () {
    initObj.tab = this
    initObj.networkReq = new RESTfulReq('/yiban_crx_toolbox', initObj.tab)
  },
  methods: {
    submit: function () {
      initObj.networkReq.postReq(initObj.tab.formLogin, function (response) {
        window.localStorage.setItem('loginUserBaseInfo', JSON.stringify(response.data.data))
        router.push({ path: '/' })
      }, '/login')
    }
  },
  data () {
    return {
      formLogin: {
        user_name: '',
        password: ''
      }
    }
  },
  computed: {}
}
</script>

<style scoped>
    .main {
        position: absolute;
        width: 26%;
        height: 600px;
        background-color: white;
        left: 0;
        top: 170px;
        padding: 80px 37%;
    }

    .form-title {
        font-size: 20px;
        text-align: center;
        font-weight: 400;
    }

    .form-container {

    }
</style>
