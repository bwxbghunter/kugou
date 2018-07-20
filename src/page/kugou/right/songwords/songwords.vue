<template>
  <div class="songword">
    <div class="wordBox" style="top:50%">
      <ul class="wordUl" >
        <li class="wordLis" v-for="(item,index) in option">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        option:[
          '想问沙漠借那一根曲线',
          '缝件披风为你御寒' ,
          '用肺腑去触摸你的灵魂',
          '我就在那只火炉边取暖',
          '想问姻缘借那一根红线',
          '深埋生命血脉相连',
          '用丝绸去润泽你的肌肤 ',
          '我就在那个怀抱里缠绵',
          '你总是随手把银簪插在太阳上面 ',
          '万道光芒蓬松着你长发的波澜',
          '我闻着芬芳跋涉着无限远 ',
          '只为看清你的容颜',
          '你总不小心把倩影靠在月亮上面 ',
          '万顷月光舞动着你优美的梦幻',
          '我闻着芬芳跋涉着无限远 ',
          '只为看清你的容颜',
          '谁与美人共浴沙河互为一天地',
          '谁与美人共枕夕阳长醉两千年',
          '从未说出我是你的尘埃',
          '但你却是我的楼兰',
          '想问姻缘借那一根红线 ',
          ' 深埋生命血脉相连',
          '用丝绸去润泽你的肌肤 ',
          '我就在那个怀抱里缠绵',
          '你总是随手把银簪插在太阳上面 ',
          ' 万道光芒蓬松着你长发的波澜',
          '我闻着芬芳跋涉着无限远  ',
          '只为看清你的容颜',
          '你总不小心把倩影靠在月亮上面 ',
          ' 万顷月光舞动着你优美的梦幻',
          '我闻着芬芳跋涉着无限远  ',
          '只为看清你的容颜',
          '谁与美人共浴沙河互为一天地 ',
          '谁与美人共枕夕阳长醉两千年',
          '从未说出我是你的尘埃 ',
          '但你却是我的楼兰'
        ]
      }
    },
    props:[],
    components:{},
    methods:{},
    computed:{
      ...mapState(['music']),

    },
    mounted(){}
  }
</script>
<style>
  .songword{
    width:100%;
    height:100%;
  }
  .wordBox,.wordUl{
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
  }
  .wordLis {
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgba(249, 249, 249, 0.92);
    text-align: center;
    font-size: 20px;
    font-family: cursive;
  }
</style>
