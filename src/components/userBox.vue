<template>
    <div>
        <div class="right-box">
            <div class="login-box" v-if="!userInfo.username">
                <el-form >
                    <el-form-item>
                        <el-input class="input" placeholder="邮箱" v-model="formData.email "></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input class="input" placeholder="密码" v-model="formData.password" type="password" @keyup.enter.native="handleLogin"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="input" type="primary" @click="handleLogin">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="input" @click="$router.push('/register')">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="user-msg-box" v-else>
                <div class="img-item">
                    <img :src="userInfo.avatar">
                </div>
                <div class="username">
                    {{userInfo.username}}
                </div>
                <div class="user-email">
                    邮箱地址:{{userInfo.email}}
                </div>
                <div>
                    <el-button class="logout" type="warning" @click="handleLogout">
                        退出登录
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from "vuex"
    export default {
        data() {
            return {
                formData: {
                    email: "12345@qq.com",
                    password: "aaaaa"
                },
                // userInfo:{
                //     username:"",
                //     email:"",
                //     avatar:""
                // }
                
            }
        },
        methods: {
            handleLogin() {
                this.$axios.post("/login", this.formData).then(res => {
                    this.$store.commit("CHANGE_userInfo", res.userData)
                    if (res.code == 200) {
                        this.$message.success("登录成功")
                    } else {
                        this.$message.error("11")
                    }
                }).catch(err => {
                    this.$message.error("111")
                })
            },
            handleLogout(){
                this.$axios.get("/logout").then(res=>{
                     let userInfo = {
                            avatar:"",
                            email:"",
                            username:""
                        }
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$store.commit("CHANGE_userInfo",userInfo)
                        this.$router.push("/index")                 
                    }else{
                        this.$store.commit("CHANGE_userInfo",userInfo)   
                        this.$message.info("登录状态已过期")   
                    }
                })
            }
        },
        computed:{
            ...mapState(["userInfo"])
        }
    }
</script>

<style scoped>
    .right-box {
        float: right;
        text-align: center;
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
    .img-item img{
        width: 130px;
        height: 130px;
    }
    .username{
        font-size: 22px;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .logout{
        width: 200px;
        margin-top: 20px;
    }
</style>