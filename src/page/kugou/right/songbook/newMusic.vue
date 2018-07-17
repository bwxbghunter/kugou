<template>
  <div class="newMusic">
    <div class="newTitle">
      <div class="headlines clearfix">
        <div class="leftNewHead fl"><span></span>新歌首发</div>
        <ul class="headlineUl fl">
          <li class="headlineLis fl" v-for="item in option">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="newMusicList">
      <ul class="newMusicListUl">
        <li class="newMusicListLis" v-for="item in ArrayData" v-bind:key="item.id">
          <div class="newMusicName"><span class="nameText">{{item.name}}</span><span class="dujia">独家</span></div>
          <div class="newMusicTime">{{item.cur_time}}</div>
        </li>
      </ul>
    </div>
    <div class="newFooter">
      <div class="paging">
        <span>  </span>
        <span>1/3</span>
        <span> </span>
      </div>
      <div class="playAll">播放全部</div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        option:[{id:0,name:'华语'},{id:1,name:'欧美'},{id:2,name:'韩国'},{id:3,name:'日本'}],
      }
    },
    props:['ArrayData'],
    components:{},
    computed:{},
    methods:{},
    mounted(){}
  }
</script>
<style scoped>
  .newMusic{
    width: 100%;
    height: 100%;
  }
  .newTitle{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #E9E9E9;
    padding-top: 9px;
  }
  .headlines{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #777777;
    text-align: center;
  }
  .leftNewHead{
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 19px;
    color: #333;
  }
  .leftNewHead span{
    display: inline-block;
    width: 3px;
    height: 22px;
    background-color: #288FE7;
    margin-right: 5px;
  }
  .headlineUl{
    width: calc(100% - 90px);
    height: 100%;
  }
  .headlineLis{
    width: 50px;
    height: 100%;
  }
  .newMusicList{
    width: 100%;
    height: auto;
  }
  .newMusicListUl{
    width: 100%;
    height: auto;
  }
  .newMusicListLis{
    width: 100%;
    height: 35px;
    color: #333;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .newMusicListLis:hover{
    background-color: #F5F8FB;
  }
  .newMusicListLis:hover .newMusicName{
    color: #68A9EC;
  }
  .newMusicName{
    display: inline-block;
    width: 280px;
    text-align: left;
    cursor: pointer;
    position: relative;
  }
  .nameText{
    display: inline-block;
    width: 230px;
    height: 100%;
    text-indent: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    line-height: 35px;
    font-size: 13px;
  }
  .dujia{
    width: 35px;
    height: 16px;
    border: 1px solid #FF7F0D;
    color: #FF7F0D;
    text-align: center;
    line-height: 14px;
    font-size: 12px;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    transform: scale(0.80);
  }
  .newMusicTime{
    color: #999999;
    font-size: 12px;
    text-align: center;
    margin-right: 12px;
  }
  .newFooter{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .paging{
    width: 60px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    color: #999999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .paging span:nth-child(1){
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("/static/images/arrow-down.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    transform: rotate(90deg);
    cursor: pointer;
    margin-right: 5px;
  }
  .paging span:nth-child(3){
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("/static/images/arrow-down.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    transform: rotate(-90deg);
    cursor: pointer;
    margin-left: 5px;
  }
  .playAll{
    width: 85px;
    height: 28px;
    border: 1px solid #DBDBDB;
    color: #6C6C6C;
    font-size: 14px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
    border-radius: 4px;
  }
</style>
