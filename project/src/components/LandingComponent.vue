<template>
  <div class="landing-component">
    <div class="text-column">
      <h1>WE</h1>
      <h1 class="love">LOVE</h1>
      <h1>MUSIC</h1>
    </div>
  </div>
</template>

<style scoped>
.landing-component {
  background-image: url('@/assets/Image.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.text-column {
  display: flex;
  flex-direction: column; 
  text-align: left; 
  margin-left: 100px; 
}
.love {
  font-family: Inter;
  margin: 0; /* Remove default margin for h1 elements */
  color: red;
  font-size: 128px; /* Adjust font size as needed */
}
h1 {
  font-family: Inter;
  margin: 0; 
  color: white;
  font-size: 128px; 
}

</style>