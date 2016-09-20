/**
 * Created by Michal on 13.09.2016.
 */
import {getDefaultKeyBinding, KeyBindingUtil, RichUtils} from "draft-js";
const {hasCommandModifier} = KeyBindingUtil;

export function setEditorState(editor) {
	return {
		type: "SET_EDITOR_STATE",
		editor: editor
	};
}

export function keyBindingHandler(e) {
    // cmd + s
	if (e.keyCode === 83 && hasCommandModifier(e)) {
		return "save";
	}
	return getDefaultKeyBinding(e);
}

export function keyCommandHandler(command) {
	return (dispatch, getState) => {
		const state = getState();
		if (command === "save") {
			console.log("saving");
			return true;
		} else {
			const newEditor = RichUtils.handleKeyCommand(state.textEditorReducer.editorState, command);
			if (newEditor) {
				dispatch(setEditorState(newEditor));
				return true;
			}
			return false;
		}
	};
}