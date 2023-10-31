<template>
  <div class="home">
    <h1 class="title">Home</h1>
    <SongListComponent :songs="sortedSongs" />
  </div>
</template>

<script>
import SongListComponent from "@/components/SongListComponent.vue";
import globalStore from "@/globalStore.js"; // Import your global store file

export default {
  components: {
    SongListComponent
  },
  data() {
    return {
      selectedFilter: "none"
    };
  },
  computed: {
    sortedSongs() {
      let sortedSongs = [...globalStore.all_songs];

      
      if (this.selectedFilter === "name") {
        sortedSongs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.selectedFilter === "artist") {
        sortedSongs.sort((a, b) => a.artist.localeCompare(b.artist));
      }

      return sortedSongs;
    }
  },
  methods: {
    setFilter(filter) {
      this.selectedFilter = filter;
    }
  },
  props: {
    title: String 
  }
};
</script>

<style scoped>

body {
  background-color: black;
}

</style>
