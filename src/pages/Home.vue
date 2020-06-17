<template>
  <div>
    <h1>首页</h1>
    <div class="list">
      <div v-for="item in goods" :key="item.id" @click="skip(item.id)" :class="{on:actived==item.id}">
        <span>{{item.name}}</span>
        <span>-</span>
        <span>{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        { id: 1, name: "笔记本", price: "5000" },
        { id: 2, name: "鼠标", price: "100" },
        { id: 3, name: "键盘", price: "300" },
        { id: 4, name: "耳机", price: "200" }
      ],
      //被点击的元素下标
      actived:1
    };
  },
  methods:{
    skip(id){
      // console.log(idx);
      this.actived = id
      // console.log(this.$router);
      // console.log(this.$route);
      this.$router.push('/detail/'+id)
    }
  }
};
</script>

<style lang="css" scored>
.list{
  display: flex;
}
.list>div{
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
}
.list>div.on{
  color: #fff;
  background: #ccc;
}
</style>