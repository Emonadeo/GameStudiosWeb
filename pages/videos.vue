<template lang="html">
  <div id="container" class="wrap">
    <ul class="videos wrap-child">
      <li v-for="video in videos">
        <div class="video">
          <iframe :src="'http://youtube.com/embed/' + video + '?rel=0&amp;showinfo=0'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'navigated',
  data () {
    return {
      videos: [
        'YmTkookMRiA'
      ]
    }
  }
}
</script>

<style lang="css">

.video {
  margin-top: 2em;
}

</style>
