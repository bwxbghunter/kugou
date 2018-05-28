<template>
  <div class="changePwd">
    <div class="pwdbox">
      <span class="pwdName"><span style="display: inline-block;vertical-align: bottom;color: #FF8736;font-size: 17px">*</span>
        原密码：</span>
      <div class="pwdInp">
        <input class="inp" type="text">
        <div class="tip">
          <div class="trueTip" v-show="false"></div>
          <div class="tipText"><span class="falseTip"></span></div>
        </div>
      </div>
    </div>
    <div class="pwdbox">
      <span class="pwdName"><span style="display: inline-block;vertical-align: bottom;color: #FF8736;font-size: 17px">*</span>
        新密码：</span>
      <div class="pwdInp">
        <input class="inp" type="text">
        <div class="tip">
          <div class="trueTip" v-show="false"></div>
          <div class="tipText"><span class="falseTip"></span></div>
        </div>
      </div>
    </div>
    <div class="pwdbox">
      <span class="pwdName"></span>
      <div class="pwdInp">
       <span>密码强度：</span>
        <span>弱</span> <span class="strong"></span> <span  class="strong"></span> <span  class="strong"></span> <span>强</span>
      </div>
    </div>
    <div class="pwdbox">
      <span class="pwdName"><span style="display: inline-block;vertical-align: bottom;color: #FF8736;font-size: 17px">*</span>
        确认密码：</span>
      <div class="pwdInp">
        <input class="inp" type="text">
        <div class="tip">
          <div class="trueTip" v-show="false"></div>
          <div class="tipText"><span class="falseTip"></span></div>
        </div>
      </div>
    </div>
    <div class="pwdbox">
      <span class="pwdName"><span style="display: inline-block;vertical-align: bottom;color: #FF8736;font-size: 17px">*</span>
        验证码：</span>
      <div class="pwdInp">
        <input class="authCode" type="text">
        <span class="showAuthCode"></span>
        <span class="changeother" >换一张</span>
      </div>
    </div>
    <div class="pwdbox">
      <span class="pwdName"></span>
      <div class="pwdInp">
       <div class="saveInpPwd">保存</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:[],
    components:{},
    methods:{},
    computed:{},
    mounted(){}
  }
</script>
<style>
  .changePwd{
    width:100%;
    height:100%;
  }
  .pwdbox{
    width:100%;
    height:40px;
    line-height:40px;
    font-size:12px;
    color: #464646;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    margin-bottom:20px;
  }
  .pwdbox:first-child{
    margin-top:18px;
  }
  .pwdbox:nth-child(2),.pwdbox:nth-child(3){
    margin-bottom:0;
  }
  .pwdbox:nth-child(3) .pwdInp{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .pwdbox:nth-child(3) .pwdInp span{
    margin-left:5px;
  }
  .pwdName{
    width:80px;
    height:40px;
    text-align: right;
    line-height:40px;
  }
  .pwdInp{
    width:calc(100% - 80px);
    margin-left:5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
    position: relative;
  }
  .inp{
    width:248px;
    height:38px;
    border: 1px solid #D2D1D1;
    text-align: left;
    text-indent: 10px;
    color: #464646;
  }
  .inp:hover{
    border: 1px solid #64B0FA;
  }
  .strong{
    display: inline-block;
    width:45px;
    height:12px;
    background-color: #E0E0E0;

  }
  .authCode{
    display: inline-block;
    width:98px;
    height:38px;
    outline: none;
    border: 1px solid #d2d1d1;
    text-align: left;
    text-indent: 10px;
    font-size:12px;
    color: #464646;
  }
  .showAuthCode{
    width:110px;
    height:40px;
    background-color: #fff;
    margin-left:10px;
  }
  .changeother{
    height: 100%;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 10px;
    line-height: 4;
    color: #7B7B7B;
  }
  .changeother:hover{
    color: #474747;
  }
  .saveInpPwd{
    width:90px;
    height:30px;
    background-color: #169AF3;
    text-align: center;
    line-height:30px;
    cursor: pointer;
    border-radius: 3px;
    font-size:13px;
    color: #fff;
  }
  .saveInpPwd:hover{
    background-color: #0C8EE6;
  }
  .tipText{
    height:100%;
    padding:0 10px;
    background: #FADADA;
    color: #D70F0F;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .tip{
    height:100%;
    margin-left:10px;
  }
  .trueTip{
    width:16px;
    height:16px;
    background: url("/static/images/trueTip.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .falseTip{
    display: inline-block;
    width:16px;
    height:16px;
    background: url("/static/images/falseTip.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
</style>
