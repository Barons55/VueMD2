<template>
    <div class="song-list">
      <SongFilterComponent @filter="setFilter" />
        <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(song, index) in sortedSongs" :key="index">
            <td>{{ song.song }}</td>
            <td>{{ song.artist }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </template>
  
  <script>
  import SongFilterComponent from "@/components/SongFilterComponent.vue";
  import globalStore from "@/globalStore"; 
  
  export default {
    components: {
      SongFilterComponent
    },
    data() {
      return {
        selectedFilter: "none"
      };
    },
    computed: {
      sortedSongs() {
        let sortedSongs = [...globalStore.all_songs]; 
  
        // Sort songs based on selected filter
        if (this.selectedFilter === "song") {
          sortedSongs.sort((a, b) => a.song.localeCompare(b.song));
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
    }
  };
  </script>
  
  <style scoped>
 
  .song-list {
    margin-top: 20px;
  }
  
  table {
    width: 40%;
    border-collapse: collapse;
  }

  th, td {
    border: none; 
    padding: 8px;
    text-align: left;
   
  }

  th {
    color: darkgray;
    background-color: #f2f2f2;
    border-bottom: 1px solid #ddd; 
  } 

  
  </style>
  