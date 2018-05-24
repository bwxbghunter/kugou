<template>
  <div class="tabBar">
    <ul>
      <li :class="{chagngeLi:letterType==index}" v-for="(item,index) in option" @click="changeTab(item,index)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
      }
    },
    props:['letterType','option'],
    components:{},
    methods:{
      changeTab:function(item,index){
//        console.log(index,'******',this.letterType);
        this.$emit('changeIndex',index);
      }
    },
    computed:{},
    mounted(){}
  }
</script>
<style scoped>
  .tabBar{
    width:648px;
    height:30px;
    margin:auto;
  }
  .tabBar ul{
    width:100%;
    height:100%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4F4F4;
  }
  .tabBar ul li{
    width:60px;
    height:100%;
    line-height:30px;
    text-align: center;
    font-size:14px;
    color: #555555;
    cursor: pointer;
  }
  .tabBar ul li.chagngeLi{
    color: #288FE7;
    font-weight:bold;
  }
</style>
