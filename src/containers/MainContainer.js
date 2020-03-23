import React, {Fragment} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeaderContainer from "./HeaderContainer";
import AppContainer from "../components/theme/MainStructureComponent/layoutContainer";
import MainPage from "./HomeContainer";
import ArticlePage from "./ArticleContainer";

function App(props) {
    const { location } = props;

    if (location.pathname === "/") {
        return <Redirect to={"/app/main"} />;
    }
    return (
        <Fragment>
            <HeaderContainer />
            <Switch>
                <AppContainer>
                    <Route
                        exact
                        path="/app/main"
                        component={MainPage}
                    />

                    <Route
                        exact
                        path={`/app/main/article/:id`}
                        component={ArticlePage}
                    />
                </AppContainer>
            </Switch>
        </Fragment>
    );
}

// export default App;
export default connect(null)(App);
