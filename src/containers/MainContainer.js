import React, {Fragment} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeaderContainer from "./HeaderContainer";
import MainPage from "./HomeContainer";
import ArticlePage from "./ArticleContainer";
import Container from "@material-ui/core/Container";

const App = (props) => {
    const { location } = props;

    if (location.pathname === "/") {
        return <Redirect to={"/app/main"} />;
    }
    return (
        <Fragment>
            <HeaderContainer />
            <Switch>
                <Fragment>
                    <Container className="mb-50" maxWidth="lg">
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
                    </Container>
                </Fragment>
            </Switch>
        </Fragment>
    );
};

export default connect(null)(App);
