<template>
    <div class="song-filter">
      <h2>Sort by: 
      <button class = "filterbtn" @click="setFilter('none')" :class="{ active: activeFilter === 'none' }">None</button>
      <button class = "filterbtn" @click="setFilter('song')" :class="{ active: activeFilter === 'song' }">Song</button>
      <button class = "filterbtn" @click="setFilter('artist')" :class="{ active: activeFilter === 'artist' }">Artist</button>
    </h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeFilter: "none"
      };
    },
    methods: {
      setFilter(filter) {
        this.activeFilter = filter;
        this.$emit("filter", filter);
      }
    }
  };
  </script>
  
  <style scoped>
  .song-filter {
    margin-bottom: 20px;
  }
  
  .song-filter button {
    margin-right: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .song-filter button.active {
    background-color: rgba(251, 0, 72, 0.20); 
  }
  .filterbtn {
    border-radius: 50px;
    background: white;
  }
  </style>
  