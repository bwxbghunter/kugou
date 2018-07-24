<template>
<div class="searchBox">
  <div class="leftSearch">
    <span class="turnBack"></span>
    <span class="refresh"></span>
    <div class="search">
      <input type="text">
      <span class="searchIcon"></span>
    </div>
    <span class="hear"></span>
  </div>
  <div class="rightCont">
    <span class="CDRiper" title="CD抓轨" v-if="false"></span>
    <span class="tools" title="工具" v-if="false"></span>
    <span class="games" title="酷狗网页游戏平台" v-if="false"></span>
    <span class="message" title="消息通知" v-if="false"></span>
    <span class="skin" title="更换皮肤" @click.stop="changeSkin"></span>
    <span class="set" title="主菜单" @click.stop="public.showSet = true"></span>
  </div>
</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return{

      }
    },
    props:[],
    components:{},
    methods:{
      // 换肤
      changeSkin:function(){
        this.skin.showPage = true;
      },
      // 显示主菜单
      // showSet:function(){
      //   console.log(111);
      //   this.public.showSet = true;
      // }
    },
    computed:{
      ...mapState(['skin','public'])
    },
    mounted(){},
    watch:{}
  }
</script>
<style scoped>
.searchBox{
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
}
.leftSearch{
  width:356px;
  min-width:356px;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
}
.turnBack{
  display: inline-block;
  width:20px;
  height:20px;
  min-height: 18px;
  min-width:15px;
  background:url("/static/images/turnback.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
  cursor: pointer;
  margin-left:10px;
}
.refresh{
  display: inline-block;
  width:19px;
  height:18px;
  min-width:18px;
  min-height:16px;
  background:url("/static/images/refresh.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
  cursor: pointer;
  margin:0 10px;
}
.refresh:hover{
  background:url("/static/images/refresh_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}

.search{
  width:260px;
  min-width:260px;
  height:25px;
  min-height:25px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.55);
  overflow: hidden;
  position: relative;
}
.search input{
  width:100%;
  height:100%;
  background-color:transparent;
  outline: none;
  text-align: left;
  text-indent: 12px;
  color: #333;
  font-size:12px;
  border:none;
}
  .searchIcon{
    position: absolute;
    right:10px;
    top:0;
    bottom:0;
    margin:auto;
    width:15px;
    height:15px;
    min-height: 15px;
    min-width:15px;
    background:url("/static/images/glass_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    cursor: pointer;
  }
.hear{
  display: inline-block;
  width:17px;
  height:17px;
  min-height: 17px;
  min-width:17px;
  background:url("/static/images/microphone.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
  cursor: pointer;
  margin-left:10px;
}
.hear:hover{
  background:url("/static/images/microphone_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.rightCont{
  width:calc(100% - 356px);
  height:100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row nowrap;
}
  .CDRiper,.tools,.games,.message,.skin,.set{
    display: inline-block;
    width:18px;
    height:18px;
    min-height: 18px;
    min-width:18px;
    margin:0 5px;
    cursor: pointer;
  }
  .CDRiper{
    background:url("/static/images/CD.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .CDRiper:hover{
    background:url("/static/images/CD_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .tools{
    width:16px;
    height:16px;
    min-height: 16px;
    min-width:16px;
    background:url("/static/images/morelist.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .tools:hover{
    background:url("/static/images/morelist_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .games{
    background:url("/static/images/games.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .games:hover{
    background:url("/static/images/games_hover.png") no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
.message{
  background:url("/static/images/message.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.message:hover{
  background:url("/static/images/message_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.skin{
  width:16px;
  height:16px;
  min-height: 16px;
  min-width:16px;
  background:url("/static/images/skin.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.skin:hover{
  background:url("/static/images/skin_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.set{
  width:16px;
  height:16px;
  min-height: 16px;
  min-width:16px;
  background:url("/static/images/set.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.set:hover{
  background:url("/static/images/set.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
</style>
