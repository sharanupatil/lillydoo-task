<template>
  <div id="app">
    <Header />
    <TestpaketSection />
    <TrialBox />
    <Reviews />
    <Testnow />
    <Contact />
    <Payment />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import TestpaketSection from "./components/TestpaketSection/TestpaketSection";
import TrialBox from "./components/TrialBox/TrialBox";
import Reviews from "./components/Reviews/Reviews";
import Testnow from "./components/Testnow/Testnow";
import Contact from "./components/Contact/Contact";
import Payment from "./components/Payment/Payment";
import Footer from "./components/Footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    TestpaketSection,
    TrialBox,
    Reviews,
    Testnow,
    Contact,
    Payment,
    Footer
  },
  data() {
    return {
      msg: "Welcome to Lillydoo App"
    };
  }
};
</script>

<style lang="scss">
/* Global Styling goes here as its not scoped*/
@import "../node_modules/bootstrap-scss/bootstrap.scss";
body {
  background-color: white;
  overflow-x: hidden;
}
</style>
