import projectActions from "/lib/actions/projects";


export function openDialog(name) {
	return {
		type: "OPEN_NAV_DIALOG",
		name: name
	};
}

export function closeDialog() {
	return {
		type: "CLOSE_NAV_DIALOG"
	};
}

export function handleLeftNav() {
	return (dispatch, getState) => {
		const state = getState();
		if (state.navigationReducer.isLeftNav) {
			dispatch(closeLeftNav());
		} else {
			dispatch(projectActions.updateList());
			dispatch(openLeftNav());
		}
	};
}

export function finishStartup() {
	return {
		type: "FINISH_STARTUP"
	};
}

function openLeftNav() {
	return {
		type: "OPEN_LEFT_NAVIGATION"
	};
}

function closeLeftNav() {
	return {
		type: "CLOSE_LEFT_NAVIGATION"
	};
}
