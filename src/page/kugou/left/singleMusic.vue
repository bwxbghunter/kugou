<template>
  <div class="singleMusicBox" :class="{lisBg:musicIndex == index}" @dblclick="playMusic">
    <span class="addMusic"></span>
    <div class="musicPH">
      <div class="musicP"  v-show="musicIndex != index"><span>{{option.name}}</span></div>
      <div class="musicH"  v-show="musicIndex == index">
        <!--<singleMusic :option="item" ></singleMusic>-->
        <div class="singleMusic">
          <div class="imgPic"><img :src="option.img" alt=""></div>
          <div class="musicA">
            <div class="musicN">{{option.name}}</div>
            <div class="musicN">
              <audio :src="option.src" ref="audio" style="visibility: hidden"></audio>
              <span class="musicTime">{{music.music_time}}/{{music.music_duration}}</span>
              <span class="muDown" title="下载"></span>
              <span class="muMv" title="观看MV"></span>
              <span class="muLove" title="我喜欢"></span>
              <span class="muDelete" title="删除"></span>
              <span class="muMore" title="更多"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        musicIndex:-1,
      }
    },
    props:['option','index'],
    components:{},
    methods:{
      /************播放音乐*****************/
      playMusic:function(){
        this.musicIndex = this.index;
        /*if(this.music.status){
          this.music.play_fn();
        }else{
          this.music.play_fn();
        }*/
//        this.music.play_fn();
        this.audio_fn();
      },
      audio_fn:function(){
        let audio = this.$refs.audio;
        this.music.status = audio.paused;
        if(audio.paused){
          audio.play()
//          this.music.play_fn= audio.play;
        }else{
          audio.pause()
//          this.music.pause_fn=audio.pause;
        }
        let dt,cur,ss,dur;
        //获取播放总时长
        dt = audio.duration;
        cur = parseFloat((dt/60+'').split('.')[0])<10?'0'+(dt/60+'').split('.')[0]:(dt/60+'').split('.')[0];
        ss = parseInt((dt%60+'').substr(0,2))<10?'0'+parseInt((dt%60+'').substr(0,2)):parseInt((dt%60+'').substr(0,2));
        dur = cur+':'+ss;
        //获取播放时长
        audio.addEventListener("timeupdate",()=>{
          let ct =parseInt(audio.currentTime);
          if(ct<10){
              ct = '00:'+'0'+ct;
          }else if(ct<60){
              ct = '00:'+ct;
          }else if(ct>=60){
              let se = (ct%60).toFixed(0)<10?'0'+(ct%60).toFixed(0):(ct%60).toFixed(0);
              ct ='0'+parseInt(ct/60)+':'+se;
          }
          this.music.music_time = ct;
        });
        audio.addEventListener("loadedmetadata",function(){
          this.play();
        });
        this.music.music_name = this.option.name;
        this.music.music_duration = dur;
        this.music.music_bar = dt;
      },
    },
    computed:{...mapState(['music'])},
    mounted(){
      this.music.play_fn= this.audio_fn;
    },
    watch:{}
  }
</script>
<style>
  .singleMusicBox{
    width:100%;
    height:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow:row nowrap ;
  }
  .singleMusic{
    width:100%;
    height:52px;
    background-color: #EBEBEB;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .imgPic{
    width:52px;
    height:52px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
  }
  .imgPic img{
    width:120%;
    height:120%;
  }
  .musicA{
    width:calc(100% - 62px);
    height:100%;
    margin-left:10px;
  }
  .musicN{
    width:100%;
    height:26px;
    line-height:26px;
    font-size:12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .musicPH{
    width:calc(100% - 20px);
    height:auto;
  }
  .musicP{
    width:100%;
    line-height:30px;
    font-size:12px;
    height:30px;
  }
  .addMusic{
    display: inline-block;
    cursor: pointer;
    visibility: hidden;
    width:20px;
    height:20px;
    background: url("/static/images/add.png") no-repeat center;
    -webkit-background-size:12px 12px;
    background-size:12px 12px;
  }
  .musicH{
    width:100%;
    height:auto;
  }
  .singleMusicBox.lisBg{
    background-color: #EBEBEB;
  }
  .singleMusicBox.lisBg:hover{
    background: #EBEBEB;
  }
  .singleMusicBox:hover{
    background-color: #F5F5F5;
  }
  .singleMusicBox.lisBg .addMusic{
    visibility: visible;
  }
  .singleMusicBox:hover .addMusic{
    visibility: visible;
  }
  .musicTime{
    display: inline-block;
    width:100px;
    height:100%;
    text-align: left;
  }
  .muDown,.muMv,.muLove,.muDelete,.muMore{
    display: inline-block;
    width:18px;
    height:18px;
    margin: 0 10px 0 0;
    cursor: pointer;
  }
  .muDown{
    background: url("/static/images/download.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muDown:hover{
    background: url("/static/images/download_hover.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muMv{
    background: url("/static/images/MV.png")no-repeat center;
    -webkit-background-size:12px 14px;
    background-size:12px 14px;
  }
  .muMv:hover{
    background: url("/static/images/MV_hover.png")no-repeat center;
    -webkit-background-size:12px 14px;
    background-size:12px 14px;
  }
  .muLove{
    background: url("/static/images/collectLove.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muLove:hover{
    background: url("/static/images/collectLove_hover.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muDelete{
    background: url("/static/images/delete.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muDelete:hover{
    background: url("/static/images/delete_hover.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muMore{
    background: url("/static/images/more.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
  .muMore:hover{
    background: url("/static/images/more_hover.png")no-repeat center;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
  }
</style>
