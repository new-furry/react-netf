import React, {Fragment} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";


//Vertical Layout
import VerticalContainer from "../components/VerticalContainer";
import HeaderContainer from "./HeaderContainer";

// Error pages
import NotFound from "../components/ErrorPages/Err404";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 *
 */
const AppEntry = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => <Component {...props} />} />
);

function App(props) {
    const { location, match } = props;
    const loginState = true;

    switch (loginState) {
        case false:
            if (location.pathname === "/") {
                return <Redirect to={"/login"} />;
            }
            break;
        case true:
            if (location.pathname === "/") {
                return <Redirect to={"/app/main"} />;
            }
            break;

        default:
            break;
    }

    return (
        <Fragment>
            <HeaderContainer />
            <Switch>
                <AppEntry
                    path={`${match.url}app`}
                    component={VerticalContainer}
                />

                <Route component={NotFound} />
            </Switch>
        </Fragment>
    );
}

// map state to props                                       //for future authSession State
const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

// export default App;
export default connect(mapStateToProps)(App);
