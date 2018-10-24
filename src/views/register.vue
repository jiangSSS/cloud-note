<template>
    <div class="layout">      
        <div class="content w1170">
            <div class="text">
                <h1 class="newUser">新用户注册</h1>
                <el-form :model="formData">
                    <el-form-item>
                        <el-input class="input" placeholder="用户名" v-model="formData.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input class="input" placeholder="邮箱" v-model="formData.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input class="input" type="password" placeholder="密码" v-model="formData.password" @keyup.enter.native="handleRegion"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="input" type="primary" @click="handleRegion">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>     
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:{
                    username:"",
                    email:"",
                    password:""
                }
            }
        },
        methods:{
            handleRegion(){
                this.$axios.post("/user",this.formData).then(res=>{
                    if(res.code == 200){
                        this.$message.success("注册成功")
                        setTimeout(()=>{
                            this.$router.push("/index");
                        },500)                      
                    }else{
                        this.$message.error("注册失败")
                    }
                }).catch((err)=>{
                    this.$message.error("注册失败")
                })

            } 
        }
    }
</script>

<style scoped>
    .content{
        margin-top: 100px;
    }
    .text{
        background: #fff;
        width: 710px;
        height: 410px;
        border-radius: 6px;
        margin: 0 auto; 
        text-align: center;         
    }
    .newUser{
        font-size: 24px;
        font-weight: 400;
        padding: 30px 0;
        color: #333
    }
    .input{
        width: 390px;
        margin-bottom: 10px;
    }  
    .qi-container{
        min-height: 300px;
    }  
</style>