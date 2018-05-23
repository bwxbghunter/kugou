<template>
<div class="musicList">
  <div class="listTab">
    <ul class="listTabUl">
      <li class="listTabLis" title="本地列表" @click="chosedLis(0)">
        <div class="lison listTabLis0" :class="{chosed0:lised==0}"></div>
      </li>
      <li class="listTabLis" title="网络收藏" @click="chosedLis(1)">
        <div class="lison listTabLis1" :class="{chosed1:lised==1}"></div>
      </li>
      <li class="listTabLis" title="音乐电台" @click="chosedLis(2)">
        <div class="lison listTabLis2" :class="{chosed2:lised==2}"></div>
      </li>
      <li class="listTabLis" title="手机音乐管理" @click="chosedLis(3)">
        <div class="lison listTabLis3" :class="{chosed3:lised==3}" ></div>
      </li>
      <li class="listTabLis"  title="本地音乐" @click="chosedLis(4)">
        <div class="lison listTabLis4" :class="{chosed4:lised==4}"></div>
      </li>
    </ul>
  </div>
  <div class="musicTypeBoxT">
    <div class="scrollBar" ref="scrollBar"><b ref="b"></b></div>
    <div class="leftScrollV" ref="leftScrollV">
      <div class="allList" :style="{left:-(lised*311)+'px'}">
        <div class="localityBox">
          <commonList :option="locality" :titleAry="obj" :isradio="isradio"></commonList>
        </div>
        <div class="netcollect">
          <commonList :option="netAry" :titleAry="obj" :isradio="isradio"></commonList>
        </div>
        <div class="radioManage">
          <commonList :option="netAry" :titleAry="radioTitle" :isradio="isradio"></commonList>
        </div>
        <div class="phoneManage">
          <commonList :option="netAry" :titleAry="radioTitle" :isradio="isradio"></commonList>
        </div>
        <div class="downloadManage">
          <commonList :option="netAry" :titleAry="downloadTitle" :isradio="isradio"></commonList>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import {mapState} from 'vuex'
  import commonList from './commonList.vue'
  export default{
    data(){
      return{
        scrollbar:function(){},
        option:['本地列表','网络收藏','音乐电台','手机音乐管理','本地音乐'],
        lised:0,
        isradio:false,
        locality:[
          {
            list_name:'默认列表',
            list_length:822,
            list_id:0,
            data_list:[
              {
                 name:'云朵 - 我的楼兰 (DJ沫沫版)',
                 img:'/static/images/kg_logo.jpg',
                 src:'/static/audios/云朵 - 我的楼兰 (DJ沫沫版).mp3'
              },
              {
                name:'格子兮 - 西塘有雨',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/格子兮 - 西塘有雨.flac'
              },
              {
                name:'时砂 - 解锁',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/时砂 - 解锁.mp3'
              }
            ]
          },
          {
            list_name:'每日歌曲推荐',
            list_length:30,
            list_id:1,
            data_list:[
              {
                name:'云朵 - 我的楼兰 (DJ沫沫版)',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/云朵 - 我的楼兰 (DJ沫沫版).mp3'
              },
              {
                name:'格子兮 - 西塘有雨',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/格子兮 - 西塘有雨.flac'
              },
              {
                name:'时砂 - 解锁',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/时砂 - 解锁.mp3'
              }
            ]
          },
          {
            list_name:'最近播放',
            list_length:50,
            list_id:3,
            data_list:[
              {
                name:'云朵 - 我的楼兰 (DJ沫沫版)',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/云朵 - 我的楼兰 (DJ沫沫版).mp3'
              },
              {
                name:'格子兮 - 西塘有雨',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/格子兮 - 西塘有雨.flac'
              },
              {
                name:'时砂 - 解锁',
                img:'/static/images/kg_logo.jpg',
                src:'/static/audios/时砂 - 解锁.mp3'
              }
            ]
          }
        ],
        netAry:[
          {
            list_name:'我喜欢',
            list_length:505,
            data_list:[]
          },
          {
            list_name:'默认收藏',
            list_length:179,
            data_list:[]
          },
          {
            list_name:'凤凰传奇',
            list_length:40,
            data_list:[]
          }
        ],
        obj:{text1:'',id1:0,text2:'',id2:1},
        radioTitle:{text1:'音乐电台',id1:0,text2:'MV电台',id2:1},
        downloadTitle:{text1:'我的下载',id1:0,text2:'本地导入',id2:1}
      }
    },
    props:[],
    components:{commonList},
    methods:{
      /**********选择类型Tab*************/
      chosedLis:function(val){
        this.lised = val;
        if(val != 2){
          this.isradio = true
        }else{
          this.isradio = false;
        }
      },
      mouseWheel:function(){
        this.scrollbar = $g.scrollV(this.$refs.leftScrollV,this.$refs.scrollBar,this.$refs.b);
        setTimeout(()=>{
          this.scrollbar();
        })
      }
    },
    computed:{...mapState(['music'])},
    mounted(){
      this.chosedLis(0);
      this.mouseWheel();
    },
    watch:{},
  }
</script>
<style>
.musicList{
  width:100%;
  height:100%;
}
  .listTab{
    width:100%;
    height:39px;
    border-bottom: 1px solid #E6E6E6;
  }
  .listTabUl{
    width:100%;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row nowrap;
  }
.listTabLis{
  width:60px;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.listTabLis .lison{
    width:19px;
    height:19px;
    transition: all 0.1s ease;
  }
  .listTabLis .listTabLis0{
    background: url("/static/images/music.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .listTabLis .listTabLis0:hover{
    background: url("/static/images/music_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }

.listTabLis .listTabLis1{
  background: url("/static/images/cloud.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis1:hover{
  background: url("/static/images/cloud_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis2{
  background: url("/static/images/radio.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis2:hover{
  background: url("/static/images/radio_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis3{
  background: url("/static/images/phone.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis3:hover{
  background: url("/static/images/phone_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis4{
  background: url("/static/images/download.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis4:hover{
  background: url("/static/images/download_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}

.listTabLis .listTabLis0.chosed0{
  background: url("/static/images/music_chosed.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis1.chosed1{
  background: url("/static/images/cloud_chosed.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis2.chosed2{
  background: url("/static/images/radio_chosed.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis3.chosed3{
  background: url("/static/images/phone_chosed.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.listTabLis .listTabLis4.chosed4{
  background: url("/static/images/download_chosed.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}


  .musicTypeBoxT{
    width:100%;
    height:calc(100% - 40px);
    overflow: hidden;
    position: relative;
  }
  .leftScrollV{
    width:100%;
    height:100%;
  }
  .allList{
    width:1555px;
    height:100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
    position: absolute;
    left:0;
    top:0;
    transition: all 0.2s ease-in-out;
  }
  .localityBox,.netcollect,.radioManage,.phoneManage,.downloadManage{
    width:311px;
    height:100%;
  }
  .scrollBar{
    position: absolute;
    right:0;
    top:0;
    left:auto;
    bottom:auto;
    width:8px;
    height:100%;
    background-color: transparent;
    z-index: 10;
  }
.scrollBar b{
  display: block;
  width:100%;
  height:20px;
  border-radius: 5px;
  background-color:rgba(130, 130, 130, 0.5);
  position: absolute;
  top:0;
  left:0;
  right:0;
  margin:auto;
  cursor: pointer;
}
</style>
