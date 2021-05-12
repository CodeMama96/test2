export const fetchParts = () => {
    
    return (dispatch) => {
        dispatch({type: 'FETCHING_PARTS'})
        fetch('http://194.195.210.84/')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_PARTS', parts: responseJSON})
            console.log( 'Im a part fetch')
        })
    }

}