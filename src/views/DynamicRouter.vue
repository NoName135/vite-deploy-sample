<template>
  <div>id：{{ id }}</div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      id: this.$route.params.id
    }
  },
  created(){
    console.log(this.$route.params.id);
    const seed = this.$route.params.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then(res => {
        console.log(res);
      })
  }
}
</script>