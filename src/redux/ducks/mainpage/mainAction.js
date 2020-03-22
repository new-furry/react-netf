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
