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
      <section id="sectionAbout"></section>
      <section id="sectionEvents"></section>
      <section id="sectionFigures"></section>
      <section id="sectionBlog"></section>
      <section id="sectionShop"></section>
      <section id="sectionContact"></section>
    </main>
    <footer>
      <nav></nav>
      <div class="footerNewsletter"></div>
      <small>Copyright © 2020 - Gones' Entertainment Kulture</small>
    </footer>
  </div>
</template>

<script>
import Intro from '../modules/homepage/Intro'
export default {
  name: 'Home',
  props: {},
  components: {
    Intro
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
  }),
}
</script>