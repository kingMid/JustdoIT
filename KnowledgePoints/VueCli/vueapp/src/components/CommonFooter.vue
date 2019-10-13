<template>
    <div id="footer" :style="{background:$store.state.color}">
        <!-- 唯一的标识  -->
        <!-- 组件 native  -->
        <!-- $store.commit('change',{}) -->
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex';
    export default {
        data(){
            return {
                menu:[
                    {
                        title:'电影',
                        path:'/',
                        color:'red'
                    },
                    {
                        title:'音乐',
                        path:'/music',
                        color:'green'
                    },
                    {
                        title:'图书',
                        path:'/book',
                        color:'orange'
                    },
                    {
                        title:'图片',
                        path:'/photo',
                        color:'yellow'
                    }
                ]
            }
        },
        //将store 中mutation中的change方法映射出来
        methods:mapMutations(['change']),
        created(){
            this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path){
                    this.change({title:obj.title,color:obj.color})
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    #footer{
        height:1rem;
        line-height: 1rem;
        background: #f00;
        position: fixed;
        bottom: 0px;
        width:100%;
        display: flex;
        a{
            flex:1;
            text-align: center;
            color:#000;
            &.router-link-exact-active{
                color:#fff;
            }
        }
    }
    
  
</style>