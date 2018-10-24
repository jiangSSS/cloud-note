<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import Layout from "@/components/Layout"
  export default {
    component:{
      // Layout
    }

}
</script>

<style>
  body{
    background: #f1f1f1;
  }
  .w1170{
    width: 1170px;
    margin: 0 auto;
  }
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  .mb30{
    margin-bottom: 30px;
  }
  .clearfix::after{
    content: "";
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
