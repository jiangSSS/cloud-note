<template>
    <div class="layout">
        <div class="w1170">
            <div class="clearfix">
                <Banner></Banner>
                <userBox></userBox>
            </div>          
            <ArticleList></ArticleList>          
        </div>
       
    </div>
</template>
<script>
    import Banner from "@/components/Banner"
    import userBox from "@/components/userBox"
    import ArticleList from "@/components/ArticleList"
    export default {
        components: {
            Banner,
            userBox,
            ArticleList
        }
    }
</script>

<style scoped>
        .content {
        margin-top: 50px;
    }
    .left-box {
        float: left;
        position: relative;
        width: 750px;
        height: 340px;
        border-radius: 4px;
        overflow: hidden;
        
    }
    .img {
        display: block;
        width: 100%;
    }
    .desc {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 20px;
        font-weight: 400;
        line-height: 50px;
        padding-left: 30px;
        color: rgba(255, 255, 255, .8);
        background: rgba(0, 0, 0, .5);
    }
    .right-box {
        float: right;
        text-align: center;
        
    }
    .right {
        background: #fff;
        height: 260px;
        width: 320px;
        padding: 25px 20px;
        padding-top: 50px;
    }
    .input {
        width: 300px;
        margin-bottom: 10px
    }
</style>