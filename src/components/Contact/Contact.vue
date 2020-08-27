<template>
  <div id="footer" class="bootstrap">
    <section class="contact">
      <div class="container p-0 pb-md-3">
        <div class="contact-container row justify-content-md-center no-gutters">
          <div class="col-12 col-lg-10">
            <div class="contact-info-footer ">
              <p class="text-center">
                Wir wollen mehr für Dich sein, nicht nur Wickeln und Tschüss.
                Also ruf gerne an oder schreib uns!
              </p>
              <div itemscope="" itemtype="http://schema.org/Organization">
                <div class="hide">
                  <h4 itemprop="name">Lillydoo</h4>
                  <a href="http://www.lillydoo.com" itemprop="url" class="hide"
                    >www.lillydoo.com</a
                  >
                </div>
                <div
                  class="contact-info-wrapper"
                  itemprop="contactPoint"
                  itemscope=""
                  itemtype="http://schema.org/ContactPoint"
                >
                  <meta itemprop="contactType" content="customer service" />
                  <div class="mail">
                    <span class="icon-size-adjustment">
                      <font-awesome-icon icon="envelope"
                    /></span>
                    <a class="" href="mailto:service@lillydoo.com">
                      service@lillydoo.com
                    </a>
                  </div>
                  <div class="phone">
                    <span class="icon-size-adjustment">
                      <font-awesome-icon icon="phone-alt" />
                    </span>
                    <span class="info"
                      ><a href="tel:+4906964357420"
                        >+49 (0) 69 - 643 57 420</a
                      ></span
                    >
                  </div>
                  <div class="social">
                    <span class="info">
                      <a
                        href="https://www.facebook.com/lillydoo.babycare/"
                        target="_blank"
                        class="icon-size-adjustment"
                      >
                        <span>
                          <font-awesome-icon
                            :icon="{
                              prefix: 'fab',
                              iconName: 'facebook-square'
                            }"
                          />
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/lillydoo_babycare/"
                        target="_blank"
                        class="icon-size-adjustment"
                        ><span>
                          <font-awesome-icon
                            :icon="{
                              prefix: 'fab',
                              iconName: 'instagram-square'
                            }"
                          /> </span
                      ></a>
                      <a
                        href="https://www.youtube.com/lillydoo"
                        target="_blank"
                        class="icon-size-adjustment"
                        ><span>
                          <font-awesome-icon
                            :icon="{
                              prefix: 'fab',
                              iconName: 'youtube-square'
                            }"
                          /> </span></a
                      >&nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
$color_1: #fff;
$color_2: white;

html {
  height: 100%;
}
body {
  height: 100%;
}
.contact {
  color: $color_1;
  background: #00afab;
  a {
    color: $color_1;
  }
}
.icon-size-adjustment {
  font-size: 2rem;
  color: $color_2;
  padding: 10px;
}
.bootstrap {
  .p-0 {
    padding: 0 !important;
  }
  .container {
    width: 100%;
    padding-right: 0.938rem;
    padding-left: 0.938rem;
    margin-right: auto;
    margin-left: auto;
  }
  .text-center {
    text-align: center !important;
  }
}
.contact-info-footer {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}
.hide {
  display: none !important;
}
.contact-info-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .mail {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1.25rem;
    padding-top: 0.8rem;
  }
  .phone {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1.25rem;
    padding-top: 0.8rem;
  }
  .social {
    padding-top: 0.8rem;
  }
}
#wrap {
  .col {
    float: left;
    a {
      text-decoration: none;
    }
  }
}
@media (min-width: 834px) {
  .bootstrap {
    .pb-md-3 {
      padding-bottom: 1rem !important;
    }
    .py-md-3 {
      padding-bottom: 1rem !important;
    }
    .container {
      max-width: 1281px;
    }
  }
  .contact-info-wrapper {
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    .mail {
      padding-top: 0;
      margin-bottom: 0;
      padding-top: 0;
    }
    .phone {
      padding-top: 0;
      margin-bottom: 0;
      padding-top: 0;
    }
    .social {
      padding-top: 0;
    }
  }
}
@media (min-width: 1200px) {
  .bootstrap {
    .container {
      max-width: 1282px;
    }
  }
}
@media (min-width: 374px) {
  .bootstrap {
    .container {
      max-width: 1280px;
    }
  }
}
</style>
