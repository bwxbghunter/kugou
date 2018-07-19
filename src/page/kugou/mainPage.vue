<template>
  <div class="mainPage"  @mousedown.stop="moveDown">
    <div class="headBox">
      <div class="leftHead"><account></account></div>
      <div class="rightHead">
        <div class="rightHeadSearch">
         <searchBox></searchBox>
        </div>
        <div class="rightHeadClose">
          <handles></handles>
        </div>
      </div>
    </div>
    <div class="contentBox" :class="{ishideLeft:ishide&&!isrightTab,rightTab:isrightTab}">
      <div class="contentLeft" :style="{backgroundColor:valueRgab}" :class="{borderRnone:public.choseItem=='歌词'}">
        <musicList :locality="locality"></musicList>
      </div>
      <div class="contentRight">
        <!--收起左侧列表-->
        <div class="hideLeft" @click="hideLeftList"><span></span></div>
        <musicClass @changeTab="changeTab_fn" @submitContribute_fn="showContribute=true"></musicClass>
      </div>
    </div>
    <div class="footBox">
      <play></play>
    </div>
    <contribute v-if="showContribute" @closeContribute="showContribute=false"></contribute>
    <!--换肤-->
    <div class="showSkin" v-show="skin.showPage">
      <changeSkin ></changeSkin>
    </div>
    <!--设置主菜单-->
    <div class="showMainSet" v-show="public.showSet">
      <changeSet></changeSet>
    </div>
    <img class="skinMainPage" :style="{background:imgValue,opacity:skin.skinCurrent}">
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import account from './head/account.vue'
  import searchBox from './head/searchBox.vue'
  import handles from './head/handles.vue'
  import musicList from './left/musicList.vue'
  import musicClass from './right/musicClass.vue'
  import play from './foot/play.vue'
  import contribute from './right/songList/contribute.vue'
  import changeSkin from './changeSkin/changeSkin'
  import changeSet from './changeSet/mainSet'
  export default{
    data(){
      return{
        ishide:false,
        isrightTab:false,
        showContribute:false,//显示歌单征集令----歌单投稿
        downX:0,            // 鼠标按下时的横坐标距离
        downY:0,            // 鼠标按下时纵坐标距离
        dragDom:'',         // 获取拖动的元素
        locality:[
          {
            list_name:'默认列表',
            list_length:4,
            list_id:0,
            data_list:[
              // 不二小倩 - 大花轿 (Live).mp3
              {
                name:'不二小倩 - 大花轿 (Live)',
                img:'/static/images/mv_img/37.jpg',
                src:'/static/audios/不二小倩 - 大花轿 (Live).mp3'
              },
              {
                name:'云朵 - 我的楼兰 (DJ沫沫版)',
                img:'/static/images/mv_img/16.jpg',
                src:'/static/audios/云朵 - 我的楼兰 (DJ沫沫版).mp3'
              },
              {
                name:'格子兮 - 西塘有雨',
                img:'/static/images/mv_img/10.jpg',
                src:'/static/audios/格子兮 - 西塘有雨.flac'
              },
              {
                name:'时砂 - 解锁',
                img:'/static/images/mv_img/8.jpg',
                src:'/static/audios/时砂 - 解锁.mp3'
              },
              {
                name:'SISTAR - 바빠 (Bad Boy 很忙)',
                img:'/static/images/mv_img/2.jpg',
                src:'/static/audios/SISTAR - 바빠 (Bad Boy 很忙).flac'
              }
            ]
          },
          {
            list_name:'每日歌曲推荐',
            list_length:3,
            list_id:1,
            data_list:[
              {
                name:'云朵 - 我的楼兰 (DJ沫沫版)',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/云朵 - 我的楼兰 (DJ沫沫版).mp3'
              },
              {
                name:'格子兮 - 西塘有雨',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/格子兮 - 西塘有雨.flac'
              },
              {
                name:'时砂 - 解锁',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/时砂 - 解锁.mp3'
              }
            ]
          },
          {
            list_name:'最近播放',
            list_length:3,
            list_id:2,
            data_list:[
              {
                name:'云朵 - 我的楼兰 (DJ沫沫版)',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/云朵 - 我的楼兰 (DJ沫沫版).mp3'
              },
              {
                name:'格子兮 - 西塘有雨',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/格子兮 - 西塘有雨.flac'
              },
              {
                name:'时砂 - 解锁',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/时砂 - 解锁.mp3'
              }
            ]
          }
        ],
      }
    },
    props:[],
    components:{account,searchBox,handles,musicList,musicClass,play,contribute,changeSkin,changeSet},
    methods:{
      /*********隐藏用户设置************/
      hideClick:function(e){
        this.public.showSet = false;
        let accountSet = document.getElementsByClassName('accountSet')[0];
        if(accountSet){
          if(!accountSet.contains(e.target)){
            this.public.isshowSet = false;
          }
        }
      },
      hideLeftList:function(){
        this.ishide = !this.ishide;
      },
      /*********右侧tab切换************/
      changeTab_fn:function(val){
        this.isrightTab = val;
      },
      // 将十六进制转为rgba格式
      colorRgb:function(color,value) {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var sColor = color.toLowerCase();
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",")+ ','+value+ ")";
      } else {
        return sColor;
      }
    },
      // 拖动----鼠标按下
      moveDown:function(e){
        this.hideClick(e);
        let drag = e.currentTarget;
        this.dragDom = drag;
        let tag = e||window.event;
        this.downX = tag.clientX - drag.offsetLeft;
        this.downY = tag.clientY - drag.offsetTop;
        document.addEventListener('mousemove',this.moveMove);
        document.addEventListener('mouseup',this.moveUp);
      },
      moveMove:function(e){
        let tag = e|| window.event;
        let left = tag.clientX - this.downX;
        let top = tag.clientY - this.downY;
        if(left<0){
          left = 0;
        }else if(left>window.innerWidth - this.dragDom.offsetWidth){
          left = window.innerWidth - this.dragDom.offsetWidth;
        }
        if(top<0){
          top = 0;
        }else if(top>window.innerHeight - this.dragDom.offsetHeight){
          top = window.innerHeight - this.dragDom.offsetHeight;
        }
        this.dragDom.style.left = left + 'px';
        this.dragDom.style.top = top +'px';
      },
      moveUp:function(){
        document.removeEventListener('mousemove',this.moveMove);
        document.removeEventListener('mouseup',this.moveUp);
      }
    },
    computed:{
      ...mapState(['public','skin']),
      valueRgab:function(){
        return  this.colorRgb('#ffffff',this.skin.listCurrent);
      },
      imgValue:function(){
        if(this.skin.mainSkin.indexOf('#')>-1){
          return this.colorRgb(this.skin.mainSkin,this.skin.skinCurrent);
        }else{
          return 'url('+this.skin.mainSkin+')'+'no-repeat center 100%';
        }
      },
    },
    mounted(){},
    watch:{}
  }
</script>
<style>
.mainPage{
  width:1000px;
  height:760px;
  min-width: 1000px;
  min-height: 740px;
  position: fixed;
  /*left:0;*/
  /*right:0;*/
  /*bottom:0;*/
  /*top:0;*/
  margin:auto;
}
.skinMainPage{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background:url('/static/images/bg.png') no-repeat center center;
  -webkit-background-size:auto 100% !important;
  background-size:auto 100% !important;
}
  .headBox{
    width:100%;
    height:50px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .leftHead{
    width:3.12rem;
    min-width: 312px;
    height:100%;
    min-height: 50px;
  }
  .rightHead{
    width:calc(100% - 3.12rem);
    min-width:688px;
    height:100%;
    min-height:50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .contentBox{
    width:100%;
    height:calc(100% - 115px);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
    position: relative;
    overflow: hidden;
  }
  .contentLeft{
    width:311px;
    height:100%;
    background-color: #fff;
    border-right:1px solid #E6E6E6;
    overflow: hidden;
    position: absolute;
    left:0;
    top:0;
    opacity: 1;
    transition: all 0.2s ease;
  }
  .borderRnone{
    border-right: none;
  }
  .contentBox.ishideLeft .contentLeft{
    left:-312px;
    opacity: 0;
  }
  .contentBox.ishideLeft .contentRight{
    left:0;
    width:100%;
  }
  .contentRight{
    width:calc(100% - 312px);
    height:100%;
    position: absolute;
    left:312px;
    /*transition: all 0.2s linear;*/
  }
.hideLeft{
  display: block;
  width:15px;
  height:54px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  left:0;
  top:0;
  bottom:0;
  right:auto;
  margin:auto;
  cursor: pointer;
  opacity: 0.8;
  overflow: hidden;
  z-index: 1;
}
.hideLeft span{
  width:15px;
  height:100%;
  display: inline-block;
  background: rgba(249, 249, 249, 0.65) url("/static/images/hide_list.png") no-repeat 0px center;
  -webkit-background-size:18px 25px;
  background-size:18px 25px;
  transform: rotate(180deg);
}

.rightTab .hideLeft{
  display: none;
}

.hideLeft:hover{
  opacity: 1;
}
.hideLeft:active{
  opacity: 0.8;
}


  .footBox{
    height: 65px;
    width:100%;
  }
  .rightHeadSearch{
    width:calc(100% - 120px);
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .rightHeadClose{
    width:120px;
    min-width:120px;
    height:100%;
  }
 /*左右结构收起和展开 */
.ishideLeft .hideLeft span{
  transform: rotate(0deg);
}

  /*换肤*/
  .showSkin{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.11);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*设置*/
  .showMainSet{
    width: 184px;
    height:485px;
    border: 1px solid #CECECE;
    position: absolute;
    right: -25px;
    top: 45px;
    background-color: #fff;
  }
</style>
