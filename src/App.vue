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

<style>
</style>
