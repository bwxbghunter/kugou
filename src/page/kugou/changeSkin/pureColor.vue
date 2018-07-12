<template>
  <div class="pureColor">
    <ul class="pureUl clearfix">
      <li class="pureLis fl" @mouseover="changeColorOver(item)" @mouseout="changeColorOut" @click="changeColor(item)" v-for="item in option" :style="{backgroundColor: item.color}" :key="item.id">
        <span></span>
        <div class="choosedImg" v-if="skin.skinId == item.id"></div>
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
      // 鼠标选中
      changeColor:function(item){
        this.option.forEach((o)=>{
          if(o.id==item.id){
            this.skin.skinId = item.id;
            this.skin.mainSkin = item.color;
          }
        });
      },
      // 鼠标悬浮
      changeColorOver:function(item){
        this.option.forEach((o)=>{
          if(o.id==item.id){
            this.skin.mainSkin = item.color;
          }
        });
      },
      // 鼠标移出
      changeColorOut:function(){
        this.option.forEach((o)=>{
          if(o.id==this.skin.skinId){
            this.skin.mainSkin = o.color;
          }
        });
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
.pureColor{
  width: calc(100% - 36px);
  height: 100%;
  padding: 0 18px;
}
  .pureUl{
    width: 100%;
    height: calc(100% - 38px);
    padding: 19px 0;
  }
  .pureLis{
    width: 60px;
    height: 34px;
    background-color: #f00;
    position: relative;
    cursor: pointer;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  .pureLis:nth-child(8n){
    margin-right: 0;
  }
  .pureLis:hover span{
    display: block;
    width: 54px;
    height: 30px;
    border: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
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
  transform: scale(0.9);
}
</style>
