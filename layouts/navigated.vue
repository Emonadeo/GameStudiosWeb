<template lang="html">
  <div id="app">
    <header>
      <div class="wrap">
        <span class="wrap-child">{{ $nuxt.$route.name }}</span>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#app {
  height: 100vh;
	display: flex;
	flex-direction: column;
}

header {
	font-family: 'Righteous';
  font-size: 3em;
  text-transform: uppercase;
  background-color: black;
  color: white;
}
</style>
