<template>
  <div class="login">
    <div class="tipBox">登录账户 <span></span></div>
    <div class="loginBody">
      <div class="changeTable clearfix">
        <div class="accountLogin fl" :class="{active:loginWay==1}" @click="tab(1)">账号登录</div>
        <div class="messageLogin fl" :class="{active:loginWay==2}" @click="tab(2)">短信登录</div>
      </div>
      <div class="accountLoginBox" v-show="loginWay==1">
        <div class="accountName">
          <input type="text" class="accountInp">
          <span><span class="trangle"></span></span>
        </div>
        <div class="accountPassword" >
          <input type="password" class="passwordInp">
          <span>找回密码</span>
        </div>
        <div class="loginSet">
          <div class="setItem"><span class="checkBoxIcon" :class="{checkedBox:true}"></span><span>记住密码</span></div>
          <div class="setItem"><span class="checkBoxIcon" :class="{checkedBox:true}"></span><span>自动登录</span></div>
          <div class="setItem registerAccount" @click="$emit('goregister')">注册账号</div>
        </div>
        <div class="loginSubmit">登录</div>
      </div>
      <div class="messageLoginBox" v-show="loginWay==2">
        <div class="phoneNum">
          <input type="text" maxlength="11" class="phoneInp">
        </div>
        <div class="testNum">
          <input type="text" maxlength="11" class="testInp">
          <div class="getMsg">短信获取</div>
        </div>
        <div class="loginSubmit phoneSubmit">登录</div>
      </div>
    </div>
    <div class="loginFooter">
      <div class="otherLogin"><span></span><span>其他登录方式</span><span></span></div>
      <div class="otherType">
        <div class="loginType"></div>
        <div class="loginType"></div>
        <div class="loginType"></div>
        <div class="loginType"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        loginWay:1, // 登录方式
      }
    },
    props:[],
    methods:{
      tab:function(val){
        if(val<2){
          this.loginWay = 1;
        }else{
          this.loginWay = 2;
        }
      }
    }
  }
</script>
<style scoped>
  .login{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 400px;
    height: 405px;
    background-color: #fff;
    z-index: 20;
  }
  .tipBox{
    height: 35px;
    width: 100%;
    background-color: #BFD6E8;
    line-height: 35px;
    font-size: 15px;
    color: #ffffff;
    text-indent: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tipBox span{
    display: block;
    width:14px;
    height: 14px;
    background: url("/static/images/close.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 15px;
    cursor: pointer;
  }
  .loginBody{
    width: 280px;
    padding: 0 60px;
    height: 275px;
  }
  .loginFooter{
    width: 280px;
    padding: 0 60px;
    height: calc(100% - 310px);
  }
  .changeTable{
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #E5E5E5;
    margin-top: 5px;
    line-height: 44px;
    font-size: 18px;
    font-weight: bold;
    color: #6C6C6C;
    text-align: center;
    cursor: pointer;
  }
  .accountLogin,.messageLogin{
    width: 50%;
    height: 100%;
  }
  .active{
    color: #288FE7;
    border-bottom: 2px solid #288FE7;
  }
  .accountLoginBox,.messageLoginBox{
    width: 100%;
    height:calc(100% - 65px);
    padding-top: 20px;
  }
  .accountName,.accountPassword,.phoneNum{
    width: 278px;
    height: 38px;
    border: 1px solid #CCCCCC;
    /*margin-top: 20px;*/
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
  }
  .testNum{
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .testInp{
    width: 174px;
    height: 36px;
    border: 1px solid #CCCCCC;
    text-align: left;
    text-indent: 10px;
    color: #0A0A0A;
    font-size: 16px;
    outline: none;
  }
  .getMsg{
    width: 92px;
    height: 36px;
    border: 1px solid #ccc;
    color: #6A6A6A;
    font-size: 13px;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
  }
  .getMsg:hover{
    text-decoration: underline;
    border: 1px solid #999999;
  }
  .accountName .accountInp,.passwordInp,.phoneNum .phoneInp{
    width: 100%;
    height: 100%;
    outline: none;
    border:none;
    text-indent: 10px;
    color: #0A0A0A;
    font-size: 16px;
  }
  .accountName span,.accountPassword span{
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
  }
  .accountPassword span{
    color: #BDBDBD;
    font-size: 12px;
    line-height: 38px;
    cursor: pointer;
    text-decoration: underline;
  }
  .accountName .trangle{
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 15px;
    cursor: pointer;
    margin: auto;
    width:0;
    height:0;
    border-width:8px 8px 0px;
    border-style:solid;
    border-color:#888 transparent transparent ;/*透明 透明  灰*/
  }
  .loginSet{
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .loginSubmit{
    width: 100%;
    height: 38px;
    background-color: #169AF3;
    text-align: center;
    line-height: 38px;
    font-size: 17px;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
  }
  .phoneSubmit{
    margin-top: 30px;
  }
  .setItem{
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 13px;
    color: #707070;
  }
  .setItem.registerAccount{
    text-indent: 30px;
    cursor: pointer;
  }
  .setItem.registerAccount:hover{
    text-decoration: underline;
  }
  .checkBoxIcon{
    width: 14px;
    height: 14px;
    border: 1px solid #a1a1a1;
    border-radius: 3px;
    margin-right: 5px;
    cursor: pointer;
  }
  .checkBoxIcon.checkedBox{
    background: url("/static/images/selected.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .otherLogin{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .otherLogin span{
    font-size: 14px;
    color: #9B9B9B;
    line-height: 30px;
  }
  .otherLogin span:first-child,.otherLogin span:last-child{
    height: 1px;
    background-color: #E5E5E5;
    width: 90px;
  }
  .otherType{
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loginType{
    width: 26px;
    height: 26px;
    margin-left: 12px;
  }
  .loginType:nth-child(1){
    background: url("/static/images/qq.png")no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .loginType:nth-child(2){
    background:url("/static/images/sina.png")no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .loginType:nth-child(3){
    background: url("/static/images/people.png")no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .loginType:nth-child(4){
    background: url("/static/images/wc.png")no-repeat left top ;
    -webkit-background-size: 44px 26px;
    background-size: 44px 26px;
  }
</style>
