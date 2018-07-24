<template>
  <div class="moreMoudle">
    <div class="moreMoundleBox" >
      <div class="titleBox clearfix">
        <span class="leftBorder fl"></span>
        <div class="title fl">{{ArrayData.title}}</div>
        <div class="details fl">{{ArrayData.details}}</div>
        <div class="moreThan fr">{{ArrayData.more}}</div>
      </div>
      <div class="moreBody clearfix">
        <div class="singleMore fl" v-for="(val,index) in ArrayData.list">
          <div class="showView">
            <img :src="val.img||url" alt="" class="imgView" >
            <div class="Everydate" v-show="ArrayData.id==0&&index==0">
              <span>{{month}}月</span>
              <span>{{day}}</span>
            </div>
            <div class="viewMask" v-show="index!=0||ArrayData.id!=0"></div>
            <div class="viewLove"  v-show="index!=0||ArrayData.id!=0"></div>
            <div class="viewPlayAll" v-show="index!=0||ArrayData.id!=0"></div>
          </div>
          <div class="viewText" :title="val.text">{{val.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        url:'/static/images/mv_img/1.jpg',
        day:1,
        month:'一'
      }
    },
    props:['ArrayData'],
    components:{},
    computed:{},
    methods:{
      changeImg:function(h,img){
        let imgs = img;
        for(let i = 0; i<imgs.length; i++){
          imgs[i].style.width= h*2 + 'px';
          imgs[i].style.marginLeft = -h/2+'px';
          imgs[i].style.height = h+'px';
        }
      },
      calendar_:function(){
        let config={0:'一',1:'二',3:'四',4:'五',5:'六',6:'七',7:'八',8:'九',9:'十',10:'十一',11:'十二'}
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        month = config[month];
        this.day = day;
        this.month = month;
      }
    },
    mounted(){
      this.changeImg(150,document.getElementsByClassName('imgView'));
      this.calendar_();
    }
  }
</script>
<style scoped>
  .moreMoudle,.moreMoundleBox{
    width: 100%;
    height: 100%;
  }
  .titleBox{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .leftBorder{
    width: 2px;
    height: 20px;
    margin-top: 10px;
    background-color: #288FE7;
    margin-right: 5px;
  }
  .title{
    font-size: 18px;
    color: #333;
  }
  .details,.moreThan{
    font-size: 13px;
    color: #888888;
    margin-left: 10px;
  }
  .moreThan{
    cursor: pointer;
  }
  .moreBody{
    width: 100%;
    height: calc(100% - 40px);
  }
  .singleMore{
    width: 150px;
    height: 190px;
    margin-right: 16px;
  }
  .singleMore:nth-child(4n){
    margin-right: 0;
  }
  .showView{
    width: 100%;
    height: 150px;
    background-color: #cccccc;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
  .Everydate{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
  }
  .Everydate span:first-child {
    display: block;
    width: 150px;
    margin-left: -1px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #288EF7;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
  }
  .Everydate span:last-child {
    display: inline-block;
    color: #555555;
    text-align: center;
    height: 106px;
    line-height: 106px;
    width: 135px;
    margin-left: 6px;
    border: 1px solid #EBEBEB;
    font-size: 60px;
    font-weight: bold;
  }
  .showView img{
    width:100%;
    height: 100%;
  }
  .viewMask{
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.22);
  }
  .showView:hover .viewLove,.showView:hover .viewPlayAll,.showView:hover .viewMask{
    display: block;
  }
  .viewLove,.viewPlayAll{
    display: none;
    position: absolute;
    right: 6px;
    bottom: 6px;
    width: 28px;
    height: 28px;
  }
  .viewLove{
    right: 40px;
    background: url("/static/images/guess_like.png")no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .viewPlayAll{
    background: url("/static/images/pause.png") center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .viewText{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #333333;
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .viewText:hover{
    color: #288FE7;
  }
</style>
