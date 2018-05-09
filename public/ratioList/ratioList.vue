<template>
  <div class="countryTable">
    <div class="search clearfix mian-container-searchFont" v-show="overflow === 'input'">
      <input class=" searchInput fl mian-container-searchInput" v-on:keyup="search($event)" id="searchName" :placeholder="'请输入'+stateName+'名称'" type="text">
      <span class="searchImg fl mian-container-searchBgc">
            <img class="searchPic" src="../../static/image/filmsearch.png" alt="">
          </span>
    </div>
    <!--票房-->
    <ul class="countryHead form-table-headBgc"  v-show="ratioList.length !== 0" v-if="dataType === 'boxes'">
      <li>
        <div class="orderNumber tableFont borderRight">序号</div>
        <span class=" tableFont borderRight" v-if="analyze_by === 'aver_price'">{{stateName}}(元)</span>
        <span class=" tableFont borderRight" v-if="analyze_by == 'cinema'">院线</span>
        <span class=" tableFont borderRight" v-if="analyze_by !== 'aver_price'">{{stateName}}</span>
        <span class="short tableFont borderRight" v-if="analyze_by === 'theater'">简称</span>
        <span class="flopRatio tableFont">{{flop}}
           <i class="sort" :class="{sort1:sortType=='boxes'}"  @click="sort('boxes')"></i>
          </span>
        <span class="chargeRatio tableFont borderLeft">服务费(万)
          <i class="sort" :class="{sort1:sortType=='cover_charge'}"  @click="sort('cover_charge')"></i>
          </span>
        <span class="pureBoxesRatio tableFont borderLeft">净票房(万)
           <i class="sort" :class="{sort1:sortType=='net_boxes'}"  @click="sort('net_boxes')"></i>
          </span>
        <span class="rateNumberRatio tableFont borderLeft">{{ratioTitle}}(%)
          <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
          </span>
      </li>
    </ul>
    <div :class="classCla()" :style="calcCSS()" v-if="dataType === 'boxes'">
      <ul class="countryTableData">
        <li  class="ratioList" v-for="(item,index) in ratioList" @click="changeChart(item)" v-show="item.search" v-if="item.unlimit">
          <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ indexCalc(item) }}</div>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" v-if="analyze_by == 'cinema'">{{item.short_name}}</span>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" :title="item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name">{{ item.scheduler||item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name}}</span>
          <span class="short tableFont borderRight borderBottom borderLeft" v-if="analyze_by === 'theater'">{{item.short_name}}</span>
          <span class="flopRatio tableFont borderRight borderBottom borderLeft" v-if="dataType === 'boxes'">{{item.boxes}}</span>
          <span class="chargeRatio tableFont borderRight borderBottom borderLeft">{{item.cover_charge}}</span>
          <span class="pureBoxesRatio tableFont borderRight borderBottom borderLeft">{{item.net_boxes}}</span>
          <span class="rateNumberRatio tableFont borderRight borderBottom borderLeft">{{ item.rate || item.proportion || 0}}</span>
        </li>
      </ul>
    </div>
      <!--人次-->
    <ul class="countryHead form-table-headBgc"  v-show="ratioList.length !== 0" v-if="dataType === 'peoples'">
      <li>
        <div class="orderNumber tableFont borderRight">序号</div>
        <span class="stateName tableFont borderRight" v-if="analyze_by === 'aver_price'">{{stateName}}(元)</span>
        <span class=" tableFont borderRight" v-if="analyze_by == 'cinema'">院线</span>
        <span class="stateName tableFont borderRight" v-if="analyze_by !== 'aver_price'">{{stateName}}</span>
        <span class="short tableFont borderRight" v-if="analyze_by === 'theater'">简称</span>
        <span class="flop tableFont">{{flop}}
          <i class="sort" :class="{sort1:sortType=='peoples'}"  @click="sort('peoples')"></i>
          </span>
        <span class="rateNumber tableFont borderLeft">{{ratioTitle}}(%)
          <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
          </span>
      </li>
    </ul>

    <div :class="classCla()" :style="calcCSS()" v-if="dataType === 'peoples'">
      <ul class="countryTableData">
        <li  class="ratioList" v-for="(item,index) in ratioList" @click="changeChart(item)" v-show="item.search" v-if="item.unlimit">
          <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ indexCalc(item) }}</div>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" v-if="analyze_by == 'cinema'">{{item.short_name}}</span>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" :title="item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name">{{item.scheduler|| item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name}}</span>
          <span class="short tableFont borderRight borderBottom borderLeft" v-if="analyze_by === 'theater'">{{item.short_name}}</span>
          <span class="flop tableFont borderRight borderBottom borderLeft" v-if="dataType === 'peoples'">{{item.peoples}}</span>
          <span class="rateNumber tableFont borderRight borderBottom borderLeft">{{ item.rate || item.proportion || 0}}</span>
        </li>
      </ul>
    </div>
    <!--场次-->
    <ul class="countryHead form-table-headBgc"  v-show="ratioList.length !== 0" v-if="dataType === 'sessions'">
      <li>
        <div class="orderNumber tableFont borderRight">序号</div>
        <span class="stateName tableFont borderRight" v-if="analyze_by === 'aver_price'">{{stateName}}(元)</span>
        <span class=" tableFont borderRight" v-if="analyze_by == 'cinema'">院线</span>
        <span class="stateName tableFont borderRight" v-if="analyze_by !== 'aver_price'">{{stateName}}</span>
        <span class="short tableFont borderRight" v-if="analyze_by === 'theater'">简称</span>
        <span class="flop tableFont">总场次(场)
          <i class="sort" :class="{sort1:sortType=='sessions'}"  @click="sort('sessions')"></i>
          </span>
        <span class="rateNumber tableFont borderLeft">{{ratioTitle}}(%)
          <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
          </span>
      </li>
    </ul>
    <div :class="classCla()" :style="calcCSS()" v-if="dataType === 'sessions'">
      <ul class="countryTableData">
        <li  class="ratioList" v-for="(item,index) in ratioList" @click="changeChart(item)" v-show="item.search" v-if="item.unlimit">
          <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ indexCalc(item) }}
            <!--<span class="stick">置顶</span>-->
          </div>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" v-if="analyze_by == 'cinema'">{{item.short_name}}</span>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" :title="item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name">{{ item.scheduler||item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name}}</span>
          <span class="short tableFont borderRight borderBottom borderLeft" v-if="analyze_by === 'theater'">{{item.short_name}}</span>
          <span class="flop tableFont borderRight borderBottom borderLeft" >{{item.sessions || item.denominator_sessions}}</span>
          <span class="rateNumber tableFont borderRight borderBottom borderLeft">{{ item.rate || item.proportion || 0}}</span>
        </li>
      </ul>
    </div>
    <!--上座率-->
    <ul class="countryHead form-table-headBgc"  v-show="ratioList.length !== 0"  v-if="dataType === 'attendance'">
      <li>
        <div class="orderNumber tableFont borderRight">序号</div>
        <span class=" tableFont borderRight" v-if="analyze_by === 'aver_price'">{{stateName}}(元)</span>
        <span class=" tableFont borderRight" v-if="analyze_by == 'cinema'">院线</span>
        <span class=" tableFont borderRight" v-if="analyze_by !== 'aver_price'">{{stateName}}</span>
        <span class="short tableFont borderRight" v-if="analyze_by === 'theater'">简称</span>
        <span class="attendanceT tableFont borderRight">总供应座位数(座)
          <i class="sort" :class="{sort1:sortType=='denominator_hall_seats'}"  @click="sort('denominator_hall_seats')"></i>
          </span>
        <span class="attendanceR tableFont borderRight">实际销售座位数(座)
          <i class="sort" :class="{sort1:sortType=='numerator_peoples'}"  @click="sort('numerator_peoples')"></i>
          </span>
        <span class="attendanceA tableFont borderRight">{{ratioTitle}}(%)
          <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
          </span>
      </li>
    </ul>
    <div :class="classCla()" :style="calcCSS()"  v-if="dataType === 'attendance'">
      <ul class="countryTableData">
        <li  class="ratioList" v-for="(item,index) in ratioList" @click="changeChart(item)" v-show="item.search" v-if="item.unlimit">
          <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ indexCalc(item) }}
            <!--<span class="stick">置顶</span>-->
          </div>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" v-if="analyze_by == 'cinema'">{{item.short_name}}</span>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" :title="item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name">{{item.scheduler|| item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name}}</span>
          <span class="short tableFont borderRight borderBottom borderLeft" v-if="analyze_by === 'theater'">{{item.short_name}}</span>
          <!--<span class="flopRatio tableFont borderRight borderBottom borderLeft" v-if="dataType === 'attendance'">{{item.attendance_ratio}}</span>
          <span class="rateNumberRatio tableFont borderRight borderBottom borderLeft">{{ item.rate || item.proportion || 0}}</span>-->
          <span class="attendanceT tableFont borderRight borderBottom borderLeft">{{item.denominator_hall_seats}}</span>
          <span class="attendanceR tableFont borderRight borderBottom borderLeft">{{item.numerator_peoples}}</span>
          <span class="attendanceA tableFont borderRight borderBottom borderLeft">{{item.proportion}}</span>
        </li>
      </ul>
    </div>
    <!--网票占比-->
    <ul class="countryHead form-table-headBgc"  v-show="ratioList.length !== 0"  v-if="dataType === 'net_ticket_ratio'">
      <li>
        <div class="orderNumber tableFont borderRight">序号</div>
        <span class=" tableFont borderRight" v-if="analyze_by === 'aver_price'">{{stateName}}(元)</span>
        <span class=" tableFont borderRight" v-if="analyze_by == 'cinema'">院线</span>
        <span class=" tableFont borderRight" v-if="analyze_by !== 'aver_price'">{{stateName}}</span>
        <span class="short tableFont borderRight" v-if="analyze_by === 'theater'">简称</span>
        <span class="flopRatio tableFont">{{flop}}
          <i class="sort" :class="{sort1:sortType=='denominator_total_peoples'}"  @click="sort('denominator_total_peoples')"></i></span>
        </span>
        <span class="rateNumberRatio tableFont borderLeft">本地售票（张）
          <i class="sort" :class="{sort1:sortType=='local_peoples'}"  @click="sort('local_peoples')"></i></span>
        <span class="chargeRatio tableFont borderLeft">网络售票（张）
           <i class="sort" :class="{sort1:sortType=='numerator_net_peoples'}"  @click="sort('numerator_net_peoples')"></i>
          </span>
        <span class="pureBoxesRatio tableFont borderLeft">{{ratioTitle}}（%）
          <i class="sort" :class="{sort1:sortType=='proportion'}"  @click="sort('proportion')"></i>
          </span>
      </li>
    </ul>
    <div :class="classCla()" :style="calcCSS()"  v-if="dataType === 'net_ticket_ratio'">
      <ul class="countryTableData">
        <li  class="ratioList" v-for="(item,index) in ratioList" @click="changeChart(item)" v-show="item.search" v-if="item.unlimit">
          <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ indexCalc(item) }}</div>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" v-if="analyze_by == 'cinema'">{{item.short_name}}</span>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" :title="item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name">{{item.scheduler|| item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name}}</span>
          <span class="short tableFont borderRight borderBottom borderLeft" v-if="analyze_by === 'theater'">{{item.short_name}}</span>
          <span class="flopRatio tableFont borderRight borderBottom borderLeft">{{ item.denominator_total_peoples}}</span>
          <span class="rateNumberRatio tableFont borderRight borderBottom borderLeft">{{item.local_peoples}}</span>
          <span class="chargeRatio tableFont borderRight borderBottom borderLeft">{{item.numerator_net_peoples}}</span>
          <span class="pureBoxesRatio tableFont borderRight borderBottom borderLeft" v-if="dataType === 'net_ticket_ratio'">{{item.proportion}}</span>
        </li>
      </ul>
    </div>
    <!--平均票价-->
    <ul class="countryHead form-table-headBgc"  v-show="ratioList.length !== 0"  v-if="dataType === 'average_price'">
      <li>
        <div class="orderNumber tableFont borderRight">序号</div>
        <span class=" tableFont borderRight" v-if="analyze_by === 'aver_price'">{{stateName}}(元)</span>
        <span class=" tableFont borderRight" v-if="analyze_by == 'cinema'">院线</span>
        <span class=" tableFont borderRight" v-if="analyze_by !== 'aver_price'">{{stateName}}</span>
        <span class="short tableFont borderRight" v-if="analyze_by === 'theater'">简称</span>
        <span class="priceRatio tableFont">平均票价（元）
        <i class="sort" :class="{sort1:sortType=='average_price'}"  @click="sort('average_price')"></i>
        </span>
      </li>
    </ul>
    <div :class="classCla()" :style="calcCSS()"  v-if="dataType === 'average_price'">
      <ul class="countryTableData">
        <li  class="ratioList" v-for="(item,index) in ratioList" @click="changeChart(item)" v-show="item.search" v-if="item.unlimit">
          <div class="orderNumber tableFont borderRight borderBottom borderLeft">{{ indexCalc(item) }}</div>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" v-if="analyze_by == 'cinema'">{{item.short_name}}</span>
          <span class="stateNameRatio tableFont borderRight borderBottom borderLeft" :title="item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name">{{ item.scheduler||item.ci_name||item.zzb_fi_name||item.description || item.city_name || item.pro_name || item.dis_name ||  item.ci_name   || item.session_type ||item.price_level ||item.desc || item.time_slice_num || item.time_slice||item.parent_format_name||item.film_product_area_name||item.theme_name}}</span>
          <span class="short tableFont borderRight borderBottom borderLeft" v-if="analyze_by === 'theater'">{{item.short_name}}</span>
          <span class="priceRatio tableFont borderRight borderBottom borderLeft">{{ item.average_price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState,mapMutations} from "vuex"
  export default {
    data () {
      return {
        flop:""
      }
    },
    methods:{
      ...mapMutations([
        'changeChart','getRatioList','searchReset','search'
      ]),
      flopName:function () {
        switch (this.dataType){
          case "boxes": this.flop ="总票房（万元）"; break;
          case "peoples": this.flop ="总人次（人）"; break;
          case "rate_ratio": this.flop ="排片率（%）"; break;
          case "attendance": this.flop ="上座率（%）"; break;
          case "net_ticket_ratio": this.flop ="总售票（张）"; break;
          case "average_price": this.flop ="平均票价（元）"; break;
        }
      },
      indexCalc:function (item,index) {
        if(item.search === true){
          this.tempIndex +=1
          return this.tempIndex
        }
      },
      calcCSS:function () {
        if(this.overflow === 'input' /*|| !this.displayChart*/){
          return "height:calc(100% - 0.98rem)"
        }else if(this.overflow === 'pie'){
          return ""
        }
      },
      classCla:function(val){
        let className=["countryTableBox","changeScallBar"];
        if(this.scrollEvent ==='up' && this.overflow === 'pie'){
          className.push("zooming")
        }else if (this.scrollEvent === 'hide') {
          className.push("hide-height")
        }else if(this.scrollEvent ==='down'){

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
            if(property=='session_date'){
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
        this.ratioList.sort(sortFunc(key))
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
    beforeUpdate(){
      if(this.tempIndex !==0){
        this.tempIndex= 0
      }
      this.classCla()
    },
    computed: mapState([
      "ratioList",
      "benchmark_value",
      "analyze_by",
      "dataType",
      "stateName",
      "dataType",
      "overflow",
      'sortType',
      "displayChart",
      'scrollEvent',
      "inputSearchSave",
      "ratioTitle"
    ]),
    mounted(){
      if(this.analyze_by !== "daily"&&this.analyze_by !== "weekly"){
        this.getRatioList()
      }
      this.flopName()
      this.$store.state.scrollEvent = 'down'
      document.getElementById("searchName").value= this.inputSearchSave
    },
    watch:{
      dataType:function () {
        this.flopName()
      },
      ratioList:function () {
        if(this.ratioList != ""){
          this.searchReset()
        }
        document.getElementById("searchName").value= this.inputSearchSave
      }
    }
  }

</script>

<style>
  @import "../../src/page/countryData/countryDataCSS.css";
  @import "../../src/page/colors/default.css";
  .zooming{
    height: 1.21rem !important;
  }
  .hide-height {
    height: calc(100% - 0.625rem) !important;
  }
  .stateNameRatio{
    /*width:2.7958rem;*/
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }
  .stateNameRatio,.stateName,.short{
    /*width:1.1229rem;*/
    font-size:0.0833rem;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }
  .stateNameRatio,.stateName{
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .flopRatio{
    /*width:1.2025rem;*/
  }
  .chargeRatio{
    /*width: 0.9rem;*/
  }
  .pureBoxesRatio{
    /*width: 0.9rem;*/
  }
  .attendanceT{
    /*width: 1.375133rem;*/
  }
  .attendanceR{
    /*width: 1.375133rem;*/
  }
  .attendanceA{
    /*width: 1.375133rem;*/
  }
  .priceRatio{
    /*width: 4rem;*/
  }
  .short{
    /*width: 1rem;*/
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
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
  /*搜索框*/
  .search{
    width:4.1666rem;
    height: 0.2864rem;
    line-height:0.2864rem;
    display: flex;
    flex-flow:row nowrap;
    border-radius:0.145833rem;
    margin:0 auto 0.15625rem;
    overflow: hidden;
  }
  .search .searchInput{
    width:3.6406rem;
    height:100%;
    line-height:100%;
    font-size:0.09375rem;
    padding-left:0.15625rem;
    border:none;
    background-color: #E5E5E5;
  }
  .search  .searchImg{
    width:0.5260rem;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .search  .searchImg:active{
  }
  .searchPic{
    width: 0.1354rem;
    height: 0.1354rem;
  }
  /*搜索框结束*/
</style>
