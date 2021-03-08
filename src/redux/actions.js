import { ACTION_DECREMENT, ACTION_INCREMENT } from "./actionTypes";

export const actionIncrement = () => {
    return {
        type: ACTION_INCREMENT
    }
}

export const actionDecrement = () => {
    return {
        type: ACTION_DECREMENT
    }
}