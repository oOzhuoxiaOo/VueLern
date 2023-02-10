<template>
    <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- TODO: MyHeader-->
      <MyHeader @addTodo="addTodo" />
      <MyList 
      :todos="todos" 
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo" 
      />

<!-- 注意，此处todos为数据，不需要改成自定义事件，自定义事件为了拿到子数据，而todos是数据通过props给子用 -->
      <MyFooter 
      :todos="todos" 
      @checkAllTodo="checkAllTodo" 
      @clearAllTodo="clearAllTodo" 
      />
    </div>
  </div>
</div>
</template>

<script>
// 引入子组件
import MyHeader from "./components/MyHeader"
import MyList from "./components/MyList"
import MyFooter from "./components/MyFooter"

export default {
    name:'App',
    components:{MyHeader,MyList,MyFooter},
    data() {
    return {
      // 此处是为了防止todos为null,从而令MyFooter中arr,length报错没有length属性
      todos:JSON.parse(localStorage.getItem("todos")) || []
    }
  },
  methods: {
    // receive：翻译:接收
    // 注意：App函数不要起名和子组件一样(data\methods\props\computed都在vc身上，名字不要重复,尤其是在App组件中)
    // 1.增加一个todo
      addTodo(todoObj) {
        console.log("我是App组件,我收到了数据,并且将下方数据对象添加到数组todos开头",todoObj)
        // 将子组件MyHeader输出的数据对象添加到数组todos开头
        this.todos.unshift(todoObj)
      },
      // 勾选或者取消勾选
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      // 删除一个todo
      deleteTodo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id
        })
      },
      // footer中input全选or全不选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done
        })
      },
      // 清除所有选中
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    watch:{
      todos:{
        // 需要开启深度监视，因为done值改变不会引起浅层监视todos的发现，从而不更新插入(保存)本地存储的数据
        deep:true,
        handler(val){
          localStorage.setItem("todos",JSON.stringify(val))
        }
      }
      
    }
}
</script>

<style> 
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}





</style>