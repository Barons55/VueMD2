<template>
    <div class="form">
      <div class="form-row">
        <label>First name</label>
        <input v-model="user.firstName" :disabled="disabled" />
      </div>
      <div class="form-row">
        <label>Last name</label>
        <input v-model="user.lastName" :disabled="disabled" />
      </div>
      <div class="form-row">
        <label>Student code</label>
        <input v-model="user.studentCode" :disabled="disabled" />
      </div>
      <div class="form-row">
        <label>Logged in at</label>
        <div class = "timeStamp" v-for="(timestamp, index) in user.loggedInAt" :key="index">{{ timestamp }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import globalStore from "@/globalStore"; 
  
  export default {
    props: {
      disabled: Boolean 
    },
    computed: {
      user() {
        return globalStore.user;
      }
    }
  };
  </script>
  
  <style scoped>
 
  .form {
    margin-top: 20px;
  }
  
  .form-row {
    margin-bottom: 10px;
    width: 25%;
  }
  
  .form-row label {
    margin-bottom: 5px;
    display: block;
  }
  
  .form-row input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .form-row input[disabled] {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
  .timeStamp{
    color: black;
  }
  </style>
  