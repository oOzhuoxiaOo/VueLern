<template>
    <div class="purple">
        <!-- 组件的结构 -->
        <h2>你好,我是组件的结构，也就是写html的地方</h2>
        <h2>school组件的数据name为:{{name}}</h2>
        <button @click="showAge">点我提示年龄</button>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据、方法等等)
    // 此处直接选择默认暴露export default{}，也省略了Vue.extend
    export default {
        name:'SchoolName',
        data(){
            return {
                name:'jialedi',
                age:14,
            }
        },
        methods: {
            showAge(){
                alert(this.age)
            }
        },
    }
    //export default school 此处注释直接选择默认暴露export default{}
</script>

<style>
    /* 组件的样式 */
    .purple{
        background-color: purple; 
    }
</style>

