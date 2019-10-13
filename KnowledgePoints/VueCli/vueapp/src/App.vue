<template>
  <div id="app">
   <router-view></router-view>
     <common-footer></common-footer>
  </div>
</template>
<script>
    // 1 commonHeader组件 import 
    // 2 components声明组件
  
    import CommonFooter from './components/CommonFooter';
    export default {
        components:{
          
        CommonFooter
         
        }
    }


</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>



