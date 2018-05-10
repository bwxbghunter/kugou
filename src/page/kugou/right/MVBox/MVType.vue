<template>
  <div class="MVType">
     <div class="typeBox" v-for="item in option">
       <p class="typeTitle">{{item.type}}</p>
       <div class="Typebox">
         <ul class="typeboxUl clearfix">
           <li class="typeboxLis fl" v-for="val in item.data_list">
             <div class="imgBox"></div><p> <span></span>{{val.online}}人在看</p>
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
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'儿童',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'诱惑',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'场景',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'主题',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'现场',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'影视',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'舞蹈',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'歌手',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          },
          {
            type:'语言',
            data_list:[
              {url_img:'',online:'1.2万'},
              {url_img:'',online:'4065'},
              {url_img:'',online:'56'},
              {url_img:'',online:'998'},
              {url_img:'',online:'8056'},
              {url_img:'',online:'1.3万'},
              {url_img:'',online:'9991'},
            ]
          }
        ]
      }
    },
    props:[],
    components:{},
    methods:{},
    computed:{},
    mounted(){}
  }
</script>
<style scoped>
  .MVType{
    width:calc(100% - 20px);
    height:100%;
    margin:0 0 0 20px;
  }
  .typeBox{
    width:100%;

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
    background-color: #cccccc;
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
