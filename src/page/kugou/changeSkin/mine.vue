<template>
  <div class="mine">
    <ul class="mineUL clearfix">
      <li class="mineLis fl" @click="changeImg(item)" v-for="item in option" :style="{backgroundImage:'url('+item.img+')'}">
        <div class="mask">
          <div class="maskClose"></div>
          <div class="maskText">{{item.text}}</div>
        </div>
        <div class="choosedImg" v-if="skin.skinId==item.id"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    props:['option'],
    components:{},
    computed:{
      ...mapState(['skin']),

    },
    methods:{
      changeImg:function(item){
        this.option.forEach((o)=>{
          if(o.id==item.id){
            this.skin.skinId = item.id;
            this.skin.mainSkin = item.img;
          }
        });
      },
    },
    mounted(){

    }
  }
</script>
<style scoped>
.mine{
  width: calc(100% - 36px);
  height: 100%;
  padding: 0 18px;
}
.mineUL{
  width: 100%;
  height: calc(100% - 38px);
  padding: 19px 0;
}
.mineLis{
  width: 125px;
  height: 80px;
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
  margin-right: 5px;
  background: url("/static/images/bg.png") no-repeat center;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
}
  .mineLis:nth-child(4n){
    margin-right: 0;
  }
  .mineLis:hover .mask{
    display: block;
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
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.29);
    display: none;
  }
  .maskClose{
    width: 11px;
    height: 11px;
    background: url("/static/images/close.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    cursor: pointer;
    position: absolute;
    right: 6px;
    top: 6px;
  }
  .maskText{
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
  }
</style>
