<template>
    <div class="w1170">
        <div class="content">
            <div class="left-box">
                <img class="img" src="../assets/banner.jpg">
                <div class="desc">十三亿人都会用的云笔记</div>
            </div>        
        </div>
    </div>
</template>

<script>
    export default {

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
        box-sizing: border-box;
        
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