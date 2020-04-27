
const initState = {
    pokemon: []
}

const rootReducer = (state=initState, action) => {
    if(action.type === "INITIALIZE"){
        action.pokemon.id=action.id;
        return({
            ...state,
            pokemon: [...state.pokemon, action.pokemon]
        });
    }
    return state;
}

export default rootReducer;