<template>
  <div class="slideShow">
    <ul class="slideUl" ref="slideUl">
      <li class="pic" ><img src="/static/images/mv_img/12.jpg" alt="旋转木马"></li>
      <li class="pic" ><img src="/static/images/mv_img/13.jpg" alt="旋转木马"></li>
      <li class="pic" ><img src="/static/images/mv_img/14.jpg" alt="旋转木马"></li>
      <li class="pic" ><img src="/static/images/mv_img/15.jpg" alt="旋转木马"></li>
      <li class="pic" ><img src="/static/images/mv_img/16.jpg" alt="旋转木马"></li>
    </ul>
      <div class="slideprebtn" id="prebtn" @click="changePic(1)"></div>
      <div class="slidenextbtn" id="nextbtn" @click="changePic(-1)"></div>
  </div>
</template>
<script>
  export default{
    data(){
     return{
      liAry:[],
      picAry:[
        {
          w:162,
          h:80,
          t:47,
          l:243,
          z: 2,
          id: 1,
        },
        {
          w:325,
          h:130,
          t:22,
          l:0,
          z: 3,
          id: 2,
        },
        {
          w:480,
          h:175,
          t:0,
          l:85,
          z: 4,
          id: 3,
        },
        {
          w:325,
          h:130,
          t:22,
          l:324,
          z: 3,
          id: 4,
        },
        {
          w:162,
          h:80,
          t:47,
          l:487,
          z: 2,
          id: 5,
        }
      ],
     }
    },
    props:[],
    components:{},
    methods:{
      /*********获取图片元素*************/
      getEle:function(){
        let ul = this.$refs.slideUl;
        this.liAry  = ul.getElementsByClassName('pic');
        this.liAry =  Array.prototype.slice.call(this.liAry,0);
        console.log(this.liAry.length);
      },
      /**********转动*******************/
      startMove:function(arr){
        console.log(arr);
        for(let i = 0; i<arr.length;i++){
            this.animation(arr[i],this.picAry[i]);
          }
      },
      /******************/
      animation:function(ele,json){
        ele.style.left=json.l+'px';
        ele.style.top = json.t + 'px';
        ele.style.width = json.w+'px';
        ele.style.height = json.h+'px';
        ele.style.zIndex = json.z;
      },
      /**********切换图片***********/
      changePic:function(val){
        this.getEle();
        if(val>0){
          this.picAry.unshift(this.picAry[this.picAry.length-1]);
          this.picAry.pop();
          this.startMove(this.liAry);
        }else{
          this.picAry.push(this.picAry[0]);
          this.picAry.shift();
          this.startMove(this.liAry);
        }
      }
    },
    computed:{},
    watch:{},
    mounted(){
      this.getEle();
      this.startMove(this.liAry);
    }
  }
</script>
<style>
.slideShow{
  width:100%;
  height: 100%;
  position: relative;
}
.slideUl{
  width:100%;
  height:100%;
  position: relative;
  overflow: hidden;
}
  .pic{
    position: absolute;
    transition: all 0.3s ease;
  }
.pic img{
  width:100%;
  height:100%;
}

.pic:nth-child(1) {
  width: 162px;
  height: 80px;
  opacity: 1;
  z-index: 1;
  left: 243px;
  top: 47px;
  margin: auto;
}

.pic:nth-child(2) {
  width: 325px;
  height: 130px;
  opacity: 1;
  z-index: 2;
  left: 0px;
  top: 22px;
  margin: auto;
}

.pic:nth-child(3) {
  width: 480px;
  height: 175px;
  opacity: 1;
  z-index: 3;
  left:85px;
  top: 0;
  margin: auto;
}

.pic:nth-child(4) {
  width: 325px;
  height: 130px;
  opacity: 1;
  z-index: 2;
  left: 324px;
  top: 22px;
  margin: auto;
}

.pic:nth-child(5) {
  width: 162px;
  height: 80px;
  opacity: 1;
  z-index: 1;
  left: 487px;
  top: 47px;
  margin: auto;
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
</style>
