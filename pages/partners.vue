<template lang="html">
  <div id="container">
    <section class="partners wrap">
      <div class="wrap-child">
        <div class="partner" v-for="partner in youtube">
          <div class="partner-profile">
            <img :src="partner.profile"/>
          </div>
          <div class="partner-info">
            <div class="partner-name">
              {{ partner.name }}
            </div>
            <div class="partner-subs">
              {{ partner.subs }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'navigated',
  data () {
    return {
      youtube: [
        {
          name: 'The Iron Armenian',
          subs: '64,078',
          profile: 'https://yt3.ggpht.com/-Eige8G053io/AAAAAAAAAAI/AAAAAAAAAAA/Nat_IsAGZkU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="css">

#container {
  flex: 1;
  background-color: #3e312a;
  color: white;
}

.partners {
  margin-top: 2rem;
  color: black;
}

.partner {
  background-color: white;
  border-radius: 3px;
  display: inline-flex;
  padding: 0.5em;
}

.partner-profile {
  border-radius: 100em;
  overflow: hidden;
}

.partner-profile img {
  display: block;
  height: 4.5em;
}

.partner-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1em;
}

.partner-name {
  font-size: 2em;
}

</style>
