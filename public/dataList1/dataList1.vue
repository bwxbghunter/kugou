<template>
  <div class="dataListBox">
    <div id="countryTable" class="countryTable">
      <!--表格标题-->
      <ul class="countryHead form-table-headBgc" >
        <li>
          <div class="orderNumber tableFont borderRight borderLeft">序号</div>
          <span class=" tableFont borderRight" v-for="(item,index) in sortitleList">{{item.text}}
            <!--排序-->
              <i class="sort" v-if="item.sort" :class="{sort1:sortIndex==index && sortType}" @click="sortClick(index)"></i>
          </span>
        </li>
      </ul>
      <div style="display: none">{{tall}}</div>
      <!--表格内容-->
      <div  class="countryTableBox changeScallBar">
        <ul class="countryTableData ">
          <li v-for="(item,index) in sortA" class="dataLis">
            <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ index+1 }}</div>
            <span class="flop tableFont borderRight borderBottom stateName" :title="val.text" v-for="val in item">{{val.text}}</span>
          </li>
        </ul>
        <!--汇总-->
        <div class="dataLis totalLis" >
          <!--<div class="tableFont orderNumber">汇总</div>-->
          <span class="tableFont borderRight" style="width: 0.4166rem" :style="{'flex':nosort+' 0 auto'}">汇总</span>
          <span class="tableFont borderRight" v-for="(val,index) in tall">{{val}}</span>
        </div>
        <!--<div style="font-size: 20px;">{{tall}}{{nosort}}</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed:{
      sortitleList:function(){
        var _this=this;
        _this.sortinsex=[];
        _this.nosort=0;
        let _titleList=JSON.parse(JSON.stringify(this.titleList));
        _titleList.forEach(function(t,i){
          if(!t["toall"] || t["toall"]>999){
            t["toall"]=1000+i;
          }else{
            _this.nosort++;
          }
          t.index=i;
        });
        _titleList.sort(function(a,b){
          return a.toall-b.toall;
        });
        _titleList.forEach(function(t,i){
          _this.sortinsex.push(t.index);
        });
        return _titleList;
      },
      sortA: function () {
        let sortArr = [];
        sortArr = sortArr.concat(this.dataListA);
        let _this = this;
        sortArr.sort(function (a, b) {
          if (_this.sortType) {
            return a[_this.sortIndex].num-b[_this.sortIndex].num;
          } else {
            return -a[_this.sortIndex].num+b[_this.sortIndex].num;
          }
        });
        return sortArr;
      },
      tall: function () {
        let tal = {};
        let _this=this;
        this.dataListA.forEach(function (a, i) {
          var newa=[];
          _this.sortinsex.forEach(function (t,i) {
            newa.push(a[t]);
          });
          newa.forEach(function (a1, i1) {
            if (i1>_this.nosort-1) {
              if (!tal[i1]) {
                tal[i1] = 0;
              }
              if(Math.ceil(a1.num)){
                tal[i1] += a1.num;
              }else{
                tal[i1] += 0;
              }
            }
          })
          _this.dataListA[i]=newa;
        });
        return tal;
      }
    },
    data () {
      return {
        sortIndex:0 ,
        sortType: false,
        nosort:0,
        sortinsex:[],
        _dataListA:[],
        issrot:true
      }
    },
    props:['titleList','dataListA'],
    methods: {
      sortClick: function (v) {
        if (this.sortIndex != v) {
          this.sortIndex = v;
          this.sortType = true;
        } else {
          this.sortType = !this.sortType;
        }
      }
    },
    mounted:function(){
      setTimeout(()=>{
        this.sortClick(0);
      },2000)
    }
  }
</script>
<style lang="scss" type="scoped">
  @import "../../src/page/colors/default.css";
  @import "../../src/page/countryData/countryDataCSS.css";
  .dataListBox{
    width:100%;
    height: 100%;
  }
  .dataListBox .totalLis{
    width:7.578125rem;
    height:0.26041rem;
    line-height:0.26041rem;
    margin-left:0.26041rem;
    display: flex;
    border: 1px solid #eee;
    border-top:0;
    /*position: absolute;*/
    /*bottom:0;*/
  }
  .dataListBox .totalLis span{
    display: flex;
    flex:1;
    justify-content:center;
  }
  .max-height {
    height: 1.78rem !important;
  }
  .hide-height {
    height: calc(100% - 0.520rem) !important;
  }
  .sort {
    width: 0.1041rem;
    height: 0.078125rem;
    position: absolute;
    right: 0.020833rem;
    top: 0;
    bottom: 0;
    margin: auto;
    background: url("../../static/image/defaultSort.png") no-repeat right center;
    background-size: 100%;
    cursor: pointer;
  }
  .sort1 {
    width: 0.1041rem;
    height: 0.078125rem;
    position: absolute;
    right: 0.020833rem;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: rotate(180deg) !important;
    background: url("../../static/image/defaultSort.png") no-repeat right center;
    background-size: 100%;
  }
</style>
