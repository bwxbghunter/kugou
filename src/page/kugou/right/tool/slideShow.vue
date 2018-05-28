<template>
  <div class="slideShow">
    <ul class="slideUl" ref="slideUl">
      <li class="pic" v-for="(item,index) in picAry"><img :src="item.img" alt="旋转木马"></li>
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
          r:0,
          l:'auto',
          img:'/static/images/mv_img/12.jpg',
        },
        {
          w:325,
          h:130,
          t:22,
          l:0,
          r:'auto',
          img:'/static/images/mv_img/13.jpg',
        },
        {
          w:480,
          h:175,
          t:0,
          l:85,
          r:'auto',
          img:'/static/images/mv_img/14.jpg',
        },
        {
          w:325,
          h:130,
          t:22,
          r:0,
          img:'/static/images/mv_img/18.jpg',
        },
        {
          w:162,
          h:80,
          t:47,
          r:0,
          l:'auto',
          img:'/static/images/mv_img/16.jpg',
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
      },
      /**********转动*******************/
      startMove:function(arr){
          for(let i = 0; i<arr.length;i++){
            this.animation(arr[i],this.picAry[i]);
          }
      },
      /******************/
      animation:function(ele,json){
//        ele.style.left=json.l;
//        ele.style.top = json.t;
//        ele.style.right = json.r;
        ele.style.width = json.w;
        ele.style.height = json.h;
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
  .pic:nth-child(1){width:162px;height:80px;opacity: 1;z-index: 1;left:0;top:0;right:auto;bottom:0;margin:auto;}
  .pic:nth-child(2){width:325px;height:130px;opacity: 1;z-index: 2;left:0;top:0;right:auto;bottom:0;margin:auto;}
  .pic:nth-child(3){width:480px;height:175px;opacity: 1;z-index: 3;left:0;top:0;right:0;bottom:0;margin:auto;}
  .pic:nth-child(4){width:325px;height:130px;opacity: 1;z-index: 2;left:auto;top:0;right:0;bottom:0;margin:auto;}
  .pic:nth-child(5){width:162px;height:80px;opacity: 1;z-index: 1;left:auto;top:0;right:0;bottom:0;margin:auto;}
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
