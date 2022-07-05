<template>
  <div class="Sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">角色管理</el-menu-item>
        <el-menu-item index="1-2">菜单管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <span>系统工具</span>
        </template>
        <el-menu-item index="2-1">数字字典</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.Sidebar {
  width: 200px;
}
</style>
