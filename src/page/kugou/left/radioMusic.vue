<template>
  <div class="radioMusic">
    <div class="radioTypeIcon"></div>
    <div class="radioMusicName">
      <div class="radioName">中国风</div>
      <div class="musicName">周杰伦 - 霍元甲</div>
    </div>
    <div class="radioHandle">
      <span class="playRadio"></span>
      <span class="deleteRadio"></span>
    </div>
  </div>
</template>
<script></script>
<style scoped>
 .radioMusic{
   width:100%;
   height:80px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-flow: row nowrap;
   position: relative;
 }
  .radioMusic:hover{
    background-color: #F5F5F5;
  }
 .radioMusic:hover .radioHandle{
   display: block;
 }
  .radioTypeIcon{
    width:50px;
    height:50px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto 15px;
    background: url("/static/images/radio_hanguo.jpg") no-repeat -46px 5px;
    /*animation:loopIcon 15s infinite linear;*/
  }
  .radioMusicName{
    width:210px;
  }
  .radioName{
    font-size:14px;
    font-weight:bold;
    line-height:20px;
    color: #333;
  }
  .musicName{
    font-size:12px;
    color: #333;
    line-height:20px;
  }
  .radioHandle{
    position: absolute;
    right:15px;
    top:15px;
    width:60px;
    height:20px;
    display: none;
  }
  .radioHandle span{
    display: inline-block;
    width:20px;
    height:20px;
    cursor: pointer;
  }
  .playRadio{
    background: url("/static/images/radio_playhover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    opacity: 0.8;
  }
  .playRadio:hover,.deleteRadio:hover{
    opacity: 1;
  }
  .deleteRadio{
    background: url("/static/images/close_radio.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    opacity:0.8;
  }
  /*@keyframes loopIcon {
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }*/
</style>
