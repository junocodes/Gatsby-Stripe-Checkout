import React from "react";
import Layout from "../components/layout";
import Checkout from "../components/checkout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `stripe`, `api`, `checkout`]}
    />
    <h1>I'm really tired. . .</h1>
    <p>
      My body needs a fictitiously scrumptious cup of joe. Will you help
      caffeinate these thirsty bones? I got to get back to work.
    </p>
    <p>
      <small>
        To use the new Stripe API Checkout, simply click the button below. Since
        this a demo environment, you can make up your own billing details. Just
        be sure you enter your card number as "4242 4242 4242 4242".
      </small>
    </p>

    <Checkout />
  </Layout>
);

export default IndexPage;
