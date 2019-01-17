<template>
  <el-container>
    <el-header>
      <the-header></the-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <the-side-menu></the-side-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>
          <TheFooter></TheFooter>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import TheFooter from '@/idxLib/components/TheFooter'
import TheHeader from '@/idxLib/components/TheHeader'
import TheSideMenu from '@/idxLib/components/TheSideMenu'

export default {
  components: {
    TheFooter,
    TheHeader,
    TheSideMenu
  },
  beforeMount: function () {

  },
  data: function () {
    return {}
  },
  computed: {},
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>
<style scoped>
  .el-header {
    height: auto !important;
    margin-bottom: 12px;
  }
</style>
