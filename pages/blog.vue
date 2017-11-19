<template lang="html">
  <ul>
    <li v-for="post in fb">
      {{ post.message }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get('https://graph.facebook.com/LyghtningStudios/posts', {
      'headers': {
        'Authorization': 'Bearer 2075968525965754|XhGAJqcUZ9-LgoYXW6_335hPuwk'
      }
    })
    return { fb: data.data }
  }
}
</script>

<style lang="css">

ul {
  padding: 2.5em 10vw;
  list-style-type: none;
}

li {
  background-color: #eeeeee;
  padding: 1em;
  margin-bottom: 0.5em;
}

</style>
