<template>
  <div>
    <div class="article">
      <el-card>
        <h3 class="article-title">{{ articleData[0].title }}</h3>
        <div class="article-info">
          <span
            >分类：<a>{{ articleData[0].classify }}</a></span>
          <span>发表时间：{{ articleData[0].publishDate | time }}</span>
          <span class="article-view">{{ articleData[0].view }}人阅读</span>
          <span class="article-time">{{ articleData[0].comments }}条评论</span>
        </div>
        <div class="article-content" v-html="articleData[0].content"></div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>发表评论</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="addComment ">发表</el-button>
        </div>
        <div>
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea"></el-input>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>评论列表</span>
        </div>
        <div>
          <div v-for="item in comments" :key="item._id">
            <div>{{item.content}}</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: [],
      textarea: '',
      comments: []
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
      // console.log(res.article)
      this.articleData = res.article
      this.getCommentList()
    },
    getCommentList: async function () {
      const { data: res } = await this.$http.get('commentlist', { params: { aid: this.articleData[0]._id } })
      console.log(res.comments)
      this.comments = res.comments
    },
    addComment: async function () {
      const { data: res } = await this.$http.post('comment', { aid: this.articleData[0]._id, content: this.textarea })
      console.log(res)
      this.textarea = ''
      this.getArticle()
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  margin-top: 10px;
}
.article {
  // margin: 20px 60px;
  // border: 1px solid #ccc;
  .article-title {
    text-align: center;
    font-size: 30px;
    margin: 0 auto;
  }
  .article-info {
    margin: 20px 0;
    padding: 0 auto;
    span {
      margin-right: 20px;
      cursor: pointer;
      a {
        color: #000;
      }
      :hover {
        color: #409eff;
        text-decoration: underline;
      }
    }
  }
}
</style>
