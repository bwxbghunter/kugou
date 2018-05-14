<template>
  <div class="MVType" >
     <div class="typeBox" v-for="item in option">
       <p class="typeTitle">{{item.type}}</p>
       <div class="Typebox">
         <ul class="typeboxUl clearfix">
           <li class="typeboxLis fl" v-for="val in item.data_list">
             <div class="imgBox">
               <img class="imgTarget" :src="val.url_img" alt="">
               <div class="tipImg">
                 <div class="tipTextImg">{{val.tipText}}</div>
                 <div class="tipPlay"><img :src="val.play_img" alt=""></div>
               </div>
             </div>
             <p> <span></span>{{val.online}}人在看</p>
           </li>
         </ul>
       </div>
     </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

        option:[
          {
            type:'热门',
            data_list:[
              {url_img:'/static/images/mv_img/1.jpg',online:'1.2万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/8.jpg',online:'4065',tipText:'广场舞',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/9.jpg',online:'56',tipText:'性感',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/4.jpg',online:'998',tipText:'舞蹈达人',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/5.jpg',online:'8056',tipText:'伤感网络情歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'1.3万',tipText:'武侠剧',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/7.jpg',online:'9991',tipText:'年度综艺现场',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/11.jpg',online:'9991',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'儿童',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'1.2万',tipText:'儿歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'4065',tipText:'动画片',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'56',tipText:'幼儿园',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'998',tipText:'启蒙故事',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056',tipText:'宝宝巴士',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'1.3万',tipText:'英文儿歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'9991',tipText:'迪士尼',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/21.jpg',online:'9991',tipText:'启蒙音乐剧',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'诱惑',
            data_list:[
              {url_img:'/static/images/mv_img/33.jpg',online:'1.2万',tipText:'性感',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/32.jpg',online:'4065',tipText:'维密天使',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/31.jpg',online:'56',tipText:'魅惑美人',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/30.jpg',online:'998',tipText:'长腿控',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'8056',tipText:'制服控',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/28.jpg',online:'1.3万',tipText:'养眼美女',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'9991',tipText:'长袜天使',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'9991',tipText:'热裤控',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'场景',
            data_list:[
              {url_img:'/static/images/mv_img/25.jpg',online:'1.2万',tipText:'蛇精病院',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/26.jpg',online:'4065',tipText:'中文DJ',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/27.jpg',online:'56',tipText:'练习室',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'998',tipText:'外文DJ',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056',tipText:'泳池派对',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'1.3万',tipText:'电音派对',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'9991',tipText:'夜店混音舞曲',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'9991',tipText:'K拉OK',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'主题',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'1.2万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'4065',tipText:'金曲',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'56',tipText:'伤感网络情歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'998',tipText:'动感网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056',tipText:'年度热歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'1.3万',tipText:'影视',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'9991',tipText:'王者荣耀',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/30.jpg',online:'9991',tipText:'王者荣耀',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'现场',
            data_list:[
              {url_img:'/static/images/mv_img/21.jpg',online:'1.2万',tipText:'年度综艺现场',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/22.jpg',online:'4065',tipText:'蘑菇音乐节',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'56',tipText:'演唱会',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/20.jpg',online:'998',tipText:'异口同声',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'8056',tipText:'经典咏流传',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'1.3万',tipText:'韩国音乐现场',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/11.jpg',online:'9991',tipText:'创造101',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'9991',tipText:'酷狗直播盛典',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'影视',
            data_list:[
              {url_img:'/static/images/mv_img/33.jpg',online:'1.2万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/32.jpg',online:'4065',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/31.jpg',online:'56',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/30.jpg',online:'998',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/29.jpg',online:'8056',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/28.jpg',online:'1.3万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'9991',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'舞蹈',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'1.2万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/19.jpg',online:'4065',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/18.jpg',online:'56',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/17.jpg',online:'998',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/15.jpg',online:'1.3万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/14.jpg',online:'9991',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'歌手',
            data_list:[
              {url_img:'/static/images/mv_img/1.jpg',online:'1.2万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/8.jpg',online:'4065',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/9.jpg',online:'56',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/4.jpg',online:'998',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/5.jpg',online:'8056',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/6.jpg',online:'1.3万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/7.jpg',online:'9991',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          },
          {
            type:'语言',
            data_list:[
              {url_img:'/static/images/mv_img/21.jpg',online:'1.2万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/22.jpg',online:'4065',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/23.jpg',online:'56',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/26.jpg',online:'998',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/25.jpg',online:'8056',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/24.jpg',online:'1.3万',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
              {url_img:'/static/images/mv_img/27.jpg',online:'9991',tipText:'网络红歌',play_img:'/static/images/mv_play.png'},
            ]
          }
        ]
      }
    },
    props:[],
    components:{},
    methods:{

    },
    computed:{},
    mounted(){
      if(this.option.length>0){
         $g.cutImg(135,document.getElementsByClassName('imgTarget'));
      }
    }
  }
</script>
<style>
  .MVType{
    width:calc(100% - 20px);
    height:100%;
    margin:0 0 0 20px;
  }
  .typeBox{
    width:100%;
  }
  .MVType .typeBox{
    margin-bottom:10px;
  }
  .typeTitle{
    width:100%;
    height:15px;
    font-size:15px;
    line-height:15px;
    color: #333333;
    text-align: left;
    border-left:2px solid #288FE7;
    font-weight:normal;
    text-indent: 5px;
    margin-bottom:6px;
  }
  .Typebox,.typeboxUl{
    width: 100%;
  }
  .typeboxLis{
    display: inline-block;
    margin-right:18px;
    width:148px;
    height:135px;
    margin-bottom:6px;
  }
  .typeboxLis:nth-child(4n){
    margin-right:0;
  }
  .typeboxLis .imgBox{
    width:100%;
    height:110px;
    overflow: hidden;
    position: relative;
  }
  .tipImg{
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  .tipTextImg{
    width:100%;
    height:30px;
    font-size:20px;
    text-align: center;
    line-height:30px;
    font-family:"幼圆";
    color: #ffffff;
  }
  .tipPlay{
    width:50px;
    height:50px;
    display: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
  }
  .tipImg:hover .tipPlay{
    display: block;
  }
  .tipImg:hover .tipTextImg{
    display: none;
  }
  .typeboxLis .imgBox .tipPlay img{
    width:16px;
    height:16px;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    margin:auto;
  }
  .typeboxLis .imgBox img{
    width:100%;
    height: 100%;
  }
  .typeboxLis p{
    width:100%;
    height:25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #9E9E9E;
    font-size:13px;
  }
  .typeboxLis p span{
    display: inline-block;
    width:16px;
    height:16px;
    background: url("/static/images/eye.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:5px;
  }
</style>
