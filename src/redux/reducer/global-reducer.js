import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR ,OPEN_MODAl, CLOSE_MODAL} from "../type"

const defaultState = {
    loading: false,
    error: null,
    name:'',
    number:'',
    modal:false
}
console.log(defaultState)
export const globalReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case HIDE_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                modal: false
            }
        }
        case OPEN_MODAl: {
                return {
                    ...state,
                    modal: true
                }
            }
        default:
            return state
    }
}