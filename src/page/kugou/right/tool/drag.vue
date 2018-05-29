<template>
  <div class="drag">
    <div class="left" @click="changeTransL(-1)"><span></span></div>
    <div class="slider"> <span ref="bar" class="bar" @mousedown="mouseDown"></span></div>
    <div class="right"  @click="changeTransL(1)"> <span></span></div>
  </div>
</template>
<script>
  let _this,_thisp;
  export default{
    data(){
      return{
        startX:0,
        pWidth:0,
        transL:5,// 拖动移动的距离
      }
    },
    props:[],
    components:{},
    methods:{
      mouseDown:function(e){
        _thisp = e.currentTarget.parentNode;
        this.startX = e.pageX;
        this.pWidth = _thisp.offsetWidth;
        _this = this;
        addEventListener('mousemove',this.mouseMove);
        addEventListener('mouseup',this.mouseUp);
      },
      mouseMove:function(e){
        console.log(11);
        let x = e.pageX - _this.startX;
        let bar = this.$refs.bar;
        if(!bar.style) return;
        let l = parseFloat(bar.style.left);
        l = isNaN(l)?10:l;
        _this.transL = parseFloat(x/_this.pWidth*100);
        _this.transL+=l;
        if(_this.transL <= 0){
          _this.transL = 0;
        }else if(_this.transL>=100){
          _this.transL = 100;
        }
        bar.style.marginLeft = (this.transL-l)+'%';
        this.$emit('transLeft', this.transL);

      },
      mouseUp:function(){
        let bar = this.$refs.bar;
        if(!bar.style) return;
        let ml = parseFloat(bar.style.marginLeft);
        let l = parseFloat(bar.style.left);
        l = isNaN(l)?10:l;
        bar.style.marginLeft = 0;
        bar.style.left = ml+l+'%';
        window.removeEventListener("mousemove",_this.mouseMove);
        window.removeEventListener("mouseup",_this.mouseMove);
      },
      // 改变滑块
      changeTransL:function(val){
        if(val >0){
           this.transL+=5;
           if(this.transL>=100){
             this.transL = 100;
           }
        }else{
          this.transL-=5;
          if(this.transL<=0){
            this.transL = 0;
          }

        }
        let bar = this.$refs.bar;
        if(!bar.style) return;
        bar.style.left = this.transL+'%';
        this.$emit('transLeft', this.transL);
      }
    },
    computed:{},
    mounted(){}
  }
</script>
<style scoped>
  .drag{
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .left,.right{
    width:20px;
    height:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #CCCCCC;
    border-radius: 25px;
    cursor: pointer;
  }
  .right span{
    display: inline-block;
    width:15px;
    height:15px;
    background: url("/static/images/jiahao.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .left span{
    display: inline-block;
    width:15px;
    height:15px;
    background: url("/static/images/jianhao.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .slider{
    display: inline-block;
    width:155px;
    height:8px;
    background-color: #CFD6DC;
    position: relative;
  }
  .bar{
    width:8px;
    height:20px;
    background-color: #7B8994;
    cursor: pointer;
    position: absolute;
    left:10%;
    top:0;
    bottom:0;
    margin:auto;
  }
</style>
