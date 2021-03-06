import { INCREMENT, DECREMENT, RESET } from "../types/types"
import { initialState } from "./initionalSatate";

const index = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
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
