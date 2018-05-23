<template>
  <div class="songTable">
    <ul class="songTableUl clearfix">
      <li class="songTableLis" v-for="item in songAry">
        <div class="songTableLisImg">
          <img class="songImg" :src="item.img" alt="">
          <div class="likeAndPlay clearfix">
            <span class="guessLike" title="收藏歌单"></span>
            <span class="playSong" title="全部播放"></span>
          </div>
          <div class="headsetBox"><span class="headset"></span><span>{{item.num}}万</span></div>
        </div>
        <div class="songTableLIsText">
          <p class="songTitle" :title="item.title">{{item.title}}</p>
          <p class="songauthor"><span class="editername" :title="item.author">{{item.author}}</span><span class="songlistIcon" title="所有曲目"></span></p>
        </div>
      </li>
    </ul>
    <div class="loadText">正在加载中 <span class="loadgif"></span></div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:['songAry'],
    components:{},
    methods:{},
    computed:{},
    mounted(){
      if(this.songAry.length>0){
        $g.cutImg(150,document.getElementsByClassName('songImg'));
      }
    }
  }
</script>
<style>
  .songTable{
    width:100%;
  }
  .songTableUl{
    width:100%;
  }
  .songTableLis{
    width:150px;
    height:200px;
    margin-right:16px;
    float: left;
    margin-bottom:15px;
  }
  .songTableLis:nth-child(4n){
    margin-right:0px;
  }
  .songTableLisImg{
    width:100%;
    height:150px;
    position: relative;
    overflow: hidden;
  }
  .songTableLisImg img{
    width:100%;
    height:100%;
  }
  .likeAndPlay{
    position: absolute;
    bottom:10px;
    right:10px;
    margin:auto;
    width:70px;
    height:30px;
    display: none;
  }
  .songTableLis:hover .likeAndPlay{
    display: block;
  }
  .guessLike,.playSong{
    float: left;
    width:30px;
    height:30px;
    display: block;
    cursor: pointer;
    opacity: 0.8;
  }
  .guessLike{
    margin-right:10px;
    background: url("/static/images/guess_like.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .playSong{
    background: url("/static/images/pause.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .guessLike:hover,.playSong:hover{
    opacity: 1;
  }
  .headsetBox{
    width:100%;
    height:25px;
    line-height:25px;
    font-size:12px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #ffffff;
    position: absolute;
    top:0;
    left:0;
    background: -webkit-linear-gradient(left,rgba(255,255,255,0) , rgba(0,0,0,0.2)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(255,255,255,0) , rgba(0,0,0,0.2)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(255,255,255,0) , rgba(0,0,0,0.2)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(255,255,255,0) , rgba(0,0,0,0.2));
  }
  .headsetBox span:last-child{
    margin-right:10px;
  }
  .headsetBox span:first-child{
    display: inline-block;
    width:16px;
    height:16px;
    background: url("/static/images/headset.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:8px;
  }
  .songTableLIsText{
    width:100%;
    height:50px;
  }
  .songTitle{
    width:100%;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size:13px;
    line-height:25px;
    color: #333333;
  }
  .songauthor{
    width:100%;
    height:25px;
    line-height:18px;
    color: #999999;
    font-size:12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .songlistIcon{
    display: inline-block;
    width:15px;
    height:15px;
    background:url("/static/images/songlist.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .songTitle:hover,.editername:hover{
    color: #68A9EC;
    cursor: pointer;
  }
  .songlistIcon:hover{
    background: url("/static/images/songlist_hover.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
  }
  .loadText{
    width:100%;
    height:30px;
    font-size:15px;
    color: #ccc;
    text-align: center;
    line-height:30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loadgif{
    display: inline-block;
    width:25px;
    height:25px;
    background: url("/static/images/loading.gif")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-left:10px;
  }
</style>
