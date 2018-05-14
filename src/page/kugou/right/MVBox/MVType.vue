<template>
  <div class="MVType" >
     <div class="typeBox" v-for="item in option">
       <p class="typeTitle">{{item.type}}</p>
       <div class="Typebox">
         <ul class="typeboxUl clearfix">
           <li class="typeboxLis fl" v-for="val in item.data_list">
             <div class="imgBox">
               <img class="imgTarget" :src="val.url_img" alt=""></div><p> <span></span>{{val.online}}人在看</p>
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

        option:[
          {
            type:'热门',
            data_list:[
              {url_img:'/static/images/mv_img/1.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/8.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/9.jpg',online:'56'},
              {url_img:'/static/images/mv_img/4.jpg',online:'998'},
              {url_img:'/static/images/mv_img/5.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/6.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/7.jpg',online:'9991'},
            ]
          },
          {
            type:'儿童',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/19.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/18.jpg',online:'56'},
              {url_img:'/static/images/mv_img/17.jpg',online:'998'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/15.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/14.jpg',online:'9991'},
            ]
          },
          {
            type:'诱惑',
            data_list:[
              {url_img:'/static/images/mv_img/33.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/32.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/31.jpg',online:'56'},
              {url_img:'/static/images/mv_img/30.jpg',online:'998'},
              {url_img:'/static/images/mv_img/29.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/28.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/24.jpg',online:'9991'},
            ]
          },
          {
            type:'场景',
            data_list:[
              {url_img:'/static/images/mv_img/25.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/26.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/27.jpg',online:'56'},
              {url_img:'/static/images/mv_img/15.jpg',online:'998'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/17.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/18.jpg',online:'9991'},
            ]
          },
          {
            type:'主题',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/19.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/18.jpg',online:'56'},
              {url_img:'/static/images/mv_img/17.jpg',online:'998'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/15.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/14.jpg',online:'9991'},
            ]
          },
          {
            type:'现场',
            data_list:[
              {url_img:'/static/images/mv_img/21.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/22.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/23.jpg',online:'56'},
              {url_img:'/static/images/mv_img/20.jpg',online:'998'},
              {url_img:'/static/images/mv_img/19.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/6.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/11.jpg',online:'9991'},
            ]
          },
          {
            type:'影视',
            data_list:[
              {url_img:'/static/images/mv_img/33.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/32.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/31.jpg',online:'56'},
              {url_img:'/static/images/mv_img/30.jpg',online:'998'},
              {url_img:'/static/images/mv_img/29.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/28.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/24.jpg',online:'9991'},
            ]
          },
          {
            type:'舞蹈',
            data_list:[
              {url_img:'/static/images/mv_img/20.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/19.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/18.jpg',online:'56'},
              {url_img:'/static/images/mv_img/17.jpg',online:'998'},
              {url_img:'/static/images/mv_img/16.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/15.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/14.jpg',online:'9991'},
            ]
          },
          {
            type:'歌手',
            data_list:[
              {url_img:'/static/images/mv_img/1.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/8.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/9.jpg',online:'56'},
              {url_img:'/static/images/mv_img/4.jpg',online:'998'},
              {url_img:'/static/images/mv_img/5.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/6.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/7.jpg',online:'9991'},
            ]
          },
          {
            type:'语言',
            data_list:[
              {url_img:'/static/images/mv_img/21.jpg',online:'1.2万'},
              {url_img:'/static/images/mv_img/22.jpg',online:'4065'},
              {url_img:'/static/images/mv_img/23.jpg',online:'56'},
              {url_img:'/static/images/mv_img/26.jpg',online:'998'},
              {url_img:'/static/images/mv_img/25.jpg',online:'8056'},
              {url_img:'/static/images/mv_img/24.jpg',online:'1.3万'},
              {url_img:'/static/images/mv_img/27.jpg',online:'9991'},
            ]
          }
        ]
      }
    },
    props:[],
    components:{},
    methods:{

    },
    computed:{},
    mounted(){
      if(this.option.length>0){
         $g.cutImg(135,document.getElementsByClassName('imgTarget'));
      }
    }
  }
</script>
<style>
  .MVType{
    width:calc(100% - 20px);
    height:100%;
    margin:0 0 0 20px;
  }
  .typeBox{
    width:100%;
  }
  .MVType .typeBox{
    margin-bottom:60px;
  }
  .typeTitle{
    width:100%;
    height:15px;
    font-size:15px;
    line-height:15px;
    color: #333333;
    text-align: left;
    border-left:2px solid #288FE7;
    font-weight:normal;
    text-indent: 5px;
    margin-bottom:6px;
  }
  .Typebox,.typeboxUl{
    width: 100%;
  }
  .typeboxLis{
    display: inline-block;
    margin-right:18px;
    width:148px;
    height:135px;
    margin-bottom:6px;
  }
  .typeboxLis:nth-child(4n){
    margin-right:0;
  }
  .typeboxLis .imgBox{
    width:100%;
    height:110px;
    overflow: hidden;
  }
  .typeboxLis .imgBox img{
    width:100%;
    height: 100%;
  }
  .typeboxLis p{
    width:100%;
    height:25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #9E9E9E;
    font-size:13px;
  }
  .typeboxLis p span{
    display: inline-block;
    width:16px;
    height:16px;
    background: url("/static/images/eye.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:5px;
  }
</style>
