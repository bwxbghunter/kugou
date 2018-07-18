<template>
  <div class="personalData">
    <div class="dataItem">
      <span class="dataItemText">账号：</span><div class="dataItemSub">kgopen402510176  (积分：208254)</div>
    </div>
    <div class="dataItem">
      <span class="dataItemText">酷狗ID：</span><div class="dataItemSub">	402510176</div>
    </div>
    <div class="dataItem">
      <span class="dataItemText">昵称：</span><div class="dataItemSub"><input class="nickname" v-model="public.userName" type="text"></div>
    </div>
    <div class="dataItem">
      <span class="dataItemText">性别：</span>
      <div class="dataItemSub">
        <div class="people">
          <input class="man" id="boy" checked="checked" type="radio" name="gender">
          <label for="boy">男</label>
        </div>
        <div class="people">
          <input class="man" id="girl"   type="radio"  name="gender">
          <label for="girl">女</label>
        </div>
        <div class="people">
          <input class="man" id="secrecy"  type="radio"  name="gender">
          <label for="secrecy">保密</label>
        </div>
      </div>
    </div>
    <div class="dataItem">
      <span class="dataItemText">生日：</span><div class="dataItemSub dateBox"><calendar></calendar></div>
    </div>
    <div class="dataItem">
      <span class="dataItemText">地区：</span>
      <div class="dataItemSub">
        <select name="" >
          <option value="">内蒙古</option>
        </select>
        <select name="" >
          <option value="">赤峰市</option>
        </select>
      </div>
    </div>
    <div class="dataItem">
      <span class="dataItemText">个性签名：</span>
      <div class="dataItemSub">
        <textarea class="selfdom" maxlength="60" name="" id="" cols="30" rows="10"></textarea>
        <span style="display: inline-block;height: 100%;line-height: 30px;margin-left: 30px">个性签名字数不要超过六十个字符</span>
      </div>
    </div>
    <div class="dataItem">
      <span class="dataItemText"></span>
      <div class="dataItemSub">
       <span class="saveData">保存</span>
      </div>
    </div>
  </div>
</template>
<script>

  import {mapState} from 'vuex'
  import calendar from '../right/tool/calendar.vue'
  export default{
    data(){
      return{
      }
    },
    props:[],
    components:{calendar},
    methods:{},
    computed:{
      ...mapState(['public']),
    },
    mounted(){

    }
  }
</script>
<style>
  .personalData{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .dataItem{
    width:100%;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    font-size:13px;
    color: #6c6c6c;
  }
  .dataItem:first-child{
    margin-top:18px;
  }
  .dataItem:nth-last-child(2){
    height:88px;
  }
  .dataItemText{
    width:75px;
    text-align: right;
  }
  .dataItemSub{
    width:calc(100% - 80px);
    height:100%;
    line-height:40px;
    margin-left:5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  .dateBox.dataItemSub{
    width:118px;
    height:24px;
    border: 1px solid #D2D1D1;
    background-color: #fff;
  }
  .nickname{
    height:33px;
    width:228px;
    border: 1px solid #D2D1D1;
    text-align: left;
    text-indent: 10px;
    font-size:12px;
    color: #666;
    outline: none;
  }
  .nickname:hover{
    border: 1px solid #64B0FA;
  }
  .man{
    width:15px;
    height:15px;
    cursor: pointer;
    margin-right:3px;
  }
  .people{
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .selfdom{
    display: inline-block;
    width:208px;
    height:86px;
    border: 1px solid #D2D1D1;
    resize: vertical;
    text-align: left;
    padding:0 10px;
    line-height:30px;
    font-size:12px;
    color: #666;
  }
  .selfdom:hover{
    border: 1px solid #64B0FA;
  }
  .saveData{
    display: inline-block;
    width:90px;
    height:30px;
    border-radius: 4px;
    background-color: #169AF3;
    text-align: center;
    line-height:30px;
    cursor: pointer;
    color: #ffffff;
    font-size:14px;
  }
</style>
