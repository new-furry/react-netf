import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// horizontal layout
import AppContainer from "./layoutContainer";

// Init Modules
import moduleInit from "../../../../services/_moduleInitialise";

// redux action

class VerticalContainer extends Component {

    render() {
        const { match, location } = this.props;

        if (location.pathname === "/") {
            return <Redirect to={"/app/main"} />;
        }

        return (
            <AppContainer>
                {moduleInit &&
                moduleInit.map((route, key) => (
                    <Route
                        key={key}
                        path={`${match.url}/${route.path}`}
                        component={route.component}
                    />
                ))}
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