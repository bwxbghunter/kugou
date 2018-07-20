<template>
  <div class="account">
   <div class="accountIcon" @click.stop="showSet"><img :src="public.userIcon" alt=""></div>
    <div class="accountName" >{{public.userName}} <span></span>
      <div  v-if="public.isshowSet" >
        <accountSet @closeSetPage="public.isshowSet=false"></accountSet>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import accountSet from './accountSet.vue'
  export default{
     data(){
       return{
       }
     },
    props:[],
    components:{accountSet},
    methods:{
      showSet:function(){
         this.public.isshowSet = true;
      },
    },
    computed:{
      ...mapState(['public'])
    },
    mounted(){},
    watch:{}
  }
</script>
<style>
.account{
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
}
  .accountIcon{
    width:40px;
    height:40px;
    min-width: 40px;
    min-height:40px;
    border-radius: 50%;
    /*background-color: #f00;*/
    margin:0 15px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }
.accountIcon img{
  width: 200%;
  height: 115%;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -100%;
}
  .accountName{
    width:calc(100% - 70px);
    height:100%;
    line-height:50px;
    text-align: left;
    color: #ffffff;
    font-size:12px;
    cursor: pointer;
    position: relative;
  }
</style>
