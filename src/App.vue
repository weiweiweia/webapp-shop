<template>
  <div id="app">
    <h1>2001</h1>
    <router-view></router-view>

    <div class="tabs">
      <router-link to="/home" tag="span" active-class="on">首页</router-link>
      <router-link to="/find" tag="span" active-class="on">发现</router-link>
      <router-link to="/user" tag="span" active-class="on">我的</router-link>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
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
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 80px;
}
.tabs span.on {
  color: red;
}
.box {
  position: absolute;
  bottom: 120px;
  right: 0;
}
.box1 {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
