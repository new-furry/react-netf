import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "../../components/RctPageLoader";


export const main_list_component = Loadable({
    loader: () => import("./mainList"),
    loading: () => <RctPageLoader />
});

export const main_article_component = Loadable({
    loader: () => import("./mainList/articlePage/ArticlePage"),
    loading: () => <RctPageLoader />
});
