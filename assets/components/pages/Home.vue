<template>
  <div id="page" class="site">
    <header class="site-header">
      <div class="header-left">
        <a class="logo" href="/">
          <img class="logo-img" src="../../img/gekLogo_menu.png" alt="GeK Event Logo">
        </a>
        <div class="siteTitle">GONES ENTERTAINMENT KULTURE</div>
      </div>
      <nav class="siteMenu">
        <ul>
          <li v-for="menu in menus">
            <a v-bind:href="menu.url" v-text="menu.name"></a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="content-site">
      <Intro />
      <section id="sectionAbout">
        <div class="sectionAbout__content">
          <div class="sectionAbout__stat">
            <StatCounter start="0" end="10" duration="5000" icon="icon-calendar-check-o"></StatCounter>
            <div class="sectionAbout__stat_name">Évènements</div>
          </div>
          <div class="sectionAbout__stat">
            <StatCounter start="0" end="25" duration="5000" icon="icon-users"></StatCounter>
            <div class="sectionAbout__stat_name">Membres</div>
          </div>
          <div class="sectionAbout__stat">
            <StatCounter start="0" end="15000" duration="5000" icon="icon-right-open"></StatCounter>
            <div class="sectionAbout__stat_name">Spectateurs total</div>
          </div>
          <div class="sectionAbout__stat">
            <StatCounter start="0" end="600" duration="5000" icon="icon-moggle"></StatCounter>
            <div class="sectionAbout__stat_name">Goodies vendus</div>
          </div>
        </div>
      </section>
      <section id="sectionEvents"></section>
      <section id="sectionFigures"></section>
      <section id="sectionBlog"></section>
      <section id="sectionShop"></section>
      <section id="sectionContact"></section>
    </main>
    <footer>
      <nav></nav>
      <div class="footerNewsletter"></div>
      <small>Copyright © 2022 - Gones' Entertainment Kulture</small>
    </footer>
  </div>
</template>

<script>
import Intro from '../modules/homepage/Intro'
import StatCounter from '../modules/homepage/StatCounter';
export default {
  name: 'Home',
  props: {},
  components: {
    Intro,
    StatCounter,    
  },
  data: () => ({
    menus: [
      {
        "name": "Évènements",
        "url": "/evenements"
      },
      {
        "name": "Blog",
        "url": "/blog"
      },
      {
        "name": "A Propos",
        "url": "/a-propos"
      },
      {
        "name": "Contact",
        "url": "/contact"
      },
    ],
    about: [
      "En tant qu’association à but non lucratif, nous souhaitons organiser des événements différents de ceux que vous avez l’habitude de connaître, des rendez-vous innovants, des rencontres inoubliables.",
      "Que ce soient de petites conventions, des projections ou un grand week-end d’animations, nous ne manquons pas d’idées et nous saurons faire bouger la région Auvergne Rhône-Alpes !",
    ],
    social: [
      {
        "name": "Facebook",
        "logo": "",
        "url": "https://www.facebook.com/GEK.Event/"
      },
      {
        "name": "Twitter",
        "logo": "",
        "url": "https://twitter.com/GEKevent"
      }
    ]
  }),
}
</script>
<style lang="scss" scoped>
@import "../../styles/variables";

#sectionAbout {
  width: 100%;
  background-color: $lightBlue;
}

.sectionAbout__content {
  margin: auto;
  padding: 70px 90px;
  max-width: $maxWidth;
}

.sectionAbout__content {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
.sectionAbout__stat {
  margin: 50px 100px;
}
.statcounter {
	color: $white;
	font-size: 140px;
}
.sectionAbout__stat_name {
  color: $white;
  padding-left: .4em;
  font-size: 60px;
}
</style>