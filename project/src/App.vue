<template>
  <div id="app" class="container">
    <HeaderComponent :isLoggedIn="isLoggedIn" @login="login" @logout="logout" />
    <div v-if="isLoggedIn" class="content">
      <div class="navigation-column">
        <NavigationComponent @change-tab="changeTab" />
      </div>
      <div class="main-column">
        <router-view :user="user" />
      </div>
    </div>
    <div v-else>
      <LandingComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import LandingComponent from "@/components/LandingComponent.vue";

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    LandingComponent,
  },
  data() {
    return {
      isLoggedIn: false,
      
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
    changeTab(tab) {
      if (tab === "HOME") {
        this.$router.push({ path: "/home" });
      } else if (tab === "ABOUT ME") {
        this.$router.push({ path: "/about" });
      }
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black; /* Set background color to black */
}
.content {
  display: flex;
  flex: 1;
}
.navigation-column {
  flex: 0 0 200px;
  background-color: #f1f1f1;
  padding: 20px;
}
.main-column {
  flex: 1;
  padding: 20px; 
  background-color: #ffffff; 
}
.app {
  background-color: darkblue;
}
body {
  background-color: black;
}
</style>
