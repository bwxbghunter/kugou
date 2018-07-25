<template>
  <div class="register">
    <div class="tipBox">快速注册 <span></span></div>
    <div class="registerBody">
      <div class="lineBox clearfix">
        <div class="lineName fl">手机号码</div>
        <div class="lineContainer fl"><input type="text" placeholder="请输入手机号" class="phoneInput"></div>
      </div>
      <div class="lineBox clearfix">
        <div class="lineName fl">短信验证</div>
        <div class="lineContainer fl"><input type="text" class="checkInput"> <span class="getMsg">获取短信</span></div>
      </div>
      <div class="lineBox clearfix">
        <div class="lineName fl">密码</div>
        <div class="lineContainer fl"><input type="text" class="passwordInput"></div>
      </div>
      <div class="lineBox clearfix">
        <div class="lineName fl">重复密码</div>
        <div class="lineContainer fl"><input type="text" class="passwordInput"></div>
      </div>
      <div class="lineBox clearfix" style="margin-top: 12px">
        <div class="lineName fl">性别</div>
        <div class="lineContainer fl">
          <div class="man"  @click="gendar(1)">
            <span class="gendarChoose">
              <span class="isCHosed" v-show="isgendar==1"></span></span><span>男</span>
          </div>
          <div class="woman" @click="gendar(2)">
            <span class="gendarChoose"><span  class="isCHosed" v-show="isgendar==2"></span></span><span>女</span>
          </div>
        </div>
      </div>
      <div class="lineBox clearfix" style="margin-top: 8px">
        <div class="lineName fl"></div>
        <div class="lineContainer fl">
          <span class="agreeIcon" :class="{agreeChecked:true}"></span>
          <span class="myAgree">我已阅读并同意</span>
          <span class="hyperText">用户协议</span>
          <span class="dian">、</span>
          <span class="yinsi">隐私政策</span>
        </div>
      </div>
      <div class="lineBox clearfix" style="margin-top: 8px">
        <div class="lineName fl"></div>
        <div class="lineContainer fl">
         <div class="registerSubmit">注册</div>
        </div>
      </div>
      <div class="textBottom">已注册， <span @click="$emit('gologin')">去登录</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isgendar:1,
      }
    },
    props:[],
    methods:{
      gendar:function(val){
          this.isgendar = val;
      }
    }
  }
</script>
<style scoped>
  .register{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 420px;
    height: 416px;
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
  .registerBody{
    width: calc(100% - 120px);
    padding: 5px 60px 0;
    height: calc(100% - 40px);
  }
  .lineBox{
    width: 100%;
    height: 30px;
    margin-top: 20px;
  }
  .lineName{
    width: 65px;
    height: 100%;
    line-height: 30px;
    font-size: 12px;
    color: #434343;
    text-align: right;
    margin-right: 10px;
  }
  .lineContainer{
    height: 100%;
    width: calc(100% - 75px);
    line-height: 30px;
    white-space: nowrap;
  }
  .phoneInput,.passwordInput{
    width: 223px;
    height: 28px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: left;
    text-indent: 10px;
    color: #333;
    font-size: 12px;
  }
  .checkInput{
    width: 82px;
    height: 28px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: left;
    text-indent: 10px;
    color: #ccc;
    font-size: 12px;
    vertical-align: middle;
  }
  .getMsg{
    display: inline-block;
    width: 60px;
    height: 100%;
    border-radius: 4px;
    color: #ffffff;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
    background: linear-gradient(#CECECE,#B0B0B0);
  }
  .man,.woman{
    vertical-align: middle;
    float: left;
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .gendarChoose{
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    cursor: pointer;
  }
  .isCHosed{
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background-color: #378DE0;
  }
  .agreeIcon{
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #a1a1a1;
    border-radius: 3px;
    margin-right: 5px;
    cursor: pointer;
  }
  .agreeIcon.agreeChecked{
    background: url("/static/images/selected.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .myAgree,.agreeIcon,.hyperText,.yinsi{
    vertical-align: middle;
    font-size: 12px;
    color: #888888;
  }
  .hyperText,.yinsi{
    text-decoration: underline;
  }
  .dian{
    color: #888;
    font-size: 12px;
  }
  .registerSubmit{
    width: 106px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 3px;
    cursor: pointer;
    border-radius: 3px;
    background-color: #169AF3;
  }
  .registerSubmit:hover{
    background-color: #0C8EE6;
  }
  .textBottom{
    width: calc(100% - 75px);
    margin-left: 75px;
    margin-top: 23px;
    font-size: 12px;
    color: #cccccc;
  }
  .textBottom span{
    color: #169AF3;
    cursor: pointer;
  }
  .textBottom span:hover{
    text-decoration: underline;
  }
</style>
