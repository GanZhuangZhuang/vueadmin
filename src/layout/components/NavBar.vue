<template>
  <div class="NavBar">
    <div class="left">VueAdmin后台管理系统</div>
    <div class="right">
      <div class="min-img">
        <img src="" alt="" />
      </div>
      <div class="min-left">
        <el-dropdown>
          <span class="el-dropdown-link">
            text
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="min-center">视频讲解</div>
      <div class="min-right">网站</div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.NavBar {
  width: 100%;
  background-color: #17b3a3;
  height: 55px;
  display: flex;
  .left {
    width: 80%;
    text-align: center;
    font-weight: 700;
    line-height: 55px;
  }
  .right {
    display: flex;
    width: 20%;
    // background: pink;
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    div {
      flex: 1;
    }
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  display: inline-block;
}
</style>
