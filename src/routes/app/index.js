import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

//App theme
import ThemeProvider from "./components/ThemeProvider";

//Vertical Layout
import VerticalContainer from "./components/VerticalContainer";

//Main Routes (App level)


// Error pages
import NotFound from "./components/ErrorPages/Err404";

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
        case true:
            if (location.pathname === "/") {
                return <Redirect to={"/app/main"} />;
            }
        default:
            break;
    }

    return (
        <ThemeProvider>
            <Switch>
                <AppEntry
                    path={`${match.url}app`}
                    component={VerticalContainer}
                />

                <Route component={NotFound} />              //404 route
            </Switch>
        </ThemeProvider>
    );
}

// map state to props                                       //for future authSession State
const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

// export default App;
export default connect(mapStateToProps)(App);