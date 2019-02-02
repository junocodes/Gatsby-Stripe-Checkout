import React, { Component } from "react";

export default class Purchase extends Component {
  componentDidMount() {
    // Make Stripe Call Global + Window
    this.stripe = window.Stripe("pk_test_Sxgs1lWMssVwYICI1vHwMJtM", {
      betas: ["checkout_beta_4"]
    });
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.stripe
            .redirectToCheckout({
              items: [{ sku: "sku_ES8bcq6tg61DTY", quantity: 1 }],
              // Using Localhost for demo environment.
              successUrl: "http://localhost:8000/success",
              cancelUrl: "http://localhost:8000/canceled"
            })
            .then(function(result) {
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById("error-message");
                displayError.textContent = result.error.message;
              }
            });
        }}
      >
        <button type="submit">Buy Me Coffee!</button>
      </form>
    );
  }
}
