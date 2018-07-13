<template>
  <div class="musicTypeBox">
    <p class="musicType">
      <span class="pickIcon" :class="{pickTrans:itemId==option.list_id}"> </span>
      <span class="textFont">{{option.list_name}}</span>
      <span class="musicCur">[{{option.list_length}}]</span>
    </p>
    <div class="operate">
      <span class="upgrade" title="一键升级无损音质"></span>
      <span class="share" title="分享"></span>
      <span class="menu" title="列表菜单 "></span>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  props:['option','itemId'],
  components:{},
  methods:{},
  computed:{},
  mounted(){},
  watch:{}
}
</script>
<style>
.musicTypeBox{
  width:100%;
  height:34px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  overflow: hidden;
  flex-flow: row nowrap;
  color: #333333;
}
.operate{
  width:100px;
  height:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row nowrap;
  visibility: hidden;
}
.musicTypeBox:hover .operate{
  visibility: visible;
}
.upgrade,.share,.menu{
  display: inline-block;
  width:16px;
  height:16px;
  background-color: #cccccc;
  cursor: pointer;
}
.upgrade{
  background: url("/static/images/upgrade.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.upgrade:hover{
  background: url("/static/images/upgrade_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.share{
  width:15px;
  height:15px;
  background: url("/static/images/share.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.share:hover{
  background: url("/static/images/share.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.menu{
  width:18px;
  height:18px;
  background: url("/static/images/list.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
.menu:hover{
  background: url("/static/images/list_hover.png") no-repeat center;
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
}
  .musicType{
    width:calc(100% - 100px);
    height:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
  }
  .pickIcon{
    width:14px;
    height:14px;
    background:url('/static/images/picklist.png') no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-left:10px;
    transform: rotate(180deg);
  }
  .pickIcon.pickTrans{
    transform: rotate(270deg);
  }
  .textFont{
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:13px;
    font-weight:bold;
    text-align: left;
    margin-left:10px;
  }
  .musicCur{
    font-size:12px;
    text-align: left;
    margin-left:5px;
  }
</style>
