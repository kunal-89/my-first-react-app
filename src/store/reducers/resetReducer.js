import { RESET } from "../types/types"
import { initialState } from "./initionalSatate";

const index = (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default index;

// https://stackoverflow.com/questions/34419809/redux-is-there-any-way-to-access-store-tree-in-reducer
