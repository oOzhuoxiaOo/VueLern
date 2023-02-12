<template>
  <!-- 翻译category:分类 -->
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- <ul>
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->
    <!-- ⭐定义一个插槽（挖个坑，等组件的使用者进行填充） -->
    <slot>我是一些默认值，当使用者没有传递具体的结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'CategoryName',
    props:['listData','title'],
    data() {
        return {
            
        }
    },
};
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3 {
    text-align: center;
    background: orange;
}
img {
    width: 100%;
}
video {
    width: 100%;
}
</style>