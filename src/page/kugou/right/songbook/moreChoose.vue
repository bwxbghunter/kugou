<template>
  <div class="moreMoudle">
   <div class="titleBox clearfix">
     <span class="leftBorder fl"></span>
     <div class="title fl">个性化推荐</div>
     <div class="details fl">根据你的喜好生成，多收藏下载猜的更准</div>
     <div class="moreThan fr">更多</div>
   </div>
    <div class="moreBody">
      <div class="singleMore">
        <div class="showView"></div>
        <div class="viewText">每日歌曲推荐</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    props:[],
    components:{},
    computed:{},
    methods:{}
  }
</script>
<style scoped>
  .moreMoudle{
    width: 100%;
    height: 100%;
  }
  .titleBox{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .leftBorder{
    width: 2px;
    height: 20px;
    margin-top: 10px;
    background-color: #288FE7;
    margin-right: 5px;
  }
  .title{
    font-size: 18px;
    color: #333;
  }
  .details,.moreThan{
    font-size: 13px;
    color: #888888;
    margin-left: 10px;
  }
  .moreThan{
    cursor: pointer;
  }
  .moreBody{
    width: 100%;
    height: calc(100% - 40px);
  }
  .singleMore{
    width: 150px;
    height: 190px;
  }
  .showView{
    width: 100%;
    height: 150px;
    background-color: #cccccc;
  }
  .viewText{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #333333;
    font-size: 14px;
    cursor: pointer;
  }
  .viewText:hover{
    color: #288FE7;
  }
</style>
