<template>
  <div class="commonList" >
    <ul class="commonListUl">
      <li class="commonListLisType" v-show="titleAry.text1!=''">
        <span :class="{chosedL:choseIndex==0}" @click="choseTab(0)">{{titleAry.text1||''}}</span>
        <span :class="{chosedL:choseIndex==1}" @click="choseTab(1)">{{titleAry.text2||''}}</span>
      </li>
      <li class="commonListLis" v-for="(item,index) in option" >
        <div class="lisTitle" @click="spread_fn(item.list_id)">
          <musicTypeBox :option="item" v-if="isradio" :itemId="itemId"></musicTypeBox>
          <radioMusic v-if="!isradio"></radioMusic>
        </div>
        <definiteMusic v-show="itemId==item.list_id" :option="item.data_list"></definiteMusic>
      </li>
    </ul>
  </div>
</template>
<script>
  import musicTypeBox from './musicTypeBox.vue'
  import radioMusic from './radioMusic.vue'
  import definiteMusic from './definiteMusic.vue'
export default{
  data(){
    return{
      choseIndex:0,
      showList:false,
      itemId:0,
    }
  },
  props:['option','titleAry','isradio'],
  components:{musicTypeBox,radioMusic,definiteMusic},
  methods:{
    /***************选择类型Tab*******************/
    choseTab:function(val){
      this.choseIndex = val;
    },
    /***************展开和收起音乐列表****************/
    spread_fn:function(id){
      if(this.itemId !=id){
        this.itemId = id;
      }else{
        this.itemId = -1;
      }
    }
  },
  computed:{},
  mounted(){},
  watch:{}
}
</script>
<style>
  .commonList{
    width:100%;
    height:100%;
  }
  .commonListUl{
    width:100%;
    height:100%;
  }
  .commonListLis{
    border-bottom: 1px solid #e6e6e6;
  }
  .lisTitle{
    width:100%;
    height:auto;
  }
  .commonListLisType{
    width:100%;
    height:34px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .commonListLisType span{
    width:50%;
    text-align: center;
    line-height:34px;
    font-size:14px;
    color: #333;
    cursor: pointer;
  }
  .commonListLisType span.chosedL{
    color: #3B99E9;
  }
</style>
