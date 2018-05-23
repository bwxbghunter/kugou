<template>
  <div class="mainPage" @click="hideClick">
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
    <div class="contentBox" :class="{ishideLeft:ishide,rightTab:isrightTab}">
      <div class="contentLeft">
        <musicList></musicList>
      </div>
      <div class="contentRight">
        <musicClass @hideLeft="hideLeft_fn" @changeTab="changeTab_fn" @submitContribute_fn="showContribute=true"></musicClass>
      </div>
    </div>
    <div class="footBox">
      <play></play>
    </div>
    <contribute v-if="showContribute" @closeContribute="showContribute=false"></contribute>
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
  export default{
    data(){
      return{
        ishide:false,
        isrightTab:false,
        showContribute:false,//显示歌单征集令----歌单投稿
      }
    },
    props:[],
    components:{account,searchBox,handles,musicList,musicClass,play,contribute},
    methods:{
      /*********隐藏用户设置************/
      hideClick:function(e){
        let accountSet = document.getElementsByClassName('accountSet')[0];
        if(accountSet){
          if(!accountSet.contains(e.target)){
            this.public.isshowSet = false;
          }
        }
      },
      /*********侧边栏收起和展开***********/
      hideLeft_fn:function(val){
        this.ishide = val;
      },
      /*********右侧tab切换************/
      changeTab_fn:function(val){
        this.isrightTab = val;
      }
    },
    computed:{
      ...mapState(['public'])
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
  position: absolute;
  left:20px;
  /*right:0;*/
  bottom:0;
  top:0;
  margin:auto;
  background:url('/static/images/mv_img/8.jpg') no-repeat center center;
  -webkit-background-size:130% 100%;
  background-size:130% 100%;
  opacity: 0.9;
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
    transition: all 0.2s linear;
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
    transition: all 0.2s linear;
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
</style>
