import React from "react";
import { connect } from "react-redux";

//Component Req

import { listOptions } from "../../../../helpers/helpers";
import { bargesListPage } from "../../../../helpers/mainURL";
import RctSectionLoader from "../../../../components/RctSectionLoader";
import { Radio } from '@material-ui/core';

//import icon

const BargeList = (props) => {
    const { tableData, loading, title, action, noRelated } = props;

    listOptions.customToolbarSelect = (
        selectedRows,
        displayData,
        setSelectRows
    ) =>
        // delete multiple function
        null;

    return (
        <div className="rct-block">
            test
            {loading && <RctSectionLoader />}
        </div>
    );
};

const mapStateToProps = ({ mainState }) => {
    return { mainState };
};

export default connect(mapStateToProps, {

})(BargeList);

// export default BargeList;