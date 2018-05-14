var itBwx = {};
/****************滚动条函数********************/
/*isPC,scrollStyleV,scrollStyleH*/
function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > -1) {
      flag = false;
      break
    }
  }
  return flag
}
itBwx.scrollV = function scrollV(Diva, tiaoa, tiaob) {
  var isPcsd = isPC();
  if(tiaoa['style']){
    tiaoa.style.display='none';
  }
  if (!isPcsd) return function () {};
  tiaoa = tiaoa || "";
  tiaob = tiaob || "";
  if(tiaoa=="" || tiaob=="") return;
  var DivA_obj = Diva;
  var tiaoA_obj = tiaoa;
  var tiaob_obj = tiaob;
  var bilizhi;
  var bilizhis2;
  var yuanshiutp=0;
  var scscctop=0;
  var ofHet=0,DivA_objH=0,divb_objH=0;
  sethanshu();
  function sethanshu() {
    DivA_objH = DivA_obj.offsetHeight;
    divb_objH = DivA_obj.scrollHeight;
    bilizhi = DivA_objH / divb_objH;
    if (bilizhi >= 1) {
      tiaoA_obj.style.display="none"
    } else {
      tiaoA_obj.style.display="block";
      ofHet=tiaoA_obj.offsetHeight;
      var mbi=Math.min(30/ofHet,0.5);/****限制最大不能超过滑动槽*****/
      bilizhi=Math.max(bilizhi,mbi);/*****限制最低不能小于30像素但不能超过滑动槽*****/
      tiaob_obj.style.height=bilizhi * 100 + "%";
      var divAt=DivA_obj.scrollTop;
      var divbi=divAt/(DivA_objH-divb_objH);
      var tiaot=(ofHet-ofHet*bilizhi)*divbi;
      tiaob_obj.style.top=-tiaot+"px";
    }
  };
  function mousemove(u) {
    DivA_obj.scrollTop=scscctop + (yuanshiutp-u.pageY) / bilizhis2;
    return false
  }
  window.addEventListener("resize",sethanshu);
  DivA_obj.addEventListener("scroll",sethanshu);
  tiaob_obj.addEventListener("mousedown",function (e) {
    yuanshiutp = e.pageY;
    scscctop = DivA_obj.scrollTop;
    bilizhis2 = parseInt(ofHet-tiaob_obj.offsetHeight) / parseInt(DivA_objH-divb_objH);
    document.addEventListener("mousemove",mousemove);
    return false
  });
  document.addEventListener("mouseup",function () {
    document.removeEventListener("mousemove",mousemove);
  })
  return sethanshu;
}
// 截取图片
itBwx.cutImg = function cutImg(num,img){
  var classElements=img;
  for(var i=0;i<classElements.length;i++){
    if(classElements[i].width>classElements[i].height){
      classElements[i].style.height = num+'px';
      classElements[i].style.width =classElements[i].width+(classElements[i].width+num)/2+'px';
      classElements[i].style.marginLeft =-(classElements[i].width-num)/2+'px';
    }else{
      classElements[i].width = num;
    }
  }
}
export default itBwx;
