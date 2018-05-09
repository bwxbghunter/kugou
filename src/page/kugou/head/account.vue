<template>
  <div class="account">
   <div class="accountIcon"></div>
    <div class="accountName">森界降临 <span></span></div>
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
    background-color: #f00;
    margin:0 15px;
    cursor: pointer;
  }
  .accountName{
    width:calc(100% - 70px);
    height:100%;
    line-height:50px;
    text-align: left;
    color: #ffffff;
    font-size:12px;
    cursor: pointer;
  }
</style>
