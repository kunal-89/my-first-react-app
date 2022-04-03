import { SUBTRACTION, RESET } from "../types/types"
import { initialState } from "./initionalSatate";

const index = (state = initialState, action) => {
    switch (action.type) {
        case SUBTRACTION:
            return {
                ...state,
                minus: parseInt(action.payload.firstNo) - parseInt(action.payload.secondNo)
            }
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
