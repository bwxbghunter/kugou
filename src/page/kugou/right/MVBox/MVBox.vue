<template>
  <div class="MVBox">
    <div class="scrollbar1" ref="scrollbar"><b ref="b"></b></div>
    <div class="nav">
      <navBar></navBar>
    </div>
    <div class="tabBarBox" :class="{topHead:fixedNav}">
      <tabBar @changeIndex="changeIndex" :letterType="letterType"></tabBar>
    </div>
    <div class="MVbody"  @scroll="scrollCindex" ref="scrllTops">
      <div class="MVTypeBox" >
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
        letterType:0,
        anniTime:'',
        fixedNav:false,
        scrollBar:function () {},/****滚动条函数引用*****/
      }
    },
    props:[],
    components:{navBar,tabBar,MVType},
    methods:{
      scrollCindex:function () {/***设置当前索引***/
        let scrllTops=this.$refs.scrllTops;
        if(scrllTops.scrollTop>0){
            this.fixedNav = true
        }else{
          this.fixedNav = false
        }
        let ul=document.querySelector(".MVType").children;
        for(let i=ul.length-1;i>-1;i--){
          if(ul[i].offsetTop<=scrllTops.scrollTop+60){
            this.letterType = i;
//            console.log(ul[i].offsetTop,'&&&&&',scrllTops.scrollTop+4);
            return false;
          }
        }
      },
      anniTop:function (c,t) {/****缓动函数*****/
      let numc=c.scrollTop;
        let ot=t.offsetTop-55;
        let cn=(ot-numc)/5;
        c.scrollTop=numc+cn;
        if(Math.abs(cn)<1 || numc==c.scrollTop){
          clearInterval(this.anniTime);
        }
      },
      setScroTop:function (c,t) {/****设置定时器控制缓动函数*****/
        clearInterval(this.anniTime);
        this.anniTime=setInterval(()=>{
          this.anniTop(c,t);
        },30);
      },

      /**************选中tab索引*****************/
      changeIndex:function(i){
        let scrllTops=this.$refs.scrllTops;
        let ul=document.querySelector(".MVType").children[i];
//        this.letterType = i;
        scrllTops.scrollTop=ul.offsetTop-55;
        //this.setScroTop(scrllTops,ul); // 加入缓动动画调次函数-注释上面一句代码
      },
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.scrllTops,this.$refs.scrollbar,this.$refs.b);////设置自定义滚动条/////
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
    width:calc(100% - 9px);
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:6px;
    background-color: #fff;
  }
  .tabBarBox.topHead{
    position: absolute;
    top:35px;
    left:0;
    background-color: #fff;
    z-index: 11;
    box-shadow: 0px 0px 1px #eae8e8;
    /*transition: all 0.2s ease;*/
  }
  .MVTypeBox{
    width:100%;
    height:calc(100% - 56px);
    /*transition: all 0.2s ease;*/
  }
  .scrollbar1{
    width:7px;
    height:calc(100% - 35px);
    position: absolute;
    border-radius: 5px;
    right:2px;
    top:35px;
    background-color:rgba(0,0,0,0)!important;
    z-index: 3;
  }
  .scrollbar1 b{
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
