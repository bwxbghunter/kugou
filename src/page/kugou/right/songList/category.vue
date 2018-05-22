<template>
  <!--分类-->
  <div class="category">
    <div class="scrollbar" ref="scrollbar1"><b ref="b"></b></div>
    <div class="categoryContent">
      <ul class="categoryUl"  ref="categorybox">
        <li class="categoryLis" v-for="(item,index) in option">
          <div class="categoryTitle">{{item.schame}}</div>
          <ul class="categoryCUl">
            <li class="categoryCLis" @click="chosedSongType(val)" v-for="(val,index) in item.list">{{val.text}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        scrollBar1:function () {},/****滚动条函数引用*****/
        option:[
          {
            schame:'默认',
            list:[{id:0,text:'全部'},]
          },
          {
            schame:'主题',
            list:[
              {id:0,text:'经典'},
              {id:0,text:'网络'},
              {id:0,text:'舞曲'},
              {id:0,text:'情歌对唱'},
              {id:0,text:'KTV'},
              {id:0,text:'游戏'},
              {id:0,text:'DJ热碟'},
              {id:0,text:'动漫'},
              {id:0,text:'影视'},
              {id:0,text:'综艺'},
              {id:0,text:'励志'},
              {id:0,text:'草原风'},
              {id:0,text:'广场舞'},
              {id:0,text:'轻音乐'},
              {id:0,text:'歌手第二季'},
              {id:0,text:'铃声'},
              {id:0,text:'胎教'},
              {id:0,text:'翻唱'},
              {id:0,text:'佛教'},
              {id:0,text:'儿歌'},
              {id:0,text:'小清新'},
              {id:0,text:'减压'},
              {id:0,text:'现场'},
              {id:0,text:'乐器演奏'},
              {id:0,text:'失恋'},
              {id:0,text:'纯音乐'},
              {id:0,text:'粤剧'},
              {id:0,text:'独家'},
            ]
          },
          {
            schame:'语种',
            list:[
              {id:0,text:'国语'},
              {id:0,text:'粤语'},
              {id:0,text:'英语'},
              {id:0,text:'韩语'},
              {id:0,text:'日语'},
              {id:0,text:'小语种'},
              {id:0,text:'闽南语'},
              {id:0,text:'法语'},
            ]
          },
          {
            schame:'风格',
            list:[
              {id:0,text:'流行'},
              {id:0,text:'古风'},
              {id:0,text:'电子'},
              {id:0,text:'民歌'},
              {id:0,text:'摇滚'},
              {id:0,text:'R&B'},
              {id:0,text:'嘻哈'},
              {id:0,text:'民谣'},
              {id:0,text:'爵士'},
              {id:0,text:'中国风'},
              {id:0,text:'古典'},
              {id:0,text:'新世纪'},
              {id:0,text:'乡村'},
              {id:0,text:'民乐'},
            ]
          },
          {
            schame:'年代',
            list:[
              {id:0,text:'70后'},
              {id:0,text:'80后'},
              {id:0,text:'90后'},
              {id:0,text:'00后'}
            ]
          },
          {
            schame:'心情',
            list:[
              {id:0,text:'伤感'},
              {id:0,text:'寂寞'},
              {id:0,text:'安静'},
              {id:0,text:'甜蜜'},
              {id:0,text:'轻松'},
              {id:0,text:'兴奋'},
              {id:0,text:'感动'},
              {id:0,text:'快乐'},
              {id:0,text:'治愈'}
            ]
          },
          {
            schame:'场景',
            list:[
              {id:0,text:'校园'},
              {id:0,text:'店铺'},
              {id:0,text:'运动'},
              {id:0,text:'夜店'},
              {id:0,text:'睡前'},
              {id:0,text:'咖啡厅'},
              {id:0,text:'旅途'},
              {id:0,text:'学习'},
              {id:0,text:'工作'},
              {id:0,text:'编程'},
              {id:0,text:'车载'}
            ]
          }
        ]
      }
    },
    props:[],
    components:{},
    methods:{
      /****************选择类型************/
      chosedSongType:function(val){
         this.$emit('closeSongType',val);
      },
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar1 = $g.scrollV(this.$refs.categorybox,this.$refs.scrollbar1,this.$refs.b);////设置自定义滚动条/////
        setTimeout(()=>{
          this.scrollBar1();
        })
      },
    },
    computed:{},
    mounted(){
      this.mouseWheel_();////设置自定义滚动条/////
    }
  }
</script>
<style>
  .category{
    width:608px;
    height:323px;
    border: 1px solid #ccc;
    position: absolute;
    left:0;
    top:32px;
    background: #ffffff;
    z-index: 2;
    padding: 20px 20px;
    display: block;
  }
  .categoryContent{
    width:100%;
    height:100%;
    overflow: hidden;
    position: relative;
  }
  .categoryUl{
    width:calc(100% + 20px);
    height:100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .categoryLis{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    margin-bottom:10px;
  }
  .categoryTitle{
    width:80px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #888888;
    font-size:14px;
    text-align: left;
  }
  .categoryCUl{
    width:calc(100% - 80px);
  }
  .categoryCLis{
    width:80px;
    text-align: left;
    font-size:14px;
    color: #555555;
    line-height:32px;
    display: inline-block;
    margin-right:5px;
    cursor: pointer;
  }
  .categoryCLis:hover{
    color: #68A9EC;
  }
</style>
