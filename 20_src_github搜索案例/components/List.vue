<template>
    <div class="row">
      <!--  展示用户列表 -->
      <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用!</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
    </div>
</template>

<script>
export default {
  name: "ListName",
  data() {
    return {
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errMsg:''
      }
    }
  },
  mounted(){
      this.$bus.$on('getUsers',(dataObj)=>{
        console.log('我是List组件,收到了dataOObj',dataObj)
        // console.log('我是List组件，收到了users',users)
        // this.users = users
        // this.isFirst = isFirst
        // this.isLoading = isLoading 
        // this.errMsg = errMsg
        // ⭐此处使用拓展运算符，将info里的属性放在这，也将dataOObj的属性放在这，obj中拥有的属性会覆盖前边的，没有的属性会用前边的
        this.info = {...this.info,...dataObj}
      })
},
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>