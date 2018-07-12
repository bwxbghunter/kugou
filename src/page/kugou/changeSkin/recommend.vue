<template>
  <div class="recommend">
    <div class="themeBox">
      <div class="title">主题</div>
      <div class="themeBody">
        <ul class="themeUl clearfix">
          <li class="themeLis fl" @click="chooseTheme(item)" v-for="item in theme" :style="{backgroundImage:'url('+item.img+')'}">
            <div class="choosedImg" v-if="skin.skinId==item.id"></div>
          </li>
        </ul>
      </div>
      <div class="themeFooter">
        <div class="themeBtn">更多 <span></span></div>
      </div>
    </div>
    <div class="skinBox">
      <div class="title">皮肤</div>
      <ul class="skinBoxUL clearfix">
        <li class="skinBoxLis fl" @click="chooseSkin(item)" v-for="item in skinBox" :style="{backgroundImage:'url('+item.img+')'}">
          <div class="mask">
            <div class="maskText">{{item.text}}</div>
          </div>
          <div class="choosedImg" v-if="skin.skinId==item.id"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    props:['skinBox','theme'],
    components:{},
    computed:{
      ...mapState(['skin']),},
    methods:{
      chooseSkin:function(item){
        this.skinBox.forEach((o)=>{
          if(o.id==item.id){
            this.skin.skinId = item.id;
            this.skin.mainSkin = item.img;
          }
        })
      },
      chooseTheme:function(item){
        this.theme.forEach((o)=>{
          if(o.id==item.id){
            this.skin.skinId = item.id;
            this.skin.mainSkin = item.img;
          }
        })
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
  .recommend{
    width: calc(100% - 36px);
    height: 100%;
    padding: 0 18px;
  }
  .themeBox{
    width: 100%;
    height: 140px;
  }
  .title{
    width: 100%;
    height: 35px;
    color: #999999;
    font-size: 14px;
    line-height: 35px;
  }
  .themeBody{
    width: 100%;
    height: calc(100% - 62px);
  }
  .themeUl{
    width: 100%;
    height: 100%;
  }
  .themeLis{
    width: 168px;
    height: 80px;
    background-color: #f00;
    margin-right: 8px;
    margin-bottom: 5px;
    background: url("/static/images/bg.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;
  }
  .themeLis:nth-child(3n){
    margin-right: 0;
  }
  .themeFooter{
    width: 100%;
    height: 18px;
    border-top: 1px solid #c5c5c5;
    margin-top: 8px;
    position: relative;
  }
  .themeBtn{
    width: 78px;
    height: 20px;
    border-bottom: 1px solid #c5c5c5;
    border-right: 1px solid #c5c5c5;
    border-left: 1px solid #c5c5c5;
    text-align: center;
    line-height: 20px;
    color: #c5c5c5;
    cursor: pointer;
    border-radius: 3px;
    font-size: 12px;
    position: absolute;
    right: 0;
    top: -2px;
    z-index: 1;
    background-color: #fff;
  }
  .themeBtn span{
    display: inline-block;
    width: 14px;
    height: 12px;
    background: url("/static/images/arrow-down.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .skinBox{
    width: 100%;
    height: calc(100% - 140px);
  }
  .skinBoxLis{
    width: 125px;
    height: 80px;
    position: relative;
    cursor: pointer;
    margin-bottom: 5px;
    margin-right: 6px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .skinBoxLis:nth-child(4n){
    margin-right: 0;
  }
  .skinBoxLis:hover .mask{
    display: block;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.29);
    display: none;
  }
  .maskText{
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
  }
  .choosedImg{
    position: absolute;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.45) url("/static/images/tick.png") no-repeat center;
    -webkit-background-size: 90% 90%;
    background-size: 90% 90%;
  }
</style>
