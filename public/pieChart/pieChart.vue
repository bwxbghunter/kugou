<template>
  <div class="drawPieBox">
    <!--<div class="pieData" v-show="pieData">
      <ul class="pieDataUl scallBar" >
        <li class="pieDataLis" v-for="item in pieChartsData" :title="item.name">
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>-->
    <span style="display: none;">{{scrollEvent}}</span>
    <!--<editMyArea v-if="analyze_by === 'area'"></editMyArea>-->
    <!--  <div class="hidePie" v-show="overflow ==='pie'" @click="hidePie" v-if="!pieShow"></div>
      <div class="hideChart" v-show="overflow ==='pie'" @click="hidePie" v-if="pieShow"></div>-->
    <!--<div v-if="overflow ==='pie' && !pieShow" class="pieTitle">{{movieInfo.film_name+" "+stateName+" "+dataTypeName}}</div>-->
    <div id="drawPie"  class="chart">12312312</div>
    <!--<div id="drawLine" v-show="drawLineBtn">1</div>-->
    <!--<div class="search clearfix mian-container-searchFont" v-show="overflow === 'input'">
      <input class="searchInput fl"  v-on:keyup="search($event)" :placeholder="'请输入'+stateName+'名称'" type="text" id="searchName" >
      <span class="searchImg fl mian-container-searchBgc">
              <img class="searchPic" src="../../../static/image/filmsearch.png" alt="">
            </span>
    </div>-->
    <!--<div class="switchChart">
      <span class="lineBtn" :class="{switchStyle:lineBtn}" @click="changeChartBtn('line')">趋势</span>
      <span class="pieBtn" :class="{switchStyle:pieBtn}" v-show="drawPieBtn" @click="changeChartBtn('pie')">占比</span>
    </div>-->
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import  echarts from "../../static/common/echarts.min.js"
  //import editMyArea from "../editMyArea/editMyArea.vue"
  export default {
    data(){
      return{
        curIndex:"",
        curSeries:"",
        pieShow:true,
        drawPieBtn:true,
        lineBtn:true,
        pieBtn:false,
//        drawLineBtn:false,
        topCss:'' ,//只显示图的时候加margin
//        chartBtnClass: 'hideChart'
        pieChartsData:[],
        pieData:false
      }
    },
    methods:{
      ...mapMutations([
        'search',"changePOS"
      ]),
      isAllEqual: function (array) {
        if (array.length > 0) {
          return !array.some(function (value) {
            return value !== array[0];
          });
        } else {
          return true;
        }
      },
      drawTwo:function () {
        this.pieChartsData = this.pieDataVoid;
        console.log(this.pieChartsData);
        let pieSize = "70%";
        let _fontSize = 17;
        if(this.scrollEvent =='up'){
          pieSize = "70%"
          _fontSize = 12
        }else if(this.scrollEvent =='down'){
          _fontSize = 17;
          pieSize = "70%"
        }
        var that = this;
        let myChart = echarts.init(document.getElementById('drawPie'));
        var option = {
          minAngle:"1",
          tooltip : {
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:[
            "#c2c2c2","#333333","#666666","#999999","#bfbfbf","#d9d9d9"
          ],
          markPoint:{
            symbol:"roundRect"
          },
          series : [
            {
              name: '访问来源',
              legendHoverLink: false,
              type: 'pie',
              radius : pieSize,
              center: ['50%', '50%'],
              label: {
                normal: {
                  position: this.pieLabel.pos,
                  show: true,
                  formatter: '{b}\n({d}%)',
                  textStyle:{
                    fontSize:_fontSize,
                    color:[this.pieLabel.color]
                  }
                }
              },
              labelLine:{
                normal:{
                  length:1,
                  length2:10
                }
              },
              data:this.pieDataVoid,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
              }
            }
          ]
        }
        myChart.setOption(option,true);
        myChart.on('mouseover', function (params) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: that.curSeries,
            dataIndex: that.curIndex
          });
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: params.seriesIndex,
            dataIndex: params.dataIndex
          });
          that.curIndex = params.dataIndex;
          that.curSeries = params.seriesIndex;
          that.changePOS(params)
          /*console.log(that.ratioList)
          that.ratioList[0] =[that.ratioList[params.dataIndex],that.ratioList[params.dataIndex]=that.ratioList[0]][0]
          console.log(that.ratioList)
          that.$store.state.ratioList = that.ratioList;*/
          /*if(params.data.name === that.pieDataVoid[0].name){
            console.log(1)
          }else{
            for (let i=0;i<that.pieDataVoid.length;i++){
              if(that.pieDataVoid[i].name === params.data.name){
                  console.log(i)
                var temp = that.pieDataVoid.slice(i,i+1);
                console.log(temp[0].name)
                console.log(temp)
                /!*that.pieDataVoid.splice(i,1)*!/
                /!*that.pieDataVoid = temp.concat(that.pieDataVoid)*!/
              }
            }
          }*/
        });
        myChart.resize()
        window.onresize = function () { myChart.resize();
        }
        myChart.on('mouseout', function (params) {
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: params.seriesIndex,
            dataIndex: params.dataIndex
          });
        });
      },
      chartClass:function (e) {
        let temp=[]
        if(this.scrollEvent =='up'){
          temp.push('chart-min1')
        }else if(this.scrollEvent =='down'){
          temp.push('chart')
        }else {
          temp.push('chart')
        }
        if(e === 'hide'){
          temp.push('pieAni')
        }
        if(this.chartonly && !this.listonly){
          temp.push('chartHeight')
        }
        console.log(document.getElementById("drawPie"));
        return temp
      },
      hidePie:function () {
        /*this.pieShow = !this.pieShow
        if (this.pieShow) {
          this.chartBtnClass = 'hideChart'
          this.$store.state.scrollEvent = 'down'
        } else {
          this.chartBtnClass = 'hidePie'
          this.$store.state.scrollEvent = 'hide'
        }*/
      },
      //只显示图的时候加margin
      calcTopCss:function(){
        if(this.chartonly && !this.listonly){
          this.topCss = 'margin-top:0.3645rem'
        }else if(this.analyze_by === 'area'){
//        this.topCss = "height:45%"
        }else{
//        this.topCss = ''
        }
      },
      changeChartBtn:function (type) {
        console.log(this.pieDataVoid);
        if(type == 'line'){
//          this.drawPieBtn = false
//          this.drawLineBtn=true
          this.pieData = false;
          this.lineBtn = true;
          this.pieBtn = false;
          this.drawOne()
        }else{

          this.pieData = true;
          this.lineBtn = false;
          this.pieBtn = true;
//          this.drawPieBtn = true
//          this.drawLineBtn=false
          if(this.pieDataVoid.length >10){

          }else{
            this.drawTwo()
          }
        }
      }
    },
    computed: mapState([
      "overflow",
      "_movieDateList",
      "ratioList",
      "pieDataVoid",
      "stateName",
      'scrollEvent',
      "pieLabel",
      "analyze_by",
      "dataTypeName",
      "movieInfo",
      "startTime",
      "endTime",
      'chartonly',
      'listonly'
    ]),
    components: {
//    editMyArea
    },
    updated(){
      if(this.pieDataVoid.length >20){
        this.drawPieBtn=false;
      }else{
        this.drawPieBtn=true;
      }
      this.drawTwo()

    },
    beforeUpdate(){
      //document.getElementById("searchName").value=""
      this.calcTopCss()
    },
    mounted(){
      if(this.pieDataVoid == ''){
        for (let i = 0; i < this._movieDateList.length; i++) {
          if (Number(this._movieDateList[i].proportion) !== 0) {
            /*if(state.analyze_by === "time_slice_num"){//如果是时间维度
             state.pieDataVoid.push({value:state.ratioList[i].rate || state.ratioList[i].proportion,name:state.ratioList[i].time_slice_num ||state.ratioList[i].desc || state.ratioList[i].session_type})
             }*/
            if (this.analyze_by === "aver_price") {
              this.$store.state.pieDataVoid.push({
                value: this._movieDateList[i].proportion || this._movieDateList[i].rate,
                // value: 1,
                name: this._movieDateList[i].price_level + '元' || this._movieDateList[i].session_type
              })
            } else {
              this.$store.state.pieDataVoid.push({
                value: this._movieDateList[i].proportion || this._movieDateList[i].average_price || this._movieDateList[i].rate,
                // value: 1,
                name:this._movieDateList[i].true_sessionDate|| this._movieDateList[i].description || this._movieDateList[i].session_type || this._movieDateList[i].time_slice||this._movieDateList[i].zzb_fi_name||this._movieDateList[i].parent_format_name||this._movieDateList[i].film_product_area_name||this._movieDateList[i].area_name||this._movieDateList[i].dis_name||this._movieDateList[i].ci_name||this._movieDateList[i].city_name||this._movieDateList[i].pro_name
              })
            }
          }
          // }
          console.log(this.pieDataVoid)
        }
      }else{
        if(this.pieDataVoid.length >20){
        }else{
        }
      }
      this.drawTwo()
    }
  }
</script>

<style lang="scss">
  @import "../../src/page/countryData/countryDataCSS.css";
  @import "../../src/page/colors/default.css";
  .drawPieBox{
    height:calc(100% - 0.3645rem);
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
  .chart{
    height: 3rem;
    /*height: 100%;*/
    width: 6.5385rem;
    /*margin-top:0.15625rem;*/
    /*
      transform: scale(0.8);
      transform-origin:10% 10%;
      transition:all 1s;
    */
  }
  .chart-min1 {
    height: 1.91rem !important;
    width: 5.2308rem !important;
    margin-top: 0.20833rem;
    /*
      transform: scale(0.8);
      transform-origin:10% 10%;
      transition:all 1s;
    */
  }
  /*  .hidePie{
      width: 32px;
      height: 28px;
      background: url("../../../static/image/showChart.png") no-repeat;
      position: fixed;
      right: 1.177083rem;
      top: 0.644788rem;
      cursor: pointer;
      z-index: 10;
    }
    .hideChart{
      width: 25px;
      height: 25px;
      background: url("../../../static/image/closeChart.png") no-repeat;
      position: fixed;
      right: 1.177083rem;
      top: 0.644788rem;
      cursor: pointer;
      z-index: 10;
    }*/
  .pieAni
  {
    transform: scale(0);
    transition: all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition:all 1s;
  }
  /*新加的title*/
  .pieTitle{
    font: 700 0.125rem "Microsoft YaHei";
    margin-top:0.14583rem;
    display: block;
    /*position: fixed;*/
    /*top: 0.558958rem;*/
    /*left: 5.096875rem;*/
    color: #333;
  }
  /*只展示图的时候调整高度*/
  .chartHeight{
    height: 3rem;
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
