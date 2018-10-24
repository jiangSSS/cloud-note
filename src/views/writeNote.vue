<template>
    <div class="layout">
        <div class="warp w1170">
            <div class="content">
                <el-form class="form" v-model="formData">
                    <div class="writeTitle">标题</div>
                    <el-form-item>
                        <el-input class="input" placeholder="测试标题" v-model="formData.title"></el-input>
                    </el-form-item>
                    <div class="writeContent">内容</div>
                    <quill-editor class="middle" v-model="formData.content" ref="myQuillEditor" :options="editorOption" @change="handleChange"></quill-editor>
                </el-form>
                <div class="category">    
                    <span class="clearfix">                                                                                                                                               
                                <span class="fll"> 分类：</span>
                                <span class="fll">
                                    <Radios :options="categories" v-model="formData.category"></Radios>
                                </span>                                                                      
                    </span>                                      
                </div>
                <el-button type="primary" @click="handleSubmit">发布笔记</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import { quillEditor, Quill } from 'vue-quill-editor'
    import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)
    import Radios from "@/components/Radios"
    export default {
        components: {
            quillEditor,Radios
        },
        data() {
            return {
                formData: {
                    title: "",
                    content: "",
                    contentText: "",
                    category: ""
                },
                categories: [],
                editorOption: {
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'img',
                            action:"https://qiniu.com",
                            response: (res) => {
                                return res.info
                            }
                        },
                        toolbar: {
                            container: container,
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                },               
            }
        },
        methods: {
            handleChange({quill, html, text }) {//内容改变事件
                console.log(text)
                this.formData.contentText = text
                this.formData.contentText = this.formData.contentText.substring(0, 200) + "..."
            },
            handleSubmit() {
                this.$axios.post("/article",this.formData).then(res => {
                    if (res.code == 200) {
                        this.$message.success("发布成功")
                        setTimeout(() => {
                            this.$router.push("/index")
                        }, 1000)
                    } else {
                        this.$message.error(res.msg)
                    }
                }).catch((err) => {
                    this.$message.error(res.msg)
                })
            },
            getCategory() {
                this.$axios.get("/category").then(res => {
                    this.categories = res.data
                })
            }
        },
        created() {
            this.getCategory()           
        }
    }
</script>
<style scoped>
    .content {
        background: #fff;
        margin-top: 30px;
        width: 100%;
        padding: 0 25px;
        border-radius: 6px;
        height: 620px;
    }

    .form {
        margin-top: 14px;
    }
    .writeTitle {
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;
        color: #333;
        padding-bottom: 5px;
        padding-top: 20px;
    }
    .writeContent {
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;
        color: #333;
        padding-bottom: 15px;
    }
    .input {
        margin-top: 10px;
    }
    .lable {
        color: #409eff;
        font-weight: 700;
        font-size: 16px;
        line-height: 3;
    }
    .category {
        color: #409eff;
        font-weight: 700;
        margin: 20px;
    }
</style>