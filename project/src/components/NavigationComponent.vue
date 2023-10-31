<template>
  <nav class="navigation">
    <div class="row">
      <button @click="showHome" :class="{ active: activeTab === 'HOME' }">HOME</button>
    </div>
    <div class="row">
      <button @click="showAboutMe" :class="{ active: activeTab === 'ABOUT ME' }">ABOUT ME</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'HOME'
    };
  },
  methods: {
    showHome() {
      this.activeTab = 'HOME';
      this.$emit('change-tab', 'HOME');
    },
    showAboutMe() {
      this.activeTab = 'ABOUT ME';
      this.$emit('change-tab', 'ABOUT ME');
    }
  }
};
</script>

<style scoped>
.row {
  width: 100%;
}

button {
  width: 100%;
  text-align: left;
  border: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #f1f1f1;
  color: black;
}

.active {
  background-color: purple;
}
</style>