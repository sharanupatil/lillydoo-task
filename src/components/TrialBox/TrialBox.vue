<template>
  <div>
    <section class="bright bootstrap trialbox">
      <div class="container" id="trialbox">
        <div class="row p-0 mb-md-3 contentSlide">
          <div class="col-12 p-0">
            <!-- 
            <div class="col-6"> -->
            <div
              class="trialbox__buttons-container mb-4 mt-4 mt-md-3 mb-md-0 px-3 px-md-4"
            >
              <h2>Entdecke unsere Hautfreundlichkeit</h2>
              <div>
                <div class="tb-button-container">
                  <p class="mb-2 uppercase">Wähle Deine Größe</p>
                  <ul class="custom-slide-controls">
                    <li
                      :class="{ 'flex-active': activeIndex === 1 }"
                      v-on:click="updateProductImage(1)"
                    >
                      <p>1</p>
                      <span>(2-5 KG)</span>
                    </li>
                    <li
                      :class="{ 'flex-active': activeIndex === 2 }"
                      v-on:click="updateProductImage(2)"
                    >
                      <p>2</p>
                      <span>(4-8 KG)</span>
                    </li>
                    <li
                      :class="{ 'flex-active': activeIndex === 3 }"
                      v-on:click="updateProductImage(3)"
                    >
                      <p>3</p>
                      <span>(6-10 KG)</span>
                    </li>
                    <li
                      v-on:click="updateProductImage(4)"
                      :class="{ 'flex-active': activeIndex === 4 }"
                    >
                      <p>4</p>
                      <span>(9-14 KG)</span>
                    </li>
                    <li
                      v-on:click="updateProductImage(5)"
                      :class="{ 'flex-active': activeIndex === 5 }"
                    >
                      <p>5</p>
                      <span>(11-16 KG)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="trialpack pt-2 mb-3 pt-md-3 px-3 px-md-4 trialbox__slider-container initialized"
            >
              <div class="oekotex-wrapper">
                <img
                  class="oekotex-green-logo"
                  v-bind:src="imagegreenlogo"
                  alt="Oeko-Tex Certificate"
                />
                <div class="trialpack-slider flexslider">
                  <ul class="slides">
                    <img v-bind:src="image" />
                  </ul>
                </div>
              </div>
            </div>
            <!-- </div> --><!-- 
            <div class="col-6"> -->
            <div class="trialbox__info-container pt-3 px-3 px-md-4 pt-md-0">
              <p>
                Teste jetzt unsere hautfreundlichen Windeln und erhalte unsere
                Feuchttücher mit 99 % Wasser zu Größe 1 - 3 oder die Sensitiven
                Feuchttücher zu Größe 4 - 5.
              </p>
              <ul class="product-list">
                <li>
                  Wir zahlen die Produkte, Du nur den Versand.
                </li>
                <li class="primary-color">
                  Automatischer Übergang ins jederzeit kündbare Windel-Abo für
                  49,50 € pro Lieferung.
                </li>
                <li>
                  Preise inkl. MwSt., ggf. zzgl.<a
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="primary-color"
                    >Versandkosten</a
                  >
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block checkout-button"
              >
                IN DEN WARENKORB LEGEN
              </button>
            </div>
            <!-- 
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <Howitworks />
    <TestpaketEnthalt v-bind:selectedid="selectedid" />
  </div>
</template>

<script>
import TestpaketEnthalt from "../TestpaketEnthalt/TestpaketEnthalt";
import Howitworks from "../Howitworks/Howitworks";

export default {
  name: "TrialBox",
  components: {
    TestpaketEnthalt,
    Howitworks
  },
  data() {
    return {
      image:
        "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-10.jpg",
      imagegreenlogo:
        "https://www.lillydoo.com/bundles/lepweb/img/certificates/oekotex/diapers/oekotex_green_de.svg",
      variants: [
        {
          variantId: 1,
          variantImage:
            "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-10.jpg",
          enthaltTitle: "15 FEUCHTTÜCHER MIT 99 % WASSER",
          enhaltImage:
            "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/water-wipes-15-small.png",
          enthaltDescription1: "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
          enthaltDescription2:
            "Natürlich rein, extra mild, Alternative zu Wasser & Watte"
        },
        {
          variantId: 2,
          variantImage:
            "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-20.jpg",
          enthaltTitle: "15 FEUCHTTÜCHER MIT 99 % WASSER",
          enhaltImage:
            "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/water-wipes-15-small.png",
          enthaltDescription1: "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
          enthaltDescription2:
            "Natürlich rein, extra mild, Alternative zu Wasser & Watte"
        },
        {
          variantId: 3,
          variantImage:
            "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-30.jpg",
          enthaltTitle: "15 FEUCHTTÜCHER MIT 99 % WASSER",
          enhaltImage:
            "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/water-wipes-15-small.png",
          enthaltDescription1: "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
          enthaltDescription2:
            "Natürlich rein, extra mild, Alternative zu Wasser & Watte"
        },
        {
          variantId: 4,
          variantImage:
            "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-40.jpg",
          enthaltTitle: "15 SENSITIVE FEUCHTTÜCHER",
          enhaltImage:
            "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/sensitive-wipes-15-small.jpg",
          enthaltDescription1: "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
          enthaltDescription2: "Extra dickes und kompostierbares Tuch"
        },
        {
          variantId: 5,
          variantImage:
            "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-50.jpg",
          enthaltTitle: "15 SENSITIVE FEUCHTTÜCHER",
          enhaltImage:
            "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/sensitive-wipes-15-small.jpg",
          enthaltDescription1: "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
          enthaltDescription2: "Extra dickes und kompostierbares Tuch"
        }
      ],
      selectedid: {
        variantId: 1,
        variantImage:
          "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-10.jpg",
        enthaltTitle: "15 FEUCHTTÜCHER MIT 99 % WASSER",
        enhaltImage:
          "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/water-wipes-15-small.png",
        enthaltDescription1: "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
        enthaltDescription2:
          "Natürlich rein, extra mild, Alternative zu Wasser & Watte"
      },
      activeIndex: 1
    };
  },
  methods: {
    updateProductImage: function(variantImageId) {
      this.activeIndex = variantImageId;
      let filterImage = this.variants.filter(
        variant => variant.variantId == variantImageId
      );
      this.image = filterImage[0].variantImage;
      this.selectedid = filterImage[0];
    }
  }
};
</script>

<style scoped lang="scss">
section.bright {
  background: white;
  img {
    margin-bottom: 8px;
  }
}
.row {
  img {
    margin: 0 0 2rem 0;
  }
}
img {
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  -ms-interpolation-mode: bicubic;
  max-width: 100%;
  height: auto;
  height: 100%;
  width: 100%;
  margin: 40px;
}
.bootstrap {
  .pl-3 {
    padding-left: 1rem !important;
    padding-left: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-3 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .pr-3 {
    padding-right: 1rem !important;
    padding-right: 1rem !important;
    padding-right: 1rem !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  .my-4 {
    margin-bottom: 1.5rem !important;
    margin-top: 1.5rem !important;
  }
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  .mb-2 {
    margin-bottom: 0.5rem !important;
  }
  .my-2 {
    margin-bottom: 0.5rem !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.938rem;
    margin-left: -0.938rem;
  }
  .pt-3 {
    padding-top: 1rem !important;
  }
  .py-3 {
    padding-top: 1rem !important;
  }
  .pt-2 {
    padding-top: 0.5rem !important;
  }
  .py-2 {
    padding-top: 0.5rem !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .my-3 {
    margin-bottom: 1rem !important;
  }
}
li {
  &:hover {
    cursor: pointer;
  }
}
section {
  padding: 1.25rem 0;
}
.tb-button-container {
  margin-bottom: 30px;
  ul {
    list-style: none;
    margin: 0;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  li {
    border: 1px solid #7c7c7c;
    text-align: center;
    width: 30%;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;
  }
  li.flex-active {
    background-color: #00afab;
    border-color: #00afab;
    color: #fff;
  }
  li.selected {
    background-color: #00afab;
    border-color: #00afab;
    color: #fff;
  }
}
.uppercase {
  text-transform: uppercase;
}
.blocks {
  .btn-primary {
    padding: 24px 12px;
    border-radius: 0;
  }
  border-spacing: 5px;
}
.checkout-button {
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
.primary-color {
  color: #00afab;
}
ul.product-list {
  line-height: 1.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.product-image {
  width: 80%;
}
.oekotex-wrapper {
  position: relative;
}
.trialbox {
  .oekotex-wrapper {
    .oekotex-green-logo {
      position: absolute;
      width: 24%;
      top: -8%;
      left: 10%;
      z-index: 10;
      border-radius: 3px;
    }
  }
}
.flexslider {
  margin: 0 0 60px;
  background: #fff;
  border: 4px solid #fff;
  position: relative;
  zoom: 1;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: "" 0 1px 4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: "" 0 1px 4px rgba(0, 0, 0, 0.2);
  -o-box-shadow: "" 0 1px 4px rgba(0, 0, 0, 0.2);
  box-shadow: "" 0 1px 4px rgba(0, 0, 0, 0.2);
}
.trialpack-slider.flexslider {
  border-color: transparent;
  background-color: transparent;
  margin-bottom: 20px;
}
@media only screen and (max-width: 52em) {
  .tb-button-container {
    margin: 0;
    ul {
      height: 140px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 10px;
    }
    li {
      margin-bottom: 10px;
      margin-right: 0;
      width: 100%;
    }
  }
  .flexslider {
    border: none;
  }
}
@media (min-width: 834px) {
  .bootstrap {
    .row {
      &:not(.no-gutters) {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
      }
    }
    .mb-md-3 {
      margin-bottom: 1rem !important;
    }
    .my-md-3 {
      margin-bottom: 1rem !important;
    }
    .pl-md-4 {
      padding-left: 1.5rem !important;
      padding-left: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-md-4 {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
    }
    .pr-md-4 {
      padding-right: 1.5rem !important;
      padding-right: 1.5rem !important;
      padding-right: 1.5rem !important;
    }
    .pt-md-0 {
      padding-top: 0 !important;
    }
    .py-md-0 {
      padding-top: 0 !important;
    }
    .pt-md-3 {
      padding-top: 1rem !important;
    }
    .py-md-3 {
      padding-top: 1rem !important;
    }
  }
  .trialbox__buttons-container {
    float: right;
    width: 41.6%;
  }
  .trialbox__info-container {
    float: right;
    width: 41.6%;
  }
  .trialbox__slider-container {
    float: left;
    width: 50%;
  }
}
@media (max-width: 833.98px) {
  .trialbox {
    .oekotex-wrapper {
      .oekotex-green-logo {
        width: 31%;
        left: 6%;
      }
    }
  }
}
h2,
.h2 {
  font-size: 1.3rem;
}
</style>
