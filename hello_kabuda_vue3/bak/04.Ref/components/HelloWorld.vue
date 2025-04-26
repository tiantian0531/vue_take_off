
<template>
  
</template>
<script setup lang="ts">


const updateMessage = (newMsg:any) => {
    console.log("121212",newMsg)
    };

defineExpose({updateMessage})
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>
