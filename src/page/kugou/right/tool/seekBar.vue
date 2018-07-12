<template>
  <div class="seekBar">
    <div class="showBar">
      <div class="showScale">
        <span>100%</span>
        <span>50%</span>
        <span>0%</span>
      </div>
      <div class="strip">
        <div class="itemBox" ref="itemBox">
          <div class="slidBlock" ref="slideBlock" @mousedown="moveDown" :style="{top:moveCur +'%',marginTop:mtop+'px'}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let _that;
let parentH;
export default {
  data(){
    return{
      moveCur:0,
      mtop:0,
      startY:0,
      showTop:100,
    }
  },
  props:['hideTag','skin'],
  methods:{
    // 鼠标按下
    moveDown:function(e){
      // 记录鼠标按下的位置
      this.startY = e.pageY;
      _that = this;
      document.addEventListener('mousemove',this.moveShift);
      document.addEventListener('mouseup',this.moveUp);
      // 获取父级元素及父元素高度
      let itemBox = this.$refs.itemBox;
      parentH= itemBox.offsetHeight;
      this.$emit('distance',this.showTop);
    },
    moveShift:function(e){
      let moveCur=_that.moveCur;
      let maxf=100-moveCur;   //设置最大滑动范围
      let minf=0-moveCur;     // 设置最小滑动范围
      let y = e.pageY - _that.startY; // 计算鼠标移动的距离
      y=Math.max(minf*parentH/100,y); // 计算滑动的范围
      y=Math.min(maxf*parentH/100,y); // 计算滑动的范围
      _that.mtop=y;
      this.showTop = 100-Math.round(_that.moveCur+y/parentH*100); // 四舍五入转换为百分比
      this.$emit('distance',this.showTop);
    },
    moveUp:function(){
      let moveCur=_that.moveCur;
      let mtop=_that.mtop;
      mtop=mtop/parentH*100;
      moveCur+=mtop;
      _that.moveCur=moveCur;
      _that.mtop=0;
      document.removeEventListener('mousemove',_that.moveShift);
      document.removeEventListener('mouseup',_that.moveUp);
      this.showTop = 100-Math.round(_that.moveCur);
      this.$emit('distance',this.showTop);
    },
  },
  computed:{},
  mounted(){},
  watch:{
  }
}
</script>
<style>
.seekBar{
  width: 100%;
  height: 100%;
  position: relative;
}
  .showBar{
    width: 100%;
    height: 146px;
    position: absolute;
    bottom: 0;
    left: -1px;
    border: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row nowrap;
    background-color: #fff;
  }
  .showScale{
    width: 35px;
    height: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
  }
  .strip{
    width: 20px;
    height: calc(100% - 28px);
    display: flex;
    justify-content: center;
    position: relative;
  }
  .itemBox{
    width: 3px;
    height: 100%;
    background: linear-gradient(#B0AFAF,#E7E7E7);
  }
  .slidBlock{
    width: 20px;
    height: 20px;
    background-color: #D0DBF8;
    position: absolute;
    transform: translateY(-50%);
    /*bottom:100%;*/
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
  }
  .slidBlock span{
    width: 9px;
    height: 9px;
    display: inline-block;
    background-color: #668EEF;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }
</style>
