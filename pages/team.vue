<template lang="html">
  <div id="container">
    <div class="wrap">
      <div class="sandwich wrap-child">
        <section class="team">
          <div class="team-member" v-for="member in members">
            <div class="team-name">
              {{ member.name }}
            </div>
            <div class="team-caption">
              {{ member.role }}
            </div>
          </div>
        </section>
        <section class="images">

        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navigated',
  data () {
    return {
      members: [
        {
          name: 'Jan Schmidt',
          role: 'Founder. Development Director. Lead Engineer.'
        },
        {
          name: 'Pascal Förster',
          role: 'Founder. War Guru. 3D Artist.'
        },
        {
          name: 'Lorenzo Gejer',
          role: 'Founder. Communication Manager. PR & HR Manager.'
        },
        {
          name: 'Mark Sandrock',
          role: 'IT Manager.'
        },
        {
          name: 'Elias Mende',
          role: 'Software Engineering. Programming.'
        },
        {
          name: 'Phil Culp',
          role: 'PR (NA). NA Community Manager. Gaming Consultant.'
        },
        {
          name: 'Pascal Saputra',
          role: 'Sound Designer.  Soundtrack & Music Composer.'
        },
        {
          name: 'Jeremy Grigat',
          role: '3D Lead. Environment Artist.'
        },
        {
          name: 'Marco Schulze',
          role: '3D Lead. Environment Artist.'
        },
        {
          name: 'Daniel Mescheryakov',
          role: 'Character Artist. 3D Animator. Translator.'
        },
        {
          name: 'Besart',
          role: '3D  Artist. 3D Animator.'
        },
        {
          name: 'Emanuel Pilz',
          role: 'Webdevelopment.'
        },
        {
          name: 'Saman Razavi',
          role: 'Programming.'
        },
        {
          name: 'Noman Ahmad',
          role: 'Programming'
        },
        {
          name: 'Caroline Deiß',
          role: 'Social Media'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

#container {
  background-color: #3e312a;
  color: white;
  flex: 1;
}

.sandwich {
  display: flex;
}

.sandwich > section {
  flex: 1;
}

.team {
  margin: 2rem 0;
  font-family: 'Montserrat';
}

.team-member:not(:last-of-type) {
  margin-bottom: 1rem;
}

.team-name {
  font-weight: bold;
  font-size: 1.3em;
}

</style>
