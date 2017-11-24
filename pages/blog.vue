<template lang="html">
  <div id="container">
    <header>
      Blog
    </header>
    <section class="blog">
      <div class="entry" v-for="entry in entries">
        <section class="entry-title">
          {{ entry.title }}
        </section>
        <section class="entry-image" v-bind:style="{ backgroundImage: 'url(' + entry.image + ')' }"></section>
        <section class="entry-content">
          <div class="entry-date">{{ entry.date }}</div>
          <div class="entry-text">{{ entry.text }}</div>
        </section>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      entries: [
        {
          title: 'New Weapons & Tank Class',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          image: 'https://placeimg.com/1000/300/tech',
          date: '17.11.2017'
        },
        {
          title: 'Choose a Map!',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          image: 'https://placeimg.com/1000/300/any',
          date: '17.11.2017'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

#container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  font-family: 'Righteous';
  font-size: 4.5em;
  line-height: 0.75;
  text-transform: uppercase;
  padding: 0 10vw;
  background-color: black;
  color: white;
}

.blog {
  flex: 1;
  padding: 3em 10vw;
  background-color: #795548;
}

.entry:not(:first-of-type) {
  margin-top: 3em;
}

.entry-title {
  color: white;
  font-family: 'Special elite';
  font-size: 2em;
  margin-bottom: 0.5rem;
}

.entry-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 300px;
}

.entry-date {
  margin-bottom: 0.5em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.54);
}

.entry-content {
  background-color: white;
  padding: 1em;
}

.entry-text {
  max-width: 1000px;
  line-height: 1.3;
}

</style>
