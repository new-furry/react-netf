import React, {Fragment} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";


//Vertical Layout
import VerticalContainer from "../components/MainStructureComponent";
import HeaderContainer from "./HeaderContainer";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 *
 */
const AppEntry = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => <Component {...props} />} />
);

function App(props) {
    const { location, match } = props;

    if (location.pathname === "/") {
        return <Redirect to={"/app/main"} />;
    }

    return (
        <Fragment>
            <HeaderContainer />
            <Switch>
                <AppEntry
                    path={`${match.url}app`}
                    component={VerticalContainer}
                />
            </Switch>
        </Fragment>
    );
}

// export default App;
export default connect(null)(App);
