const accountReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'WAITING_FOR_RESPONSE':
            return Object.assign({}, state, {
                waiting: true,
                notification: action.request
            });
        case 'STOP_WAITING':
            return Object.assign({}, state, {
                waiting: false
            });
        case 'FINISH_SIGN_IN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                waiting: false,
                notification: "",
                userAccount: action.userAccount
            });
        case 'ERROR_SIGN_IN':
            return Object.assign({}, state, {
                waiting: false,
                notification: ""
            });
        case 'LOG_OUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                userAccount: null
            });
        default:
            return state;
    }
};

const getInitialState = () => {
    return {
        waiting: false,
        notification: "",
        isLoggedIn: false,
    }
};


export default accountReducer;