<template lang="html">
  <div id="container">
		<div class="wrap">
	    <section class="blog wrap-child">
				<div class="blog-entry">
					<section class="blog-image">

					</section>
					<section class="blog-title">

					</section>
				</div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
	    </section>
		</div>

  </div>
</template>

<script>
export default {
  layout: 'navigated',
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

.blog-wrapper {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	background-color: green;
}

.blog {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;
	margin: 2rem 0;
}

.blog > div {
	background-color: #eeeeee;
}

.blog > div:before {display: table; padding-top: 100%; content: '';}

</style>
