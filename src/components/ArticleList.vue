<template>
    <div class="article-warp">
        <router-link :to="{name: 'article', params: {id: item._id}}" class="item" v-for="item in content" :key="item._id">
            <div class="acticle-msg clearfix">
                <div class="avatar fll">
                    <img :src="item.author.avatar">
                </div>
                <div class="author-msg fll">
                    <div class="row1">
                        <span class="author-name" >
                            {{item.author.username}}
                        </span>
                        <span class="divide">
                            丨
                        </span>
                        <span class="article-title" >
                            {{item.title}}
                        </span>
                    </div>
                    <div class="row2">
                        <span class="look-nums" >
                            浏览：{{item.readNum}}
                        </span>
                        <span class="reply">
                            回复：{{item.commonNum}}
                        </span>
                        <span class="category" >
                            分类：
                            <!-- {{item.category.name}} -->
                        </span>
                    </div>
                </div>
                <div class="del flr">                 
                    <el-button type="danger" class="del" @click="handleDelete(id)">删除</el-button>
                </div>
            </div>
            <div class="article-content" >
                {{item.contentText}}
            </div>           
        </router-link>
        <el-pagination class="page" background @current-change="pageChange" :page-size="10" small layout="prev, pager, next"
            :total="count">
        </el-pagination>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                content:[],
                count:0,
                page:3
            }
        },
        methods: {
            getData() {
            this.$axios.get("/article",{pn:this.page,size:9}).then(res => {
                    this.count = res.count
                    this.content = res.data                  
                })
            },
            handleDelete(id){
                this.$confirm('此操作将删除该文章, 是否继续?', '警告 ！', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.delete(`/article/${this.$route.params.id}`).then(res => {
                        this.$message.success(res.msg)
                        this.getData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            pageChange(page) {
                this.page = page
                this.getData()
            }
        },
        created() {
            this.getData()
        }

    }
</script>

<style scoped>
    .article-warp {
        margin-top: 30px;
        width: 750px;
        border-radius: 6px;
        background: #fff;
    }
    .avatar img {
        width: 70px;
        height: 70px;
        margin: 10px
    }
    .row1 {
        margin-top: 9px;
    }
    .author-name {
        font-size: 18px;
        font-weight: 700;
        color: #409eff
    }
    .article-title {
        margin-left: 5px;
        line-height: 30px;
        font-weight: 700;
        color: #333
    }
    .row2 {
        width: 520px;
        margin-top: 10px;
        background: #bbb;
        font-size: 14px;
        padding: 5px;
        border-radius: 4px;
        color: #333
    }
    .reply {
        margin-left: 20px;
    }
    .category {
        margin-left: 20px;
    }
    .article-content {
        padding: 15px 40px;
        text-decoration: none;
        color: #888      
    }
    .del{
        margin-right: 20px;
        margin-top: 20px;
        opacity: .7;
    }
    .page {
        text-align: center;
        margin: 30px;
    }
</style>