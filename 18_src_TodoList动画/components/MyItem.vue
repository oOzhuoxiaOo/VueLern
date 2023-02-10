<template>

  <li>
    <label>
      <!-- 此处:xxx="true?false" ,表示该标签是否拥有该属性,下方eeew为复习测试用，无意义 -->
      <input type="checkbox" :checked="todo.done" :eeew="true" @change="handleCheck(todo.id)" />
      <!-- 如下代码也能实现功能，但不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox"  :eeew="true" v-model="todo.done" /> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <!-- 输入框 -->
      <input type="text" 
      :value="todo.title" 
      v-show="todo.isEdit"
      @blur="handleBlur(todo,$event)"
      ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-danger" @click="handleEdit(todo)" v-show="!todo.isEdit">修改</button>
  </li>

</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: "MyItem",
  // 声明接收todo对象
  props:["todo"],
  mounted(){
    console.log("我是MyList的子组件MyItem,我打印一下单个我此时通过props接收的数据对象",this.todo)
  },
  methods:{
    handleCheck(id){
      console.log(id)
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id){
      if(confirm("确认删除吗")) {
        console.log(id)
        // this.deleteTodo(id);
        // this.$bus.$emit('deleteTodo',id)
        //  ⭐消息发布
        pubsub.publish('deleteTodo',id);
      }
    },
    handleEdit(todo){
      // eslint-disable-next-line no-prototype-builtins
      if(todo.hasOwnProperty('isEdit')){
        console.log('存在isEdit')
        todo.isEdit = true
      } else {
        // todo.isEdit = true //直接添加不是响应式也就是没有...get set
        this.$set(todo,'isEdit',true)
        console.log('第一次设置isEdit')
      }
      // ⭐1.由于Vue是先执行完handEdit()函数才解析模板，所以(不使用定时器)获取焦点时，模板还没有input无法获取焦点,所以设置个定时器就能解决
      /* setTimeout(() => {
        this.$refs.inputTitle.focus();
      }, 200); */
      // ⭐2.还有一种方法比较推荐，使用Vue提供的$nextTick方法，会在该函数结束后，dom更新后执行回调函数内的代码
      this.$nextTick(function(){
        this.$refs.inputTitle.focus();
      })
      console.log(todo)
    },
    // ⭐失去焦点回调(真正执行修改逻辑)
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
      console.log('Item组件表示:要修改数据的id和新值为:',todo.id,e.target.value)
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