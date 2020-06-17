<template>
  <div id="app">
    <router-view></router-view>

    <div class="tabs">
      <router-link to="/home" tag="span" active-class="on">首页</router-link>
      <router-link to="/find" tag="span" active-class="on">发现</router-link>
      <router-link to="/cart" tag="span" active-class="on">购物车</router-link>
      <router-link to="/user" tag="span" active-class="on">我的</router-link>
      <!-- <span @click="handleClick('/home')">首页</span>
      <span @click="handleClick('/find')">发现</span>
      <span @click="handleClick('/user')">我的</span>-->
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
  },
  methods: {
    // handleClick(i){
    //   this.$router.push(i)
    // }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  position: relative;
}
#app .tabs {
  display: flex;
  position: absolute;
  bottom: 0; 
  left: 0;
  right: 0;
}
#app .tabs span {
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
  height: 80px;
  line-height: 80px;
}
#app .tabs span.on {
  color: red;
}
</style>
