<template>
  <li>
    <label>
      <!-- 此处:xxx="true?false" ,表示该标签是否拥有该属性,下方eeew为复习测试用，无意义 -->
      <input type="checkbox" :checked="todo.done" :eeew="true" @change="handleCheck(todo.id)" />
      <!-- 如下代码也能实现功能，但不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox"  :eeew="true" v-model="todo.done" /> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收todo对象
  props:["todo","checkTodo","deleteTodo"],
  mounted(){
    console.log("我是MyList的子组件MyItem,我打印一下单个我此时通过props接收的数据对象",this.todo)
  },
  methods:{
    handleCheck(id){
      console.log(id)
      this.checkTodo(id)
    },
    handleDelete(id){
      if(confirm("确认删除吗")) {
        console.log(id)
        this.deleteTodo(id);
      }
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: rgb(198, 195, 195);
}
li:hover button {
  display: block;
}
</style>