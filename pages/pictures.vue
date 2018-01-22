<template lang="html">
  <div id="container">
    <section class="shots-wrapper wrap">
      <ul class="shots wrap-child">
        <li v-for="(image, index) in images" @click="isViewing = true; viewing = index" :style="'background-image: url(' + image + ')'">
        </li>
      </ul>
    </section>

    <!--Pop-Up-->

    <transition name="fade">
      <section v-show="isViewing" class="view" @click="isViewing = false">
        <transition name="scale">
          <img :src="images[viewing]" />
        </transition>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'navigated',
  data () {
    return {
      images: [
        'https://cdn.discordapp.com/attachments/377217394306842624/404997912142282752/Ausschnitt_aus_einer_der_1._Maps_-_Kopie.png',
        'https://cdn.discordapp.com/attachments/377217394306842624/404998049484636171/BritischerSoldatKopf_-_Kopie.jpg',
        'https://cdn.discordapp.com/attachments/377217394306842624/404998216308752394/C96_M1916.png',
        'https://cdn.discordapp.com/attachments/377217394306842624/404998395598602250/reed.png',
        'https://cdn.discordapp.com/attachments/377217394306842624/404998444474826752/tanktrap_overview_all.png',
        'https://cdn.discordapp.com/attachments/377217394306842624/404998643020595200/power_line_modular.png'
      ],
      viewing: 0,
      isViewing: false
    }
  }
}
</script>

<style lang="css">

.shots {
  display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;
	margin: 2rem 0;
  list-style-type: none;
  padding: 0;
}

.shots li {
  background-color: #eeeeee;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.shots > li:before {display: table; padding-top: 100%; content: '';}

.view {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.view img {
  width: 70vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
