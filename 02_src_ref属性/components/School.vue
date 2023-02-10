<template>
  <div class='school'>
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data(){
        return {
            msg:'My name is School component'
        }
    }
}
</script>

<style>
    .school {
        background-color: purple;
    }
</style>