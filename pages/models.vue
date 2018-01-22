<template lang="html">
  <div id="container" class="wrap">
    <ul class="models wrap-child">
      <li v-for="model in models">
        <div class="model">
          <iframe :src="'https://sketchfab.com/models/' + model + '/embed?autospin=0.2&amp;autostart=1&amp;camera=0&amp;preload=1'" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
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
      models: [
        '239e349590f141ed8fc5ff8a26cf69dc'
      ]
    }
  }
}
</script>

<style lang="css">

.model {
  margin-top: 2em;
}

</style>
