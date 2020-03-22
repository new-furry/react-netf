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
        ]
    },
];
