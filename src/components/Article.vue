<template>
  <div>
    <div class="article">
      <el-card>
        <h3 class="article-title">{{ articleData[0].title }}</h3>
        <div class="article-content" v-html="articleData[0].content"></div>
        <div class="article-info">分类：{{ articleData[0].classify }} 发表时间：{{articleData[0].publishDate | time}}</div>
      </el-card>
    </div>
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
    this.getArticle()
  },
  methods: {
    getArticle: async function () {
      const url = location.hash
      const a = url.split('?')
      const id = a[1].split('=')
      this.id = id[1]
      const { data: res } = await this.$http.get('article', {
        params: { id: id[1] }
      })
      console.log(res.article)
      this.articleData = res.article
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  margin: 20px 60px;
  //   border: 1px solid #ccc;
  .article-title {
    text-align: center;
  }
  .article-content {
      margin: 30px 0;
  }
}
</style>
