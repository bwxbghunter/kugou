<template>
  <div class="navBar">
    <ul class="navBarUl">
      <li class="navBarLis" @click="choseTab(item,index)" :class="{changeLis:changeIndex==index}" v-for="(item,index) in option">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        changeIndex:0,
//        option:[{id:0,name:'MV电台'},{id:1,name:'MV推荐'},{id:2,name:'繁星MV'}]
      }
    },
    props:['option'],
    components:{},
    methods:{
      choseTab:function(item,index){
        this.changeIndex = index;
      }
    },
    computed:{},
    mounted(){}
  }
</script>
<style>
  .navBar{
    width:100%;
    height:100%;
  }
  .navBarUl{
    width:100%;
    height:34px;
    line-height:34px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
  }
  .navBarLis{
    height:100%;
    width:85px;
    font-size:14px;
    color: #777777;
    text-align: center;
    cursor: pointer;
  }
  .navBarLis:hover{
    color: #68A9EC;
  }
  .navBarLis.changeLis{
    color: #288FE7;
  }
</style>
