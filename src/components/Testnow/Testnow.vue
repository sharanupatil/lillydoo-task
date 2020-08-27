<template>
  <div>
    <section class="bright bootstrap">
      <div class="container">
        <div class="row text-center py-3 py-md-4">
          <div class="col-12">
            <h2>Überzeug Dich selbst</h2>
            <a href="#" class="button button--full-width-on-mobile"
              >Jetzt gratis testen</a
            >
          </div>
        </div>
      </div>
    </section>
    <div
      class="blowballs"
      src="https://www.lillydoo.com/bundles/lepweb/img/pusteblume-pattern-04.png"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Testnow",
  data() {
    return {
      msg: " data to return"
    };
  }
};
</script>

<style lang="scss" scoped>
section.bright {
  background: #fff;
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
h2 {
  font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
  font-size: 1.688rem;
  text-transform: none;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  text-rendering: optimizeLegibility;
}
.blowballs {
  background-image: url(https://www.lillydoo.com/bundles/lepweb/img/pusteblume-pattern-04.png);
  background-size: contain;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: auto;
  display: block;
  font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 254px;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  max-height: 254px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 1583px;
}
@media (max-width: 833.98px) {
  .button--full-width-on-mobile {
    min-width: 100%;
  }
}
</style>
