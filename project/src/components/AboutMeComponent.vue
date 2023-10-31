<template>
  <div class="about-me">
    <h1>ABOUT ME</h1>
    <button class="editBtn" @click="toggleFormStatus" :class="{ active: isFormActive }">
      {{ isFormActive ? "CANCEL" : "EDIT FORM" }}
    </button>
    <FormComponent :disabled="!isFormActive" />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: {
    FormComponent
  },
  data() {
    return {
      isFormActive: false
    };
  },
  methods: {
    toggleFormStatus() {
      this.isFormActive = !this.isFormActive;
    }
  }
};
</script>

<style scoped>

.about-me {
  margin-top: 20px;
}

.about-me button.active {
  background-color: #ddd; 
}
body {
  background-color: black;
}
.editBtn{
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 16px;
}
</style>
