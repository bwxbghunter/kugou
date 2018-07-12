<template>
  <div class="musicClass" :class="{hideBgc:public.choseItem=='歌词'}">
   <div class="topMusicClass clearfix">
     <div class="topm fr">
       <ul class="musicClassUl">
         <li class="musicClassLis" :class="{choseLis:choseIndex==index}" v-for="(item,index) in option" @click="choseTab(item,index)">{{item}}
         </li>
       </ul>
       <span class="bottomLine" :style="{left:(90+73*choseIndex)+'px'}"></span>
     </div>
   </div>
   <div class="bottomMusicClass">
     <!--收起左侧列表-->
     <div class="hideLeft" @click="hideLeftList"><span></span></div>
   <!--界面设置  -->
    <div class="lycBox">
      <div class="lycr">
        <lycirSet></lycirSet>
      </div>
    </div>
     <div class="tabList" >
       <songbook  v-if="public.choseItem=='乐库'"></songbook>
       <radioBox v-if="public.choseItem=='电台'"></radioBox>
       <songList v-if="public.choseItem=='歌单'" @submitContribute_="submitContribute"></songList>
       <MVBox v-if="public.choseItem=='MV'"></MVBox>
       <boradcast v-if="public.choseItem=='直播'"></boradcast>
       <KTV  v-if="public.choseItem=='KTV'"></KTV>
       <songwords  v-if="public.choseItem=='歌词'"></songwords>
       <changedata  v-if="public.choseItem=='修改资料'"></changedata>
     </div>
   </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import radioBox from './radioBox/radioBox.vue'
  import MVBox from './MVBox/MVBox.vue'
  import songList from './songList/songList.vue'
  import boradcast from './boradcast/boradcast.vue'
  import songbook from './songbook/songbook.vue'
  import KTV from './KTV/KTV.vue'
  import songwords from './songwords/songwords.vue'
  import changedata from './changeAccount/changedata.vue'
  import lycirSet from './lycirSet.vue'
  export default{
    data(){
      return{
        ishideList:false,
        option:['乐库','电台','歌单','MV','直播','KTV','歌词'],
        choseIndex:0,
      }
    },
    props:[],
    components:{lycirSet,radioBox,MVBox,songList,boradcast,songbook,KTV,songwords,changedata},
    methods:{
      /********歌单投稿************/
      submitContribute:function(){
        this.$emit('submitContribute_fn')
      },
      choseTab:function (item,index) {
        this.public.choseItem = item;
        this.public.choseIndex = index;
        if(this.public.choseItem!='歌词'){
          this.$emit('changeTab',true)
        }else{
          this.$emit('changeTab',false)
        }
      },
      hideLeftList:function(){
         this.ishideList = !this.ishideList;
         this.$emit('hideLeft',this.ishideList)
      },

    },
    computed:{
      ...mapState(['public'])
    },
    mounted(){

    },
    watch:{}
  }
</script>
<style>
  .musicClass{
    width:100%;
    height:100%;
    background-color: #ffffff;
  }
  .musicClass.hideBgc{
    background-color:transparent;
  }
  .musicClass.hideBgc .topMusicClass{
    border-bottom: 1px solid transparent;
  }
  .musicClass.hideBgc .topMusicClass .musicClassLis{
    color: #ffffff;
  }
  .topMusicClass{
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #E6E6E6;
  }
  .topm{
    width:688px;
    height:100%;
    position: relative;
  }
  .musicClassUl{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    position: relative;
  }
  .musicClassLis{
    width:73px;
    height:100%;
    text-align: center;
    line-height:40px;
    cursor: pointer;
    display: inline-block;
    font-size:16px;
    color: #333;
  }
  .musicClassLis:hover{
    color: #288FE7;
  }
  .musicClassLis.choseLis{
    color: #288FE7;
  }
  .bottomLine{
    display: inline-block;
    width:73px;
    height:2px;
    background-color: #288FE7;
    position: absolute;
    bottom:-1px;
    left:0;
    transition: all 0.1s ease;
  }
  .hideBgc .bottomLine{
    display: none;
  }
  .musicClass.hideBgc .musicClassLis.choseLis{
    color: #FBFDA2;
  }
  .musicClass.hideBgc .topMusicClass .musicClassLis:hover{
    color: #FBFDA2;
  }
  .bottomMusicClass{
    width:100%;
    height:calc(100% - 40px);
    overflow: hidden;
    position: relative;
  }
  .hideBgc .hideLeft{
    display: block;
  }
  .hideLeft{
    display: none;
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

  .hideLeft:hover{
    opacity: 1;
  }
  .hideLeft:active{
    opacity: 0.8;
  }
  .hideBgc .lycBox{
    display: block;
  }
  .lycBox{
    width:110px;
    height:195px;
    position: absolute;
    top:0;
    bottom:0;
    margin:auto;
    right:0;
    display: none;

  }
  .lycr{
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    right:-111px;
    top:0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    transition: all 0.4s linear;
  }
  .lycBox:hover .lycr{
    right: 0;
  }
  .hideBgc .tabList{
    /*display: none;*/
  }
  .tabList{
    width:100%;
    height:100%;
  }
</style>
