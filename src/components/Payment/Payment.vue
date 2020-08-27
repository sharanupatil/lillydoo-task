<template>
  <section class="dark">
    <div class="container p-0 payment-shipping-container">
      <div
        class="row justify-content-center no-gutters px-0 px-md-4 pt-3 pb-1 py-md-0"
      >
        <div class="payment-shipping-flex col-10 col-md-7 px-3 px-md-0">
          <div class="payment-group pb-2 pb-md-0 px-3 px-md-0">
            <span>Sicher bezahlen mit:</span>
            <ul>
              <li>
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/visa.svg"
                  width="92"
                  alt="Visa Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/mastercard.svg"
                  width="92"
                  alt="Mastercard Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/paypal.svg"
                  width="92"
                  alt="Paypal Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/rechnung.svg"
                  width="92"
                  alt="Rechnung Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/sepa.svg"
                  width="92"
                  alt="Sepa Logo"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="payment-shipping-flex col-md-5 ">
          <div class="shipping-group pb-2 pb-md-0">
            <span>Unser Versandpartner:</span>
            <ul>
              <li>
                <img
                  src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/shipping/dhl.svg"
                  width="92"
                  alt="DHL Logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Payment",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
section.dark {
  background: #f8f8f8;
  padding-bottom: 20px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
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
  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
}
.payment-shipping-container {
  .payment-group {
    text-align: center;
    text-align: center;
    ul {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      li {
        padding: 0.3125rem;
        width: 6.25rem;
      }
    }
  }
  .shipping-group {
    text-align: center;
    text-align: center;
    ul {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      li {
        padding: 0.3125rem;
        width: 6.25rem;
      }
    }
  }
  .payment-shipping-flex {
    display: flex;
    justify-content: center;
    padding-bottom: 0.4rem;
  }
}
@media (min-width: 834px) {
  .bootstrap {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      max-width: 1281px;
    }
    .pl-md-0 {
      padding-left: 0 !important;
    }
    .px-md-0 {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .pb-md-0 {
      padding-bottom: 0 !important;
    }
    .py-md-0 {
      padding-bottom: 0 !important;
    }
    .pr-md-0 {
      padding-right: 0 !important;
    }
  }
  .payment-shipping-container {
    .payment-group {
      text-align: left;
      text-align: left;
      ul {
        justify-content: flex-start;
        li {
          width: auto;
          padding: 0.3125rem 0.625rem 0.3125rem 0;
        }
      }
    }
    .shipping-group {
      text-align: left;
      text-align: left;
      ul {
        justify-content: flex-start;
        li {
          width: auto;
          padding: 0.3125rem 0.625rem 0.3125rem 0;
        }
      }
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
