<template>
 <div class="play">
  <div class="prebtn" @click="music.changeSong(-1)"></div>
  <div class="pausebtn" :class="{playbtn:music.status}" @click="playMusic"></div>
  <div class="nextbtn" @click="music.changeSong(1)"></div>
  <div class="progressBox">
    <div class="musicName clearfix">
      <div class="standard">标准 <span class="trangle"></span> </div>
      <div class="musicStyle">{{music.music_name}}</div>
      <div class="musicTime">{{music.music_time}}/{{music.music_duration}}</div>
    </div>
    <div class="slider">
      <songDrag></songDrag>
      <!--<div class="sliderBg" ref="sliderbg" @mousedown="mouseDown($event)">
        <span class="barBg" :style="{left:circleLeft}"></span>
        <span class="circle" :style="{left:circleLeft}" ref="circle"></span>
      </div>-->
    </div>
  </div>
   <div class="collect"></div>
   <div class="download"></div>
   <div class="more"></div>
   <div class="playType"></div>
   <div class="volume"></div>
   <div class="sound"><span></span> 低音</div>
   <div class="lyric">词</div>
   <div class="discuss"></div>
   <div class="playQueue">
     <span class="queueIcon"></span>
     <span class="queueFont">883</span>
   </div>
 </div>
</template>
<script>
  import {mapState} from 'vuex'
  import songDrag from '../right/tool/songDrag'
  export default{
    data(){
      return{
        isbtn:false,// 播放图标显示状态
      }
    },
    props:['option'],
    components:{songDrag},
    methods:{
      playMusic:function(){
        if(this.music.status){
          this.music.pauseSong();
        }else{
          this.music.playSong();
        }
      },

    },
    computed:{
      ...mapState(['music']),
    },
    mounted(){
    },
    watch:{
    }
  }
</script>
<style scoped>
  .play{
    width:100%;
    height:100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
  }
  .prebtn,.nextbtn{
    width:35px;
    height:35px;
    background: url("/static/images/pre.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-left:18px;
    cursor: pointer;
    opacity:0.85;
  }
  .prebtn:hover{
    opacity:1;
  }
  .nextbtn{
   transform: rotate(180deg);
    margin-right:18px;
    margin-left:0;
  }
  .nextbtn:hover{
    opacity:1;
  }
  .pausebtn.playbtn{
    width:40px;
    height:40px;
    background: url("/static/images/play.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    opacity:0.85;
    margin-left:20px;
    margin-right:20px;
    cursor: pointer;
  }
  .pausebtn.playbtn:hover,.pausebtn:hover{
    opacity: 1;
  }
  .pausebtn{
    width:40px;
    height:40px;
    background: url("/static/images/pause.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    opacity:0.85;
    margin-left:20px;
    margin-right:20px;
    cursor: pointer;
  }
  .progressBox{
    width:370px;
    height:100%;
    margin-left:18px;
    margin-right:18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    overflow: hidden;
  }
  .musicName{
    width:100%;
    height:25px;
    margin-bottom:10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    color: #ffffff;
    position: relative;
  }
  .standard{
    width:48px;
    height:18px;
    border-radius: 18px;
    border: 1px solid #fff;
    text-align: left;
    text-indent: 5px;
    line-height:18px;
    font-size:12px;
    position: relative;
    cursor: pointer;
  }
  .trangle{
    position: absolute;
    top:2px;
    margin:auto;
    right:5px;
    width:0;
    height:0;
    border-width:4px;
    border-style:solid;
    border-color: transparent transparent  #fff transparent;
  }
  .musicStyle{
    width:190px;
    height:100%;
    line-height:25px;
    font-size:14px;
    text-align: left;
    overflow: hidden;
    margin-left:18px;
  }
  .musicTime{
    width:100px;
    height:100%;
    line-height:25px;
    font-size:12px;
    text-align: right;
    position: absolute;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  .slider{
    width:100%;
    height:3px;
    background-color: #80ACD2;
    opacity:0.88;
  }

  .collect{
    width:18px;
    height:19px;
    background: url("/static/images/love.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    margin-left:18px;
  }
  .download{
    width:19px;
    height:17px;
    background: url("/static/images/download_this1.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    margin-left:18px;
    opacity: 1;
  }
  .more{
    width:16px;
    height:16px;
    background: url("/static/images/more_foot.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    margin-left:18px;
    opacity: 1;
  }
  .playType{
    width:20px;
    height:20px;
    background: url("/static/images/listforEach.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    margin-left:18px;
    opacity: 1;
  }
  .volume{
    width:20px;
    height:20px;
    background: url("/static/images/close_vioce.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    margin-left:18px;
    opacity: 1;
  }
  .sound{
    width:48px;
    height:18px;
    border: 1px solid #fff;
    text-align: left;
    line-height:20px;
    border-radius: 20px;
    font-size:12px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    margin-left:18px;
    cursor: pointer;
  }
  .sound span{
    display: inline-block;
    width:8px;
    height:8px;
    border-radius: 50%;
    background-color: #21ED21;
    margin:0 4px;
  }
  .lyric{
    width:20px;
    height:18px;
    font-size:17px;
    color: #ffffff;
    font-weight:bold;
    line-height:13px;
    text-align: center;
    margin-left:18px;
    opacity: 0.8;
    cursor: pointer;
  }
  .discuss{
    width:17px;
    height:17px;
    background: url("/static/images/discuss.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    margin-left:18px;
    opacity: 1;
  }
  .playQueue{
    width:55px;
    height:20px;
    font-size:14px;
    color: #ffffff;
    margin-left:18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    cursor: pointer;
  }
  .queueIcon{
    display: inline-block;
    width:20px;
    height:20px;
    background: url("/static/images/list_foot.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:5px;
  }
</style>
