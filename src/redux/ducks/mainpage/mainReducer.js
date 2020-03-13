import * as types from "./mainTypes";

const INIT_STATE = {
    bargeList: {
        nowShowing: "All Barges",
        options: ["All Barges", "Added Barges", "Pending Barges"],
        action: false,
        loading: false,
        tableData: [
            {
                id:"dummyId",
                name:"dummyBarge",
                status:"ready",
                position:"Singapore",
                fuelSupplier:"test",
                map:"dummy",
                delete:"dummy"
            },
            {
                id:"dummyId",
                name:"dummyBarge",
                status:"ready",
                position:"Singapore",
                fuelSupplier:"test",
                map:"dummy",
                delete:"dummy"
            },
        ]
    }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}