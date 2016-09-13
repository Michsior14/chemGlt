/**
 * Created by Michal on 13.09.2016.
 */
import {EditorState} from "draft-js";

const textEditorReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'SET_EDITOR_STATE':
            return Object.assign({}, state, {
                editorState: action.editor
            });
        default:
            return state;
    }
};

const getInitialState = () => {
    return {
        editorState: EditorState.createEmpty(),
    }
};


export default textEditorReducer;