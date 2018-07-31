<template>
  <div class="box">
    <ul class="sliderUl clearfix">
      <li class="sliderLis fl"><img class="imgslider" src="/static/images/mv_img/25.jpg" alt=""></li>
      <li class="sliderLis fl"><img class="imgslider" src="/static/images/mv_img/26.jpg" alt=""></li>
      <li class="sliderLis fl"><img class="imgslider" src="/static/images/mv_img/16.jpg" alt=""></li>
      <li class="sliderLis fl"><img class="imgslider" src="/static/images/mv_img/15.jpg" alt=""></li>
      <li class="sliderLis fl"><img class="imgslider" src="/static/images/mv_img/31.jpg" alt=""></li>
      <li class="sliderLis fl"><img class="imgslider" src="/static/images/mv_img/25.jpg" alt=""></li>
    </ul>
    <ol class="sliderOl clearfix">
      <li class="olLis fl " :class="{acitve:key==0||key == 5}" @click="move(0)"></li>
      <li class="olLis fl " :class="{acitve:key==1}" @click="move(1)"></li>
      <li class="olLis fl " :class="{acitve:key==2}" @click="move(2)"></li>
      <li class="olLis fl " :class="{acitve:key==3}" @click="move(3)"></li>
      <li class="olLis fl " :class="{acitve:key==4}" @click="move(4)"></li>
    </ol>
    <div class="slideprebtn" id="prebtn" @click="changeImg(-1)"></div>
    <div class="slidenextbtn" id="nextbtn" @click="changeImg(1)"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        arrayLis:[],
        ul:'',
        key:0,
        liWidth:0,
        timer:null,
      }
    },
    props:[],
    components:{},
    methods:{
      imgCut:function(w,arr){
        for(let i=0;i<arr.length;i++){
          arr[i].style.width = w+'px';
          arr[i].style.height = w/1.8+'px';
        }
      },
      changeImg:function(val){
        if(val>-1){
          this.key++;
          if(this.key > this.arrayLis.length-1){
            this.ul.style.left = 0 +'px';
            this.key = 1;
          }
          this.autoPlay();
        }else{
          this.key--;
          if(this.key <0){
            this.ul.style.left = -(this.arrayLis.length-1)*this.liWidth +'px';
            this.key = 4;
          }
          this.autoPlay();
        }
      },
      move:function(index){
        this.key = index;
        this.autoPlay();
      },
      autoPlay:function(){
        this.animate(this.ul,-this.key*this.liWidth);
      },
      animate:function(obj,target){
        clearInterval(obj.timer);
        let speed = obj.offsetLeft<target?15:-15;
        obj.timer = setInterval(()=>{
          let result = target - obj.offsetLeft;
          obj.style.left = obj.offsetLeft + speed + 'px';
          if(Math.abs(result)<=Math.abs(speed)){
            clearInterval(obj.timer);
            obj.style.left = target+'px';
          }
        },10);
      }
    },
    mounted(){
      let imgs = document.getElementsByClassName('imgslider');
      this.arrayLis = document.getElementsByClassName('sliderLis');
      this.ul = document.getElementsByClassName('sliderUl')[0];
      this.liWidth= this.arrayLis[0].offsetWidth;
      this.imgCut(650,imgs);
      // this.timer = setInterval(this.autoPlay,2000);
    }
  }
</script>
<style scoped>
  .box{
    width:100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .fl{
    float: left;
  }
  .clearfix:after{content:"";display: block;visibility: hidden;line-height:0;height: 0;clear: both;}
  .sliderUl{
    width: 700%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /*transition: all 0.3s ease;*/
  }
  .slideprebtn,.slidenextbtn{
    position: absolute;
    left:12px;
    top:0;
    bottom:0;
    margin:auto;
    width:25px;
    height:25px;
    background: url("/static/images/slidebtn.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
    z-index: 4;
  }
  .slidenextbtn{
    transform: rotate(180deg);
    left:auto;
    right:12px;
  }
  .sliderLis{
    width: 650px;
    height: 100%;
  }
  .sliderLis img{
    height: auto;
    width: 100%;
  }
  .sliderOl{
    position: absolute;
    left: 0;
    bottom: 5px;
    right: 0;
    margin: auto;
    width: 120px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .olLis{
    width: 15px;
    height: 5px;
    cursor: pointer;
    margin-left: 8px;
    background-color: rgba(0, 0, 0, 0.62);
  }
  .olLis.acitve{
    background-color: #fff;
  }
</style>
