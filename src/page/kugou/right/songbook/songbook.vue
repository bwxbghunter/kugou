<template>
  <div class="songbook">
    <div class="nav">
      <navBar :option="navAry"></navBar>
    </div>
    <div class="songbookBody">
      <div class="scrollbar" ref="scrollbarkg"><b ref="bkg"></b></div>
      <div class="songbookClassify" ref="classifykg">
        <div class="newThings">
           <div class="newMusicLeft">
             <newMusic :ArrayData="musicList"></newMusic>
           </div>
           <div class="newPlateRight">
             <newPlate :newList="newList"></newPlate>
           </div>
        </div>
        <div class="songNav">
          <div class="songNavePage" title="嗨爆DJ">嗨爆DJ</div>
          <div class="songNavePage" title="怀旧经典">怀旧经典</div>
          <div class="songNavePage" title="洗脑电音">洗脑电音</div>
          <div class="songNavePage" title="车载音乐">车载音乐</div>
          <div class="songNavePage" title="网络红歌">网络红歌</div>
          <div class="songNavePage" title="伤感情歌">伤感情歌</div>
          <div class="songNavePage" title="无损音乐">无损音乐</div>
        </div>
        <div class="moreChoose">
          <ul class="moreChooseUl">
            <li class="moreChooseLis" v-for="item in recommend">
              <moreChoose :ArrayData="item"></moreChoose>
            </li>
          </ul>
        </div>
        <div class="footBox">
          <div class="kugouLink">
            <ul class="kglink">
              <li class="kgLis">酷狗Top500</li>|
              <li class="kgLis">网络红歌</li>|
              <li class="kgLis">酷狗分享榜</li>|
              <li class="kgLis">酷狗飙升榜</li>|
              <li class="kgLis">洗脑神曲</li>|
              <li class="kgLis">美国Billboard榜</li>|
              <li class="kgLis">KTV</li>|
              <li class="kgLis">影视金曲</li>|
              <li class="kgLis">纯音乐</li>|
              <li class="kgLis">伤感网络情歌</li>
            </ul>
            <div class="kgewm"></div>
          </div>
          <div class="kugoujs">
            <div class="jskg clearfix">
              <div class="kgzc fl" title="关于酷狗">关于酷狗</div>
              <div class="kgzc fl" title="推广合作">推广合作</div>
              <div class="kgzc fl" title="产品中心">产品中心</div>
              <div class="kgzc fl" title="版权指引">版权指引</div>
              <div class="kgzc fl" title="意见反馈">意见反馈</div>
            </div>
            <div class="kgLogo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import navBar from '../tool/navBar.vue'
  import newMusic from './newMusic'
  import newPlate from './newPlate'
  import moreChoose from './moreChoose'
  export default{
    data(){
      return{
        scrollBar:function () {},/****滚动条函数引用*****/
        navAry:[
          {id:0,name:'推荐'},
          {id:1,name:'排行榜'},
          {id:2,name:'歌手'},
          {id:3,name:'分类'},
          {id:4,name:'嗨，唱起来！'},
          {id:5,name:'明日之子2'},
          ],
        musicList:[
          {id:1,name:'NC.A - Oh My God',cur_time:'03:16'},
          {id:2,name:'郑国锋 - 倾城一笑',cur_time:'03:44'},
          {id:3,name:'Ellie Goulding - Love Me Like Yo Do',cur_time:'04:13'},
          {id:4,name:'云朵 - 我的楼兰',cur_time:'03:16'},
          {id:5,name:'格子兮 - 荷塘有雨',cur_time:'03:16'},
          {id:6,name:'时砂 - 解锁',cur_time:'03:36'},
          {id:7,name:'Sistar - Bad Boy',cur_time:'04:14'},
          {id:8,name:'葛林 - 林中鸟',cur_time:'03:52'},
          {id:9,name:'徐歌阳 - 一万次悲伤',cur_time:'04:18'},
        ],
        newList:[
          {id:0,text:'听不厌的唯美伤感',img:'/static/images/mv_img/1.jpg'},
          {id:1,text:'劲爆中文DJ',img:'/static/images/mv_img/2.jpg'},
          {id:2,text:'粤语新歌',img:'/static/images/mv_img/3.jpg'},
          {id:3,text:'总有一首你喜欢',img:'/static/images/mv_img/4.jpg'},
        ],
        recommend:[
          {
            title:'个性化推荐',
            id:0,
            details:'根据你的喜好生成，多收藏下载猜的更准',
            more:'更多',
            list:[
              {img:'/static/images/mv_img/18.jpg',text:'每日歌曲推荐'},
              {img:'/static/images/mv_img/19.jpg',text:'倾杯有酒，明月逐人来'},
              {img:'/static/images/mv_img/20.jpg',text:'悠然古风'},
              {img:'/static/images/mv_img/21.jpg',text:'白首日韩新歌给你好听！'},
            ]
          },
          {
            title:'精选歌单',
            id:1,
            details:' ',
            more:' ',
            list:[
              {img:'/static/images/mv_img/22.jpg',text:'情感谎言录：愿人海茫茫，不在遇见'},
              {img:'/static/images/mv_img/23.jpg',text:'2018中国好声音 合辑'},
              {img:'/static/images/mv_img/24.jpg',text:'夏日福利！ 30首清爽欧美男嗓精选'},
              {img:'/static/images/mv_img/25.jpg',text:'甜有一百种方式！|吃糖，蛋糕和98次想你'},
            ]
          },
          {
            title:'精选MV电台',
            id:2,
            details:'根据你的喜好生成，多收藏下载猜的更准',
            more:'更多',
            list:[
              {img:'/static/images/mv_img/26.jpg',text:'打造中国最强女团'},
              {img:'/static/images/mv_img/27.jpg',text:'江湖儿女恩怨情仇'},
              {img:'/static/images/mv_img/28.jpg',text:'萌萌哒儿童音乐剧'},
              {img:'/static/images/mv_img/29.jpg',text:'大妈斗舞进阶必备'},
            ]
          },
          {
            title:'推荐专辑',
            id:3,
            details:'华语 欧美 韩国 日本 畅销',
            more:'更多',
            list:[
              {img:'/static/images/mv_img/30.jpg',text:'流行花园音乐专辑'},
              {img:'/static/images/mv_img/31.jpg',text:'THE GREAT SENUGRI'},
              {img:'/static/images/mv_img/32.jpg',text:'AMH'},
              {img:'/static/images/mv_img/33.jpg',text:'重命名'},
            ]
          },
          {
            title:'推荐MV',
            id:4,
            details:' ',
            more:'更多',
            list:[
              {img:'/static/images/mv_img/8.jpg',text:'SING女团 - 夜笙歌(舞蹈练习室版)'},
              {img:'/static/images/mv_img/35.jpg',text:'张杰、张碧晨 - 只要平凡'},
              {img:'/static/images/mv_img/36.jpg',text:'张靓颖 - 不念(完整版)'},
              {img:'/static/images/mv_img/37.jpg',text:'Ariana Grande - God Is A Womam'},
            ]
          },

        ],

      }
    },
    props:[],
    components:{navBar,newMusic,newPlate,moreChoose},
    methods:{
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.classifykg,this.$refs.scrollbarkg,this.$refs.bkg);////设置自定义滚动条/////
        setTimeout(()=>{
          this.scrollBar();
        })
      },
    },
    computed:{},
    mounted(){
      this.mouseWheel_();
    },
    watch:{
      recommend:function(){
        setTimeout(()=>{
          this.scrollBar();
        })
      }
    }
  }
</script>
<style scoped>
  .songbook{
    width:100%;
    height:100%;
  }
  .nav{
    width:100%;
    height:34px;
    border-bottom: 1px solid #F2F2F2;
  }
  .songbookBody{
    width: 100%;
    height: calc(100% - 35px);
    position: relative;
    overflow: hidden;
  }
  .songbookClassify{
    width: calc(100% - 20px);
    height: 100%;
    padding: 0 20px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .newThings{
    width: 100%;
    height: 440px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
  }
  .newMusicLeft,.newPlateRight{
    width: 50%;
    height: 100%;
  }
  .songNav{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 26px;
    color: #9E9E9E;
    text-align: center;
  }
  .songNavePage{
    width: 80px;
    height: 26px;
    border: 1px solid #E5E5E5;
    border-radius: 1px;
    cursor: pointer;
  }
  .songNavePage:hover{
    background-color: #F9F9F9;
    color: #555555;
  }
  .moreChoose,.moreChooseUl{
    width: 100%;
    height: auto;
  }
  .moreChooseLis{
    width: 100%;
    height: 230px;
  }
  .footBox{
    width: 100%;
    height: 160px;
    overflow: hidden;
  }
  .kugouLink{
    width: 100%;
    height: 80px;
    margin-top: 15px;
    background-color: #C8E2F3;
    display: flex;
    justify-content: space-between;
  }
  .kglink{
    width: calc(100% - 160px);
    padding-left: 10px;
    height: 100%;
    color: #566E7D;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow:row wrap;
  }
  .kgLis{
    padding: 0 4px;
    font-size: 12px;
    cursor: pointer;
  }
  .kgLis:hover{
    text-decoration: underline;
  }
  .kgewm{
    width: 150px;
    height: 80px;
    background: url("/static/images/footkg.png") no-repeat center;
    -webkit-background-size: 100% 82px;
    background-size: 100% 82px;
  }
  .kugoujs{
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .jskg{
    width: calc(100% - 160px);
    padding-left: 10px;
    height: 100%;
  }
  .kgzc{
    width: 70px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #94BDDF;
    text-align: center;
    line-height: 20px;
    border-radius: 3px;
    margin-right: 10px;
    margin-top: 25px;
    cursor: pointer;
  }
  .kgLogo{
    width: 150px;
    height: 50px;
    background: url("/static/images/kglogo.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>

