<template>
  <div>
      <h1>商品详情页</h1>
  </div>
</template>

<script>
export default {
    mounted(){
        // console.log(this.$route);
        console.log(this.$route.params.id);
        // console.log(this.$router);
    }
}
</script>

<style>

</style>