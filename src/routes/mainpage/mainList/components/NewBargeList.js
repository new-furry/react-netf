import React from "react";
import { connect } from "react-redux";

//Component Req

import { mainArticlePage } from "../../../../helpers/mainURL";
import RctSectionLoader from "../../../../components/RctSectionLoader";

//import icon
import Brightness1Icon from '@material-ui/icons/Brightness1';
import AddIcon from '@material-ui/icons/Add';

const NewBargeList = (props) => {
    const { tableData, loading, title, action, noRelated } = props;

    const addBarge = (data) => {
        alert("added!");
    };


    return (
        <div className="rct-block">
            test
            {loading && <RctSectionLoader />}
        </div>
    );
};

const mapStateToProps = ({ bargeState }) => {
    const { bargeList } = bargeState;
    return { bargeList };
};

export default connect(mapStateToProps, {

})(NewBargeList);

// export default BargeList;