<template>
  <section class="bootstrap bright">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center my-4 my-md-5">
          <h2 class="mt-3 mb-1 mt-md-1 mb-md-3">Dein Testpaket enthält</h2>
        </div>
      </div>
      <div class="row mt-4 mb-0 mb-md-2">
        <div class="col-12 col-md-6 mb-4 px-3 px-md-4 mx-0 pt-0 pb-3 row">
          <div class="row" v-bind:key="enhalt.id" v-for="enhalt in enhalts">
            <div class="col-4 col-md-3 p-0 mr-md-1 text-center">
              <img
                class="lazyload"
                v-bind:src="enhalt.enhaltImage"
                alt="Lillydoo Windel Design - Little Blowballs"
              />
            </div>
            <div class="col-8 pr-0">
              <h4>
                <b>{{ enhalt.enthaltTitle }}</b>
              </h4>
              <div></div>
              <ul>
                <li>{{ enhalt.enthaltDescription1 }}</li>
                <li>{{ enhalt.enthaltDescription2 }}</li>
                <li>{{ enhalt.enthaltDescription3 }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 px-3 px-md-4 mx-0 pt-0 pb-3 row">
          <div class="col-4 col-md-3 p-0 mr-md-1 text-center">
            <img
              class="lazyload"
              v-bind:src="selectedid.enhaltImage"
              alt="Lillydoo Windel Design - Little Blowballs"
            />
          </div>
          <div class="col-8 pr-0">
            <h4>
              <b>{{ selectedid.enthaltTitle }}</b>
            </h4>
            <div></div>
            <ul>
              <li>{{ selectedid.enthaltDescription1 }}</li>
              <li>{{ selectedid.enthaltDescription2 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestpaketEnhalt",
  props: ["selectedid"],
  data() {
    return {
      enhalts: [
        {
          id: 1,
          enthaltTitle: "10 LILLYDOO WINDELN",
          enhaltImage:
            "https://www.lillydoo.com/bundles/lepweb/img/lillydoo-little-blowballs-design-preview-tp.png",
          enthaltDescription1: "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
          enthaltDescription2: "Extra weich und super bequem",
          enthaltDescription3:
            "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section.bright {
  background: #fff;
}
.lazyload {
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: auto;
  display: inline-block;
  flex-shrink: 1;
  font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 76.875px;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 0px;
  max-width: 100%;
  text-align: center;
  vertical-align: middle;
  width: 95.125px;
}
section {
  padding: 1.25rem 0;
}
.checked {
  color: orange;
}
h4 {
  font-family: cera_promedium, Helvetica, Roboto, Arial, sans-serif;
  font-size: 1.063rem;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>
