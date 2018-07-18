<template>
  <div class="changedata">
    <div class="changeHead">
      <span class="settings">账号设置</span>
      <span class="mySpace">我的音乐空间</span>
    </div>
    <div class="changeCont">
      <ul class="changeTabUl">
        <li class="changeTabLis" @click="choseTab(item)" :class="{nowaday:isTab==item.id}" v-for="(item,index) in tabAry">{{item.text}}</li>
      </ul>
      <div class="changeModule">
        <personalData v-if="isTab==0"></personalData>
        <changeHead v-if="isTab==1"></changeHead>
        <changePwd v-if="isTab==2"></changePwd>
        <accountScurity v-if="isTab==3"></accountScurity>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import personalData from './personalData.vue'
  import changeHead from './changeHead.vue'
  import changePwd from './changePwd.vue'
  import accountScurity from './accountScurity.vue'
  export default{
    data(){
      return{
        isTab:0,
        tabAry:[{id:0,text:'个人资料'},{id:1,text:'修改头像'},{id:2,text:'修改密码'},{id:3,text:'账号安全'}],
      }
    },
    props:[],
    components:{accountScurity,personalData,changeHead,changePwd},
    methods:{
      choseTab:function(item){
         this.isTab = item.id;
      }
    },
    computed:{
      ...mapState(['public'])
    },
    mounted(){}
  }
</script>
<style>
  .changedata{
    width:100%;
    height:100%;
    position: relative;
    background-color: #F5F5F5;
  }
  .changeHead{
    width:calc(100% - 40px);
    height:29px;
    border-bottom: 1px solid #E4E4E4;
    padding:0 20px;
    margin:auto;
    line-height:29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:12px;
    color: #6c6c6c;
    background-color: #fff;
  }
  .mySpace{
    color: #64B0FA;
    cursor: pointer;
  }
  .mySpace:hover{
    text-decoration: underline;
  }
  .changeCont{
    width:575px;
    height:calc(100% - 30px);
    margin:auto;
  }
  .changeTabUl{
    width:100% ;
    height:64px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-flow: row nowrap;
    border-bottom:1px solid #64B0FA;
  }
  .changeTabLis{
    width:120px;
    height:34px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    line-height:34px;
    text-align: center;
    font-size:14px;
    margin-right:10px;
    background-color: #CECECE;
    color: #ffffff;
    cursor: pointer;
    margin-bottom:1px;
  }
  .changeTabLis:hover{
    background-color: #B8B8B8;
  }
  .changeTabLis.nowaday{
    background-color: #64B0FA;
  }
  .changeModule{
    width:100%;
    height:calc(100% - 65px);
  }
</style>
