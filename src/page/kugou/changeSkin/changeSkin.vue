<template>
  <div class="changeSkin" :class="{moved:isdown}" @mousedown.stop="dragDown" :style="{background:imgUrl}">
    <div class="title">主题皮肤与窗口调整 <span class="closePage" @click="closePage"></span></div>
    <div class="skinBody">
      <div class="skinTab">
        <div class="tabItem" :class="{isItem:status==1}" @click="choseType(1)">推荐</div>
        <div class="tabItem" :class="{isItem:status==2}" @click="choseType(2)">纯色</div>
        <div class="tabItem" :class="{isItem:status==3}" @click="choseType(3)">我的</div>
      </div>
      <div class="skinBodyBox" >
        <div class="scrollbar" ref="scrollbar11"><b ref="b11"></b></div>
        <div class="skinScroll" ref="skinScroll">
          <recommend v-if="status==1" :theme="theme" :skinBox="skinBox"></recommend>
          <pureColor v-if="status==2" :option="pureBox"></pureColor>
          <mine v-if="status==3" :option="option"></mine>
        </div>
      </div>
    </div>
    <div class="skinFooter">
      <div class="footerLeft">
        <div class="listOpacity">
          <span>列表透明</span>
          <span class="progress" @click.stop="changeList(1)">
            <div class="modelBody">
                <div class="seekCur">{{showList}} %</div>
                <div class="seekBtn"></div>
            </div>
            <div class="seekBox" id="listSeek">
              <seekBar v-show="showListSeek" @distance="distanceCur" :skin="skin.listCurrent"></seekBar>
            </div>
          </span>
        </div>
        <div class="skinOpacity">
          <span class="checkInp" @click="choseSkin" :class="{isChosed:!isSkinOpacity}"></span>
          <span>皮肤透明</span>
          <span class="progress" :class="{opacityValue:isSkinOpacity}" @click.stop="changeList(2)">
             <div class="modelBody">
                <div class="seekCur">{{showSkin}} %</div>
                <div class="seekBtn"></div>
             </div>
            <div class="seekBox" id="skinSeek">
              <seekBar v-show="showSkinSeek"  @distance="skinCur" :skin="skin.skinCurrent"></seekBar>
            </div>
          </span>
        </div>
      </div>
      <div class="footerRight">
        <div class="customSkin">自定义皮肤<input  type="file"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import seekBar from '../right/tool/seekBar'
  import pureColor from './pureColor'
  import recommend from './recommend'
  import mine from './mine'
  export default {
    data(){
      return{
        showList:100,      // 列表拖动条默认显示值
        showSkin:100,      // 皮肤拖动条默认显示值
        showListSeek:false,// 判断是否显示列表拖动条
        showSkinSeek:false,// 判断是否显示皮肤拖动条
        isSkinOpacity:false,// 判断是否选择皮肤透明度
        status:1,          // tab默认选中项
        scrollBar:function(){},// 自定义滚动条
        diffX:0,           // 鼠标按下时距离父元素的边框宽度
        diffY:0,           // 鼠标按下时距离父元素的边框高度
        drag:'',           // dom元素
        isdown:false,      // 判断鼠标是否按下
        theme:[
          {id:200,img:'/static/images/mv_img/13.jpg'},
          {id:201,img:'/static/images/mv_img/16.jpg'},
          {id:202,img:'/static/images/mv_img/31.jpg'},
        ],
        skinBox:[
          {id:300,img:'/static/images/mv_img/1.jpg',text:'激情世界杯'},
          {id:301,img:'/static/images/mv_img/2.jpg',text:'酷狗年 旺旺旺'},
          {id:302,img:'/static/images/mv_img/3.jpg',text:'鸡年中秋'},
          {id:303,img:'/static/images/mv_img/4.jpg',text:'变形金刚'},
          {id:304,img:'/static/images/mv_img/5.jpg',text:'致列十周年'},
          {id:305,img:'/static/images/mv_img/6.jpg',text:'鸡年大吉'},
          {id:306,img:'/static/images/mv_img/7.jpg',text:'圣诞雪夜'},
          {id:307,img:'/static/images/mv_img/8.jpg',text:'十二月'},
          {id:308,img:'/static/images/mv_img/9.jpg',text:'恨幸福来过'},
          {id:309,img:'/static/images/mv_img/10.jpg',text:'麋鹿'},
          {id:310,img:'/static/images/mv_img/11.jpg',text:'薄荷山色'},
          {id:311,img:'/static/images/mv_img/12.jpg',text:'海洋之声'},
          {id:312,img:'/static/images/mv_img/13.jpg',text:'星空'},
        ],
        option:[
          {id:56,img:'/static/images/mv_img/13.jpg',text:'13'},
          {id:57,img:'/static/images/mv_img/16.jpg',text:'16'},
          {id:58,img:'/static/images/mv_img/20.jpg',text:'20'},
          {id:59,img:'/static/images/mv_img/28.jpg',text:'28'},
          {id:60,img:'/static/images/mv_img/8.jpg',text:'28'},
          {id:61,img:'/static/images/mv_img/26.jpg',text:'26'},
          {id:62,img:'/static/images/mv_img/2.jpg',text:'2'},
          {id:63,img:'/static/images/mv_img/31.jpg',text:'31'},
        ],
        pureBox:[
          {id:0,color:'#E892CA'},
          {id:1,color:'#CC7EB1'},
          {id:2,color:'#BC64A4'},
          {id:3,color:'#AA4C8F'},
          {id:4,color:'#915C8B'},
          {id:5,color:'#8A4D80'},
          {id:6,color:'#9E8B8E'},
          {id:7,color:'#71686C'},
          {id:8,color:'#59B9C6'},
          {id:9,color:'#2CA9E1'},
          {id:10,color:'#2792C3'},
          {id:11,color:'#5383C3'},
          {id:12,color:'#2A83A2'},
          {id:13,color:'#007BBB'},
          {id:14,color:'#507EA4'},
          {id:15,color:'#4C6CB3'},
          {id:16,color:'#B0CA71'},
          {id:17,color:'#AACF53'},
          {id:18,color:'#99AB4E'},
          {id:19,color:'#A1A46D'},
          {id:20,color:'#8C8861'},
          {id:21,color:'#928C36'},
          {id:22,color:'#69821B'},
          {id:23,color:'#726D40'},
          {id:24,color:'#F5B199'},
          {id:25,color:'#EE827C'},
          {id:26,color:'#EC6D71'},
          {id:27,color:'#CD5C5C'},
          {id:28,color:'#FA8072'},
          {id:29,color:'#E7609E'},
          {id:30,color:'#C85179'},
          {id:31,color:'#C85554'},
          {id:32,color:'#EBB471'},
          {id:33,color:'#E8B647'},
          {id:34,color:'#D0AF4C'},
          {id:35,color:'#D9A62E'},
          {id:36,color:'#B68E55'},
          {id:37,color:'#CB8347'},
          {id:38,color:'#C37854'},
          {id:39,color:'#B77B57'},
          {id:40,color:'#83CCD2'},
          {id:41,color:'#84B9CB'},
          {id:42,color:'#80ABA9'},
          {id:43,color:'#00A497'},
          {id:44,color:'#38B48B'},
          {id:45,color:'#00A381'},
          {id:46,color:'#698AAB'},
          {id:47,color:'#5C9291'},
          {id:48,color:'#A99E93'},
          {id:49,color:'#A58F86'},
          {id:50,color:'#887F7A'},
          {id:51,color:'#B4866B'},
          {id:52,color:'#B28C6E'},
          {id:53,color:'#9F6F55'},
          {id:54,color:'#8C6450'},
          {id:55,color:'#6B6F59'},
        ],
      }
    },
    props:[],
    components:{seekBar,pureColor,recommend,mine},
    methods:{
      dragDown:function(e){
        this.hideBar(e); // 调用点击其它地方拖动条组件隐藏
        this.isdown = true;
        let drag = e.currentTarget; // 获取拖动元素
        this.drag = drag;
        let tag = e || window.event;
        this.diffX = parseInt(tag.clientX - drag.offsetLeft)||0; // 鼠标按下时距离父元素的边框宽度
        this.diffY = parseInt(tag.clientY - drag.offsetTop)||0;   // 鼠标按下时距离父元素的边框高度
        if(typeof drag.setCapture!='undefined'){
          drag.setCapture();
        }
        document.addEventListener('mousemove',this.dragMove);
        document.addEventListener('mouseup',this.dragUp);
      },
      dragMove:function(e){
        let tag = e|| window.event;
        let left = tag.clientX - this.diffX;
        let top = tag.clientY - this.diffY;
        if(left < 0){
          left = 0;
        }else if(left > document.documentElement.clientWidth - this.drag.offsetWidth){
          left = document.documentElement.clientWidth - this.drag.offsetWidth;
        }
        if(top < 0){
          top = 0
        }else if(top > document.documentElement.clientHeight - this.drag.offsetHeight){
          top = document.documentElement.clientHeight - this.drag.offsetHeight;
        }
        this.drag.style.left = left +'px';
        this.drag.style.top = top +'px';
      },
      dragUp:function(e){
        document.removeEventListener('mousemove',this.dragMove);
        document.removeEventListener('mouseup',this.dragUp);
        this.isdown = false;
        if(typeof this.drag.releaseCapture!='undefined'){
          this.drag.releaseCapture();
        }
      },
      // 关闭换肤页面按钮
      closePage:function(){
        this.skin.showPage = false;
      },
      // 列表拖动条抛出的事件值
      distanceCur:function(val){
        this.showList = val;
        this.skin.listCurrent = val/100;
      },
      // 皮肤拖动条抛出的事件值
      skinCur:function(val){
        this.showSkin = val;
        this.skin.skinCurrent = val/100;
      },
      // 判断点击的是哪个拖动条盒子
      changeList:function(val){
        if(val==1){
          this.showListSeek = true;
        }else if(val == 2){
          if(!this.isSkinOpacity){
            this.showSkinSeek = true;
          }
        }
      },
      // 点击其他地方隐藏拖动条
      hideBar:function(e){
        let listSeek = document.getElementById('listSeek');
        let skinSeek = document.getElementById('skinSeek');
        if(listSeek||skinSeek){
          if(!listSeek.contains(e.target)||!skinSeek.contains(e.target)){
            this.showListSeek = false;
            this.showSkinSeek = false;
          }
        }
      },
      // 选择皮肤透明复选框
      choseSkin:function(){
        this.isSkinOpacity = !this.isSkinOpacity;
      },
      // 选择类型 推荐||纯色||我的
      choseType:function(val){
        this.status = val;
      },
      /****************自定义滚动条****************************/
      mouseWheel_:function(){
        this.scrollBar = $g.scrollV(this.$refs.skinScroll,this.$refs.scrollbar11,this.$refs.b11);////设置自定义滚动条/////
        setTimeout(()=>{
          this.scrollBar();
        })
      },
    },
    computed:{
      ...mapState(['skin']),
      imgUrl:function(){
        let skin = this.skin.mainSkin;
        if(skin.indexOf('#')>-1){
          return this.skin.mainSkin;
        }else {
          return this.skin.mainSkin = 'url('+this.skin.mainSkin+')';
        }
      }
    },
    watch:{
      skinBox:function(){
        setTimeout(()=>{
          this.scrollBar();
        })
      },
      option:function(){
        setTimeout(()=>{
          this.scrollBar();
        })
      },
      pureBox:function(){
        setTimeout(()=>{
          this.scrollBar();
        })
      },
    },
    mounted(){
      this.mouseWheel_();
    }
  }
</script>
<style scoped>
.changeSkin{
  width: 555px;
  height: 440px;
  position: fixed;
  /*position: absolute;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*margin: auto;*/
  z-index: 20;
  background: url("/static/images/bg.png") no-repeat center;
  -webkit-background-size: 130% 100%;
  background-size: 130% 100%;
}
.moved{
  cursor: move;
}
  .title{
    width: 100%;
    height: 37px;
    line-height: 37px;
    color: #ffffff;
    font-size: 13px;
    text-align: left;
    text-indent: 12px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.17);
  }
  .closePage{
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
    display: inline-block;
    width: 13px;
    height: 13px;
    background: url("/static/images/close.png") no-repeat center center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .skinBody{
    width: 100%;
    height: calc(100% - 90px);
    background-color: #fff;
    overflow: hidden;
  }
  .skinTab{
    width: 100%;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #EBEBEB;
  }
  .tabItem{
    width: 80px;
    line-height: 39px;
    text-align: center;
    cursor: pointer;
    color: #777;
    font-size: 15px;
  }
.isItem.tabItem{
  color: #169AF3;
}
.skinBodyBox{
  width: 100%;
  height: calc(100% - 40px);
  position: relative;
}
.skinScroll{
  width: calc(100% + 20px);
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x:hidden ;
}
  .skinFooter{
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
  }
  .footerLeft{
    width: 320px;
    height: 100%;
    margin-left: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666;
    font-size: 13px;
  }
  .listOpacity,.skinOpacity{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .checkInp{
    width: 12px;
    height: 12px;
    border-radius: 3px;
    border: 1px solid #C5C5C5;
    margin-right: 6px;
    cursor: pointer;
  }
  .isChosed{
    width: 12px;
    height: 12px;
    display: inline-block;
    background: url("/static/images/selected.png")no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .progress{
    display: inline-block;
    width: 74px;
    height: 22px;
    border: 1px solid #C5C5C5;
    margin-left: 10px;
    cursor: pointer;
  }
  .opacityValue.progress{
    opacity: 0.68;
    cursor: default;
  }
.modelBody{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  color: #666;
}
.seekCur{
  display: inline-block;
  width: 45px;
}
.seekBtn{
  width: 10px;
  height: 6px;
  display: inline-block;
  background: url("/static/images/open.png") no-repeat center;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  transform: rotate(180deg);
}
.seekBox{
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 44px;
}
  .footerRight{
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 13px;
    color: #666;
    margin-right: 18px;
  }
  .customSkin{
    width: 78px;
    height: 25px;
    border: 1px solid #c5c5c5;
    text-align:center;
    line-height: 25px;
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }
.customSkin:hover{
  color: #969696;
  border: 1px solid #969696;
}
  .customSkin input{
    opacity: 0;
    width: 200%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
