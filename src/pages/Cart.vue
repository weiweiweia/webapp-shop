<template>
  <div>
      <h1>购物车</h1>
  </div>
</template>

<script>
export default {
    //路由守备钩子函数。
    beforeRouteEnter(to,from,next){
        console.log(to);
        console.log(from);
        let logined = true
        if(logined){
            next()
        }else{
            next('/home')
        }
    }
}
</script>

<style>

</style>