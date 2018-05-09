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
      music_name:'',
      music_time:'00:00',
      music_bar:0,
      music_duration:'00:00',
      play_fn:function(){},
      pause_fn:function(){},
      status:false,
    }
  },
  getters,
  actions,
  mutations
})
