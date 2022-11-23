import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR, OPEN_MODAl, CLOSE_MODAL} from "../type"

export const showError = (text) => {
    return {
        type: SHOW_ERROR,
        payload: text
    }
}
export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    }
}
export const showLoading = () => {
    return {
        type: SHOW_LOADING,
    }
}
export const hideLoading = () => {
    return {
        type: HIDE_LOADING,
    }
}

export const openModal = () => {
    return {
        type: OPEN_MODAl
    }
}


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}