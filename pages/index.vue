<template>
  <div>
		<header>

			<!-- Background Video -->
			<div class="teaser-wrapper">
				<video id="teaser" src="/teaser.mp4" autoplay muted loop></video>
			</div>

			<nav>
				<img id="logo" src="~/assets/images/logo.svg">
				<nuxt-link to="/blog">Blog</nuxt-link>
				<nuxt-link to="/about">About</nuxt-link>
				<nuxt-link to="/partners">Partners</nuxt-link>
				<a href="https://www.paypal.me/EpdemicGame">Donate</a>
			</nav>

			<footer>
				<div class="social-media">
					<a href="https://www.facebook.com/LyghtningStudios/"><img src="~/assets/images/icons/facebook.svg"/></a>
					<a><img src="~/assets/images/icons/kickstarter.svg"/></a>
					<a><img src="~/assets/images/icons/patreon.svg"/></a>
					<a href="https://www.twitch.tv/lyghtningstudios"><img src="~/assets/images/icons/twitch.svg"/></a>
					<a href="https://www.youtube.com/channel/UCULAujZeOH2ODlzyIs03xZg"><img src="~/assets/images/icons/youtube.svg"/></a>
				</div>

				<a id="read-more"><img src="~/assets/images/more.svg" alt=""></a>

				<div class=""></div>
			</footer>
		</header>

		<div class="content">
      <section class="slogan wrap">
        <img src="~/assets/images/slogan.svg"/>
      </section>
      <section class="blurb wrap">
        <div class="wrap-child">
          <div>
            Real-life experience.
          </div>
          <div>
            Over 48 features (never seen before) taken from the real world!
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
      </section>
		</div>
	</div>
</template>

<script>
</script>

<style lang="css" scoped>
html, body {
	color: white;
}

.content {
	background-color: white;
}

header {
	position: relative;
	background-color: rgba(121, 85, 72, 0.54);
	padding: 10vh 10vw;
	height: 100vh;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.teaser-wrapper {
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	z-index: -100;
}

#teaser {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	min-height: 50%;
	min-width: 50%;
}

a {
	cursor: pointer;
	display: block;
	text-decoration: none;
  color: white;
}

#logo {
	height: 6rem;
	margin-bottom: 1em;
	align-self: center;
}

nav {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	font-family: 'Righteous';
	font-size: 3em;
	text-transform: uppercase;
}

nav a, .social-media a {
	background-color: black;
}

nav a:hover, .social-media a:hover {

}

nav a:not(:last-of-type) {
	margin-bottom: 0.5rem;
}

footer {
	align-self: stretch;
	display: flex;
	justify-content: space-between;
}

footer > div {
	flex: 1;
}

.social-media {
	display: flex;
}

.social-media a:not(:last-child) {
	margin-right: 1em;
}

footer a img {
	display: block;
	height: 2em;
}

.content {
  padding-top: 1em;
  background-color: #1a1512;
  color: white;
}

.slogan {
  font-family: 'Pahuenga';
  text-transform: uppercase;
  background-color: #A52323;
  margin-top: 3em;
  letter-spacing: 1px;
}

.slogan img {
  height: 4em;
}

.blurb {
  font-family: 'Teko';
  font-size: 1.5em;
  padding: 2em 1em;
}

.blurb .wrap-child {
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-transform: uppercase;
}

.blurb .wrap-child > div:nth-child(odd) {
  text-align: right;
  margin-right: 3em;
}

</style>
