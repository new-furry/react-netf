import * as Types from "./mainTypes";

const INIT_STATE = {
    mainState: {
        rating: parseFloat(localStorage.getItem('rating')),
    }
};

let rating = 0;

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case Types.SAVE_RATING:
            rating = action.payload.data;
            localStorage.setItem('rating', rating);
            return {
                ...state,
                mainState: {
                    ...state.mainState,
                    rating: rating
                }
            };

        default:
            return {
                ...state
            }
    }
}
