<template>
  <div class="definiteMusicBox">
    <ul class="musicListUl">
      <li class="musicListLis" v-for="(item,index) in option">
        <!--<singleMusic :index="index" :option="item" ></singleMusic>-->
        <div class="singleMusicBox" :class="{lisBg:musicIndex == index}" @dblclick="changeSong(index,true)">
          <span class="addMusic"></span>
          <div class="musicPH">
            <div class="musicP"  v-show="musicIndex != index"><span>{{item.name}}</span></div>
            <div class="musicH"  v-show="musicIndex == index">
              <div class="singleMusic">
                <div class="imgPic"><img class="imgPicIcon" :src="item.img" alt=""></div>
                <div class="musicA">
                  <div class="musicN">{{item.name}}</div>
                  <div class="musicN">
                    <audio :src="item.src" ref="audio" style="visibility: hidden"></audio>
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
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import singleMusic from './singleMusic.vue'
  export default{
    data(){
      return{
        musicIndex:-2,
        music_list:[],
        player_src:''
      }
    },
    props:['option'],
    components:{singleMusic},
    methods:{
      /************播放音乐*****************/
      changeSong:function(index,set){
        // console.log(index,'===========');
        // 如果传了第二个参数 表示播放当前索引的列表音乐
        if(set){
          this.musicIndex = index;
        }else{
          // 否则为切换音乐
          let musicIndex=this.musicIndex;
          musicIndex+=index;
          if(musicIndex>-1&&musicIndex<this.option.length){
            this.musicIndex=musicIndex;
          }
        }
      },
      // 播放
      playEvent:function(){
        this.music.status = true;
      },
      // 暂停
      pauseEvent:function(){
        this.music.status = false;
      },
    },
    computed:{...mapState(['music'])},
    mounted(){
      this.music.changeSong = this.changeSong;
      this.music_list=document.getElementsByTagName('audio');
      this.musicIndex = -1;
      // console.log(this.music.listLength,'__+++++++++++______');
    },
    watch:{
      musicIndex:function(index){
        this.music.index = this.musicIndex;
        // console.log('99999====',index,'=======',this.option.length);
        // if(this.option.length<1) return; // 判断音乐列表长度是否为0
        // 判断如果索引为-1 则播放第一首
        console.log(this.music_list.length,'$$$$$$$$$$$$$$$$$$',index);
        if(index==-1){
          this.music.playSong = ()=>{
            setTimeout(()=>{
              this.musicIndex = 0;
            },100)
          };
          return
        }
        if(index > this.music_list.length-1){
           this.musicIndex = -1;
          return;
        }
        // 循环将所有都暂停
        for(let i=0;i<this.music_list.length;i++){
          this.music_list[i].removeEventListener('play',this.playEvent);
          this.music_list[i].removeEventListener('pause',this.pauseEvent);
          this.music_list[i].pause();
          this.music_list[i].currentTime = 0;
        }
        // 播放当前音乐
        let music=this.music_list[index];
        music.addEventListener('play',this.playEvent);
        music.addEventListener('pause',this.pauseEvent);
        // console.log(music,'-------',music.duration);
        music.play();
        let song = this.option[index];
        let dt,cur,ss,dur;
        // 获取总播放时长
        dt = music.duration;
        cur = parseFloat((dt/60+'').split('.')[0])<10?'0'+(dt/60+'').split('.')[0]:(dt/60+'').split('.')[0];
        ss = parseInt((dt%60+'').substr(0,2))<10?'0'+parseInt((dt%60+'').substr(0,2)):parseInt((dt%60+'').substr(0,2));
        dur = cur+':'+ss;
        // 监听时长播放更新---保存到vuex中
        music.addEventListener("timeupdate",()=>{
          let ct =parseInt(music.currentTime);
          // console.log(music.currentTime,'$$$$$$$$$$$');
          // 保存当前播放时长十进制
          let curCt = ct;
          if(ct<10){
            ct = '00:'+'0'+ct;
          }else if(ct<60){
            ct = '00:'+ct;
          }else if(ct>=60){
            let se = (ct%60).toFixed(0)<10?'0'+(ct%60).toFixed(0):(ct%60).toFixed(0);
            ct ='0'+parseInt(ct/60)+':'+se;
          }
          // 判断当前播放时长  如果与总时长相等则自动播放下一首
          if(curCt == parseInt(dt)){
            this.musicIndex++;
          }
          //获取当前播放时长
          this.music.music_time = ct;
        });
        // 获取总时长
        this.music.music_duration = dur;
        //改变专辑图片
        this.music.photo_src =song.img;
        //改变歌曲名
        this.music.music_name = song.name;
        this.music.sethead = (num)=>{
          console.log(dt * num,'^^^^^^^',dt,'=======',num);
          music.currentTime = dt*num;
          music.play();
        };
        this.music.playSong = ()=>{
          music.play();
        };
        this.music.pauseSong = ()=>{
          music.pause();
        };
        music.style.src=song.src;
      }
    }
  }
</script>
<style >
  .definiteMusicBox{
    width:100%;
    height:auto;
  }
  .musicListUl{
    width:100%;
    height:auto;
  }
  .musicListLis{
    width:100%;
    min-height:30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    font-size:12px;
    color: #333;
    line-height:30px;
    text-align: left;
  }



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
    width:150%;
    height:100%;
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
