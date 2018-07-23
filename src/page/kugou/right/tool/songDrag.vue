<template>
  <div class="sliderBg" ref="sliderbg" @click.stop="clickDown($event)">
    <span class="barBg" :style="{left:circleLeft}"></span>
    <span class="circle" :style="{left:cirLeft||circleLeft}" @mousedown.stop.prevent="mouseDown($event)" style="left: 0;margin-left: 0" ref="circle"></span>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        startX:0,
        circle:'',
        transL:0,
        cirLeft:0,
        timer:0,
        startTime:0,
        endTiem:0,
      }
    },
    props:[],
    components:{},
    computed:{
      ...mapState(['music']),
      circleLeft:function () {
        let time = this.music.music_duration;
        let moment = this.music.music_time;
        let second = (time.split(':')[0]*60)+Number(time.split(':')[1]);
        let present = (moment.split(':')[0]*60)+Number(moment.split(':')[1]);
        let result = present/second;
        if(isNaN(result)) result = 0;
        return result*370+'px';
      },
    },
    methods:{
      clickDown:function(e){
        let sliderbg = this.$refs.sliderbg;
        let x = e.pageX; // 鼠标x轴距离
        this.startX = x;
        let barLeft = sliderbg.offsetLeft;// bar距离左侧的offsetLeft
        let w = x-barLeft-4;// 鼠标点击与offsetLeft差值--偏移量
        // console.log(w,'++++++++++',w/370);
        this.music.sethead(w/370); // 设置播放头
      },
      mouseDown:function(e){
        this.cirLeft = this.circleLeft;
        let circle = this.$refs.circle;
        this.circle = circle;
        let x = e.pageX; // 鼠标x轴距离
        this.startX = x;
        document.addEventListener('mousemove',this.mouseMove);
        document.addEventListener('mouseup',this.mouseUp);
      },
      mouseMove:function(e){
        let sliderbg = this.$refs.sliderbg;
        let pageX = e.pageX;
        this.transL = pageX - this.startX;
        let drag = parseInt(this.cirLeft)+this.transL;
        if(drag<0){
          this.transL = 0-this.cirLeft;
        }else if(drag>sliderbg.offsetWidth-10){
          this.transL= sliderbg.offsetWidth-10 - this.cirLeft;
        }
        this.circle.style.marginLeft = this.transL+'px';

      },
      mouseUp:function(){
        document.removeEventListener('mousemove',this.mouseMove);
        document.removeEventListener('mouseup',this.mouseUp);
        this.circle.style.marginLeft = 0;
        this.music.sethead((parseInt(this.cirLeft)+this.transL)/370); // 设置播放头
        this.transL = 0;
        this.cirLeft = 0;
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
  .sliderBg{
    width:100%;
    height:100%;
    position: relative;
    background: url("/static/images/barBg.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
  }
  .barBg{
    display: block;
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top: 0;
    margin:auto;
    background-color: #80B3D4;
  }
  .circle{
    width:10px;
    height:10px;
    border-radius: 50%;
    background-color: #FFFEA1;
    position: absolute;
    top:0;
    bottom:0;
    /*right:0;*/
    left:0;
    margin:auto;
    cursor: pointer;
  }
</style>
