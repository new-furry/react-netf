// pages routes

import * as mainPage from "../helpers/mainURL";

export default [
    {
        url: "/app/main",
        baseUrl: "/app/main",
        name: "Home",
        child_routes: [
            {
                title: "Main",
                path: mainPage
            },
            {
                title: "NewBarges",
                path: mainPage.mainArticlePage
            }
        ]
    },
    {
        url: "/app/tv",
        baseUrl: "/app/tv",
        name: "TV Shows",
        path: mainPage
    },
    {
        url: "/app/movies",
        baseUrl: "/app/movies",
        name: "Movies",
        path: mainPage
    },
    {
        url: "/app/recently",
        baseUrl: "/app/recently",
        name: "Recently Added",
        path: mainPage
    },
    {
        url: "/app/mylist",
        baseUrl: "/app/mylist",
        name: "My List",
        path: mainPage
    },
];
