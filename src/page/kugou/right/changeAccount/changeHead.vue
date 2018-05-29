<template>
  <div class="changeHeadMoudle">
    <p class="yourLove">请设置一个您喜爱的头像：</p>
    <p class="yourLove">（请选择图片文件，最佳尺寸400 x 400，支持JPG,JPEG,GIF,PNG）</p>
    <div class="headPicture">
      <div class="picture" >
        <div class="pictureBoder"  @mousedown="mouseDown"></div>
        <div class="imgboxB">
          <img  :style="{transform:'scale('+(multiple/10+1)+')'}" ref="ImgPic" :src="url" alt="">
        </div>
        <div class="frame" style="left: 9px;top: 9px; transform: rotate(90deg)"></div>
        <div class="frame" style="left: 9px;bottom: 9px;top: auto; transform: rotate(0deg)"></div>
        <div class="frame" style="right: 9px;top: 9px; left: auto; transform: rotate(180deg)"></div>
        <div class="frame" style="right: 9px;bottom: 9px;top: auto; left: auto;  transform: rotate(270deg)"></div>
        <div class="dragBox" v-show="showDrag"> <drag @transLeft="moveLeft"></drag></div>
        <div class="headBtn" >选择头像 <input ref="inp" type="file" ></div>
        <div class="headBtn saveImg">保存</div>
      </div>
      <div class="picLine"></div>
      <div class="previewImg">
        <img :style="{transform:'scale('+(multiple/10+1)+')'}" ref="ImgPic1" :src="url" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  let that;
  import {mapState} from 'vuex'
  import drag from '../tool/drag.vue'
  export default{
    data(){
      return{
        url:'/static/images/mv_img/32.jpg',
        showDrag:false,
        multiple:10,
        beginX:0,
        beginY:0,
      }
    },
    props:[],
    components:{drag},
    methods:{
      moveLeft:function(val){
        this.multiple = val;
      },
      choseImg: function(inp,img,img1,noalert) {
        let fiel = inp;
        this.showDrag = true;
        img = img || false;
        img1 = img1 || false;
        noalert = noalert || false;
        if (typeof FileReader == "undefined") {
          if (!noalert) {
            alert("你的浏览器不支持预览图片预览！")
          };
          return
        };
        let Imgreader = new FileReader();
        let fielobj = fiel;
        let imgobj = img;
        let imgobj1 = img1;
        if (img) {
          imgobj = img;
        } else {
          imgobj = fielobj.parentNode.getElementsByTagName("img");
        };
        if (img1) {
          imgobj1 = img1;
        } else {
          imgobj1 = fielobj.parentNode.getElementsByTagName("img");
        };
        Imgreader.onload = function(e) {
          imgobj.src = e.target.result;
          imgobj1.src = e.target.result;
        };
        fielobj.onchange= function() {
          Imgreader.readAsDataURL(fielobj.files[0])
        }
      },
      mouseDown:function(e){
//       let img = e.target.parentNode.getElementsByTagName('img')[0];
//        console.log(img.offsetX);
        let x = e.pageX;
        let y = e.pageY;
        this.beginX = x;
        this.beginY = y;
        that = this;
        window.addEventListener('mousemove',this.mouseMove_);
        window.addEventListener('mouseup',this.mouseUp_);
      },
      mouseMove_:function(e){
        let img = this.$refs.ImgPic;
        let X = e.pageX - that.beginX;
        let Y = e.pageY - that.beginY;
        img.style.marginLeft = X+'px';
        img.style.marginTop = Y+'px';
        this.imgMap();
      },
      mouseUp_:function(){
        let img = this.$refs.ImgPic;
        let ml = parseFloat(img.style.marginLeft);
        let mt = parseFloat(img.style.marginTop);
        let l = parseFloat(img.style.left);
        let t = parseFloat(img.style.top);
        l=isNaN(l)?0:l;
        t=isNaN(t)?0:t;
        img.style.marginLeft = 0;
        img.style.marginTop = 0;
        img.style.top = mt+t+'px';
        img.style.left=ml+l+'px';
        this.imgMap();
        window.removeEventListener("mousemove",this.mouseMove_);
        window.removeEventListener("mouseup",this.mouseUp_);
      },
      imgMap:function(){
        let img = this.$refs.ImgPic;
        let img1 = this.$refs.ImgPic1;
        ['left','top','marginLeft','marginTop'].forEach((k)=>{
          img1.style[k]=img.style[k];
        })

      }
    },
    computed:{

      ...mapState(['public'])
    },
    mounted(){
      this.choseImg(this.$refs.inp,this.$refs.ImgPic,this.$refs.ImgPic1);
    }
  }
</script>
<style>
  .changeHeadMoudle{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
  }
  .yourLove{
    width:100%;
    height:30px;
    text-align: left;
    line-height:30px;
    font-size:12px;
    color: #666;
  }
  .yourLove:first-child{
    margin-top:18px;
    font-weight:bold;
    font-size:14px;
    color: #464646;
  }
  .headPicture{
    width:100%;
    height:270px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    margin-bottom:30px;
    position: relative;
  }
  .picture{
    width:220px;
    height:220px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgboxB{
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .picture .imgboxB img{
    width:220px;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
  }
  .pictureBoder{
    border: 16px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    z-index: 2;
  }
  .picLine{
    width:2px;
    height:220px;
    margin:0 50px;
    background: -webkit-linear-gradient(#F2F2F2,#DDDDDD, #F2F2F2); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#F2F2F2,#DDDDDD, #F2F2F2); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#F2F2F2,#DDDDDD, #F2F2F2); /* Firefox 3.6 - 15 */
    background: linear-gradient(#F2F2F2,#DDDDDD, #F2F2F2); /* 标准的语法 */
  }
  .previewImg{
    width:117px;
    height:117px;
    padding:8px;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
.previewImg img{
  width:117px;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
}
  .headBtn{
    width:98px;
    height:40px;
    background-color: #4398E8;
    line-height:40px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    color: #ffffff;
    font-size:15px;
    position: absolute;
    bottom:-100px;
    left:0;
    overflow: hidden;
  }
  .headBtn.saveImg{
    left:auto;
    right:0;
  }
  .headBtn input{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    right:0;
    transform:scale(2); transform-origin:left top; opacity: 0;
    cursor: pointer;
  }
  .frame{
    width:25px;
    height:25px;
    position: absolute;
    left:0;
    top:0;
    background: url("/static/images/right_angle.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    z-index: 3;
  }
  .dragBox{
    width:220px;
    height:35px;
    position: absolute;
    left:0;
    bottom:-45px;
    /*background-color: #cccccc;*/
  }
</style>
