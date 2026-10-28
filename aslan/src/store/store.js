let store;

export const setStore = str => {
    store = str
    return
}

export const getState = (key) => {
    let state = store.getState()
    return state[key]
}

export const dispatch = (action) => {
    store.dispatch(action);
}