<template>
    <div>
       <ul class="musicList">
            <li v-for="(obj,index) in musicList" :key="index">
                <img :src="obj.bg" alt="">
            </li>
            
        </ul>
    </div>
</template>

<script>
import axios from  'axios';
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        created(){
            axios.get('./data/musiclist.json')
            .then((res)=>{
                this.musicList = res.data.albums;
            })
            .catch((res)=>{
                alert('服务器错误');
            })
        }
        
        
    }

</script>

<style lang="scss" scoped>
.musicList{
        display: flex;
        flex-wrap:wrap;
        li{
            // flex:1;
            width:50%;
            img{
                width:100%;
                display: block;
            }
        }


    }
</style>