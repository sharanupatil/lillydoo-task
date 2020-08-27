<template>
  <div>
    <footer class="container">
      <div class="row mb-4 pt-2 pt-md-0">
        <nav class="text-center col">
          <ul>
            <li>
              <a href="/de/lillydoo-app">LILLYDOO App</a>
            </li>
            <li>
              <a href="/de/zahlung-und-versand">Zahlung &amp; Versand</a>
            </li>
            <li>
              <a href="https://we.are.lillydoo.com" target="_blank">Karriere</a>
            </li>
            <li>
              <a href="/de/presse">Presse</a>
            </li>
            <li>
              <a href="/de/agb">AGB</a>
            </li>
            <li>
              <a href="/de/datenschutz">Datenschutzerklärung</a>
            </li>
            <li>
              <a href="/de/impressum">Impressum</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="row justify-content-md-center trusted-shops-reddot">
        <div class="col">
          <ul>
            <li class="text-right">
              <div id="my-custom-trustbadge" style="font-size: 0px;">
                <div
                  id="trustbadge-custom-desktop-container-98e3dadd90eb493088abdc5597a70810"
                  style="position: relative; display: inline-block;"
                >
                  <div
                    class="_1gwv20v outsideAlerter-98e3dadd90eb493088abdc5597a70810"
                  >
                    <div
                      id="minimized-trustbadge-98e3dadd90eb493088abdc5597a70810"
                      class="_rdv3zm"
                    >
                      <div class="_ljs084">
                        <img
                          class="_1lfgncg"
                          src="https://widgets.trustedshops.com/assets/images/trustmark_120x120.png"
                          alt="Trustmark"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="reddot-logo">
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/footer/reddot-logo.svg"
                  alt="Red Dot Awards Logo"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col text-center copyright py-2 py-md-0">
          <p>© 2020 LILLYDOO GmbH</p>
        </div>
      </div>
    </footer>
    <div>
      <beautiful-chat
        :participants="participants"
        :titleImageUrl="titleImageUrl"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :newMessagesCount="newMessagesCount"
        :isOpen="isChatOpen"
        :close="closeChat"
        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showTypingIndicator="showTypingIndicator"
        :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom"
        :messageStyling="messageStyling"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      participants: [
        {
          id: "user1",
          name: "Daniel",
          imageUrl: "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4"
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
        "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        {
          type: "text",
          author: `Daniel`,
          data: {
            text: `Unsere Windel - Spezialisten suchen gerne mit Dir nach der richtigen Größe und helfen Dir bei Deiner Bestellung. Schreib uns direkt hier.`
          }
        }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 1,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#009793",
          text: "#ffffff"
        },
        launcher: {
          bg: "#009793"
        },
        messageList: {
          bg: "#ffffff"
        },
        sentMessage: {
          bg: "#eaeaea",
          text: "#000"
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222"
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867"
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattmezza/msgdown)
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text }
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@media (min-width: 834px) {
  .bootstrap {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      max-width: 1281px;
    }
    .row {
      &:not(.no-gutters) {
        .col {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        [class*="col-"] {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        margin-left: -1.5rem;
        margin-right: -1.5rem;
      }
    }
    .justify-content-md-center {
      justify-content: center !important;
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
.bootstrap {
  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .text-center {
    text-align: center !important;
  }
  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .text-right {
    text-align: right !important;
  }
}
footer {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: transparent;
  color: #000;
  nav {
    ul {
      list-style: none;
      margin: 0;
      li {
        display: inline-block;
        padding-right: 0.75rem;
        padding-left: 0.75rem;
        margin-bottom: 1rem;
        a {
          color: #000;
        }
      }
    }
  }
  .trusted-shops-reddot {
    text-align: center;
    margin-bottom: 1.875rem;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
    }
  }
  .reddot-logo {
    border-left: 1px solid #cdcdcd;
    padding: 0 1.25rem;
  }
}
a {
  line-height: inherit;
  text-decoration: none;
}
</style>
