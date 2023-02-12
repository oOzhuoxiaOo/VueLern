<template>
  <div class="container">
    <!-- TODO: -->
    <Category title="美食" :listData='foots'>
      <img slot="center" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.ikcjjaH73vpVvd1pszqvxAHaE7?w=182&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
      <img slot="footer" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.ikcjjaH73vpVvd1pszqvxAHaE7?w=182&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
    </Category>
    <Category title="游戏" :listData='games'>
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
     </ul>
     <div class="foot" slot="footer">
       <a href="">网路游戏</a> 
       <a href="">单机游戏</a>
     </div>
    </Category>
    <Category title="电影" :listData='films'>
      <video slot="center" controls src="https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg1.mp4"></video>
      <!-- v-slot:name只能用在template标签上 -->
      <template v-slot:footer>
     <div class="foot">
       <a href="">热门</a> 
       <a href="">经典</a>
       <a href="">推荐</a>
     </div>
     <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
// 引入子组件
import Category from "./components/Category";
export default {
  name: "App",
  data() {
    return {
      foots:['香肠','泡面','小龙虾','牛排'],
      games:['红色警戒','穿越火线','我的世界','星穹铁道'],
      films:['灼眼的夏娜','团子大家族','斩赤红之瞳','刀剑神域']
    }
  },
  components: { Category },
};
</script>

<style>
.container,.foot {
  display: flex;
  justify-content: space-around;
}
</style>