<template>
  <div class="header" :style="{ backgroundColor: isLoggedIn ? 'rgb(172 0 249)' : 'transparent' }">
    <div class="logo">
      <!-- neizdevas ielikt iedotos img -->
      <img src="@/assets/catlogo.png" class="logoImg" alt="catlogo">
      <span>Cat.fm</span>
    </div>
    <div class="actions">
      <button class="button" v-if="!isLoggedIn" @click="showLoginAlert">Login</button>
      <span v-if="isLoggedIn" class="profileInfo">
        <div class="circle"></div>
        <span>Karlis Barons</span>
      </span>
      <button class="button" v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoggedIn: Boolean
  },
  methods: {
    showLoginAlert() {
      const result = window.confirm("Press Labi if you wanna login");
      if (result) {
        this.$emit("login");
      }
    },
    logout()  {
      const result = window.confirm("Press Labi if you wanna logout");
      if (result) {
        this.$emit("logout");
      }
    },
  }
};
</script>

<style scoped>


.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: white;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button {
  margin-left: 10px;
}

.button {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

.profileInfo {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.profileImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.logoImg {
  width: 45px;
  height: 45px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo span {
  font-size: 3em;
  font-weight: bold;
  margin-left: 10px;
}
.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: red; 
}
</style>