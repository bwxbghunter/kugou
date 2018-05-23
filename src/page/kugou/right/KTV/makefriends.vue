<template>
  <div class="makefriends">
    <div class="friendsTitle">
      <div class="leftTitle"> <span></span>K歌交友</div>
      <div class="changes"><span class="changesIcon"></span>换一换</div>
    </div>
    <div class="stranger">
      <ul class="strangerUl">
        <li class="strangerLis" v-for="item in dataAry">
          <div class="strangerPicture">
            <img :src="item.img" alt="">
            <div class="groundGlass"></div>
            <div class="greetBox">
              <div class="greet" :title="'向 '+item.name+' 打招呼'">打招呼</div>
            </div>
          </div>
          <div class="strangerText">
            <p class="strangerName"><span class="nameText">{{item.name}}</span> <span class="gender"><img :src="item.gender?boy:girl" alt=""></span></p>
            <p class="strangerDetail"><span class="constellation">{{item.constellation}}</span> <span class="address">{{item.address}}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        girl:'/static/images/boy.png',
        boy:'/static/images/girl.png',
        dataAry:[
          {
            name:'梦游中',
            gender:true,
            constellation:'水瓶座',
            address:'北京',
            img:'/static/images/mv_img/20.jpg'
          },
          {
            name:'最美主持是鳕熊、小潘潘',
            gender:false,
            constellation:'水瓶座',
            address:'北京',
            img:'/static/images/mv_img/20.jpg'
          },
          {
            name:'文儿站在最中央',
            gender:true,
            constellation:'水瓶座',
            address:'北京',
            img:'/static/images/mv_img/20.jpg'
          },
          {
            name:'包头医学院',
            gender:false,
            constellation:'水瓶座',
            address:'北京',
            img:'/static/images/mv_img/20.jpg'
          },
          {
            name:'笑忘前生缘',
            gender:true,
            constellation:'水瓶座',
            address:'北京',
            img:'/static/images/mv_img/20.jpg'
          },
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
<style>
  .makefriends{
    width:calc(100% - 40px);
    height:100%;
    position: relative;
    margin:auto;
  }
  .friendsTitle{
    width:100%;
    height:28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
    margin-top:10px;
  }
  .leftTitle{
    line-height:28px;
    color: #333333;
    font-size:17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .leftTitle span{
    display: inline-block;
    width:4px;
    height:16px;
    background-color: #288FE7;
    margin-right:5px;
  }
  .changes{
    width:68px;
    height:26px;
    border: 1px solid #DBDBDB;
    border-radius: 3px;
    text-align: center;
    line-height:26px;
    font-size:12px;
    color: #555555;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    cursor: pointer;
  }
  .changesIcon{
    display: inline-block;
    width:15px;
    height:15px;
    background: url("/static/images/changes.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    margin-right:5px;
  }
  .changes:hover{
    color: #169AF3;
    border: 1px solid #169AF3;
  }
  .changes:hover .changesIcon{
    background: url("/static/images/changes_hover.png")no-repeat center;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .stranger{
    width:100%;
    margin-top:10px;
  }
  .strangerUl{
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }
  .strangerLis{
    width:116px;
    height:170px;
    margin-right:20px;
  }
  .strangerLis:last-child{
    margin-right:0px;
  }
  .strangerPicture{
    width:100%;
    height:116px;
    border-radius: 50%;
    background-color: #cccccc;
    overflow: hidden;
    position: relative;
  }
  .strangerPicture img{
    width:100%;
    height: 100%;
  }
  .groundGlass{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    border-radius: 50%;
    border: 12px solid rgba(0, 0, 0, 0.34);

    /*background-color: rgba(0,0,0,0.3);*/
    /*-webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    -o-filter: blur(2px);
    filter: blur(10px);*/
  }
  .greetBox{
    width:100%;
    height:116px;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease;
  }
  .greet{
    width:66px;
    height:26px;
    border: 2px solid rgba(255, 255, 255, 0.65);
    text-align: center;
    line-height:26px;
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    font-size:12px;
    border-radius: 30px;
  }
  .strangerPicture:hover .greetBox{
    opacity: 1;
  }
  .greet:hover{
    border: 2px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  .strangerText{
    width:100%;
  }
  .strangerName{
    width:100%;
    height:30px;
    font-size:12px;
    color: #555;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nameText{
    height:100%;
    max-width: 98px;
    line-height:30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .gender{
    width:15px;
    height:15px;
    background-color: #0E96FF;
    margin-left:3px;
  }
  .gender img{
    width: 100%;
    height: 100%;
  }
  .strangerDetail{
    width:100%;
    height:20px;
  }
  .constellation,.address{
    padding:2px 6px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    text-align: center;
    font-size:12px;
    color: #555;
  }
  .constellation{
    margin-right:2px;
  }
</style>
