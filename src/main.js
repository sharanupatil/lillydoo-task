import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import Chat from "vue-beautiful-chat";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebookSquare,
    faInstagramSquare,
    faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.use(VueScrollTo);
Vue.use(Chat);

library.add(faFacebookSquare);
library.add(faInstagramSquare);
library.add(faYoutubeSquare);
library.add(faPhoneAlt);
library.add(faEnvelope);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    el: "#app",
    render: h => h(App)
});