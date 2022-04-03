import { INCREMENT, DECREMENT, MULTIPLY, ADDITION, SUBTRACTION} from "../types/types"
const initialState = { 
    count: 0,
    multiple: 0,
    sum: 0,
    minus: 0

}

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
        case MULTIPLY:
            return {
                ...state,
                multiple: parseInt(action.payload.firstNo) * parseInt(action.payload.secondNo)
            }
        case ADDITION:
            return {
                ...state,
                sum: parseInt(action.payload.firstNo) +  parseInt(action.payload.secondNo)
            }
            case SUBTRACTION:
            return {
                ...state,
                minus: parseInt(action.payload.firstNo) -  parseInt(action.payload.secondNo)
            }
        default:
            return state
    }
}

export default index;
