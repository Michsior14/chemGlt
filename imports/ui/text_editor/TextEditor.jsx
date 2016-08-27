import React, {Component, PropTypes} from "react";
import {Editor, EditorState, RichUtils,
        getDefaultKeyBinding, KeyBindingUtil} from "draft-js";
import FlatButton from "material-ui/FlatButton";
import EditorButtons from "/imports/ui/text_editor/EditorButtons";


const {hasCommandModifier} = KeyBindingUtil;
class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.stateChangeHandler = this.stateChangeHandler.bind(this);
        this.keyCommandHandler = this.keyCommandHandler.bind(this);
        this.keyBindingHandler = this.keyBindingHandler.bind(this);
    }

    stateChangeHandler(editorState) {
        this.setState({editorState});
    }

    keyBindingHandler(e) {
        // cmd + s
        if (e.keyCode === 83 && hasCommandModifier(e)) {
            return 'save';
        }
        return getDefaultKeyBinding(e);
    }

    keyCommandHandler(command) {
        if(command === 'save'){
            console.log("saving");
            return true;
        } else {
            const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
            if (newState) {
                this.stateChangeHandler(newState);
                return true;
            }
            return false;
        }
    }

    render() {
        return (
            <div className="text-editor-wrapper">
                <EditorButtons>
                    <FlatButton
                        label="Save"
                    />
                </EditorButtons>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.stateChangeHandler}
                    handleKeyCommand={this.keyCommandHandler}
                    keyBindingFn={this.keyBindingHandler}
                    spellChecks
                />
            </div>
        );
    }
}

export default TextEditor;
