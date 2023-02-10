<template>
  <div class="todo-footer" v-show="total" >
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger" @click="clearAll" >清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "MyFooter",
  props:["todos"],
  computed:{
    // 返回数组数据总长度
    total(){
      return this.todos.length
    },
    // 数组数据中被勾选的长度
    doneTotal(){
      // arr.reduce()函数，第一个参数为函数，第二个可以为初始值，
      // 其中函数的参数有pre\cur\index等,index为索引，cur为当前数组值，pre为上一次函数返回值,最终返回pre
      const doneNum = this.todos.reduce((pre,cur)=>{
        return pre + (cur.done ? 1 : 0)
      },0)
      return doneNum
    },
    // 返回bool值，用来判断勾选长度和总长度是否相等
    // 同时使用v-model修改值时设置set(内引用App里修改值的函数),达到修改App里数据效果
    isAll: {
      get(){
        console.log('我是get')
        // 总数大于0，否则没数据也为true了
        return this.total === this.doneTotal && this.total > 0
      },
      set(value){
        console.log('我是set')
        // this.clearAllTodo(value)
        this.$emit("checkAllTodo",value)
      }
    }
  },
  methods:{
    clearAll(){
      this.$emit("clearAllTodo")
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>