<template>
  <div class="contributeBox">
     <div class="contributeContent">
       <div class="contributeContentTitle">歌单投稿 <span class="closeContribute" @click="closeSubmit"></span></div>
       <div class="contributeText">
         <div class="callUpon">
           <span class="leftBracket"></span>
           <span class="rightBracket"></span>
           <p class="windAlarm">音乐歌单征集令</p>
           <p class="shareYouSong">分享你的音乐世界</p>
         </div>
         <div class="songListTitle">投稿歌单  人气飙升</div>
         <div class="condition">
           <span class="conditionIcon"></span>
           歌单通过审核可被搜索，让更多用户收听你的歌单 ;
         </div>
         <div class="condition">
           <span class="conditionIcon"></span>
           优质歌单优先在歌单广场和热门位置推荐 ;
         </div>
         <div class="condition">
           <span class="conditionIcon"></span>
           投稿歌单收藏量和张数满足条件，即可申请歌单达人，享受专属身份、
         </div>
         <div class="condition">
           <span class="conditionIcon" style="visibility: hidden"></span>
           上亿流量曝光、万千粉丝呼应。<span class="goexpert">歌单达人条件> </span>
         </div>
         <div class="rightNow">立即投稿</div>
       </div>
     </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:[],
    components:{},
    methods:{
      closeSubmit:function(){
          this.$emit('closeContribute')
      }
    },
    computed:{},
    mounted(){}
  }
</script>
<style>
  .contributeBox{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 14;
  }
  .contributeContent{
    width:500px;
    height:440px;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  .contributeContentTitle{
    width:100%;
    height:36px;
    line-height:36px;
    background-color: #01B5F0;
    font-size:14px;
    color: #ffffff;
    text-align: left;
    text-indent: 10px;
    position: relative;
  }
  .closeContribute{
    display: inline-block;
    width:13px;
    height:13px;
    position: absolute;
    right:15px;
    top:0;
    bottom:0;
    margin:auto;
    background: url("/static/images/close.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
  }
  .contributeText{
    background-color: #16496A;
    width:100%;
    height:calc(100% - 36px);
    overflow: hidden;
  }
  .callUpon{
    width:calc(100% - 160px);
    height:80px;
    margin:24px auto 0;
    position: relative;
    text-align: center;
    line-height:40px;
  }
  .windAlarm{
    font-size:40px;
    font-family:"华文隶书";
    color: #ffffff;
    font-weight:bold;
  }
  .shareYouSong{
    width:100%;
    text-align: center;
    height:40px;
    line-height:40px;
    font-size:18px;
    color: #ffffff;
    font-weight:normal;
    letter-spacing: 10px;
  }
  .leftBracket,.rightBracket{
    display: inline-block;
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    margin:auto;
    width:40px;
    height:70px;
    background: url("/static/images/bracket.png")no-repeat 10px 0px;
    -webkit-background-size:50px 100%;
    background-size:50px 100%;
    transform: skew(-150deg);
  }
.rightBracket{
  right:0;
  left:auto;
  background: url("/static/images/bracket.png")no-repeat -28px 0px;
  -webkit-background-size:50px 100%;
  background-size:50px 100%;
  transform: skew(150deg);
}
  .songListTitle{
    width:100%;
    height:30px;
    font-size:20px;
    color: #76BEEC;
    text-align: center;
    margin-top:50px;
  }
  .condition{
    width:calc(100% - 64px);
    height:30px;
    margin:auto;
    /*line-height:25px;*/
    color: #76BEEC;
    font-size:13px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
  }
  .conditionIcon{
    display: inline-block;
    width:8px;
    height:8px;
    border-radius:100%;
    background-color: #2D678D;
    margin-right:10px;
  }
  .condition:last-child{
    height:20px;
    align-items: flex-start;
  }
  .rightNow{
    width:146px;
    height:38px;
    background-color: #3EA7F7;
    text-align: center;
    line-height:38px;
    color: #fff;
    font-size:15px;
    margin:25px auto 0;
    border-radius: 4px;
    cursor: pointer;
  }
  .rightNow:hover{
    background-color: #158FE1;
  }
  .goexpert{
    text-decoration: underline;
    color: #3EC9F7;
    cursor: pointer;
  }
</style>
