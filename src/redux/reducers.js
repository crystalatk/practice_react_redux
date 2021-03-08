import { ACTION_DECREMENT, ACTION_INCREMENT } from "./actionTypes";

export const counter = (state, action) => {
    switch(action.type) {
        case ACTION_INCREMENT: 
            return {
                count: state.count + 1
            }
        case ACTION_DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}