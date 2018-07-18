<template>
  <div class="accountScurity">
    <div class="scurityBox">
    <div class="scurityIcon"><span></span></div>
    <div class="authWay">
      <p><span class="safeEmail">安全邮箱</span> <span>(验证后可以用于找回密码和登录账号)</span></p>
      <p>2*******96@qq.com</p>
    </div>
    <div class="scurityStatus"> <span>状态：</span>未验证</div>
    <div class="scurityBtn">立即验证</div>
  </div>
    <div class="scurityBox">
      <div class="scurityIcon"><span style="background:#EBA83F url('/static/images/phone_safe.png') no-repeat center;-webkit-background-size: 19px auto;background-size: 19px auto;"></span></div>
      <div class="authWay">
        <p><span class="safeEmail">安全手机</span> <span>(验证后可以用于找回密码和登录帐号)</span></p>
        <p>183****8386</p>
      </div>
      <div class="scurityStatus"> <span>状态：</span>已验证</div>
      <div class="scurityBtn" style="background: #ffffff;color: #666666; border: 1px solid #d2d1d1;">解除绑定</div>
    </div>
    <div class="scurityBox">
      <div class="scurityIcon"><span style="background: url('/static/images/lock.png') no-repeat center;-webkit-background-size: 19px auto;background-size: 19px auto;"></span></div>
      <div class="authWay">
        <p><span class="safeEmail">安全问题</span> <span>(通过安全问题重新设置密码)</span></p>
        <!--<p></p>-->
      </div>
      <div class="scurityStatus"> <span>状态：</span>未设置</div>
      <div class="scurityBtn">立即设置</div>
    </div>
    <div class="scurityBox">
      <div class="scurityIcon"><span style="background:#fff url('/static/images/qq.png') no-repeat center;-webkit-background-size: 112% 112%;background-size: 112% 112%;"></span></div>
      <div class="authWay">
        <p><span class="safeEmail">QQ</span> <span>(可用登录帐号)</span></p>
        <!--<p>2*******96@qq.com</p>-->
      </div>
      <div class="scurityStatus" style="color: #9c9c9c;"> <span>状态：</span >已绑定</div>
      <div class="scurityBtn" style="background: transparent"></div>
    </div>
    <div class="scurityBox">
      <div class="scurityIcon"><span style="background:#fff url('/static/images/wechat_safe.png') no-repeat center;-webkit-background-size: 112% 112%;background-size: 112% 112%;"></span></div>
      <div class="authWay">
        <p><span class="safeEmail">微信</span> <span>(可用登录帐号)</span></p>
        <p>微信：猜猜我是谁😠 会有糖吃</p>
      </div>
      <div class="scurityStatus"  style="color: #9c9c9c;"> <span>状态：</span>已绑定</div>
      <div class="scurityBtn"  style="background: #ffffff;color: #666666; border: 1px solid #d2d1d1;">解除绑定</div>
    </div>
    <div class="scurityBox">
      <div class="scurityIcon"><span style="background:#bcbcbc url('/static/images/wb.png') no-repeat center;-webkit-background-size: 20px auto;background-size: 20px auto;"></span></div>
      <div class="authWay">
        <p><span class="safeEmail">微博</span> <span>(可用登录帐号)</span></p>
        <!--<p>2*******96@qq.com</p>-->
      </div>
      <div class="scurityStatus"> <span>状态：</span>未绑定</div>
      <div class="scurityBtn">立即验证</div>
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
  .accountScurity{
    width:100%;
    height:100%;
  }
  .scurityBox{
    width:100%;
    height:79px;
    border-bottom: 1px solid #E7E7E7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .scurityIcon{
    width:30px;
    height:30px;
    border-radius:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bcbcbc;
    position: relative;
    overflow: hidden;
  }
  .scurityIcon span{
    display: inline-block;
    width:100%;
    height:100%;
    background: url("/static/images/msg.png")no-repeat center;
    -webkit-background-size:18px auto;
    background-size:18px auto;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  .authWay{
    width:334px;
    font-size:14px;
    color: #9c9c9c;
    text-align: left;
    line-height:25px;
  }
  .safeEmail{
    font-size:20px;
    color: #333333;
  }
  .scurityStatus{
    color: #333;
    font-size:14px;
  }
  .scurityStatus span{
    color: #9c9c9c;

  }
  .scurityBtn{
    width:90px;
    height:30px;
    background-color: #169AF3;
    border-radius:3px;
    text-align: center;
    cursor: pointer;
    line-height:30px;
    color: #ffffff;
  }
</style>
