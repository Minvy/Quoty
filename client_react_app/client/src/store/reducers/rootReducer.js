const initState = {
    counter: 0
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 }
        default:
            return { counter: 0 }
    }
}

export default rootReducer;