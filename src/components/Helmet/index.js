import React from "react";
import { Helmet } from "react-helmet";
import AppConfig from "../../constants/AppConfig";

const PageHelmet = ({ metaDesc, title }) => (
  <Helmet>
    <title>{`${AppConfig.brandName} | ${title}`}</title>
    {metaDesc && <meta name="description" content={metaDesc} />}
  </Helmet>
);

export default PageHelmet;
