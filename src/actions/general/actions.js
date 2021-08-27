
export function fetchLoading(loading) {
    return dispatch => {
        dispatch({ type: 'LOADING_FETCHED', payload: loading });
    }
}