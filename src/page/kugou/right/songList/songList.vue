<template>
  <div class="songList" ref="songList" @click="hideType">
    <div class="scrollbar" ref="scrollbar1"><b ref="b"></b></div>
    <div class="songlistBox" ref="songlistBox" @scroll="scrollTop_">
      <div class="tabItem">
        <div class="leftItem" :class="{styleC:isshowType}">
          <div class="leftClassify" ref="leftClass" @click="showType">{{typeText=='全部'?typeText+'分类':typeText}} <span class="arrow"></span> <span class="lineLeftright"></span></div>
          <div class="contribute" @click="submitContribute"><span class="msg"></span>歌单投稿</div>
          <category v-show="!isshowType"  @closeSongType="hideCategory"></category>
        </div>
        <div class="rightItem">
          <ul class="rightItemUl">
            <li class="rightItemLis" @click="choseTab(item,index)" :class="{chosedRightItemlis:itemLisIndex==index}" v-for="(item,index) in option">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="hotlabel">
        <ul class="hotlabelUL">
          <li class="hotlabelLis" :title="item" v-for="(item,index) in hotOption">{{item}}</li>
        </ul>
      </div>
      <div class="songListBox">
        <songTable :songAry="dataAry"></songTable>
      </div>
    </div>
  </div>
</template>
<script>
  import songTable from './songTable.vue'
  import category from './category.vue'
  export default{
    data(){
      return{
        scrollBar:function () {},/****滚动条函数引用*****/
        isshowType:true,// 控制样式  显示隐藏分类组件
        typeText:'全部',
        itemLisIndex:0,
        option:[
          {id:0,name:'推荐'},
          {id:1,name:'最热'},
          {id:1,name:'最新'},
          {id:1,name:'收藏'},
          {id:1,name:'飙升'},
        ],
        hotOption:['热门标签','粤语','动漫','纯音乐','儿歌','日语','轻音乐'],
        songAry:[
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/12.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/5.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/8.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/32.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/27.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/24.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/25.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/22.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/26.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/19.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/18.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/17.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/16.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/13.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/21.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/12.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/5.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/8.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/32.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/27.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/24.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/25.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/22.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/26.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/19.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/18.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/17.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/16.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/13.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/21.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/12.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/5.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/8.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/32.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/27.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/24.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/25.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/22.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/26.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/19.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/18.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/17.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/16.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/13.jpg',
          author:'谛听',
        },
        {
          num:18.3 ,
          title:'日系温柔女生，柔情似雪 若如初见',
          img:'/static/images/mv_img/21.jpg',
          author:'谛听',
        },
      ],
        dataAry:[],
        page:0,
        curent:12,
        flag:false,
      }
    },
    props:[],
    components:{songTable,category},
    methods:{
      scrollTop_:function(){
        //获取滚动条滑动的距离
        let scrollTop = this.$refs.songlistBox.scrollTop;
        // 获取可视窗口高度
        let offsetHeight = this.$refs.songList.offsetHeight;
        let lis = document.getElementsByClassName('songTableLis');
        let loadText = document.getElementsByClassName('loadText')[0];
        for(let i=0;i<lis.length;i++){
          if(lis[i].offsetTop<scrollTop+offsetHeight){
            this.lazyLoad();
          }
        }
      },
      /***********加载更多****/
      lazyLoad:function(){
        if(this.flag){
           return;
        }
        this.flag = true;
        setTimeout(()=>{
          for(let i=this.page*this.curent;i<(this.page+1)*this.curent&&i<this.songAry.length;i++){
              this.dataAry.push(this.songAry[i]);
          }
          this.page++;
          this.flag=false;
        },2000)
      },
      /****************点击其他地方隐藏分类组件***/
      hideType:function(e){
        let div = this.$refs.leftClass;
        if(div){
            if(!div.contains(e.target)){
              this.isshowType = true;
            }
        }
      },
      /****************选择推荐、最热*********/
      choseTab:function(item,index){
         this.itemLisIndex = index;
      },
      /****************隐藏分类组件*********/
      hideCategory:function(item){
        this.typeText = item.text;
        this.isshowType = true;
      },
      /****************显示分类组件***********/
      showType:function(){
        this.isshowType = !this.isshowType;
      },
      /****************歌单投稿******/
      submitContribute:function(){
        this.$emit('submitContribute_')
      },
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.songlistBox,this.$refs.scrollbar1,this.$refs.b);////设置自定义滚动条/////
        setTimeout(()=>{

          this.lazyLoad();
          this.scrollBar();
        })
      },
    },
    computed:{},
    mounted(){
//        this.scrollTop_();
        this.lazyLoad();
        this.mouseWheel_();////设置自定义滚动条/////
    }
  }
</script>
<style scoped>
  .songList{
    width:100%;
    margin:auto;
    height:100%;
    overflow: hidden;
    position: relative;
  }
  .songlistBox{
    width:calc(100% - 20px);
    height:100%;
    padding:0 20px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .styleC .category{
    display: none;
  }
  .tabItem{
    width:100%;
    height:54px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .leftClassify,.contribute{
    /*width:100px;*/
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    height:26px;
    line-height:26px;
    font-size:14px;
    color: #555555;
    text-align: center;
    cursor: pointer;
    padding:0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    position: relative;
  }
  .arrow{
    display: inline-block;
    width:15px;
    height:15px;
    background: url('/static/images/arrow-down.png') no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin:0 0 0 10px;
    transform: rotate(180deg);
  }
  .styleC .arrow{
    transform: rotate(0deg);
  }
  .lineLeftright{
    display: inline-block;
    position: absolute;
    top: 100%;
    height: 6px;
    width: 100%;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background: #fff;
    z-index: 3;
  }
  .styleC .lineLeftright{
    display: none;
  }
  .contribute{
    margin-left:10px;
  }
  .contribute:hover,.styleC  .leftClassify:hover{
    color: #68A9EC;
    border: 1px solid #68A9EC;
  }
  .contribute:hover .msg{
    background: url("/static/images/plane_hover.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100% ;
  }
  .styleC .leftClassify:hover .arrow{
    background: url('/static/images/arrow-down_hover.png') no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .leftItem{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    position: relative;
  }
  .msg{
    display: inline-block;
    width:20px;
    height:20px;
    background: url("/static/images/plane.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:5px;
  }
  .rightItem{
    height:100%;
  }
  .rightItemUl{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: row nowrap;
  }
  .rightItemLis{
    border-left:1px solid #CCCCCC;
    height:15px;
    font-size:14px;
    color: #555555;
    width:49px;
    text-align: center;
    cursor: pointer;
  }
  .rightItemLis:first-child{
    border:none;
  }
  .rightItemLis.chosedRightItemlis{
    color: #169AF3;
  }
  .hotlabel{
    width:100%;
    height:58px;
  }
  .hotlabelUL{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .hotlabelLis{
    width:80px;
    border: 1px solid #ccc;
    line-height:28px;
    height:28px;
    margin-right:12px;
    text-align: center;
    border-radius:4px;
    cursor:pointer;
  }
  .hotlabelLis:first-child{
    border:none;
    text-align: left;
    width:auto;
    cursor: default;
  }
  .hotlabelLis:hover{
    background-color: rgba(0, 0, 0, 0.04);
    box-shadow: 0px 0px 1px #f9f9f9;
  }
  .songListBox{
    width:100%;
  }
</style>
