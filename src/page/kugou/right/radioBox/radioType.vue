<template>
  <div class="radioType" >
    <div class="radiotypeBox" v-for="item in option">
      <p class="radiotypeTitle">{{item.type}} <span> .MHz</span></p>
      <div class="radiosTypebox">
        <ul class="radiostypeboxUl clearfix">
          <li class="radiostypeboxLis fl" v-for="val in item.data_list">
            <div class="radiosimgBox">
              <img class="radiosimgTarget" :src="val.url_img" alt="">
              <div class="radiostipImg">
                <div class="radiostipTextImg"></div>
                <div class="radiostipPlay"><img :src="val.play_img" alt=""></div>
              </div>
            </div>
            <p class="radiosTitle">{{val.tipText}}</p>
            <p>{{val.online}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:['option'],
    components:{},
    methods:{

    },
    computed:{},
    mounted(){
      if(this.option.length>0){
        $g.cutImg(135,document.getElementsByClassName('radiosimgTarget'));
      }
    }
  }
</script>
<style >
  .radioType{
    width:calc(100% - 20px);
    height:100%;
    margin:0 0 0 20px;
  }
  .radiotypeBox{
    width:100%;
  }
  .radioType .radiotypeBox{
    margin-bottom:10px;
  }
  .radiotypeTitle{
    width: 100%;
    height: 20px;
    font-size: 20px;
    line-height: 20px;
    color: #333333;
    text-align: left;
    border-left: 2px solid #288FE7;
    font-weight: normal;
    text-indent: 5px;
    margin-bottom: 10px;
  }
  .radiotypeTitle span{
    color: #9E9E9E;
    font-size:12px;
  }
  .radiosTypebox,.radiostypeboxUl{
    width: 100%;
  }
  .radiostypeboxLis{
    display: inline-block;
    margin-right:30px;
    width:100px;
    height:150px;
    margin-bottom:20px;
  }
  .radiostypeboxLis:nth-child(5n){
    margin-right:0;
  }
  .radiostypeboxLis .radiosimgBox{
    width:100%;
    height:100px;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
  }
  .radiostipImg{
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    cursor: pointer;
  }
  .radiostipTextImg{
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    margin:auto;
    border: 12px solid rgba(0, 0, 0, 0.35);
    border-radius: 100%;
  }
  .radiostipPlay{
    width:50px;
    height:50px;
    display: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
  }
  .radiostipImg:hover .radiostipPlay{
    display: block;
  }
  .radiostipImg:hover{
    background-color: rgba(0, 0, 0, 0.2);
  }
  .radiostypeboxLis .radiosimgBox .radiostipPlay img{
    width:16px;
    height:16px;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    margin:auto;
  }
  .radiostypeboxLis .radiosimgBox img{
    width:100%;
    height: 100%;
  }
  .radiostypeboxLis p{
    width:100%;
    height:25px;
    color: #9E9E9E;
    font-size:13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .radiostypeboxLis p span{
    display: inline-block;
    width:16px;
    height:16px;
    background: url("/static/images/eye.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:5px;
  }
  .radiostypeboxLis p.radiosTitle{
    height:30px;
    color: #333;
    text-align: center;
    font-size:16px;
    justify-content: center;
    align-items: flex-end;
  }
</style>
