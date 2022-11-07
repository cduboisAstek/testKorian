<template>
    <section id="sectionIntro">
        <div class="sectionIntro__currentEvent">
          <img class="banner" src="../../../img/Banner.png" alt="Melodie of Alexandria Banner" />
        </div>
        <div class="sectionIntro__info">
          <img src="../../../img/melodieofalexandria.png" alt="Melodie of Alexandria" />
        </div>
        <span class="sectionIntro__scroll">scroll</span>
    </section>
</template>

<script>
export default {
    name: 'Intro',
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
#sectionIntro {
  width: 100%;
  height: calc(100vh - 120px);
  padding-top: 100px;
  overflow: hidden;
  position: relative;

  .sectionIntro__currentEvent {
    width: 100%;
  }

  .banner {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .sectionIntro__info {
    bottom: 0;
    width: 100%;
    text-align: center;
    position: absolute;
    padding: 72px 0;
    background-color: rgba($dark, .5);
  }

  .sectionIntro__scroll {
    right: 10px;
    bottom: 50px;
    color: $white;
    font-size: 28px;
    position: absolute;
    transform: rotate(-90deg);
    text-decoration: underline;
    font-family: 'Oswald', sans-serif;
  }
}
</style>