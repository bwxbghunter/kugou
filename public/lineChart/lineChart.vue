<template>
  <div class="drawLineBox" :style="topCss">
    <div class="pieData" v-show="pieData">
      <ul class="pieDataUl scallBar" >
        <li class="pieDataLis" v-for="item in pieChartsData" :title="item.name">
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>
    <div id="drawLine" :class="chartClass" v-show="showChart"></div>
    <!--<span :class="chartBtnClass" @click="closeChart"></span>-->
    <span class="hideChartTitle" v-show="!showChart">{{this.movieInfo.film_name+' ' + this.chartName+' ' + this.type}}</span>
    <span style="display: none;">{{_movieDateList}}</span>
    <!--<span style="display: none;">{{scrollEvent}}</span>-->
    <!--<div class="switchChart">
      <span class="lineBtn" :class="{switchStyle:lineBtn}" @click="changeChartBtn('line')">线形图</span>
      <span class="pieBtn" :class="{switchStyle:pieBtn}" v-show="drawPieBtn" @click="changeChartBtn('pie')">饼形图</span>
    </div>-->
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import  echarts from "../../static/common/echarts.min"
  export default {
    data(){
      return {
        _movieData: '',
        chartName: '',
        type: '',
        chartClass: 'chart',
        showChart: true,
        topCss:'',
        drawPieBtn:true,
        lineBtn:true,
        pieBtn:false,
//        chartBtnClass: 'chart-btn'
        pieChartsData:[],
        pieData:false
      }
    },
    methods: {
      ...mapMutations([
        "changeList"
      ]),
      changeChartBtn:function (type) {
        console.log(this.pieDataVoid);
        if(type == 'line'){

          this.pieData = false;
          this.lineBtn = true;
          this.pieBtn = false;
//          this.drawPieBtn = false
//          this.drawLineBtn=true
          this.draw()
        }else{
          this.drawTwo();
          this.pieData = true;
          this.lineBtn = false;
          this.pieBtn = true;
//          this.drawPieBtn = true
//          this.drawLineBtn=false
//          if(this.pieDataVoid.length >10){
//
//          }else{
//            this.drawTwo()
//
//          }
        }
      },
      isAllEqual: function (array) {
        if (array.length > 0) {
          return !array.some(function (value) {
            return value !== array[0];
          });
        } else {
          return true;
        }
      },
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
        if (dataY.length == 1 || dataY.length == 0) {
          option = {
//          title: {
//            text:this.movieInfo.film_name+' ' + this.chartName+' ' + this.type + '走势图',
//            x: 'center',
//            left: 'center'
//          },
            tooltip: {
              trigger: 'axis',
              confine:true,
              backgroundColor:'rgba(245, 245, 245, 0.8)',
              borderColor: '#ccc',
              textStyle: {
                color: '#757575'
              },
              axisPointer: {
                type: 'line',
//                axis:'x',
//                snap: true,
                lineStyle: {
                  type: 'solid',
                  width: 1,
                  color: '#666',
                  opacity: '0.3'
                }
              },
              formatter: function (params) {
//                console.log(params)
//                that.changeList(params[0].axisValue)
                var res;
                if (that.type == '票房') {
                  res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                    '上映日期 : ' + params[0].name +' ' +'</br>'+
                    '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                    ' 总' +that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                    '占比' + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                    ' ' + '服务费' + ' : ' + that._movieData[params[0].dataIndex].cover_charge + '万元' +'</br>'+
                    ' ' + '净票房' + ' : ' + that._movieData[params[0].dataIndex].net_boxes + '万元' +
                    '</span>';
                } else if (that.type == '人次') {
                  res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                    '上映日期 : ' + params[0].name +' '+'</br>'+
                    '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +'</br>'+
                    ' 总'+ that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                    '占比' + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                    '</span>';
                } else if (that.type == '场次') {
                  res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                    '上映日期 : ' + params[0].name +' '+'</br>'+
                    '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                    ' 总' + that.type + ' : ' + that._movieData[params[0].dataIndex].sessions + '场' +'</br>'+
                    ' ' + '排片率' + ' : ' + that._movieData[params[0].dataIndex].rate_ratio + '%' +'</br>'+
                    '</span>';
                } else if (that.type == '上座率') {
                  res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                    '上映日期 : ' + params[0].name +' '+'</br>'+
                    '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                    ' ' + '总供应座位数' + ' : ' + that._movieData[params[0].dataIndex].denominator_hall_seats + '座' +'</br>'+
                    ' ' + '实际销售座位数' + ' : ' + that._movieData[params[0].dataIndex].numerator_peoples + '座' +'</br>'+
                    ' ' + that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                    '</span>';
                } else if (that.type == '网票占比') {
                  res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                    '上映日期 : ' + params[0].name +' '+'</br>'+
                    '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                    ' ' + '总售票' + ' : ' + that._movieData[params[0].dataIndex].denominator_total_peoples + '张' +'</br>'+
                    ' ' + '本地售票' + ' : ' + that._movieData[params[0].dataIndex].local_peoples + '张' +'</br>'+
                    ' ' + '网络售票' + ' : ' + that._movieData[params[0].dataIndex].numerator_net_peoples + '张' +'</br>'+
                    ' ' + that.type + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                    '</span>';
                } else if (that.type == '平均票价') {
                  res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                    '上映日期 : ' + params[0].name +' '+'</br>'+
                    '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                    ' ' + that.type + ' : ' + that._movieData[params[0].dataIndex].average_price + '元' +'</br>'+
                    '</span>';
                }

                return res;
              },
              position: function (pos, params, el, elRect, size) {
                var obj = {top: 20};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 0;
                return obj;
              },
//            backgroundColor:'#fff',
//            borderColor:'#333',
//            textStyle:{
//              color:'#666'
//            },
              extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
            },
            xAxis: {
              data: dataX
            },
            yAxis: {
              name: '单位:(' + name + ')',
            },
            series: [{
              type: 'line',
              data: dataY,
              markPoint: {
                itemStyle: {
                  normal: {
                    color: '#999'
                  }
                },
                data: [
                  {type: 'max', name: '最大值'}
                ]
              },
              markLine: {
                smooth: true,
                effect: {
                  show: true
                },
                distance: 10,
                label: {
                  normal: {
                    position: 'middle'
                  }
                },
                symbol: ['none', 'none'],
                // data: markLineData
              }
            }]
          };
        } else {
          let isZero = this.isAllEqual(dataY)
          if (isZero) {
            option = {
//            title: {
//              text:this.movieInfo.film_name+' ' + this.chartName+' ' + this.type + '走势图',
//              x: 'center',
//              left: 'center'
//            },
              color: ['#389A9E'],
              calculable: false,
              //   	grid : {
              //       left : '1%',
              //       right : '1%',
              //       bottom : '1%',
              //       containLabel : false
              //     },
              tooltip: {
                trigger: 'axis',
                confine:true,
                backgroundColor:'rgba(245, 245, 245, 0.8)',
                borderColor: '#ccc',
                textStyle: {
                  color: '#757575'
                },
                axisPointer: {
                  type: 'line',
//                axis:'x',
//                snap: true,
                  lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#666',
                    opacity: '0.3'
                  }
                },
                formatter: function (params) {
//                console.log(params)
//                that.changeList(params[0].axisValue)
                  var res;
                  if (that.type == '票房') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' ' +'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' 总' +that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                      '占比' + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                      ' ' + '服务费' + ' : ' + that._movieData[params[0].dataIndex].cover_charge + '万元' +'</br>'+
                      ' ' + '净票房' + ' : ' + that._movieData[params[0].dataIndex].net_boxes + '万元' +
                      '</span>';
                  } else if (that.type == '人次') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +'</br>'+
                      ' 总'+ that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                      '占比' + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                      '</span>';
                  } else if (that.type == '场次') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' 总' + that.type + ' : ' + that._movieData[params[0].dataIndex].sessions + '场' +'</br>'+
                      ' ' + '排片率' + ' : ' + that._movieData[params[0].dataIndex].rate_ratio + '%' +'</br>'+
                      '</span>';
                  } else if (that.type == '上座率') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' ' + '总供应座位数' + ' : ' + that._movieData[params[0].dataIndex].denominator_hall_seats + '座' +'</br>'+
                      ' ' + '实际销售座位数' + ' : ' + that._movieData[params[0].dataIndex].numerator_peoples + '座' +'</br>'+
                      ' ' + that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                      '</span>';
                  } else if (that.type == '网票占比') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' ' + '总售票' + ' : ' + that._movieData[params[0].dataIndex].denominator_total_peoples + '张' +'</br>'+
                      ' ' + '本地售票' + ' : ' + that._movieData[params[0].dataIndex].local_peoples + '张' +'</br>'+
                      ' ' + '网络售票' + ' : ' + that._movieData[params[0].dataIndex].numerator_net_peoples + '张' +'</br>'+
                      ' ' + that.type + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                      '</span>';
                  } else if (that.type == '平均票价') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' ' + that.type + ' : ' + that._movieData[params[0].dataIndex].average_price + '元' +'</br>'+
                      '</span>';
                  }

                  return res;
                },
                position: function (pos, params, el, elRect, size) {
                  var obj = {top: 20};
                  obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 0;
                  return obj;
                },
//            backgroundColor:'#fff',
//            borderColor:'#333',
//            textStyle:{
//              color:'#666'
//            },
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
              },
              xAxis: {
                show: false,
                type: 'category',
                boundaryGap: false,
                axisLine: {
                  show: false,
                  onZero: false
                },
                data: dataX
              },
              yAxis: {
                name: '单位:(' + name + ')',
                show: true,
                type: 'value',
                "splitLine": {
                  "show": false
                },
              },
              series: [{
                name: '成交',
                type: 'line',
                smooth: true,
                itemStyle: {
                  normal: {
                    areaStyle: {
                      type: 'default'
                    }
                  }
                },
                symbolSize: 3,
                areaStyle: {
                  normal: {
                    color: '#389A9E',
                    opacity: 0.5
                  }
                },
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.name
                    }
                  }

                },
                data: dataY
              }]
            };
          } else {
            option = {
//            title: {
//              text:this.movieInfo.film_name+' ' + this.chartName+' ' + this.type + '走势图',
//              x: 'center',
//              left: 'center'
//            },
              tooltip: {
                trigger: 'axis',
                confine:true,
                backgroundColor:'rgba(245, 245, 245, 0.8)',
                borderColor: '#ccc',
                textStyle: {
                  color: '#757575'
                },
                axisPointer: {
                  type: 'line',
//                axis:'x',
//                snap: true,
                  lineStyle: {
                    type: 'solid',
                    width: 1,
                    color: '#666',
                    opacity: '0.3'
                  }
                },
                formatter: function (params) {
//                console.log(params)
//                that.changeList(params[0].axisValue)
                  var res;
                  if (that.type == '票房') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' ' +'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' 总' +that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                      '占比' + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                      ' ' + '服务费' + ' : ' + that._movieData[params[0].dataIndex].cover_charge + '万元' +'</br>'+
                      ' ' + '净票房' + ' : ' + that._movieData[params[0].dataIndex].net_boxes + '万元' +
                      '</span>';
                  } else if (that.type == '人次') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +'</br>'+
                      ' 总'+ that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                      '占比' + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                      '</span>';
                  } else if (that.type == '场次') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' 总' + that.type + ' : ' + that._movieData[params[0].dataIndex].sessions + '场' +'</br>'+
                      ' ' + '排片率' + ' : ' + that._movieData[params[0].dataIndex].rate_ratio + '%' +'</br>'+
                      '</span>';
                  } else if (that.type == '上座率') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' ' + '总供应座位数' + ' : ' + that._movieData[params[0].dataIndex].denominator_hall_seats + '座' +'</br>'+
                      ' ' + '实际销售座位数' + ' : ' + that._movieData[params[0].dataIndex].numerator_peoples + '座' +'</br>'+
                      ' ' + that.type + ' : ' + +params[0].value + name + ' ' +'</br>'+
                      '</span>';
                  } else if (that.type == '网票占比') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' ' + '总售票' + ' : ' + that._movieData[params[0].dataIndex].denominator_total_peoples + '张' +'</br>'+
                      ' ' + '本地售票' + ' : ' + that._movieData[params[0].dataIndex].local_peoples + '张' +'</br>'+
                      ' ' + '网络售票' + ' : ' + that._movieData[params[0].dataIndex].numerator_net_peoples + '张' +'</br>'+
                      ' ' + that.type + ' : ' + that._movieData[params[0].dataIndex].proportion + '%' +'</br>'+
                      '</span>';
                  } else if (that.type == '平均票价') {
                    res = '<span style="text-align: left;float:left;padding: 0.42083rem 0.1041666rem;line-height: 0.182291rem">'+
                      '上映日期 : ' + params[0].name +' '+'</br>'+
                      '星期' + ' : ' + that._movieData[params[0].dataIndex].weekday +' '+'</br>'+
                      ' ' + that.type + ' : ' + that._movieData[params[0].dataIndex].average_price + '元' +'</br>'+
                      '</span>';
                  }

                  return res;
                },
                position: function (pos, params, el, elRect, size) {
                  var obj = {top: 20};
                  obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 0;
                  return obj;
                },
//            backgroundColor:'#fff',
//            borderColor:'#333',
//            textStyle:{
//              color:'#666'
//            },
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
              },
              grid: [{
                left: 80,
                right: 40,
              }, {
                left: 80,
                right: 40,
              }],
              xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                  onZero: true
                },
                data: timeData
              }, {
                gridIndex: 1
              }],

              yAxis: [{
                //   show: false,
//            type: 'value',
                name: '单位:(' + name + ')',
                "type": "value",
                "splitLine": {
                  "show": false
                },
                "axisLine": {
                  lineStyle: {
//                color: '#90979c'
                  }
                },
                "axisTick": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,

                },
                "splitArea": {
                  "show": false
                },
              }, {
                gridIndex: 1
              }],

              series: [

                {
                  //   name: '数值',
                  type: 'line',
                  smooth: true,
                  symbol: 'image://static/image/emptyCircle.png',
                  symbolSize: [4, 4],
                  symbolOffset: ['-10%', '-10%'],
                  showSymbol: false,
                  symbolStyle: {
                    normal: {
                      borderColor: '#999'
                    }
                  },
//              hoverAnimation: true,
//              label: {
//                normal: {
//                  show: false,
////                  color: 'yellow',
//                  formatter: '{b} : {c}',
//                  borderWidth: 5,
//                  position: ['-700%', '-200%'],
//                  textStyle: {
//                    color: 'blue',
//                    fontSize: 14
//                  }
//                }
//              },
//              itemStyle:{
//                normal:{
//                  borderColor:'#999'
//                }
//              },
                  areaStyle: {
                    normal: {
                      color: '#cacaca'
                    }
                  },
                  lineStyle: {
                    normal: {
                      width: 1,
                      color: '#999'
                    }
                  },
                  data: dataY
                }
              ]
            };
          }
        }
        var test = document.getElementById('drawLine');
        var myChat = echarts.init(test);

        myChat.setOption(option, true);
        myChat.resize()
        window.onresize = function () {
          myChat.resize();
        }
      },
      closeChart: function () {
        /*this.showChart = !this.showChart
        if (this.showChart) {
          this.chartBtnClass = 'chart-btn'
          this.$store.state.scrollEvent = 'down'
        } else {
          this.chartBtnClass = 'chart-btn1'
          this.$store.state.scrollEvent = 'hide'
        }*/
      },
      calcTopCss:function(){
        if(this.chartonly && !this.listonly){
          this.topCss = 'margin-top:0.3645rem'
        }else if(this.analyze_by === 'area'){
          this.topCss = "height:40%"
        }else{
          this.topCss = ''
        }
      }
    }
    ,
    mounted(){
      if(this._movieDateList.length >20){
        this.drawPieBtn=false
      }else{
        this.drawPieBtn=true
      }
//      this.draw([], [], '')
      if (this.dataType == 'boxes') {
        this.type = '票房'
      } else if (this.dataType == 'peoples') {
        this.type = '人次'
      } else if (this.dataType == 'sessions') {
        this.type = '场次'
      } else if (this.dataType == 'attendance') {
        this.type = '上座率'
      } else if (this.dataType == 'net_ticket_ratio') {
        this.type = '网票占比'
      } else if (this.dataType == 'average_price') {
        this.type = '平均票价'
      }
      if (this.stateName == '全国') {
        this.chartName = '全国'
      } else {
        if (this.chartInfo.description != undefined) {
          this.chartName = this.chartInfo.description
        } else if (this.chartInfo.price_level != undefined) {
          this.chartName = this.chartInfo.price_level
        } else if (this.chartInfo.time_slice != undefined) {
          this.chartName = this.chartInfo.time_slice
        }
      }
      /* let _dataX = [], _dataY = [], _name;
       this._movieData = this._movieDateList;
       console.log(this.movieInfo);
       for (let i = 0; i < this._movieDateList.length; i++) {
         if (this._movieDateList[i].true_sessionDate != undefined) {
           _dataX.push(this._movieDateList[i].true_sessionDate)
         } else {
           _dataX.push(this._movieDateList[i].session_date)
         }
         if (this.dataType == 'boxes') {
           _dataY.push(this._movieDateList[i].boxes)
           _name = '万元'
         } else if (this.dataType == 'peoples') {
           _dataY.push(this._movieDateList[i].peoples)
           _name = '人'
         } else if (this.dataType == 'sessions') {
           _dataY.push(this._movieDateList[i].numerator_film_sessions)
           _name = '场'
         } else if (this.dataType == 'attendance') {
           _dataY.push(this._movieDateList[i].attendance_ratio)
           _name = '%'
         } else if (this.dataType == 'net_ticket_ratio') {
           _dataY.push(this._movieDateList[i].net_ticket_ratio)
           _name = '%'
         } else if (this.dataType == 'average_price') {
           _dataY.push(this._movieDateList[i].average_price)
           _name = '元'
         }
       }*/
//      let _max = Math.max.apply(Math, _dataY)
//    alert(_max)
      this.draw()
      if (this.scrollEvent == 'up') {
        this.chartClass = 'chart-min'
      } else if (this.scrollEvent == 'down' || this.scrollEvent == '') {
        this.chartClass = 'chart'
      }
    }
    ,
    beforeUpdate(){
      this.calcTopCss()
    },
    updated(){
      if(this._movieDateList.length >20){
        this.drawPieBtn=false;
      }else{
        this.drawPieBtn=true;
      }
//      this.draw([], [], '')
      if (this.dataType == 'boxes') {
        this.type = '票房'
      } else if (this.dataType == 'peoples') {
        this.type = '人次'
      } else if (this.dataType == 'rate_ratio') {
        this.type = '场次'
      } else if (this.dataType == 'attendance') {
        this.type = '上座率'
      } else if (this.dataType == 'net_ticket_ratio') {
        this.type = '网票占比'
      } else if (this.dataType == 'average_price') {
        this.type = '平均票价'
      }

      if (this.stateName == '全国') {
        this.chartName = '全国'
      } else {
        if (this.chartInfo.description != undefined) {
          this.chartName = this.chartInfo.description
        } else if (this.chartInfo.price_level != undefined) {
          this.chartName = this.chartInfo.price_level
        } else if (this.chartInfo.time_slice != undefined) {
          this.chartName = this.chartInfo.time_slice
        }
      }

      /*
          let _dataX = [], _dataY = [], _name;
          this._movieData = this._movieDateList;
          console.log(this._movieData);
          for (let i = 0; i < this._movieDateList.length; i++) {
            if (this._movieDateList[i].true_sessionDate != undefined) {
              _dataX.push(this._movieDateList[i].true_sessionDate)
            } else {
              _dataX.push(this._movieDateList[i].session_date)
            }
            if (this.dataType == 'boxes') {
              _dataY.push(this._movieDateList[i].boxes)
              _name = '万元'
            } else if (this.dataType == 'peoples') {
              _dataY.push(this._movieDateList[i].peoples)
              _name = '人'
            } else if (this.dataType == 'sessions') {
              _dataY.push(this._movieDateList[i].numerator_film_sessions)
              _name = '场'
            } else if (this.dataType == 'attendance') {
              _dataY.push(this._movieDateList[i].attendance_ratio)
              _name = '%'
            } else if (this.dataType == 'net_ticket_ratio') {
              _dataY.push(this._movieDateList[i].net_ticket_ratio)
              _name = '%'
            } else if (this.dataType == 'average_price') {
              _dataY.push(this._movieDateList[i].average_price)
              _name = '元'
            }
          }*/
//      let _max = Math.max.apply(Math, _dataY)
//    alert(_max)

      if(this.lineBtn){
        this.draw()
      }
      if (this.scrollEvent == 'up') {
        this.chartClass = 'chart-min'
      } else if (this.scrollEvent == 'down' || this.scrollEvent == '') {
        this.chartClass = 'chart'
      }
//    if(this.chartonly && !this.listonly){
//      let addClass
//      addClass = document.getElementById('drawLine')
//      addClass.style.cssText = 'height:130%'
//    }else{
//      let addClass
//      addClass = document.getElementById('drawLine')
//      addClass.style.cssText = ''
//    }
    }
    ,
    computed: mapState([
      '_movieDateList',
      'chartInfo',
      'stateName',
      'dataType',
      'pieDataVoid',
      'movieInfo',
      'scrollEvent',
      'chartonly',
      'pieLabel',
      'listonly'
    ]),
    //    destroyed: function () {
    //      this.draw(0, 0, '')
    //    }
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
