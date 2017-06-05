const defaultState = { checked: false };
const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'TOGGLE':
			return { ...state, checked: !state.checked };
	}
	return state;
}

export default reducer;
