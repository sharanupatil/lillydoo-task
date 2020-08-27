<template>
  <section class="content-header text-center dein-gratis-testpaket">
    <div class="info-overlay">
      <h1 class="text-center content-header-headline">Dein gratis Testpaket</h1>

      <a class="button" v-scroll-to="'#trialbox'">Wähle Deine Größe</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestpaketSection",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    goto(refName) {
      var element = this.$els[refName];
      element.scrollIntoView();
    }
  }
};
</script>

<style scoped lang="scss">
.content-header.dein-gratis-testpaket {
  background-image: url(https://www.lillydoo.com/bundles/lepweb/img/header/trialbox/header-trialbox-mobile.jpg);
}
.text-center {
  text-align: center !important;
  text-align: center !important;
  text-align: center !important;
}
h1 {
  font-family: Museo-300, Helvetica, Roboto, Arial, sans-serif;
  font-size: 2.625rem;
  line-height: 1.1;
  margin-bottom: 10px;
  font-family: Museo-300, Helvetica, Roboto, Arial, sans-serif;
  font-size: 2.625rem;
  line-height: 1.1;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-family: Museo-300, Helvetica, Roboto, Arial, sans-serif;
  font-size: 2.625rem;
  line-height: 1.1;
  margin-bottom: 10px;
}
.content-header {
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 35.25rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f2f0ec;
  .info-overlay {
    align-self: flex-end;
    padding: 2.5rem 1rem 1.5rem 1rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    .content-header-headline {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
  }
}
section {
  padding: 1.25rem 0;
}
.button {
  display: inline-flex;
  justify-content: center;
  height: auto;
  background-color: #00afab;
  color: #fafafa;
  text-decoration: none;
  text-transform: uppercase;
  font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.4375rem;
  font-weight: 500;
  padding: 0.5rem 1.25rem 0.4375rem 1.25rem;
  outline: 0;
  border: 1px solid #00afab;
  transition: 0.3s ease-in-out;
  margin: 0.875rem 0 0.625rem 0;
  appearance: none;
  position: relative;
  min-width: 16rem;
}
@media (min-width: 420px) {
  .content-header.dein-gratis-testpaket {
    background-image: url(https://www.lillydoo.com/bundles/lepweb/img/header/trialbox/header-trialbox-tablet.jpg);
  }
}
@media (min-width: 834px) {
  .content-header.dein-gratis-testpaket {
    background-image: url(https://www.lillydoo.com/bundles/lepweb/img/header/trialbox/header-trialbox-desktop.jpg);
  }
  .content-header {
    min-height: 38rem;
    justify-content: flex-end;
    .info-overlay {
      padding: 2.5rem 2.5rem 1.5rem 2.5rem;
      width: 31.25rem;
      margin-right: 4rem;
      align-self: center;
      justify-self: right;
    }
  }
  .button {
    &:hover {
      background-color: #99dfdd;
      cursor: pointer;
      border-color: #99dfdd;
      color: #fafafa;
    }
    &:focus {
      outline: 0;
    }
  }
}
@media only screen and (max-width: 52em) {
  h1 {
    font-size: 2.188rem;
  }
}
</style>
