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
    music:{
      player:'',// 播放标签
      music_name:'',// 音乐名称
      music_time:'00:00',// 当前播放时间进度
      music_bar:0,// 进度条
      music_duration:'00:00',// 音乐总时长
      play_fn:function(){},// 播放音乐
      status:false, // 播放状态
    }
  },
  getters,
  actions,
  mutations
})
