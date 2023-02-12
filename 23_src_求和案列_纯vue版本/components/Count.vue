<template>
  <!-- 翻译category:分类 -->
  <div>
    <h1>{{sum}}</h1>
    <select v-model="n">
        <option :value="item" v-for="(item,index) in countData" :key='index'>{{item}}</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数+</button>
    <button @click="incrementWait">等一等再+</button>
  </div>
</template>

<script>
export default {
    name:'CountName',
    data() {
        return {
            sum:1,//初始和值
            countData:[1,2,3,4,5,6,7,8,9,10],//数字乘区
            n:1 //被选中的数字乘区
        }
    },
    methods: {
        // 加法
        increment(){
            this.sum += this.n
        },
        // 减法
        decrement(){
            this.sum -= this.n
        },
        // 奇数加
        incrementOdd(){
            // 如果为奇数 + this.n
            this.sum += this.sum % 2 === 0 ? 0 : this.n
        },
        // 等等加
        incrementWait(){
            setTimeout(()=>{
                this.sum += this.n
            },500)
        }
    },
};
</script>

<style scoped>

</style>