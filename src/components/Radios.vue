<template>
    <div class="radios">
        <label class="radios-label fll" v-for="item in options" :key="item._id">           
            <input type="radio" v-model="currentValue" class="radios-item" :value="item._id">
            <div class="radios-title-warp">
                <span class="radios-title">{{item.name}}</span>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        props:{
            options:{
                type:Array
            },
            value:String
        },
        data(){
            return{
                currentValue:this.value
            }
        },
        watch:{
            value(val){
                this.currentValue = val
            },
            currentValue(val){
                this.$emit("input",val)
                this.$emit("change",val)
            }
        }
    }
</script>

<style scoped>
    .radios-item{
        display: none;
    }
    .radios-title-warp{
        padding: 10px 15px;
        font-size: 12px;
        color: #444;
        font-weight: 400;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        margin-left: 10px;

    }
    .radios-item:checked + .radios-title-warp{
        color: #fff;
        background: #409eff;
        margin-left: 10px;
    }

</style>