<template>
  <div class="radioBox">
    <div class="scrollbar" ref="scrollbar1"><b ref="b"></b></div>
    <div class="radioscroll" ref="radioscroll" @scroll="onwheel">
      <div class="choseRadio">
        <ul class="choseRadioUl">
          <li class="choseRadioLis" @click="choseRadio(item)" :class="{ischoosed:choseid==item.id}" v-for="(item,index) in tab">{{item.text}}</li>
        </ul>
      </div>
      <div class="slideshowBox">
        <!--<slideShow></slideShow>-->
        <slider></slider>
      </div>

      <div class="radioTab" :class="{suspend:compare}"><tabBar :option="tabAry"  @changeIndex="changeIndex" :letterType="letterType"></tabBar></div>
      <div class="radioTypeBox" :class="{mbsuspend:compare}">
        <radioType :option="option"></radioType>
      </div>
    </div>
  </div>
</template>
<script>
  import tabBar from '../tool/tabBar.vue'
  import radioType from './radioType.vue'
  import slideShow from '../tool/slideShow.vue'
  import slider from '../tool/slider.vue'
  export default{
    data(){
      return{
        letterType:0,/****tabBar索引***/
        choseid:0,/*******选择电台id****/
        compare:false,
        tab:[{id:0,text:'公共电台'},{id:1,text:'高潮电台'},{id:2,text:'真人电台'},{id:3,text:'网友电台'},],
        tabAry:[
          {id:0,name:'推荐'},
          {id:1,name:'DJ'},
          {id:2,name:'语言'},
          {id:3,name:'主题'},
          {id:4,name:'场景'},
          {id:5,name:'心情'},
          {id:6,name:'风格'},
          {id:7,name:'人群'},
          {id:8,name:'儿童'},
          {id:9,name:'乐器'},
        ],
        option:[
          {
            type:'推荐',
            data_list:[
              {url_img:'/static/images/mv_img/1.jpg',online:'听的越多，猜的越准',tipText:'猜你喜欢',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/8.jpg',online:'张杰、林俊杰 - ',tipText:'酷狗热歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/9.jpg',online:'韩雪 - 想起',tipText:'KTV必点曲',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/4.jpg',online:'唐古 - 直到遇见你',tipText:'舞蹈达人',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/5.jpg',online:'内地群星 - 地球人都知道我爱你',tipText:'伤感网络情歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'容祖儿 - 爱情复兴',tipText:'武侠剧',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/7.jpg',online:'Maroon 5 - On',tipText:'年度综艺现场',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/8.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/9.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/10.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/11.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/12.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/13.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'DJ',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'听的越多，猜的越准',tipText:'儿歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'听的越多，猜的越准',tipText:'动画片',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'听的越多，猜的越准',tipText:'幼儿园',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'听的越多，猜的越准',tipText:'启蒙故事',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'听的越多，猜的越准',tipText:'宝宝巴士',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'听的越多，猜的越准',tipText:'英文儿歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'听的越多，猜的越准',tipText:'迪士尼',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/21.jpg',online:'听的越多，猜的越准',tipText:'启蒙音乐剧',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/37.jpg',online:'听的越多，猜的越准',tipText:'启蒙音乐剧',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/36.jpg',online:'听的越多，猜的越准',tipText:'启蒙音乐剧',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'语言',
            data_list:[
              {url_img:'/static/images/mv_img/33.jpg',online:'听的越多，猜的越准',tipText:'性感',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/32.jpg',online:'听的越多，猜的越准',tipText:'维密天使',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/31.jpg',online:'听的越多，猜的越准',tipText:'魅惑美人',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/30.jpg',online:'听的越多，猜的越准',tipText:'长腿控',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'听的越多，猜的越准',tipText:'制服控',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/28.jpg',online:'听的越多，猜的越准',tipText:'养眼美女',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'听的越多，猜的越准',tipText:'长袜天使',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'听的越多，猜的越准',tipText:'热裤控',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/35.jpg',online:'听的越多，猜的越准',tipText:'热裤控',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/34.jpg',online:'听的越多，猜的越准',tipText:'热裤控',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'主题',
            data_list:[
              {url_img:'/static/images/mv_img/25.jpg',online:'听的越多，猜的越准',tipText:'蛇精病院',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/26.jpg',online:'听的越多，猜的越准',tipText:'中文DJ',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/27.jpg',online:'听的越多，猜的越准',tipText:'练习室',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'听的越多，猜的越准',tipText:'外文DJ',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'听的越多，猜的越准',tipText:'泳池派对',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'听的越多，猜的越准',tipText:'电音派对',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'听的越多，猜的越准',tipText:'夜店混音舞曲',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'听的越多，猜的越准',tipText:'K拉OK',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/32.jpg',online:'听的越多，猜的越准',tipText:'K拉OK',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/33.jpg',online:'听的越多，猜的越准',tipText:'K拉OK',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'场景',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'听的越多，猜的越准',tipText:'金曲',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'听的越多，猜的越准',tipText:'伤感网络情歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'听的越多，猜的越准',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'听的越多，猜的越准',tipText:'年度热歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'听的越多，猜的越准',tipText:'影视',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'听的越多，猜的越准',tipText:'王者荣耀',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/30.jpg',online:'听的越多，猜的越准',tipText:'王者荣耀',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/31.jpg',online:'听的越多，猜的越准',tipText:'王者荣耀',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'听的越多，猜的越准',tipText:'王者荣耀',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'心情',
            data_list:[
              {url_img:'/static/images/mv_img/21.jpg',online:'听的越多，猜的越准',tipText:'年度综艺现场',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/22.jpg',online:'听的越多，猜的越准',tipText:'蘑菇音乐节',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'听的越多，猜的越准',tipText:'演唱会',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/20.jpg',online:'听的越多，猜的越准',tipText:'异口同声',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'听的越多，猜的越准',tipText:'经典咏流传',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'听的越多，猜的越准',tipText:'韩国音乐现场',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/11.jpg',online:'听的越多，猜的越准',tipText:'创造101',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'听的越多，猜的越准',tipText:'酷狗直播盛典',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/28.jpg',online:'听的越多，猜的越准',tipText:'酷狗直播盛典',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/27.jpg',online:'听的越多，猜的越准',tipText:'酷狗直播盛典',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'风格',
            data_list:[
              {url_img:'/static/images/mv_img/33.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/32.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/31.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/30.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/28.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/27.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/25.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'人群',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'儿童',
            data_list:[
              {url_img:'/static/images/mv_img/1.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/8.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/9.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/4.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/5.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/7.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/22.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/21.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'乐器',
            data_list:[
              {url_img:'/static/images/mv_img/21.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/22.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/26.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/25.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/27.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/20.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'听的越多，猜的越准',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          }
        ],
      }
    },
    props:[],
    components:{tabBar,radioType,slideShow,slider},
    methods:{
        /***********滚动事件********/
        onwheel:function(){
          let scrollT = this.$refs.radioscroll.scrollTop;
          if(scrollT>=210){
             this.compare = true;
          }else{
            this.compare = false;
          }
          let ul =document.getElementsByClassName('radiotypeBox');
          for(let i=ul.length-1;i>-1;i--){
             if(ul[i].offsetTop<scrollT+75){
                this.letterType = i;
                return false;
             }
          }
        },
       /***************选择tabbar***********/
       changeIndex:function(index){
         let ul =document.getElementsByClassName('radiotypeBox')[index];
         this.$refs.radioscroll.scrollTop = ul.offsetTop-65;
       },
       /***************选择电台*******************/
       choseRadio:function(item){
         this.choseid = item.id;
       },
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.radioscroll,this.$refs.scrollbar1,this.$refs.b);////设置自定义滚动条/////
        setTimeout(()=>{
          this.scrollBar();
        })
      },
    },
    computed:{},
    mounted(){this.mouseWheel_()}
  }
</script>
<style>
  .radioBox{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
  }
  .radioscroll{
    width:calc(100% - 20px);
    height:100%;
    padding:0 20px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .choseRadio{
    width:100%;
    height:30px;
    line-height:30px;
    color: #666;
  }
  .choseRadioUl{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
  }
  .choseRadioLis{
    width:120px;
    height:100%;
    text-align: center;
    cursor: pointer;
  }
  .choseRadioLis.ischoosed{
    color: #288FE7;
  }
  .slideshowBox{
    width:100%;
    height:175px;
    padding:10px 0;
    background-color: #000;
  }
  .radioTab{
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .radioTab.suspend{
    position: absolute;
    top:0;
    left:0;
    transition: all 0.15s ease;
    background-color: #fff;
    height:48px;
    border-top:1px solid #F2F2F2;
    border-bottom:1px solid #F2F2F2;
    box-shadow: 0px 1px 1px #b7b7b7;
    z-index: 1;
  }
  .radioTypeBox{
    margin-top:10px;
    width:100%;
    height:calc(100% - 285px);
  }
  .radioTypeBox.mbsuspend{
    margin-top:50px;
  }
</style>
