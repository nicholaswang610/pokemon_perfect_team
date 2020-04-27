import React from 'react';

const Pokemon = ({pokemon}) =>{
    const pokemonList = pokemon.length === 151 ? (pokemon.map(mon => {
        return(
            <span key={mon.id} onClick={e=>{console.log(e.target.parentElement)}}>
                <img alt={mon.data.name} src={mon.data.sprites.front_default}></img>
            </span>
        )
    })):(<p>Loading pok&eacute;mon...</p>);

    return (
        <div>
            {pokemonList}
        </div>
    );
}

export default Pokemon;