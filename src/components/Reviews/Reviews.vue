<template>
  <section class="dark">
    <div class="row">
      <div class="small-12 columns text-center">
        <h2>Was andere über unsere Windeln&nbsp;sagen</h2>
      </div>
      <div class="row">
        <div class="small-12 medium-8 medium-centered column testimonials">
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img
                class="lazyload"
                src="https://www.lillydoo.com/bundles/lepweb/img/testimonials/testimonial-uwe-gensheimer.png"
                alt="Uwe Gensheimer"
              />
            </div>
            <div class="testimonial-content">
              <blockquote>
                <p>
                  "Wir lieben das praktische Windelabo von LILLYDOO, das uns
                  sogar bis nach Frankreich versorgt. Dazu bleibt mit diesen
                  Windeln bei unserem kleinen Racker – trotz viel Bewegung –
                  alles schön trocken."
                </p>
                <p class="quote-author">
                  Uwe Gensheimer –
                  <a
                    href="https://www.facebook.com/uwegensheimer/"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Kapitän der deutschen Handball-Nationalmannschaft</a
                  >
                </p>
              </blockquote>
            </div>
          </div>
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img
                class="lazyload"
                alt="Nina Bott"
                src="https://www.lillydoo.com/bundles/lepweb/img/testimonials/testimonial-nina-bott.png"
              />
            </div>
            <div class="testimonial-content">
              <blockquote>
                <p>
                  "Ehrlich gesagt hattet ihr mich schon beim Design – aber seit
                  mein Langschläfer auch morgens noch ganz trocken ist, will ich
                  keine andere Windel mehr für meinen Lio!"
                </p>
                <p class="quote-author">
                  Nina Bott –
                  <a
                    href="http://ninabott.de/"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Schauspielerin</a
                  >
                </p>
              </blockquote>
            </div>
          </div>
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img
                class="lazyload"
                alt="Mari von Baby Kind und Meer"
                src="https://www.lillydoo.com/bundles/lepweb/img/testimonials/testimonial-mari-baby-kind-meer.png"
              />
            </div>
            <div class="testimonial-content">
              <blockquote>
                <p>
                  "Die LILLYDOO Windeln gefallen uns besser als alle anderen
                  Windeln, die wir zuvor ausprobiert haben. Und das waren mit
                  drei Kindern so einige. Wir sind absolut begeistert!"
                </p>
                <p class="quote-author">
                  Mari – Bloggerin
                  <a
                    href="http://www.babykindundmeer.de/"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Baby, Kind &amp; Meer</a
                  >
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Reviews",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
section.dark {
  background: #f8f8f8;
}
section {
  padding: 1.25rem 0;
}
.columns {
  padding-bottom: 0.2rem;
}
.text-center {
  text-align: center !important;
}
.small-12 {
  width: 100%;
}
.medium-8 {
  width: 66.66667%;
}
.column.medium-centered {
  margin-left: auto;
  margin-right: auto;
  float: none;
}
.columns.medium-centered {
  margin-left: auto;
  margin-right: auto;
  float: none;
}
.row {
  padding: 2rem 0 2rem 0;
  margin: 0 auto;
  max-width: 80rem;
  width: 100%;
}
.testimonials {
  .tab-item-wrapper {
    li {
      padding: 10px;
      text-align: center;
      &:only-child {
        img {
          max-width: 50%;
        }
      }
    }
    li.active {
      img {
        border-color: #00afab;
        border-width: 2px;
      }
    }
    img {
      margin: 0;
      border: 2px solid #cdcdcd;
      border-radius: 100%;
    }
  }
  .tab-content {
    display: none;
  }
  .tab-content.open {
    display: block;
  }
  blockquote {
    border: none;
    padding: 0;
    margin: 0;
    p {
      color: #000;
    }
  }
  .quote-author {
    font-family: cera_promedium, Helvetica, Roboto, Arial, sans-serif;
    margin: 0;
  }
}
.testimonial-item {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  .testimonial-img {
    width: 18%;
    margin-right: 45px;
  }
  .testimonial-content {
    width: 80%;
  }
  img {
    margin: 0;
  }
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
.lazyload {
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: auto;
  display: inline-block;
  flex-shrink: 0;
  font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 146.031px;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  max-width: 100%;
  vertical-align: middle;
  width: 139.656px;
}
@media (min-width: 600px) {
  .testimonials {
    .tab-item-wrapper {
      img {
        width: 60%;
      }
    }
  }
}
@media (min-width: 1200px) {
  .testimonials {
    .tab-content {
      display: block;
    }
  }
}
</style>
