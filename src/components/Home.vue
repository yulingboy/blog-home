<template>
  <div class="home-container">
    <!-- <my-nav></my-nav>
    <router-view></router-view> -->
    <el-container>
      <el-header>
        <div>
          <router-link to="/articles" class="home-link">雨凌的个人博客</router-link>
          <!-- <a href="#">首页</a>
          <a href="#">首页</a>
          <a href="#">首页</a>
          <a href="#">首页</a> -->
        </div>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="18">
            <router-view></router-view>
          </el-col>
          <el-col :span="6">
            <div>
              <el-card class="box-card classifylist">
                <div slot="header" class="clearfix">
                <span>文章分类</span>
                </div>
                <div v-for="item in classifylist" :key="item._id">
                <!-- {{'列表内容 ' + item.classify }} -->
                <div class="classify-info" @click="getClassifyArticle(item.classify)"><span>{{item.classify}}</span><el-tag>10</el-tag></div>
              </div>
            </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>我是底部区域</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classifylist: []
    }
  },
  created () {
    this.getClassifyList()
  },
  methods: {
    getClassifyList: async function () {
      const { data: res } = await this.$http.get('classifylist')
      // console.log(res)
      this.classifylist = res.classifylist
      // this.count = res.count
      console.log(res)
    },
    getClassifyArticle: function (classify) {
      this.$router.push('/articles?classify=' + classify)
      location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  // background-color: pink;
  // box-shadow: inset 0 0 1px 0 5px rgba(0, 0, 0, 0.5);
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .home-link {
    font-size: 20px;
  }
  a {
    color: #333;
    margin-right: 20px;
  }
}
.el-main {
  padding: 20px 5%;
  background-color: rgba(0,0,0,.1);
}
.el-footer {
  background-color: #000;
  // text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.classifylist {
  margin-top: 10px;
  .classify-info {
    padding: 10px 20px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 1px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
}
</style>
