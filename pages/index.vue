<template>
  <div>
		<header>

			<!-- Background Video -->
			<div class="teaser-wrapper">
				<video id="teaser" src="/teaser.mp4" autoplay muted loop></video>
			</div>

			<nav>
				<!-- <img id="logo" src="~/assets/images/logo.svg"> -->
        <nuxt-link to="/game">Game</nuxt-link>
				<nuxt-link to="/blog">Devlog</nuxt-link>
        <nuxt-link to="/team">Team</nuxt-link>
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

				<!-- <a id="read-more"><img src="~/assets/images/more.svg" alt=""></a> -->

				<div class=""></div>
			</footer>
		</header>


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
	top: -50vh;
	left: -50vw;
	width: 200vw;
	height: 200vh;
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

</style>
