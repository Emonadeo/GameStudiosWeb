<template lang="html">
  <div id="container">
    <section class="trailer wrap">
      <div class="wrap-child">
        <div class="trailer-container ">
          <iframe src="https://www.youtube.com/embed/ullUnUP2J4Q?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section class="information">
      <div class="slogan headliner wrap">
        <span class="wrap-child">A World War 2 Realistic PC Game Like No Other Game Ever Attempted</span>
        <!-- <img class="wrap-child" src="~/assets/images/slogan.svg"/> -->
      </div>
      <div class="wrap">
        <div class="blurb wrap-child">
          <div>
            Real-life experience.
          </div>
          <div>
            Over 48 individual features taken from the real world!
          </div>
          <div>
            Community first.
          </div>
          <div>
            Be involved and vote on further developments!
          </div>
          <div>
            Forget pay to win.
          </div>
          <div>
            Obtain all gear using our in game currency!
          </div>
          <div>
            In game levelling.
          </div>
          <div>
            We speed you up!
          </div>
          <div>
            New game modes.
          </div>
          <div>
            A unique world for you to discover!
          </div>
          <div>
            History live.
          </div>
          <div>
            Soldier slang, historically accurate vehicles, weapons, ballistics and sounds!
          </div>
        </div>
      </div>
    </section>
    <section class="media wrap">
      <div class="wrap-child">
        <span class="media-title headliner">Pictures</span>
        <span class="media-title headliner">Videos</span>
        <span class="media-title headliner">3D Models</span>
        <nuxt-link to="/pictures" id="media-screenshots">
          <span>Pictures</span>
        </nuxt-link>
        <nuxt-link to="/videos" id="media-videos">
          <span>Videos</span>
        </nuxt-link>
        <nuxt-link to="/models" id="media-models">
          <span>3D-Modelle</span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'navigated'
}
</script>

<style lang="css" scoped>
#container {
  background-color: #1a1512;
  color: white;
}

#container > section {
  margin-bottom: 7em;
}

.trailer {
  background-color: #3e312a;
}

.trailer-container {
  position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}

.trailer iframe {
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.slogan {
  background-color: #A52323;
  text-align: center;
}

.slogan img {
  height: 4em;
}

.blurb {
  font-family: 'Teko';
  font-size: 1.5em;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-transform: uppercase;
}

.blurb > div:nth-child(odd) {
  text-align: right;
  margin-right: 3em;
}

.media .wrap-child {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
}

.media .wrap-child > a {
  height: 1fr;
  background-color: black;
  display: flex;
  justify-content:  center;
  align-items: stretch;
}

.media .wrap-child > a > span {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  transition: all 200ms ease;
}

.media .wrap-child > a > span:hover {
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}

.media-title {
  margin-left: 0.7rem;
}

.headliner {
  font-family: 'Headliner';
  font-size: 2.5em;
  padding: 0.2em 0 0.3em 0;
  text-transform: uppercase;
}

.media .wrap-child > a:before {display: table; padding-top: 100%; content: '';}

#media-screenshots {
  background: url('~/assets/images/game/screenshots.png');
  background-size: 330%;
  background-position: top;
}

#media-models {
  background: url('~/assets/images/game/models.gif');
  background-size: cover;
  background-position: center;
}
</style>
