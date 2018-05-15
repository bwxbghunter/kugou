<template>
  <div class="definiteMusicBox">
    <ul class="musicListUl">
      <li class="musicListLis" v-for="(item,index) in option">
        <singleMusic :index="index" :option="item" ></singleMusic>
      </li>
    </ul>
  </div>
</template>
<script>
  import singleMusic from './singleMusic.vue'
  export default{
    data(){
      return{
      }
    },
    props:['option'],
    components:{singleMusic},
    methods:{

    },
    computed:{},
    mounted(){},
    watch:{}
  }
</script>
<style scoped>
  .definiteMusicBox{
    width:100%;
    height:auto;
  }
  .musicListUl{
    width:100%;
    height:auto;
  }
  .musicListLis{
    width:100%;
    min-height:30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    font-size:12px;
    color: #333;
    line-height:30px;
    text-align: left;
  }


</style>
