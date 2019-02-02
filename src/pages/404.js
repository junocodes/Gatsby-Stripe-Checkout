import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found.</h1>
    <p>Really don't know how you ended up here loser.</p>
    <Link to="/">Go back home.</Link>
  </Layout>
);

export default NotFoundPage;
