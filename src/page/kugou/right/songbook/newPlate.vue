
<template>
  <div class="newPlate">
    <div class="newTitle">
      <div class="headlines clearfix">
        <div class="leftNewHead fl"><span></span>每日推荐</div>
        <div class="moreThen fr">更多</div>
      </div>
    </div>
    <div class="newPlateList">
      <ul class="newPlateListUl clearfix">
        <li class="newPlateListLis fl" v-for="item in newList" v-bind:key="item.id">
          <div class="pictureList">
            <img :src="item.img" style="width: auto;height: 100%">
            <div class="pictureListMask">
              <div class="picturePlay"></div>
            </div>
          </div>
          <div class="pictureText">{{item.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    props:['newList'],
    components:{},
    computed:{
    },
    methods:{

    },
    mounted(){
    },
    watch:{}
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
    height: 30px;
    padding-top: 10px;
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
    font-size: 19px;
    color: #333;
  }
  .leftNewHead span{
    display: inline-block;
    width: 3px;
    height: 22px;
    background-color: #288FE7;
    margin-right: 5px;
  }
  .moreThen{
    font-size: 12px;
    color: #777777;
    cursor: pointer;
  }
  .newPlateList{
    width: 100%;
    height: auto;
  }
  .newPlateListUl{
    width: 100%;
    height: auto;
  }
  .newPlateListLis{
    width: 152px;
    height: 140px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  .newPlateListLis:nth-child(2n){
    margin-right: 0;
  }
  .pictureList{
    width: 100%;
    height: 100px;
    overflow: hidden;
    position: relative;
  }
  .pictureText{
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: left;
    text-indent: 10px;
    color: #333333;
    cursor: pointer;
  }
  .newPlateListLis:hover .pictureListMask{
    display: block;
  }
  .pictureListMask{
    display: none;
    width: 100%;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.58);
    position: absolute;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .picturePlay{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    background: url("/static/images/pause.png") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    cursor: pointer;
  }
</style>
