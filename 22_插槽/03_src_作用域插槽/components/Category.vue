<template>
  <!-- 翻译category:分类 -->
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games='games'>我是一些默认值，当使用者没有传递具体的结构时，我会出现1</slot>
  </div>
</template>

<script>
export default {
    name:'CategoryName',
    props:['listData','title'],
    data() {
        return {
            games:['红色警戒','穿越火线','我的世界','星穹铁道'],
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