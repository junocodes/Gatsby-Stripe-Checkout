import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Success = () => (
  <Layout>
    <SEO title="Success!" />
    <h1>Success! Thanks for the coffee.</h1>
    <p>
      These once tired eyes, tire no more. I'm wide awake and ready to get back
      to work.
    </p>
    <Link to="/">Go back home.</Link>
  </Layout>
);

export default Success;
