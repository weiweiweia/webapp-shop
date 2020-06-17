<template>
  <div>
    <div class="tab">
      <!-- <span>发现好货</span>
      <span>发现优惠</span> -->
      <router-link to="/find/good" tag="span" active-class="on">发现好货</router-link>
      <router-link to="/find/price" tag="span" active-class="on">发现优惠</router-link>
    </div>
      
      <router-view></router-view>
      <h1>发现</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .tab{
    display: flex;
  }
  .tab>span{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
  }
  .tab>span.on{
    color: red;
  }
  
</style>