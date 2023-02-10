<template>
  <div class='student bg-color'>
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data(){
        console.log(this)
        return {
            name:'student',
            msg:'My name is Student component',
        }
    },

}
</script>

<style scoped>
    .bg-color {
        background-color: purple;
    }
</style>