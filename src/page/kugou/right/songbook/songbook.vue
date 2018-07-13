<template>
  <div class="songbook">
    <div class="nav">
      <navBar :option="navAry"></navBar>
    </div>
    <div class="songbookBody">
      <div class="scrollbar" ref="scrollbar12"><b ref="b12"></b></div>
      <div class="songbookClassify" ref="classify">
        <div class="newThings">
           <div class="newMusicLeft">
             <newMusic :ArrayData="musicList"></newMusic>
           </div>
           <div class="newPlateRight">
             <newPlate></newPlate>
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
        ]
      }
    },
    props:[],
    components:{navBar,newMusic,newPlate},
    methods:{
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.classify,this.$refs.scrollbar12,this.$refs.b12);////设置自定义滚动条/////
        setTimeout(()=>{
          this.scrollBar();
        })
      },
    },
    computed:{},
    mounted(){
      this.scrollBar();
    }
  }
</script>
<style>
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
  }
  .songbookClassify{
    width: calc(100% - 40px);
    height: 100%;
    padding: 0 20px;
  }
  .newThings{
    width: 100%;
    height: 400px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
  }
  .newMusicLeft,.newPlateRight{
    width: 50%;
    height: 100%;
  }
</style>

