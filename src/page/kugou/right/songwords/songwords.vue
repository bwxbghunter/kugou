<template>
  <div class="songword">
    <div class="wordBox" style="top:30%" :style="{marginTop:-currentLine*40-10+'px'}">
      <ul class="wordUl" >
        <li class="wordLis " v-for="(item,index) in lrcText.head">{{item}}</li>
        <li class="wordLis " v-for="(item,index) in lrcText.text"
            :class="{active:currentLine == index,opacity:Math.abs(currentLine-index)>6}"
            >{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Lyric0 from '../../../../../static/Lyric/不二小倩 - 大花轿 (Live).js'
  import Lyric1 from '../../../../../static/Lyric/云朵 - 我的楼兰 (DJ沫沫版).js'
  import Lyric2 from '../../../../../static/Lyric/格子兮 - 西塘有雨.js'
  import Lyric3 from '../../../../../static/Lyric/时砂 - 解锁.js'
  import Lyric4 from '../../../../../static/Lyric/小潘潘、小峰峰 - 学猫叫.js'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        lrc:'',
        lrcBox:[],
      }
    },
    props:[],
    components:{},
    methods:{

    },
    computed:{
      ...mapState(['music']),
      lrcText:function(){
        let array = this.lrc.split('\n');
        let time = [];
        let text = [];
        let head = [];
        array.forEach((o)=>{
         let start = /^\[.+\]$/;
         if(start.exec(o)) {
           head.push(o.replace('[','').replace(']','').split(':')[1]);
           return
         }
         let oa = o.split(']');
         text.push(oa[1]);
         time.push(oa[0].replace('[','').split('.')[0])
        });
        return {time:time,text:text,head:head};
      },
      currentLine:function(){
        let curIndex = this.music.music_time;
        curIndex = parseInt(curIndex.split(':').join(''));
        for(let i=this.lrcText.time.length-1;i>-1;i--){
          let o = this.lrcText.time[i];
          o = parseInt(o.split(':').join(''));
          if(o<=curIndex){
            return i;
          }
        }
       return -1;
      }
    },
    mounted(){
      this.lrcBox = [Lyric0,Lyric1,Lyric2,Lyric3,Lyric4];
    },
    watch:{
      'music.index':function(index){
        if(index<0){
          this.lrc = ' ';
        }else{
          this.lrc = this.lrcBox[index];
        }
      }
    }
  }

</script>
<style scoped>
  .songword{
    width:100%;
    height:100%;
  }
  .wordBox,.wordUl{
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    transition: all 0.3s linear;
  }
  .wordLis {
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgba(245, 245, 245, 1);
    text-align: center;
    font-size: 20px;
    font-family: cursive;
    transition: all 0.3s linear;
  }
  .active{
    font-size:24px;
    line-height: 40px;
    color: #f9ff02;
    font-family: sans-serif;
  }
  .opacity{
    opacity: 0.5;
  }
</style>
