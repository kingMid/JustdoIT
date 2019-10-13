<template>
  <div>
    THIS is test
    <router-view></router-view>
    <router-link to="/test/test1">子路由1</router-link>
    <router-link to="/test/test2">子路由2</router-link>
    {{$route.params.id}} {{$route.params.name}}
     {{$route.query.id}} {{$route.query.name}}
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>