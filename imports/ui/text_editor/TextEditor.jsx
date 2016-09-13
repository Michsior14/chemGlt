import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Editor, EditorState, RichUtils} from "draft-js";
import FlatButton from "material-ui/FlatButton";
import EditorButtons from "/imports/ui/text_editor/EditorButtons";
import {setEditorState, keyCommandHandler, keyBindingHandler} from "/lib/actions/text_editor";


let TextEditor = ({states, handlers}) => {
    return (
        <div className="text-editor-wrapper">
            <EditorButtons>
                <FlatButton
                    label="Save"
                />
            </EditorButtons>
            <Editor
                editorState={states.editor}
                onChange={handlers.editorChange}
                handleKeyCommand={handlers.keyCommand}
                keyBindingFn={handlers.keyBinding}
                spellChecks
            />
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        states: {
            editor: state.textEditorReducer.editorState,
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            editorChange: (editor) => {
                dispatch(setEditorState(editor));
            },
            keyBinding: keyBindingHandler,
            keyCommand(command) {
                return dispatch(keyCommandHandler(command));
            }
        }
    }
};

TextEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextEditor);

export default TextEditor;
