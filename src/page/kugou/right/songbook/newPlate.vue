
<template>
  <div class="newPlate">
    <div class="newTitle">
      <div class="headlines">
        <div class="leftNewHead"><span></span>新碟上架</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    props:[],
    components:{},
    computed:{},
    methods:{},
    mounted(){}
  }
</script>
<style scoped>
  .newPlate{
    width: 100%;
    height: 100%;
  }
  .newTitle{
    width: 100%;
    height: 50px;
    /*border-bottom: 1px solid #E9E9E9;*/
  }
  .headlines{
    width: 100%;
    height: 40px;
    margin-top: 10px;
    line-height: 40px;
    font-size: 14px;
    color: #777777;
    text-align: center;
  }
  .leftNewHead{
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    color: #333;
  }
  .leftNewHead span{
    display: inline-block;
    width: 3px;
    height: 22px;
    background-color: #288FE7;
    margin-right: 5px;
  }


</style>
