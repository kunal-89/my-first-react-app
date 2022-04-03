import { INCREMENT, DECREMENT, MULTIPLY, ADDITION, SUBTRACTION, RESET} from "../types/types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function multiply({firstNo,secondNo}) {
    return {
        type: MULTIPLY,
        payload: {firstNo,secondNo}
    }
}

export function addition({firstNo,secondNo}) {
    return {
        type: ADDITION,
        payload: {firstNo,secondNo}
    }
}

export function subtract({firstNo,secondNo}) {
    return {
        type: SUBTRACTION,
        payload: {firstNo,secondNo}
    }
}

export function reset() {
    return {
        type: RESET,
        // payload : {
        //     count: 0,
        //     multiple: 0,
        //     sum: 0,
        //     minus: 0

        // }
    }
}
