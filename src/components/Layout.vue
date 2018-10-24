<template>
    <div class="layout">
        <Header></Header>
        <div class="w1170">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    export default {
        components: {
            Header,
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
    
</style>