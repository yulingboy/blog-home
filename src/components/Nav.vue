<template>
  <div class="home-header">
    <div>
      <a href="#" class="home-link">雨凌的个人博客</a>
      <!-- <a href="#">首页</a>
      <a href="#">首页</a>
      <a href="#">首页</a>
      <a href="#">首页</a>
      <a href="#">首页</a> -->
    </div>
    <div>
        <!-- <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-nav',
  data () {
    return {}
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
.home-header {
  background-color: black;
  height: 60px;
  line-height: 60px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  .home-link {
      font-size: 20px;
  }
  a {
      color: aquamarine;
      margin-right: 20px;
  }
}
</style>
