<template>
    <el-menu default-active="1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :router="true"
             :collapse="!isCollapse" :style="{ top: fixedTop + 'px' }">
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">示例</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">功能</span>
            </template>
            <el-menu-item index="TabResetPassword">学生密码重置</el-menu-item>
            <el-menu-item index="TokenTransferManage">校级授权管理</el-menu-item>
            <el-menu-item index="AppCollectionManage">应用集管理</el-menu-item>
        </el-submenu>

        <el-submenu index="3" disabled>
            <template slot="title">
                <i class="el-icon-news"></i>
                <span slot="title">RS</span>
            </template>
            <el-menu-item index="SysAccessLog">访问日志</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统</span>
            </template>
            <el-menu-item index="AdminUserManage">管理员</el-menu-item>
            <el-menu-item index="SysAccessLog">访问日志</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
            <li class="el-icon-circle-close-outline"></li>
            <span slot="title">注销</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'TheSideMenu',
  components: {},
  mounted: function () {
    window.addEventListener('scroll', this.handlerMenuFix)
  },
  beforeMount: function () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handlerMenuFix () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
          document.body.scrollTop
      if (scrollTop > 170) {
        this.fixedTop = scrollTop - 170
      } else {
        this.fixedTop = 0
      }
    }
  },
  data: function () {
    return {
      isCollapse: true,
      fixedTop: 0
    }
  },
  computed: {}
}
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
