<template>
  <header>
    <div class="contain-to-grid lillydoo-main-menu">
      <nav class="navbar navbar-expand-lg top-bar">
        <div class="logo-wrapper">
          <a
            class="navbar-brand logo"
            href="#"
            title="LILLYDOO - What Babies really cry for"
          >
            <div class="row">
              <i class="icon-lillydoo-logo"></i></div
          ></a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-default" id="navbarNav">
          <section id="main-menu" class="top-bar-section">
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <a class="nav-link active-color" href="#"
                  >GRATIS TESTPAKET <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FLEXIBLES ABO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">PRODUKTE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">MAGAZIN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ÜBER LILLYDOO</a>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped lang="scss">
.navbar-toggler-icon {
  background-image: url(https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png);
}

@media (max-width: 768px) {
  #navbarNav {
    position: absolute;
    top: 70px;
  }
}
.contain-to-grid {
  width: 100%;
  background: #f8f8f8;
}
.top-bar-section {
  left: 13%;
  margin-bottom: -2%;
  position: relative;
  width: auto;
  transition: left 0.3s ease-out;
}
section {
  padding: 1.25rem 0;
}
#main-menu {
  padding-top: 0.5rem;
}
ul {
  font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
  font-size: 0.938rem;
  line-height: 1.4;
  list-style-position: outside;
  margin-bottom: 2rem;
}
.logo-wrapper {
  z-index: 1;
  text-align: center;
  height: 50px;
}
.nav-link {
  color: black;
}
a {
  &:hover {
    color: #00afab;
    line-height: inherit;
    text-decoration: none;
  }
}
.active-color {
  color: #00afab;
}
.icon-lillydoo-logo {
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(https://www.lillydoo.com/bundles/lepweb/img/sprites.png);
  background-origin: padding-box;
  background-position-x: -12px;
  background-position-y: -13px;
  background-size: auto;
  box-sizing: border-box;
  color: rgb(0, 175, 171);
  cursor: pointer;
  display: block;
  float: none;
  font-family: icomoon;
  font-size: 16px;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  height: 32px;
  letter-spacing: normal;
  line-height: 16px;
  margin-left: 4.8px;
  margin-right: 29.2031px;
  margin-top: 0px;
  padding-bottom: 3.2px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  width: 218px;
  -webkit-font-smoothing: antialiased;
}
.columns {
  padding-bottom: 0.2rem;
}
.columns.small-centered {
  margin-left: auto;
  margin-right: auto;
  float: none;
}
@media screen and (max-width: 835px) {
  .logo-wrapper {
    left: 20px;
    position: static;
    z-index: 1;
    text-align: center;
    width: 100%;
    height: 50px;
  }
}
@media screen and (max-width: 880px) {
  logo {
    left: 20px;
  }
}
@media screen and (max-width: 950px) {
  logo {
    background-size: 65%;
    background-position: 0 0;
  }
}
@media screen and (max-width: 1010px) {
  logo {
    background-size: 80%;
    background-position: 0 0;
  }
  a {
    color: #00afab;
    line-height: inherit;
    text-decoration: none;
  }
}
@media only screen and (max-width: 835px) {
  header #main-menu {
    padding-top: 0;
  }
}

header .top-bar li {
  clear: both;
}
</style>
