<template>
  <div>
    <el-card class="box-card">
      <div v-for="item in articleData" :key="item._id" class="text item" @click="getArticle(item._id)">
        <el-card class="box-card article-acrd">
          <div class="text item">
            <h3 class="article-title">{{item.title}}</h3>
            <div class="article-content">{{item.description}}</div>
            <div class="article-info">分类：{{item.classify}}  发布于{{item.publishDate | time}} </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: []
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    getArticles: async function () {
      const { data: res } = await this.$http.get('articles')
      console.log(res)
      this.articleData = res.article
    },
    getArticle: function (id) {
      console.log(id)
      this.$router.push('article/?id=' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  margin: 10px 60px;
}
.article-acrd {
  margin: 10px 0;
  cursor: pointer;
}
.article-content {
  margin: 20px 0;
}
</style>
