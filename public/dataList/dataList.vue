<!--
<template>
  <div id="countryTable" class="countryTable">
    <ul class="countryHead form-table-headBgc" v-show="dataList.length !== 0">
      <li>
        <div class="orderNumber form-table-font form-table-borderRight ">序号</div>
        &lt;!&ndash;<span>省份名称</span>&ndash;&gt;
        &lt;!&ndash;<span class="stateName form-table-font form-table-borderRight">{{stateName}}</span>&ndash;&gt;
        <span class="stateName form-table-font form-table-borderRight">上映日期
         <i class="sort" :class="{sort1:sortType=='true_sessionDate'}" @click="sort('true_sessionDate')"></i>
        </span>
        &lt;!&ndash;<span class="rateNumber form-table-font form-table-borderRight">星期</span>&ndash;&gt;
        <span class="rateNumber form-table-font form-table-borderRight" v-show="analyze_by =='weekly'">周数
        <i class="sort" :class="{sort1:sortType=='week_num'}" @click="sort('week_num')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='网票占比(%)'">总售票(张)
        <i class="sort" :class="{sort1:sortType=='denominator_total_peoples'}"  @click="sort('denominator_total_peoples')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='网票占比(%)'">本地售票(张)
        <i class="sort" :class="{sort1:sortType=='local_peoples'}"  @click="sort('local_peoples')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='网票占比(%)'">网络售票(张)
         <i class="sort" :class="{sort1:sortType=='numerator_net_peoples'}" @click="sort('numerator_net_peoples')"></i>
        </span>

        <span class="flop form-table-font " v-show="type !=='上座率(%)'">{{type}}
         <i class="sort" :class="{sort1:sortType==dataType}"  @click="sort(dataType)"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='总票房(万元)'">{{dataList[0].proportion_title_with_dimension}}(%)
        <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='总人次(人)'">{{dataList[0].proportion_title_with_dimension}}(%)
        <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='总场次(场)'">排片率(%)
         <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='上座率(%)'">总供应座位数(座)
         <i class="sort" :class="{sort1:sortType=='denominator_hall_seats'}"  @click="sort('denominator_hall_seats')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='上座率(%)'">实际销售座位数(座)
        <i class="sort" :class="{sort1:sortType=='numerator_peoples'}"  @click="sort('numerator_peoples')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='上座率(%)'">平均上座率(%)
        <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='总票房(万元)'">服务费(万元)
         <i class="sort" :class="{sort1:sortType=='cover_charge'}"  @click="sort('cover_charge')"></i>
        </span>
        <span class="flop form-table-font" v-show="type=='总票房(万元)'">净票房(万元)
         <i class="sort" :class="{sort1:sortType=='net_boxes'}"  @click="sort('net_boxes')"></i>
        </span>
      </li>
    </ul>
    <span style="display: none">{{scrollEvent}}</span>
    <div :style="calcCSS()" :class="_className()">
      <ul class="countryTableData ">
        <li v-for="(item,index) in dataList" class="dataLis">
          <div
            class="orderNumber form-table-font form-table-borderRight form-table-borderBottom form-table-borderLeft">{{ index+1 }}
          </div>
          &lt;!&ndash;<span>{{ item.provinceName }}</span>&ndash;&gt;
          <span class="stateName form-table-font form-table-borderRight form-table-borderBottom">{{item.true_sessionDate}}</span>
          &lt;!&ndash;<span class="stateName form-table-font form-table-borderRight form-table-borderBottom" v-show="item.release_type !== ''">{{item.session_date +' ( ' +item.release_type }} )</span>&ndash;&gt;
          &lt;!&ndash;<span class="stateName form-table-font form-table-borderRight form-table-borderBottom">{{stateName}}</span>&ndash;&gt;
          <span class="rateNumber form-table-font form-table-borderRight form-table-borderBottom" v-show="analyze_by =='weekly'">{{item.week_num}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总票房(万元)'">{{item.boxes}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总票房(万元)'">{{item.proportion}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总票房(万元)'">{{item.cover_charge}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总票房(万元)'">{{item.net_boxes}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总人次(人)'">{{item.peoples}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总人次(人)'">{{item.proportion}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总场次(场)'">{{item.sessions}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总场次(场)'&&stateName !== '电影'">{{item.proportion}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='总场次(场)'&&stateName == '电影'">{{item.rate_ratio}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='上座率(%)'">{{item.denominator_hall_seats}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='上座率(%)'">{{item.numerator_peoples}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='上座率(%)'">{{item.proportion}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='网票占比(%)'">{{item.denominator_total_peoples}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='网票占比(%)'">{{item.local_peoples}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='网票占比(%)'">{{item.numerator_net_peoples}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='网票占比(%)'">{{item.net_ticket_ratio}}</span>
          <span class="flop form-table-font form-table-borderRight form-table-borderBottom" v-show="type=='平均票价(元)'">{{item.average_price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data () {
      return {
        countryData: [],
        type: '',
        _class: '',
        dataList:'',
        _dataBoxes:[],
        tall:{num:0},
        talldataList:[]
      }
    },
    mounted(){
      this.dataList = this._dataList;
      this.type = this.dataType;
      this.$store.state.scrollEvent = 'down'
    },
    beforeUpdate(){
      this.dataList = this._dataList
      if (this.dataType == 'boxes') {
        this.type = '总票房(万元)'
      } else if (this.dataType == 'peoples') {
        this.type = '总人次(人)'
      } else if (this.dataType == 'sessions') {
        this.type = '总场次(场)'
      } else if (this.dataType == 'attendance') {
        this.type = '上座率(%)'
      } else if (this.dataType == 'net_ticket_ratio') {
        this.type = '网票占比(%)'
      }else if (this.dataType == 'average_price') {
        this.type = '平均票价(元)'
      }
//      alert(this.type)

      this._className()
      this.talldataList=this.geall();

    },
    methods: {
      geall:function(){
        var newlist={
        };
        this.dataList.forEach(function(t){

        });
        return newlist;
      },
      calcCSS: function () {
        if (this.overflow === 'input' || !this.displayChart) {
          return "height:calc(100% - 0.53rem)"
        } else if (this.overflow === 'pie') {
          return ""
        }
      },
      _className: function () {
        let className = ["countryTableBox", "changeScallBar"];
        if (this.scrollEvent === 'up') {
          className.push("max-height")
        } else if (this.scrollEvent === 'down') {
        }else if (this.scrollEvent === 'hide') {
          className.push("hide-height")
        }
        if(!this.displayChart){
          if(className.indexOf('max-height') !== -1){
            className.splice(className.indexOf('max-height') ,1)
          }
        }
        return className;
      },
      sort: function (key, reverse) {
        if(this.sortType==key){
          this.$store.state.sortType=''
        }else{
          this.$store.state.sortType=key
        }
        let that = this;
        function sortFunc(property) {
          return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            if(property=='true_sessionDate'){
              value1=value1.split('-').join('')
              value2=value2.split('-').join('')
            }
            if(that.sortType==''){
              return value1 - value2;
            }else{
              return value2 - value1;
            }
          }
        }
//        this.$store.state.sortType=!this.sortType
        this.dataList.sort(sortFunc(key))
        /*console.log(key);
        console.time('归并排序耗时');
        mergeKey = key
        let temp = mergeSort(this.ratioList)
        if(reverse){
          temp.reverse()
        }
        this.$store.state.ratioList= temp;
        console.timeEnd('归并排序耗时');*/
      }
    },
    computed: mapState([
      '_dataList',
      'dataType',
      'analyze_by',
      "displayChart",
      'scrollEvent',
      'sortType',
      "stateName"
    ])
  }

</script>
<style lang="scss" type="scoped">
  @import "../../src/page/colors/default.css";
  @import "../../src/page/countryData/countryDataCSS.css";

  .max-height {
    height: 1.78rem !important;
  }
  .hide-height {
    height: calc(100% - 0.625rem) !important;
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
-->

<template>
  <dataList1 :titleList="titleList" :dataListA="dataListA">{{dat}}</dataList1>
</template>
<script>
  import dataList1 from '../dataList1/dataList1.vue'
  import {mapState} from "vuex"
  var filterconfig=[
    "proportion_title_with_dimension",
    "data_type",'release_type',
    'session_date',
    'session_average',
    'total_peoples',
    'total_sessions',
    'total_boxes',
    'hall_seats',
    'total_cinemas',
    'total_province',
//    'release_date_range'
  ];
  function filter(data){
    var ndata=JSON.parse(JSON.stringify(data));
    for(var i=data.length-1;i>-1;i--){
      var o=data[i];
      for(var s in o){
        if(filterconfig.indexOf(s)>-1){
          delete o[s];
        }
      }
    }
    return data;
  }

  /////转日期为数字////////
  function getnumdate(str){
    if(str.constructor==String){
      let stra=str.split("-");
      if(stra.length>1){
        str=parseInt(stra.join(""));
      }
    }
    return str;
  }



  function getwnum(str){
    let _str={"一":1,"二":2,"三":3,"四":4,"五":5,"六":6,"七":7,"八":8,"九":9,"日":0};
    let rstr=_str[str];
    if(rstr || rstr==0){
      return rstr;
    }
    return str;
  }


  export default{
    data(){
      return{
        tit:{ // 表格标题&&字段名称
          true_sessionDate:{text: '上映日期',sort: true,toall:1},
          weekday:{text: '星期',sort: true,toall:1},
          release_weeks:{text: '周数',sort: true,toall:1},
          release_days:{text: '天数',sort: true},
          week_num:{text:'周数',sort:'true',toall:1},
          boxes:{text: '总票房(万)',sort: 'true'},
          cover_charge:{text: '服务费',sort: 'true'},
          net_boxes:{text: '净票房(万)',sort: 'true'},
          proportion:{text: '贡献率(%)',sort: 'true'},
          peoples:{text: '人次',sort: 'true'},
          denominator_hall_seats:{text: '总供应座位数',sort: 'true'},
          denominator_total_peoples:{text: '总售票人数',sort: 'true'},
          numerator_film_sessions:{text: '电影总场次',sort: 'true'},
          rate_ratio:{text: '排片率(%)',sort: 'true'},
          sessions:{text: '场次',sort: 'true'},
          net_ticket_ratio:{text: '网票占比(%)',sort: 'true'},
          numerator_net_peoples:{text: '网票人数(人)',sort: 'true'},
          attendance_ratio:{text: '上座率',sort: 'true'},
          numerator_peoples:{text: '实际上座人数(人)',sort: 'true'},
          average_price:{text: '平均票价(元)',sort: 'true'},
          release_date_range:{text: '上映区间',sort: 'true',toall:1},
//           session_date:{text: '123',sort: 'true'},
//           total_sessions:{text: '总人次',sort: 'true'},
//           hall_seats:{text: '1234',sort: 'true'},
//           film_sessions:{text: '12345',sort: 'true'},
//           denominator_sessions:{text: '456',sort: 'true'},
//           session_average:{text:'789',sort:'true'},
//           total_peoples:{text:'901',sort:'true'},
          area_name:{text:'区域',sort:'true',toall:1},
          pro_name:{text:'省份',sort:'true',toall:2},
          city_name:{text:'城市',sort:'true',toall:3},
          dis_name:{text:'区县',sort:'true',toall:4},
          th_name:{text:'院线',sort:'true',toall:5},
          ci_name:{text:'影院',sort:'true',toall:6},

        },
        dataListA:[],
        titleList: [],
      }
    },
    methods:{
      /* _dataBoxesA:function(item){
       console.log(item.week_num)
       var items={};
       items={
       boxes:{
       true_sessionDate:item.true_sessionDate,
       weekday:item.weekday,
       release_weeks:item.release_weeks,
       release_days:item.release_days,
       boxes:item.boxes,
       proportion:item.proportion,
       cover_charge:item.cover_charge,
       net_boxes:item.net_boxes
       },
       peoples:{
       true_sessionDate:item.true_sessionDate,
       weekday:item.weekday,
       release_weeks:item.release_weeks,
       release_days:item.release_days,
       peoples:item.peoples,
       proportion:item.proportion
       },
       rate_ratio:{
       true_sessionDate:item.true_sessionDate,
       weekday:item.weekday,
       release_weeks:item.release_weeks,
       release_days:item.release_days,
       sessions:item.sessions,
       rate_ratio:item.rate_ratio
       },
       attendance:{
       true_sessionDate:item.true_sessionDate,
       weekday:item.weekday,
       release_weeks:item.release_weeks,
       release_days:item.release_days,
       numerator_peoples:item.numerator_peoples,
       attendance_ratio:item.attendance_ratio
       },
       net_ticket_ratio:{
       true_sessionDate:item.true_sessionDate,
       weekday:item.weekday,
       release_weeks:item.release_weeks,
       release_days:item.release_days,
       numerator_net_peoples:item.numerator_net_peoples,
       net_ticket_ratio:item.net_ticket_ratio,
       proportion:item.proportion
       },
       average_price:{
       true_sessionDate:item.true_sessionDate,
       weekday:item.weekday,
       release_weeks:item.release_weeks,
       release_days:item.release_days,
       average_price:item.average_price
       }
       }
       return items[this.dataType];
       }*/
//     遍历数据
      setData:function(data){
        let newData=[];
        this.titleList=[];
//      遍历数组
        for(let i = 0; i<data.length;i++){
          let arr = [];
//            赋值对象
          let o =data[i];
          for(let k in o){
            let os = parseFloat(getwnum(getnumdate(o[k])));
            if(os==NaN){
              os = 0;
            }
            arr.push({text:o[k],num:parseInt(os)});
            if(i==0 && this.tit[k]){
              this.titleList.push(this.tit[k]);
//                this.titleList.reverse();
            }
          }
          newData.push(arr);
        }
        return newData;
      }
    },
    components:{
      dataList1
    },
    computed: {
//       过滤数据
      dat:function(){
        this.dataListA=this.setData(filter(this._dataList));
        console.log(this.dataListA);
        return;
      },
      ...mapState([
        '_dataList',
        'dataType',
        'sortType',
      ])
    }
  }
</script>
