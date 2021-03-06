import React, {Fragment} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeaderContainer from "./HeaderContainer";
import Container from "@material-ui/core/Container";

import * as async from "./AsyncRoutes";

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
                            component={async.main_page}
                        />

                        <Route
                            exact
                            path={`/app/main/article/:id`}
                            component={async.article_page}
                        />
                    </Container>
                </Fragment>
            </Switch>
        </Fragment>
    );
};

export default connect(null)(App);
