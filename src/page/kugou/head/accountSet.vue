<template>
  <div class="accountSet" @click="hideAll">
    <div class="accountSetBox">
      <div class="setItem">
        <div class="imgB"><img src="" alt=""></div>
        <div class="userNameBox">
         <div class="topUser">
           <span class="userText">森界降临</span>
           <div class="setIcon" @click="changeData">
             <div class="setType" ref="setType" v-if="changeSet" title="选项">
               <div class="changeData" @click="changeDatum">修改资料</div>
               <div class="changeData">切换账号</div>
               <div class="changeData">音乐空间</div>
             </div>
           </div>
         </div>
          <div class="bottomUser"></div>
        </div>
        <div class="hadMusic">已购音乐</div>
      </div>
      <div class="integral">
        <div class="balance"><span>积分：</span> <span>208254</span></div>
        <div class="lineIntegral"></div>
        <div class="balance">
          <div class="balanceSp"  v-show="checkW"><span>酷币：</span> <span>0</span>   <span>充值</span>  </div>
          <div class="checkBalance" @click="checkWan" v-show="!checkW">查询酷币余额</div>
        </div>
      </div>
      <div class="timeLimit">
        <div class="VIpLimit"><span>豪华VIP有效期：</span> <span>2019-05-10</span> <span>续费豪华VIP>></span></div>
      </div>
    </div>
    <div class="quit">退出当前账号</div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        checkW:false,//查询酷币
        changeSet:false,// 显示修改选项
      }
    },
    props:[],
    components:{},
    methods:{
      /**********查询酷币****************/
      checkWan:function(){
        this.checkW = true
      },
      /*******设置选项**********/
      changeData:function(){
        this.changeSet = true;
      },
      /*******点击其他区域隐藏选项***********/
      hideAll:function(e){
        let setType = this.$refs.setType;
        if(setType){
           if(!setType.contains(e.target)){
             this.changeSet = false;
           }
        }
      },
      changeDatum:function(){
        this.public.choseItem = '修改资料'
      }
    },
    computed:{
      ...mapState(['public'])
    },
    mounted(){},
    watch:{}
  }
</script>
<style>
 .accountSet{
   width:310px;
   height:180px;
   background-color: #ffffff;
   position: absolute;
   left:-14px;
   right:auto;
   top:40px;
   margin:auto;
   box-shadow: 0px 0px 5px #999;
   z-index: 1;
 }
 .accountSetBox{
   width:280px;
   padding:0 15px;
 }
  .setItem{
    width:100%;
    height:60px;
    margin-top:5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .imgB{
    width:48px;
    height:48px;
    background-color: #F00;
    border-radius: 50%;
  }
  .userNameBox{
    margin-left:15px;
    width:145px;
    height:100%;
    font-size:14px;
    font-weight:bold;
    color: #111;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column;
  }
  .topUser{
    width:100%;
    height:25px;
    margin-top:10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  .setType{
    position: absolute;
    left:25px;
    top:-5px;
    width:88px;
    height:83px;
    border: 1px solid #BFBFBF;
    z-index: 2;
    background: #ffffff;
  }
  .changeData{
    width:100%;
    height:33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    font-weight:normal;
    font-size:12px;
  }
 .changeData:hover{
   background-color: #589DE7;
   color: #ffffff;
 }
  .bottomUser{
    width:100%;
    height:25px;
  }
  .userText{
    max-width:125px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height:20px;
  }
  .setIcon{
    width:15px;
    height:15px;
    background: url("/static/images/accountSet.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-left:5px;
    position: relative;
  }
 .hadMusic{
   background-color: #80B7F1;
   width:60px;
   height:20px;
   border-radius: 3px;
   text-align: center;
   line-height:20px;
   font-size:12px;
   color: #ffffff;
   position: absolute;
   right:0;
   top:10px;
 }
  .integral{
    height:39px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .balance{
    height:100%;
    max-width: 125px;
    text-align: left;
    line-height:40px;
    font-size:12px;
    color: #666666;
  }

 .balanceSp span:nth-child(3){
   color: #2F7FD5;
   cursor: pointer;
   margin-left:20px;
 }
 .checkBalance{
   color: #2F7FD5;
   cursor: pointer;
 }
  .lineIntegral{
    width:1px ;
    height:16px;
    background-color: #666666;
    margin:4px 8px 0;
  }
  .timeLimit{
    width:100%;
    height:40px;
  }
  .VIpLimit{
    width:100%;
    height:100%;
    text-align: left;
    line-height:40px;
    font-size:12px;
    color: #666666;
    letter-spacing: -1px;
    position: relative;
  }
  .VIpLimit span:last-child{
    position: absolute;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    color: #2F7FD5;
    cursor: pointer;
  }
  .quit{
    width:100%;
    line-height:35px;
    height:35px;
    background-color: #F9F9F9;
    color: #AAAAAA;
    font-size:12px;
    text-align: center;
  }
 .quit:hover{
   color: #2F7FD5;
 }



</style>
