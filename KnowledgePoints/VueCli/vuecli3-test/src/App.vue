<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的</router-link>|
      <router-link to="/test">test</router-link>|
      <!-- params传参 -->
      <router-link :to="{name:'test',params:{id:123,name:'king'}}">我的params</router-link>|
      <!-- query传参 -->
      <router-link :to="{path:'/test',query:{id:123,name:'king'}}">我的query</router-link>|
      <!-- 通过路径传参 -->
      <router-link to="/test/111/basd">lj</router-link>|
      <router-link to="/root">Root</router-link>|
      <router-link to="/c">pash</router-link>
      <button @click="$router.push('/')">首页</button>
      <button @click="$router.go(-1)">上一页</button>
      <button @click="$router.go(1)">下一页</button>
      conut的值是：{{count}}
      num的值是：{{num}}
      sum 的值是：{{sum}}
      <!-- <button @click="$store.commit('add')">add</button>
      <button @click="$store.commit('reduce')">reduce</button> -->
      <button @click="add(5)">add</button>
      <button @click="reduce()">reduce</button>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
//  1 导入
//  2 components中声明
//  3template中 使用
// import CommonHeader from './components/CommonHeader';
// import HelloWorld from './components/HelloWorld';
// import CommonFooter from './components/CommonFooter';
import {mapState,mapMutations,mapGetters} from 'vuex';
export default {
  components: {
     
     
    // CommonHeader,
    // CommonFooter
    // HelloWorld
  }, computed:{
        ...mapState(['count','num']),
        ...mapGetters(['sum'])
      },
      
      methods: {
     ...mapMutations(['add','reduce']),
    go() {
      //找到指定路径
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s ease;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-active {
  transition: transform 1s ease;
}
.fade-leave-to {
  transform: translateX(100%);
}
</style>
