<template>
    <div>
        <div class="w1170 article">
            <div class="author-msg clearfix" v-if="content.author">
                <div class="img-item fll">
                    <img :src="content.author.avatar">
                </div>
                <div class="author-detail">
                    <div class="author-name">
                        {{content.author.username}}
                    </div>
                    <div class="date">
                        <span class="format-date">
                            {{content.updateTime}}
                        </span>
                        <span class="">
                            阅读 {{content.readNum}}
                        </span>
                    </div>
                </div> 
            </div>
            <div class="title">
                {{content.title}}
            </div>
            <div class="content" v-html="content.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: {}
            }
        },
        methods: {
            getData() {
                this.$axios.get(`/article/${this.$route.params.id}`).then(res => {
                    this.content = res.data
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
    .article {
        background: #fff;
        height: 490px;
        margin-top: 40px;
        border-radius: 6px;
        padding: 40px 40px;
    }
    .img-item img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }
    .author-detail{
        margin-left: 30px;
    }
    .author-name{
        font-size: 20px;
        font-weight: 700;
        color: #333;
        margin-bottom: 10px;

    }
    .date{
        color: #555;
        font-size: 14px;
    }
    .format-date{
        margin-right: 6px;
    }

</style>