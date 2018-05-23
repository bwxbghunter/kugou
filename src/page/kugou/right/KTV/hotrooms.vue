<template>
  <div class="hotrooms">
    <div class="hotTitle"><span></span> 热门房间</div>
    <ul class="hotroomsUl clearfix">
      <li class="hotroomsLis" v-for="(item,index) in dataAry">
        <div class="pictureRoom">
          <div class="isvip" v-if="item.isvip">钻石</div>
          <img class="pictures" src="/static/images/mv_img/1.jpg" alt="">
          <div class="callyou">{{item.room_tip}}</div>
          <div class="comeinRoom"><span class="goRoom">进入房间</span></div>
        </div>
        <div class="roomTitle">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{}
    },
    props:['dataAry'],
    components:{},
    methods:{},
    computed:{},
    mounted(){}
  }
</script>
<style>
  .hotrooms{
    width:calc(100% - 40px);
    /*position: relative;*/
    margin: auto;
  }
  .hotTitle{
    width:100%;
    height:17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    font-size:17px;
    color: #333333;
    margin-bottom:15px;
  }
  .hotTitle span{
    display: inline-block;
    width:4px;
    height:16px;
    background-color: #288FE7;
    margin-right:5px;
  }
  .hotroomsUl{
    width:100%;
  }
  .hotroomsLis{
    width:148px;
    height:130px;
    float: left;
    margin-right:18px;
    margin-bottom:10px;
  }
  .hotroomsLis:nth-child(4n){
    margin-right:0;
  }
  .pictureRoom{
    width:100%;
    height:100px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .isvip{
    width:40px;
    height:20px;
    line-height:20px;
    text-align: center;
    font-size:12px;
    color: #ffffff;
    background-color: #854AFF;
    border-bottom-right-radius:20px;
    border-top-right-radius:20px;
    position: absolute;
    left:0;
    top:0;
    transition: all 0.3s ease;
  }
  .comeinRoom{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    background-color: rgba(0, 0, 0, 0.12);
    opacity: 0;
    transition: all 0.3s ease;
  }
  .comeinRoom .goRoom{
    width:96px;
    height:26px;
    border: 2px solid rgba(255, 255, 255, 0.75);
    text-align: center;
    font-size:13px;
    color: rgba(255, 255, 255, 0.75);
    line-height:26px;
    border-radius: 30px;
  }
  .comeinRoom .goRoom:hover{
    border: 2px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  .pictureRoom:hover .comeinRoom{
    opacity: 1;
  }
  .pictureRoom img{
    width:100%;
    height:100%;
  }
  .callyou{
    width:100%;
    height:22px;
    line-height:22px;
    background-color: rgba(0, 0, 0, 0.52);
    text-align: center;
    font-size:12px;
    color: #ffffff;
    position: absolute;
    bottom:0;
    left:0;
    transition: all 0.2s ease;
  }
  .pictureRoom:hover .callyou{
    bottom:-22px;
  }
  .pictureRoom:hover .isvip{
    top:-20px;
  }
  .roomTitle{
    width:100%;
    height:30px;
    line-height:30px;
    color: #333333;
    font-size:14px;
    text-align: left;
  }
</style>
