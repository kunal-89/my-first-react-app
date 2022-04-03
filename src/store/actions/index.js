import { INCREMENT, DECREMENT, MULTIPLY } from "../types/types";

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