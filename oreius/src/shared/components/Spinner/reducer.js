import {
    LOADER_VISIBLE
} from './actions';

export const initialState = {
    isLoaderVisible: false
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_VISIBLE:
            return {
                ...state,
                isLoaderVisible: action.isLoaderVisible
            }
        default: return state
    }
}

export default loaderReducer;