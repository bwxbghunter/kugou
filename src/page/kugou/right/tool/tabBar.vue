<template>
  <div class="tabBar">
    <ul>
      <li :class="{chagngeLi:chosedIndex==index}" v-for="(item,index) in option" @click="changeTab(item,index)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        chosedIndex:0,
        option:[
          {id:0,name:'热门'},
          {id:1,name:'儿童'},
          {id:2,name:'诱惑'},
          {id:3,name:'场景'},
          {id:4,name:'主题'},
          {id:5,name:'现场'},
          {id:6,name:'影视'},
          {id:7,name:'舞蹈'},
          {id:8,name:'歌手'},
          {id:9,name:'语言'},
        ]
      }
    },
    props:[],
    components:{},
    methods:{
      changeTab:function(item,index){
        this.chosedIndex = index;
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
