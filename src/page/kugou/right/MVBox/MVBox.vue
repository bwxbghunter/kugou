<template>
  <div class="MVBox">
    <div class="scrollbar" ref="scrollbar"><b ref="b"></b></div>
    <div class="nav">
      <navBar></navBar>
    </div>
    <div class="MVbody"  ref="mvBody" @mousewheel ="paperScroll($event)">
      <div class="tabBarBox" :class="{topHead:fixedNav}">
        <tabBar></tabBar>
      </div>
      <div class="MVTypeBox">
        <MVType></MVType>
      </div>
    </div>
  </div>
</template>
<script>
  import navBar from '../tool/navBar.vue'
  import tabBar from '../tool/tabBar.vue'
  import MVType from './MVType.vue'
  export default{
    data(){
      return{
        fixedNav:false,
        scrollBar:function () {},/****滚动条函数引用*****/
      }
    },
    props:[],
    components:{navBar,tabBar,MVType},
    methods:{
      paperScroll:function(e){
        if(this.$refs.b.offsetTop>0){
          this.fixedNav = true;
        }else if(this.$refs.b.offsetTop==0){
          this.fixedNav = false;
        }
      },
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.mvBody,this.$refs.scrollbar,this.$refs.b);////设置自定义滚动条/////
        setTimeout(()=>{
          this.scrollBar();
        })
      },
    },
    computed:{},
    mounted(){
      this.mouseWheel_();////设置自定义滚动条/////
    },
    watch:{

    }
  }
</script>
<style>
  .MVBox{
    width:100%;
    height:100%;
    position: relative;
  }
  .nav{
    width:100%;
    height:34px;
    border-bottom: 1px solid #F2F2F2;
  }
  .MVbody{
    width:calc(100% + 18px);
    height:calc(100% - 35px);
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
  }
  .tabBarBox{
    width:calc(100% - 20px);
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:6px;
  }
  .tabBarBox.topHead{
    position: absolute;
    top:0;
    left:0;
    background-color: #fff;
    z-index: 11;
    box-shadow: 0px 0px 1px #d7d7d7;
    transition: all 0.2s linear;
  }
  .MVTypeBox{
    width:100%;
    height:calc(100% - 56px);
    transition: all 0.2s linear;
  }
  .scrollbar{
    width:7px;
    height:calc(100% - 35px);
    position: absolute;
    border-radius: 5px;
    right:2px;
    top:35px;
    background-color:rgba(0,0,0,0)!important;
    z-index: 3;
  }
  .scrollbar b{
    display: block;
    width:100%;
    height:20px;
    border-radius: 5px;
    background-color:#D6D7D9;
    position: absolute;
    top:0;
    left:0;
    right:0;
    margin:auto;
  }
</style>
