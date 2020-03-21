/**
 * Redux App Settings Actions
 */
import * as types from "./mainTypes";

/**
 * Save Rating
 */
export const saveRating = (data) => ({
    type: types.SAVE_RATING,
    payload: { data }
});
export const saveRatingSuccess = (data) => ({
    type: types.SAVE_RATING_SUCCESS,
    payload: { data }
});
export const saveRatingFailure = (error) => ({
    type: types.SAVE_RATING_FAILURE,
    payload: { error }
});
