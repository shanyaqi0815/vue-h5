<template>
  <div class="shopping1">
      <div class="shop">
          <p>购物车</p>
          <p>管理</p>
      </div>
      <div class="kuai_f">
          <div class="kuai" v-for="(arr,num) in list" :key="num">
            <div class="top">
                <img :src="data_img" v-if="!arr.xuanzhong" class="rid" @click="dianji(num)">
                <img :src="data_imgs" v-if="arr.xuanzhong" class="rid" @click="dianji(num)">
                <img class="rit" src="https://gw.alicdn.com/tfs/TB1hDVeDMTqK1RjSZPhXXXfOFXa-32-32.png_40x40q90_.webp">
                <p>{{arr.shop}}</p>
                <img class="jian" src="https://img.alicdn.com/tfs/TB1uSOhKIfpK1RjSZFOXXa6nFXa-11-18.png_24x24q90_.webp">
            </div>
            <div class="cen" v-for="(a,index) in arr.Son" :key="index">
                <div class="cen_div">
                    <img :src="data_img" v-if="!a.xuanzhong" class="rid" @click="sondian(num,index)">
                    <img :src="data_imgs" v-if="a.xuanzhong" class="rid" @click="sondian(num,index)">
                </div>
                <img class="imgs_da" src="http://img.alicdn.com/imgextra/i1/2206394559824/O1CN01PwgbpO2MRRXYfRdHU_!!2206394559824-2-daren.png_180x180xzq90.jpg_.webp">
                <div class="kuaiji">
                    <div class="text">{{a.text}}</div>
                    <div class="pic">
                        <span >￥{{a.pic}}</span>
                        <div class="jisuan">
                            <button class="anniu" @click="a.liang != 0 ?a.liang --  : a.liang= 0">-</button>
                            <input type="text" v-model="a.liang">
                            <button  class="anniu" @click="a.liang++">+</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

      </div>
      <div class="shopping1_bot">
         <img :src="data_img" v-if="!xuan" class="rid" @click="quanbu()">
         <img :src="data_imgs" v-if="xuan" class="rid" @click="quanbu()">
         <div class="heji">
             合计：<span>￥{{data_pic}}</span>
         </div>
         <button type="button">结算({{data_pic11}})</button>
      </div>
     
  </div>
</template>

<script>
export default {
  //模板名称
  name: 'shopping1',
  //数据
  data () {
    return {
        fuck:"12321323213213",
        pic:"",
        length:"",
        data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAANlBMVEVHcEzMzMzNzc3V1dXOzs7Nzc3Nzc3Nzc3Nzc3Nzc3b29vMzMz////19fXu7u7a2trk5OTR0dG06x/LAAAAC3RSTlMAN84GVqG36X8jB0no5zwAAAGJSURBVFjDrVjZtoQgDFOEqUvZ/v9nRwGvy1UHMHmdMadNWmhpmlsMsleCaJqIhOrl0JRilGr++ghSciygaP8zrDxtLsVnesAnh2bYKKwzWvMMrY2zG80vdbo+/dO78Pke2vn0Y989hiFSDIYvYVI84iEYGfW0mm+hIw3JO46Yijf8CBOT6p84LP+EvWeJHI4z4O5YIofhLJhrFhnk0JwJHYQ5qTsEX7I5Zpbg0cHpThTksstIdGdBHBfBnWQZMr29cHpLaOk5z8VYxP389X6xIDtZ2l0glitgt1DaQndPPsdQVG0gMRQVzmSqU2RVhcZU8J4r4VPxq/I6O1bckg/VyrpKS6lauRqxamW9N6s/MvSeqydxoQtVvcGryaoRb3SNyop35qz20Ctzgj3UTO9JJgwJJB2IsBCLIcUGKXtIA0KOAsihhDkeIQc15MqAXF6YaxRyoWNGC8iQgxm3IIMfZgSFDMOYsRyzIGBWFczShFnfMIskZqXFLNeYNR/04AB6+gA9wpQ+B30B3RGo3Y8v7Z8AAAAASUVORK5CYII=",
        data_imgs:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAAqUExURUdwTP9rAP9xAP9vAP9pAP9tAP9rAP9tAP9fAP90AP9XAP99AP9nAP9tACJieToAAAAIdFJOUwCH6CSqRmbMw7TcXwAAAy1JREFUSMd1lr+LE0EUxzdeFMuAdnfCgYIecqAiIlwTPQRBhHioaHd4ZRrxKrlOPBlCqhM8hmWLmJAsU1oIy1RayBax0EYC2f/F92tmZ5Lc1o/PfN+b73zfJkn43bv8bvvn9QcHyVnf+YdVVf2eTqfltc7qittbWQY1UDJVHy6tqniutRbKtK/Uo+WKu1Axm1XVfA4HlUqp3cWKRgoleA4d1AdM3oor1t4XGjFOL2Imt6KSvaKQijnJxc8chxUXbKGhJhNKSZRevh+UrBdIybSj9LFCmUGg1VqtQy0KKaZnasVdW1jXEVFEjBn7wVubotoMp+vnghTjLuKOhRqk6GguKjdmKCVH1lLPuvJzcZSJF+tr3Fy4Bj4WvIPn6FQa4rk4ipz0BCHUNY6OKFhDWsxI+oFPc0tLFOqpSVJsGkwu0GLaIiWYLs6FOuoxBcWse0oW+UWRFhJzs9aio5tminFquaPYL6wF9JJaOKbQtV8A8/HljV5P9J6zjElDvyi1n7xiLWZTGiqKWMunJLnIEGipa+WkyC9gyfs9poy5Z/BLEfrlF3T6WLQM6IbwoMgvAGkqOWiEZvEHOb8IhGsmMrki8ksLITJd81VKbOiXHwjx0zWJQEK/MCSX6UoJUE4O3vA9OkhNES32e7K2xfkiSpwW47V8hsdCfiFI6f0CHR0J5QskyDbKRUg/uOmJjM7qb5Ame0D5A5CN0C8jfwHpVfBORpCG+CWXC+i60Z0A5jVD6AnIcOEad8QvujgEDEMiylAsha47BcwzgQRaNsWYNN1DfuLukUhHbbE3hccplWzUWSf2duPFO3orEMo6d0fuqaUUQYi54nOXtQz8g6U3AphG8I5y92CbNWX278XTxdfYduHBposSU7R0XARxTZ0vfUcZ+SDjxJwF+0i0DH0cpgv54v3S8qFq43zxyTCpo5nlLufLMAz4aB+VTkunXhOcddE+Qr+Mg2XDWafjlAqXDdxTvI8oDk24smDxxfuI/RItvmTPxvuIao4XlnC8j9TyEk4a8T5CSmvVD0HU0e7K34p6H5Wrfivo58Tvo9U/J/KLQ1rO+sWRH6W/iz9K/wEP1oz20WaXfgAAAABJRU5ErkJggg==",
        xuan:false,
        list:[
            {
                shop:"海飞丝",xuanzhong:false,data_img:"",Son:[
                    {
                        xuanzhong:false,imgs:"",text:"好人家新疆大盘鸡调料包180g新疆特产红烧麻辣烧鸡公底料酱料商用",pic:12.58,liang:1
                    },
                    {
                        xuanzhong:false,imgs:"",text:"好人家新疆大盘鸡调料包180g新疆特产红烧麻辣烧鸡公底料酱料商用",pic:120,liang:78
                    },
                    {
                        xuanzhong:false,imgs:"",text:"安踏男鞋跑步鞋2020夏季新款男士鞋子休闲鞋透气运动鞋官网旗舰店",pic:1158,liang:10
                    },
                    {
                        xuanzhong:false,imgs:"",text:"花花公子男装2020夏季新款男士圆领T恤打底衫时尚上衣修身短袖T恤",pic:1.02,liang:46
                    }
                    
                ]
            },
            {
                shop:"小刀电动车",xuanzhong:false,data_img:"",Son:[
                    {
                        xuanzhong:false,imgs:"",text:"可乐330ml*6罐+雪碧330ml*6罐 组合装 原装口味可口可乐出品",pic:150,liang:3
                    },
                    {
                        xuanzhong:false,imgs:"",text:"名仁薄荷苏打水碱性水饮料饮品纯净矿泉弱碱水375ml*6瓶",pic:64,liang:2
                    },
                    {
                        xuanzhong:false,imgs:"",text:"名仁柠檬苏打水碱性水饮料饮品矿泉纯净柠檬水375ml*6瓶",pic:18,liang:11
                    }
                    
                ]
            },
        ]
    }
  },
  //创建前
  beforeCreate(){
  
  },
  //创建后
  created(){
      
  },
  //挂载前
  beforeMount(){
   

  },
  //挂载后
  mounted(){

  },
  //数据更新前
  beforeUpdate(){
    

  },
  //数据更新后
  updated(){
    

  },
  //方法集合
  methods:{
      dianji(a){
          this.list[a].xuanzhong = !this.list[a].xuanzhong
          if( this.list[a].xuanzhong == false){
              this.zhuangtai(a,false)
          }else{
               this.zhuangtai(a,true)
          }
          var s = 0
          for(var i = 0 ; i < this.list.length;i++){
                if(this.list[i].xuanzhong == true){
                    s++                 
                }
            }
            if(s == this.list.length){
                this.xuan = true
            }else{
                this.xuan = false
            }

      },
      zhuangtai(a,boot){
            var num = 0;
            for(var i = 0 ; i < this.list[a].Son.length;i++){
                if(arguments.length == 2){
                  this.list[a].Son[i].xuanzhong = boot   
                            
                }
                if(this.list[a].Son[i].xuanzhong == true){
                    num++
                }
            }
            
            if(arguments.length == 1){
                if(this.list[a].Son.length == num){
                    return true
                }else{
                    return false    
                }
            }
      },
      sondian(a,b){
          this.list[a].Son[b].xuanzhong =  !this.list[a].Son[b].xuanzhong
          if(this.list[a].xuanzhong==true){
                this.list[a].xuanzhong = false
                 this.xuan = false
          }else{
              this.list[a].xuanzhong = this.zhuangtai(a)
              this.xuan = this.zhuangtai(a)
          }
          var s = 0
          for(var i = 0 ; i < this.list.length;i++){
                if(this.list[i].xuanzhong == true){
                    s++                 
                }
            }
            if(s == this.list.length){
                    this.xuan = true
                }else{
                      this.xuan = false
                }
      },
      quanbu(){
          this.xuan = ! this.xuan;
          if( this.xuan ){
            for(var i = 0 ; i < this.list.length;i++){
                this.list[i].xuanzhong = this.xuan 
                for(var a = 0 ; a < this.list[i].Son.length;a++){
                    this.list[i].Son[a].xuanzhong = this.xuan 
                }
            }
          }else{
              for(var i = 0 ; i < this.list.length;i++){
                this.list[i].xuanzhong = this.xuan 
                for(var a = 0 ; a < this.list[i].Son.length;a++){
                    this.list[i].Son[a].xuanzhong = this.xuan 
                }
            }
          }

      }
  },
  //监听
  watch:{
  
  },
  //计算属性
  computed:{
      data_pic(){
          var data_pic=0
          for(var i = 0 ; i < this.list.length;i++){
                
                for(var a = 0 ; a < this.list[i].Son.length;a++){
                    if( this.list[i].Son[a].xuanzhong == true){
                        data_pic +=  this.list[i].Son[a].pic*this.list[i].Son[a].liang
                    }
                }
            }
            return data_pic
      },
      data_pic11(){
          var data_pic=0
          for(var i = 0 ; i < this.list.length;i++){
               
                for(var a = 0 ; a < this.list[i].Son.length;a++){
                    if( this.list[i].Son[a].xuanzhong == true){
                        data_pic ++
                    }
                }
            }
            return data_pic
      }
  },
  //过滤器
  filters:{
   
  },
  //组件注册
  components:{
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.shopping1{
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
    position: relative;
}
.shop{
    width: 375px;
    height: 110px;
    padding-top: 40px;
    background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%);
}
p:first-child{
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    float: left;
    padding-left: 10px;
}
p:last-child{
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    float: right;
    padding-right: 10px;
}
.kuai_f{
    width: 355px;
    height: auto;
    margin: 0 10px;
    padding-top: 40px;
    position: absolute;
    top:50px;
    z-index: 1;
    .kuai{
        width: 335px;
        height: auto;
        min-height: 150px;
        border-radius: 10px;
        background: #fff;
        padding: 10px;
        text-align: left;
        margin-top: 10px;
        .top{
            width: 100%;
           
            height: 40px;
            line-height: 40px;
            font: 12px;
           
            .rid{
               
                width: 21px;
                height: 21px;
                vertical-align: middle;
            }
            .rit{
               
                width: 18px;
                height: 18px;
                vertical-align: middle;
                margin: 0 6px;
            }
            img:first-child{

            }
            p{
                display: inline-block;
                font-size: 14px;
            }
            .jian{
                width: 6px;
                height: 10px;
            }
        }
        .cen{
            width: 100%;
            height: 102px;
            line-height: 102px;
            margin-top: 10px;
            .cen_div{
                float: left;
                width: 30px;
                height: 90px;
                line-height: 90px;
                .rid{
               
                    width: 21px;
                    height: 21px;
                    
                } 
            }

            .imgs_da{
                width: 90px;
                height: 90px;
            }
            .kuaiji{
                
                height: 90px;
                width: 200px;
                float: right;
                .text{
                    width: 192px;
                    height: 34px;
                    line-height: 17px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    
                }
                .pic{
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    span{
                        color: rgb(255, 85, 0);
                        font-size: 14px;
                        
                    }
                    .jisuan{
                        width: auto;
                        float:right;
                        margin: 6px 10px 0 0 ;
                        .anniu {
                            float: left;
                            background: #fff;
                            width: 25px!important;
                            height: 22px!important;
                            line-height: 22px!important ;
                            text-align: center;
                            border:1px solid #f1f1f1
                        }
                        input{
                            float: left;
                            width: 40px;
                            height: 20px;
                            border:1px solid #f1f1f1;
                            text-align: center;
                        }
                    }
                }
            }
        }

    }
}
.shopping1_bot{
    width: 100%;
    height: 54px;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 100;
    text-align: left;
    line-height: 54px;
    font-size: 16px;
    .rid{
        margin:17px 0 0 20px ;
        width: 21px;
        float: left;
        height: 21px;
        vertical-align: middle;
    }
    .heji{
        margin-left: 20px;
    }
    button{
        float: right;
        margin-right: 20px;
        width: 70px;
        height: 35px;
        border-radius: 10px;
        background: #FF5000;
        color: #fff;
        border: 0;
        margin-top: 10px;
    }
}
.heji{
    float: left;
}
</style>

