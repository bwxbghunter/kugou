<template>
  <div class="calendar">
    <div class="selectDate" @click="showContent"><span>{{isYear}}</span>-<span>{{isMonth>9?isMonth:'0'+isMonth}}</span>-<span>{{isDate}}</span></div>
    <div class="calendarBox" v-show="showDate">
      <div class="calendarChange">
        <span class="preYear" @click="changeYear(1)"></span>
        <span class="preMonth" @click="changeMonth(1)"></span>
        <span class="month">{{curMonth>9?curMonth:'0'+curMonth}}月</span>
        <span class="year">{{curYear}}</span>
        <span class="nextMonth"  @click="changeMonth(-1)"></span>
        <span class="nextYear" @click="changeYear(-1)"></span>
      </div>
      <div class="calendarWeek">
        <ul class="weekUl clearfix">
          <li class="weekLis fl" v-for="item in week">{{item}}</li>
        </ul>
      </div>
      <div class="calendardate">
        <ul class="calendarDateUl clearfix">
          <li class="calendarDateLis fl" :class="{currentdate:val ==choseDa}" @click="choseDate(val)" v-for="(val,index) in date">{{val}}</li>
        </ul>
      </div>
      <div class="choseCalendar">
        <div class="isnowaday" @click="nowaday">今天</div>
        <div class="isture" @click="makeSure">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        showDate:false,
        isYear:2018,
        isMonth:5,
        isDate:27,
        week:['日','一','二','三','四','五','六'],
        month:['一','二','三','四','五','六','七','八','九','十','十一','十二'],
        date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        curYear:2018,
        curMonth:5,
        curDate:27,
        choseDa:0
      }
    },
    props:[],
    components:{},
    methods:{
      // 获取日期
      getdate:function(){
        let mon = {1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十',11:'十一',12:'十二'};
        let date = new Date();
        let year = date.getFullYear();// 获取年份
        let month = date.getMonth()+1;// 获取月份
        let da = date.getDate();// 获取当前日
        // month = month>9?month:'0'+month;
       this.curYear = year;
       this.curMonth = month;
       this.curDate = da;
      },
      //选择日期
      choseDate:function(val){
        this.choseDa = val;
      },
      // 确定按钮
      makeSure:function(){
        this.isYear = this.curYear;
        // this.curMonth = this.curMonth>9?this.curMonth:'0'+this.curMonth;
        this.isMonth = this.curMonth;
        this.choseDa = this.choseDa>9?this.choseDa:'0'+this.choseDa;
        this.isDate = this.choseDa;
        this.showDate = false;
      },
      // 今天按钮
      nowaday:function(){
        let mon = {一:'0',二:'02',三:'03',四:'04',五:'05',六:'06',七:'07',八:'08',九:'09',十:'10',十一:'11',十二:'12'};
        this.isYear = this.curYear;
        // this.curMonth = this.curMonth>9?this.curMonth:'0'+this.curMonth;
        this.isMonth = this.curMonth;
        this.choseDa = this.curDate>9?this.curDate:'0'+this.curDate;
        this.isDate = this.curDate;
        this.showDate = false;
      },
      // 显示日期
      showContent:function(){
         this.showDate = true;
      },
      // 改变年份
      changeYear:function(val){
         if(val>0){
           // this.isYear = this.curYear--;
           this.curYear--;
         }else{
           // this.isYear = this.curYear++;
           this.curYear++;

         }
      },
      // 改变日期
      changeMonth:function(val){
        if(val>0){
          this.curMonth--;
          if(this.isMonth<=1 ||this.curMonth<=1){
            this.curMonth = '01'
          }
        }else{
          this.curMonth++;
          if(this.isMonth >= 12||this.curMonth>=12){
            this.curMonth = 12;
          }
        }
      }
    },
    computed:{},
    mounted(){
        this.getdate();
        this.choseDa = this.curDate;
    }
  }
</script>
<style>
  .calendar{
    width:100%;
    height:100%;
    position: relative;
  }
  .selectDate{
    line-height:24px;
    text-align: left;
    text-indent: 5px;
    color: #000;
  }
  .calendarBox{
    width:175px;
    height:210px;
    border: 1px solid #d2d1d1;
    background-color: #fff;
    position: absolute;
    top:28px;
    left:0;
    z-index:10;
  }
  .calendarChange{
    width:100%;
    height:25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
    background-color: #1D3B71;
  }
  .preYear,.nextYear{
    width:25px;
    display: inline-block;
    height:20px;
    background: url("/static/images/year.png")no-repeat center;
    -webkit-background-size:18px 18px;
    background-size:18px 18px;
    transform: rotate(0deg);
    cursor: pointer;
  }
  .nextYear,.nextMonth{
    transform: rotate(180deg);
  }
  .preMonth,.nextMonth{
    width:25px;
    display: inline-block;
    height:20px;
    background: url("/static/images/month.png")no-repeat center;
    -webkit-background-size:12px 12px;
    background-size:12px 12px;
    transform: rotate(90deg);
    cursor: pointer;
  }
  .nextMonth{
    transform: rotate(270deg);
  }
  .month,.year{
    display: inline-block;
    width:45px;
    text-align: center;
    line-height:25px;
    color: #ffffff;
  }
  .calendarWeek{
    width:100%;
    height:25px;
    line-height:25px;
  }
  .weekUl{
    width:100%;
    height:100%;
    background-color: #C7D8ED;
  }
  .weekLis{
    width:25px;
    height:100%;
    line-height:25px;
    color: #233D6D;
    text-align: center;
  }
  .calendarDateLis{
    width:25px;
    height:25px;
    line-height:25px;
    text-align: center;
    color: #000;
    cursor: pointer;
  }
  .currentdate{
    background-color: #B3CEEF;
  }
  .choseCalendar{
    width:100%;
    height:30px;
    background-color: #C8D8ED;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 5px;
  }
  .isnowaday,.isture{
    width:45px;
    height:25px;
    background-color: #083772;
    text-align: center;
    line-height:25px;
    color: #ffffff;
    cursor: pointer;
  }
  .isture{
    border-left:1px solid #071f48;
  }
</style>
