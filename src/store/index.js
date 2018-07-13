import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getter'
import itBwx from './itBwx'
window.$g = itBwx

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    public:{
      isshowSet:false,//设置用户
      userName:'森界降临',
      gender:1,
      choseItem:'乐库',
      userIcon:'/static/images/mv_img/8.jpg',
      showSet:false,// 是否显示顶部导航栏设置页面（主菜单）
    },
    music:{
      player:'',// 播放标签
      music_name:'',// 音乐名称
      music_time:'00:00',// 当前播放时间进度
      music_bar:0,// 进度条
      music_duration:'00:00',// 音乐总时长
      playM:function(){},// 播放音乐
      pauseM:function(){},// 暂停音乐
      status:false, // 播放状态
      btns:false,// 按钮状态
    },
    skin:{
      showPage:false,// 是否显示换肤页面
      listCurrent:1,// 列表透明度
      skinCurrent:1,// 皮肤透明度
      mainSkin:'./static/images/mv_img/13.jpg',// 皮肤路径
      skinId:0,// 皮肤id
    },

  },
  getters,
  actions,
  mutations
})



/*var Yeffect = {
  Html5FileReader: function(fiel, img, noalert) {
    img = img || false;
    noalert = noalert || false;
    if (typeof FileReader == "undefined") {
      if (!noalert) {
        alert("你的浏览器不支持预览图片预览！")
      };
      return
    };
    var Imgreader = new FileReader();
    var fielobj = $(fiel).eq(0);
    var imgobj = $(img).eq(0);
    if (img) {
      imgobj = $(img).eq(0)
    } else {
      imgobj = fielobj.parent().find("img").eq(0)
    };
    Imgreader.onload = function(e) {
      imgobj.attr("src", e.target.result)
    };
    fielobj.change(function() {
      Imgreader.readAsDataURL(fielobj[0].files[0])
    })
  }
};*/

/*
var dom=document.getElementById('dom');
///dom.style;width;innerHTML,outerHTML='<br>'
var $dom=$('#dom');
//$dom.attr('style',),$dom.css({width:top}),$dom.html('<br>');

function $(id) {
  var dom;
  if('#'){
    dom=document.getElementById(id)
  }else{
    dom=document.getElementsByClassName(id)
  }

  return{
    '0':dom,
    html:function (str) {
      if(str)dom.innerHTML=str;
      return dom.innerHTML;
    },
    css:function (obj) {
      for(var k in obj){
        dom.style[k]=obj;
      }
      return dom.style;
    },
    attr:function (k,v) {
      dom.setAttribute('k',v);
    },
    height:dom.height,
  }
}

$('#dom').height(30);
*/



///s
/*  var html=;
(function () {
  var ssss=0;
  html

})();*/






///s




