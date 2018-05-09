<template>
  <div class="drawBox">
    <lineChart v-if="charType == 'line'"></lineChart>
    <pieChart v-if="charType == 'pie'"></pieChart>
    <columnarChart v-if="charType == 'columnar'"></columnarChart>
    <div class="changeChartBtn">
      <span @click="changeChart('line')">线图</span>
      <span @click="changeChart('pie')">饼图</span>
      <span @click="changeChart('columnar')">柱状图</span>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import pieChart from '../../public/pieChart/pieChart.vue'
  import lineChart from '../../public/lineChart/lineChart.vue'
  import columnarChart from '../../public/columnarChart/columnarChart.vue'
  export default {
    data(){
      return {
          charType:'line'
      }
    },
    methods: {
      changeChart:function (type) {
        this.charType=type;
      }
  }
  ,
  mounted(){

  },
    beforeUpdate(){

    },
  computed: mapState([
    'pieDataVoid',
    '_movieDateList',
  ]),
    components: {
      pieChart,lineChart,columnarChart

      // editMyArea
    },
  }
</script>

<style>
  /*@import "../../src/page/colors/default.scss";*/
.drawBox{
  height:calc(100% - 0.8854rem);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: relative;
}
.changeChartBtn span{
  display: inline-block;
  font-size: 16px;
  width: 0.520rem;
  height: 0.20833rem;
  line-height: 0.20833rem;
  margin: 0 0.0520rem;
  border-radius: 0.04166rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid #767676;
  color: #767676;
}
  .changeChartBtn span.active{
    background-color: #767676;
    color: #fff;
  }
</style>
