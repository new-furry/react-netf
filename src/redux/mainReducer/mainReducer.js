import * as Types from "./mainTypes";

const INIT_STATE = {
    mainState: {
        rating: localStorage.getItem('rating'),
    }
};

let rating = '';

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
