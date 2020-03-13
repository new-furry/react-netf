import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import * as async from "./AsyncRoutes";
import * as url from "../../helpers/mainURL";

function bargeSwitcher() {
    return (
        <div>
            <Switch>
                {/* ------- /Barges ------- */}
                <Route
                    exact
                    path={url.mainListPage}
                    component={async.main_list_component}
                />

                <Route
                    exact
                    path={url.mainArticlePage}
                    component={async.main_article_component}
                />

                {/* ------- /404 ------- */}
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default bargeSwitcher;