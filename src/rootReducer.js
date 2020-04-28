
const initState = {
    pokemon: [],
    chosen: []
}

const rootReducer = (state=initState, action) => {
    if(action.type === "INITIALIZE"){
        action.pokemon.id=action.id;
        return({
            ...state,
            pokemon: [...state.pokemon, action.pokemon]
        });
    }else if(action.type === "ADD_CHOSEN"){
        return({
            ...state,
            chosen:[...state.chosen, action.pokemon]
        });
    }else if(action.type === "REMOVE_CHOSEN"){
        let chosen = state.chosen.filter(pokemon=>{
            return pokemon !== action.pokemon;
        });
        return({
            ...state,
            chosen: chosen
        });
    }
    return state;
}

export default rootReducer;
