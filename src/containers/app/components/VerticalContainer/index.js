import React, { Component } from "react";
import {Route, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux";

import AppContainer from "./layoutContainer";

import MainPage from "../../../mainpage/mainList/index"
import ArticlePage from "../../../mainpage/mainList/articlePage/ArticlePage";

class VerticalContainer extends Component {

    render() {
        const { location } = this.props;

        if (location.pathname === "/") {
            return <Redirect to={"/app/main"} />;
        }

        return (
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
        );
    }
}
const mapStateToProps = ({ mainState }) => {
    return { mainState };
};
export default withRouter(
    connect(mapStateToProps, {

    })(VerticalContainer)
);