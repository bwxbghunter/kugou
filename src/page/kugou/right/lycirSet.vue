<template>
  <div class="lycirSet">
    <div class="setType"><span class="setTypeIcon set0"></span> <span>桌面写真</span></div>
    <div class="setType"><span class="setTypeIcon set1"></span> <span>歌词搜索</span></div>
    <div class="setType"><span class="setTypeIcon set2"></span> <span>相似歌曲</span></div>
    <div class="setType"><span class="setTypeIcon set3"></span> <span>界面设置</span></div>
    <div class="setType"><span class="setTypeIcon set4"></span> <span>选择写真</span></div>
  </div>
</template>
<scripot>

</scripot>
<style scoped>
  .lycirSet{
    width:100%;
    height:100%;
  }
  .setType{
    width:100%;
    height:35px;
    line-height:35px;
    font-size:13px;
    color: #ffffff;
    text-align: left;
    opacity:0.7;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .setType:hover{
    opacity: 1;
  }
  .setTypeIcon{
    display: inline-block;
    width:18px;
    height:18px;
    margin: 0 14px;
  }
  .set0{
    background: url("/static/images/computer.png") no-repeat center;
    -webkit-background-size:100%;
    background-size:100% 100%;
  }
  .set1{
    background: url("/static/images/search_list.png") no-repeat center;
    -webkit-background-size:100%;
    background-size:100% 100%;
  }
  .set2{
    background: url("/static/images/same.png") no-repeat center;
    -webkit-background-size:150% 94%;
    background-size:150% 94%;
  }
  .set3{
    background: url("/static/images/pre_set.png") no-repeat center;
    -webkit-background-size:100%;
    background-size:100% 100%;
  }
  .set4{
    background: url("/static/images/star_pic.png") no-repeat center;
    -webkit-background-size:100%;
    background-size:100% 100%;
  }
</style>
