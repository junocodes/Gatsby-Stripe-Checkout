import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Canceled = () => (
  <Layout>
    <SEO title="Canceled" />
    <h1>Your order has been canceled.</h1>
    <p>I'm going back to bed . . . forever.</p>
    <Link to="/">Go back home.</Link>
  </Layout>
);

export default Canceled;
