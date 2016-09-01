

const navigationReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'OPEN_NAV_DIALOG':
            return Object.assign({}, state, {
                isDialog: true,
                openedDialog: action.name
            });
        case 'CLOSE_NAV_DIALOG':
            return Object.assign({}, state, {
                isDialog: false,
                openedDialog: ""
            });
        case 'OPEN_LEFT_NAVIGATION':
            return Object.assign({}, state, {
                isLeftNav: true
            });
        case 'CLOSE_LEFT_NAVIGATION':
            return Object.assign({}, state, {
                isLeftNav: false
            });
        default:
            return state;
    }
};

const getInitialState = () => {
    return {
        isDialog: false,
        openedDialog: "",
        isLeftNav: false
    }
};


export default navigationReducer;