import * as Types from "./mainTypes";

const INIT_STATE = {
    mainState: {
        rating1: parseFloat(localStorage.getItem('1')),
        rating2: parseFloat(localStorage.getItem('2')),
        rating3: parseFloat(localStorage.getItem('3')),
        rating4: parseFloat(localStorage.getItem('4')),
        rating5: parseFloat(localStorage.getItem('5')),
        rating6: parseFloat(localStorage.getItem('6')),
        rating7: parseFloat(localStorage.getItem('7')),
        rating8: parseFloat(localStorage.getItem('8')),
        rating9: parseFloat(localStorage.getItem('9')),
        rating10: parseFloat(localStorage.getItem('10')),
    }
};

let rating = 0;

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case Types.SAVE_RATING:
            rating = action.payload.data;
            localStorage.setItem(`${rating.id}`, rating.value);
            let duxRating = 'rating'+rating.id;

            let json = {
                mainState: {
                    ...state.mainState,
                }
            };
            json.mainState[duxRating] = rating.value;
            return {
                ...state,
                ...json
            };

        default:
            return {
                ...state
            }
    }
}
