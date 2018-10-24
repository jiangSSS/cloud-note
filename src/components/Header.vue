<template>
        <div class="header-warp">
            <div class="warp w1170">
                <h1 class="title fll" @click="$router.push('/index')">云笔记</h1>
                <el-button class="write flr" @click="$router.push('/writeNote')">
                    写笔记
                </el-button>
            </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .header-warp {
        height: 50px;
        background: #409eff;
    }
    .title {
        color: #fff;
        font-size: 30px;
        font-weight: 400;
        margin-top: 5px;
        cursor: pointer;
    }
    .write {
        margin-top: 5px;
        background: #fff;
        padding: 0 20px;
        line-height: 38px;
       
    }

</style>