<template>
<div class="handles">
  <span class="line"></span>
  <span class="remote" title="打开遥控器"></span>
  <span class="hideMusic" title="隐藏音乐库"></span>
  <span class="minimum" title="最小化"></span>
  <span class="closeMusic" title="关闭"></span>
</div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:[],
    components:{},
    methods:{},
    computed:{},
    mounted(){},
    watch:{}
  }
</script>
<style scoped>
  .handles{
    width:100%;
    height:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .line{
    display: inline-block;
    width:1px;
    height:18px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .remote,.hideMusic,.minimum,.closeMusic{
    width:18px;
    height:18px;
    min-width:18px;
    min-height:18px;
    margin:0 5px;
    cursor: pointer;
  }
  .remote{
    background: url("/static/images/remote.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .remote:hover{
    background: url("/static/images/remote_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .hideMusic{
    width:16px;
    height:16px;
    min-width:16px;
    min-height:16px;
    background: url("/static/images/pickup.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .hideMusic:hover{
    background: url("/static/images/pickup_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .minimum{
    width:16px;
    height:16px;
    min-width:16px;
    min-height:16px;
    background: url("/static/images/minimum.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .minimum:hover{
    background: url("/static/images/minimum_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .closeMusic{
    width:15px;
    height:15px;
    min-width:15px;
    min-height:15px;
    background: url("/static/images/close.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .closeMusic:hover{
    background: url("/static/images/close.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
</style>
