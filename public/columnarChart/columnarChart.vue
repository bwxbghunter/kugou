<template>
  <div class="drawLineBox">
    <div id="drawLine" class="chart"></div>
    <!--<span :class="chartBtnClass" @click="closeChart"></span>-->
    <!--<span class="hideChartTitle" v-show="!showChart">{{this.movieInfo.film_name+' ' + this.chartName+' ' + this.type}}</span>-->
    <span style="display: none;">{{_movieDateList}}</span>
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import  echarts from "../../static/common/echarts.min"
  export default {
    data(){
      return {
        _movieData: '',
      }
    },
    methods: {
      ...mapMutations([
        "changeList"
      ]),
      draw: function () {
        let dataX = [], dataY = [];
        if( this._movieDateList==''){
          this._movieData=this.pieDataVoid
          for(let i in this.pieDataVoid){
            dataX.push(this.pieDataVoid[i].name)
            dataY.push(this.pieDataVoid[i].value)
          }
        }else{
          this._movieData = this._movieDateList;
          console.log(this._movieData);
          for (let i = 0; i < this._movieDateList.length; i++) {
            if (this._movieDateList[i].true_sessionDate != undefined) {
              dataX.push(this._movieDateList[i].true_sessionDate)
            } else {
              dataX.push(this._movieDateList[i].true_sessionDate)
            }
            if (this.dataType == 'boxes') {
              dataY.push(this._movieDateList[i].boxes)
            } else if (this.dataType == 'peoples') {
              dataY.push(this._movieDateList[i].peoples)
            } else if (this.dataType == 'rate_ratio') {
              dataY.push(this._movieDateList[i].numerator_film_sessions)
            } else if (this.dataType == 'attendance') {
              dataY.push(this._movieDateList[i].attendance_ratio)
            } else if (this.dataType == 'net_ticket_ratio') {
              dataY.push(this._movieDateList[i].net_ticket_ratio)
            } else if (this.dataType == 'average_price') {
              dataY.push(this._movieDateList[i].average_price)
            }
          }
        }

        let that = this;
      var option;
      var timeData = dataX;
        option = {
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : dataX,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
//              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:dataY
            }
          ]
        };
      var test = document.getElementById('drawLine');
        console.log(test);
        var myChat = echarts.init(test);

      myChat.setOption(option, true);
      myChat.resize()
      window.onresize = function () {
        myChat.resize();
      }
    }
  },
  mounted(){
    this.draw()
  },
    beforeUpdate(){

    },
  updated(){
    this.draw()
  },
  computed: mapState([
    '_movieDateList',
    'dataType',
    'pieDataVoid',
  ]),
  }
</script>

<style>
  @import "../../src/page/colors/default.css";
.drawLineBox{
  height:calc(100% - 0.8854rem);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: relative;
}
  .pieData{
    position: absolute;
    left:-0.41666rem;
    top:0;
    width:1.5625rem;
    height:1.5625rem;
    border:1px solid #ccc;
    border-radius:0.04166rem;
    z-index:1;
  }
  .pieDataUl{
    width:100%;
    height:100%;
  }
  .pieDataLis{
    width:100%;
    height:0.20833rem;
    color: #666;
    font:400 0.1041rem/0.20833rem "Microsoft YaHei";
    display: flex;
  }
  .pieDataUl .pieDataLis:nth-child(odd){
    background-color: #f7f7f7;
  }
  .pieDataUl .pieDataLis span{
    width:50%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 0.1041rem;
    font-size:0.0833rem;
  }
  .chart {
    /*height: 2.1875rem;*/
    height: 3rem;
    /*border: 1px solid #ccc;*/
    width: 6.3385rem;
    /*margin-top: 0.15625rem;*/
  }

  .chart-min {
    height: 1.75rem !important;
    /*border: 1px solid #ccc;*/
    width: 5.0708rem !important;
    margin-top: 0.26041rem;
    margin-bottom: -50px;
  }

/*  .chart-btn {
    width: 25px;
    height: 25px;
    background: url("../../../static/image/closeChart.png") no-repeat;
    position: fixed;
    right: 1.177083rem;
    top: 0.644788rem;
    cursor: pointer;
  }

  .chart-btn1 {
    width: 32px;
    height: 28px;
    background: url("../../../static/image/showChart.png") no-repeat;
    position: fixed;
    right: 1.177083rem;
    top: 0.644788rem;
    cursor: pointer;
  }*/

  .hideChartTitle {
    font: 700 0.125rem "Microsoft YaHei";
    margin-top:0.14583rem;
    display: block;
    /*position: fixed;*/
    /*top: 0.558958rem;*/
    /*left: 5.096875rem;*/
    color: #333;
  }
  .switchChart{
    width:100%;
    height:0.20833rem;
    font:400 0.0833rem/0.20833rem "Microsoft YaHei";
    display: flex;
    justify-content: center;
  }
  .lineBtn,.pieBtn{
    width:0.520rem;
    height:0.20833rem;
    margin:0 0.0520rem;
    border-radius:0.04166rem;
    text-align: center;
    cursor: pointer;
    border: 1px solid #767676;
    color: #767676;
  }
  .switchChart .switchStyle{
    background-color: #767676;
    color: #fff;
  }
</style>
