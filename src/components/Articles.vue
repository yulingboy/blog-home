<template>
  <div class="article-card">
    <div v-for="item in articleData" :key="item._id" class="text item">
      <el-card class="box-card article-acrd">
        <div class="text item">
          <el-row :gutter="20">
            <el-col :span="18">
              <h3 class="article-title" @click="getArticle(item._id)">
                <a>{{ item.title }}</a>
              </h3>
              <div class="article-content">{{ item.description | text }} <el-button type="text" @click="getArticle(item._id)">查看更多<i class="el-icon-arrow-right el-icon--right"></i></el-button></div>
              <div class="article-info">
                <span class="article-classify" @click="getClassifyArticle(item.classify)">分类：<a>{{ item.classify }}</a></span>
                <span class="article-time">发布于{{ item.publishDate | time }}</span>
                <span class="article-view">{{ item.view }}人阅读</span>
                <span class="article-time">{{ item.comments }}条评论</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="article-img">
                <img
                  src="http://images.bianxiaofeng.com/ced846eab08578468670a87333e05b5f.jpg"
                  alt="封面图"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <!-- 分页 -->
    <div class="article-page">
      <el-pagination background :current-page="currentPage" :page-sizes="[1, 2, 3, 4]" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="total" @current-change="currentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: [],
      // 分页当前页
      currentPage: 1,
      // 每页显示几条数据
      pageSize: 4,
      // 数据中暑
      total: 0
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    getArticleList: function () {
      if (location.hash === '#/articles') {
        this.getArticles()
        // console.log('1')
      } else {
        this.getClassifyArticles()
        // console.log('2')
      }
    },
    // 获取文章列表
    getArticles: async function () {
      const { data: res } = await this.$http.get('articles', { params: { currentPage: this.currentPage } })
      this.articleData = res.article
      this.total = res.count
    },
    // 获取分类文章列表
    getClassifyArticles: async function () {
      const url = location.hash
      const a = url.split('?')
      const id = a[1].split('=')
      const str = id[1]
      const classify = decodeURI(str)
      const { data: res } = await this.$http.get('classifyarticle', { params: { classify: classify, currentPage: this.currentPage } })
      // console.log(res)
      this.articleData = res.article
      this.total = res.count
    },
    // 跳转到文章详情页
    getArticle: function (id) {
      console.log(id)
      this.$router.push('article/?id=' + id)
    },
    // 跳转到分类
    getClassifyArticle: function (classify) {
      this.$router.push('/articles?classify=' + classify)
      location.reload()
    },
    // 数据表分页
    currentChange: function (currentPage) {
      // console.log(currentPage)
      this.currentPage = currentPage
      this.getArticleList()
    }
  }
}
</script>

<style lang="less" scoped>
.article-card {
  // margin: 10px 60px;
  z-index: -99;
}
.article-title {
  margin: 10px 0;
  cursor: pointer;
  a {
    color: #000;
  }
  :hover {
    color: #409eff;
    text-decoration: underline;
  }
}
.article-acrd {
  margin: 10px 0;
  // cursor: pointer;
}
.article-content {
  margin: 20px 0;
}
.article-img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.article-info {
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
.article-page {
  display: flex;
  justify-content: center;
}
</style>
