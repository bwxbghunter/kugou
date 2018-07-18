<template>
  <div class="calendar">
    <div class="selectDate" @click="showContent"><span>{{curYear}}</span>-<span>{{curMonth>9?curMonth:'0'+curMonth}}</span>-<span>{{curDate}}</span></div>
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
          <li class="calendarDateLis preLis fl"  @click="choseDate(val,-1)" v-for="val in preventM">{{val}}</li>
          <li class="calendarDateLis fl" :class="{currentdate:val ==curDate}" @click="choseDate(val,0)" v-for="val in currentM">{{val}}</li>
          <li class="calendarDateLis preLis fl" @click="choseDate(val,1)" v-for="val in nextM">{{val}}</li>
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
        week:['日','一','二','三','四','五','六'], // 星期数
        month:['一','二','三','四','五','六','七','八','九','十','十一','十二'],// 月份数
        curYear:2018, // 展开后显示年份
        curMonth:5,   // 展开后显示月份
        curDate:27,   // 展开后显示天数
        choseDa:0,
        currentM:[],  // 当前月
        preventM:[],  // 上个月
        nextM:[],     // 下个月
      }
    },
    props:[],
    components:{},
    methods:{
      loadCalendar:function(){
        let firstDay = (new Date(this.curYear,this.curMonth-1,1)).getDay();// 计算当前月第一天是星期几
        this.currentM = this.newDays(50, this.curYear, this.curMonth);     // 获取当前月天数
        this.preventM = this.newDays(firstDay, this.curYear, this.curMonth-1);// 获取上个月天数
        let sum = 42 - (this.currentM.length+this.preventM.length);  // 日历最多六行  42天减去当前月和上个月天数之和为下个月显示的天数
        this.nextM = []; // 存取下个月天数  存取前先清空
        for(let i=0;i<sum;i++){
          this.nextM.push(i+1);
        }
      },
      // 获取日期
      getdate:function(){
        let date = new Date();
        this.curYear = date.getFullYear();// 获取年份
        this.curMonth = date.getMonth()+1;// 获取月份
        this.curDate = date.getDate();// 获取当前日
      },
      //选择日期
      choseDate:function(val,num){
        this.curMonth += num;
        if(this.curMonth>12){
          this.curMonth = 1;
          this.curYear+=1;
        }else if(this.curMonth<1){
          this.curMonth = 12;
          this.curYear-=1;
        }
        this.curDate = val>9?val:'0'+val;
        this.showDate = false;
      },
      // 确定按钮
      makeSure:function(){
        this.showDate = false;
      },
      // 今天按钮
      nowaday:function(){
        this.getdate();
        this.makeSure();
      },
      // 显示日期
      showContent:function(){
         this.showDate = true;
      },
      // 改变年份
      changeYear:function(val){
         if(val>0){
           this.curYear--;
           this.loadCalendar();
         }else{
           this.curYear++;
           this.loadCalendar();
         }
      },
      // 改变月份
      changeMonth:function(val){
        if(val>0){
          this.curMonth--;
          if(this.isMonth<1 ||this.curMonth<1){
            this.curMonth = 12;
            this.curYear-=1;
          }
          this.loadCalendar();
        }else{
          this.curMonth++;
          if(this.isMonth > 12||this.curMonth>12){
            this.curMonth = 1;
            this.curYear+=1;
          }
          this.loadCalendar();
        }
      },
      // 计算一个月的天数  未用
      getMonthDays:function(year,month){
        let days = 31;
        // 判断2月份天数
        if(month==2) {
          days = (year % 4 == 0)&&(year % 100 != 0)||(year % 400 == 0)?29:28;
        }else{
          // 1-7月 单数月为31日
          if(month<=7){
            days = month%2==1?31:30;
          }else{
            // 8-12月 双月为31日
            days = month%2==0?31:30;
          }
        }
        return days;
      },
      newDays:function(num,year,month){
        let firstDay = (new Date(year,month,1)).getTime();// 获取当前月第一天的时间戳
        let date = firstDay - 24*60*60*1000; // 获取上个月最后一天的时间戳
        let lastDate = (new Date(date)).getDate(); // 转换为上个月最后一天
        let arry = [];
        num=Math.min(num,lastDate);
        for(let i=0;i<num;i++){
          arry.push(lastDate-i);
        }
        return arry.reverse();
      }
    },
    computed:{},
    mounted(){
      this.getdate();
      this.loadCalendar(); // 加载日历
      this.newDays();
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
  .preLis{
    color: #aaa;
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
