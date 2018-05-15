<template>
  <div class="singleMusicBox" :class="{lisBg:musicIndex == index}" @dblclick="playerMusic">
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
      playerMusic:function(){
        this.musicIndex = this.index;
        //paused,表示当前音乐是否为暂停状态
        if(this.music.player.paused){
          // 播放当前音乐
          this.playMusic();
          this.music.status = true;
        }else {
          // 暂停当前音乐
          this.music.player.pause();
          this.music.status = false;
        }
      },
      // 播放
      playMusic:function(){
        this.music.player.play();
        // 调用载入歌曲信息函数
        this.loadMusic();
      },
      // 载入歌曲信息
      loadMusic:function(){
        var music=this.music.list[0].data_list[this.index];
        console.log(music,'-----------',this.music.player);
        let dt,cur,ss,dur;
        dt = this.music.player.duration;
        cur = parseFloat((dt/60+'').split('.')[0])<10?'0'+(dt/60+'').split('.')[0]:(dt/60+'').split('.')[0];
        ss = parseInt((dt%60+'').substr(0,2))<10?'0'+parseInt((dt%60+'').substr(0,2)):parseInt((dt%60+'').substr(0,2));
        dur = cur+':'+ss;
        this.music.player.addEventListener("timeupdate",()=>{
          let ct =parseInt(this.music.player.currentTime);
          if(ct<10){
            ct = '00:'+'0'+ct;
          }else if(ct<60){
            ct = '00:'+ct;
          }else if(ct>=60){
            let se = (ct%60).toFixed(0)<10?'0'+(ct%60).toFixed(0):(ct%60).toFixed(0);
            ct ='0'+parseInt(ct/60)+':'+se;
          }
        //获取当前播放时长
        this.music.music_time = ct;
        });
        // 获取总时长
        this.music.music_duration = dur;
        //改变专辑图片
        this.music.photo_src =this.option.img;
        //改变歌曲名
        this.music.music_name = this.option.name;
        //改变歌曲路径
        this.music.src = this.option.src;
      },
    },
    computed:{...mapState(['music'])},
    mounted(){this.music.player=this.$refs.audio},
    watch:{
      'music.btns':function(){
//        this.playerMusic();
      }
    }
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
