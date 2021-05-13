const partsReducer = (state = {parts: []}, action) => {
    switch(action.type){
        case "ADD_PARTS":
            return{...state,
                parts:[...state.parts]
            }

    }
}


export default partsReducer