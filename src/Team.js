import React, {Component} from 'react';
import {connect} from 'react-redux';
class Team extends Component
{
    render(){
        console.log(this.props.chosen);
        const chosenList = this.props.chosen.length > 0 ? (this.props.chosen.map(pokemon=>{
            console.log(pokemon.data.types[0].type.name);
            if(pokemon.data.types.length === 2)
            {
                return (
                <div key={pokemon.data.id} className="member">
                    <img className="pokeball" src={require('./images/pokeball.png')} alt="pokeball"></img>
                    <span className={"multiple-types " + pokemon.data.types[0].type.name}></span>
                    <span className={"multiple-types " + pokemon.data.types[1].type.name}></span>
                    <div className="details px-2 py-3 text-left">
                        <img alt={pokemon.data.name} src={pokemon.data.sprites.front_default}/>
                        <span className="stat digi-text hp">{"hp: " + pokemon.data.stats[5].base_stat} </span>
                        <span className="stat digi-text  attack">{"attack: " + pokemon.data.stats[4].base_stat}</span>
                        <span className="stat digi-text  defense">{"defense: " + pokemon.data.stats[3].base_stat }</span>
                        <span className="stat digi-text  sattack">{"sp. att: " + pokemon.data.stats[2].base_stat}</span>
                        <span className="stat digi-text  sdefense">{"sp. def: " + pokemon.data.stats[1].base_stat}</span>
                        <span className="stat digi-text  speed">{"speed: " + pokemon.data.stats[0].base_stat}</span>
                        <p className='text-light digi-text '>{pokemon.data.name.toUpperCase()}</p>
                    </div>
                </div>);
            }else if(pokemon.data.types.length === 1)
            {
                return(
                    <div key={pokemon.data.id} className="member">
                        <img className="pokeball" src={require('./images/pokeball.png')} alt="pokeball"></img>
                        <span className={"type " + pokemon.data.types[0].type.name}></span>
                        <div className="details px-2 py-3 text-left">
                            <img alt={pokemon.data.name} src={pokemon.data.sprites.front_default}/>
                            <span className="stat digi-text hp">{"hp: " + pokemon.data.stats[5].base_stat} </span>
                            <span className="stat digi-text  attack">{"attack: " + pokemon.data.stats[4].base_stat}</span>
                            <span className="stat digi-text  defense">{"defense: " + pokemon.data.stats[3].base_stat }</span>
                            <span className="stat digi-text  sattack">{"sp. att: " + pokemon.data.stats[2].base_stat}</span>
                            <span className="stat digi-text  sdefense">{"sp. def: " + pokemon.data.stats[1].base_stat}</span>
                            <span className="stat digi-text  speed">{"speed: " + pokemon.data.stats[0].base_stat}</span>
                            <p className='digi-text text-light'>{pokemon.data.name.toUpperCase()}</p>
                        </div>
                    </div>);
            }else{
                return <div>There was an error!</div>;
            }
            
        })):(<div className="text-light">No teammates chosen yet!</div>);
        if(chosenList.length > 0)
        {
            return <div>
                <table className="table table-borderless">
                    <tbody>
                        <tr className="row my-4 py-4 px-4 mx-4">
                            <td className="w-50 text-left">{chosenList[0]}</td>
                            <td className="w-50 text-left">{chosenList[1]}</td>
                        </tr>
                        <tr className="row justify-content-center my-4 py-4 px-4 mx-4">
                            <td className="w-50 text-left">{chosenList[2]}</td>
                            <td className="w-50 text-left">{chosenList[3]}</td>
                        </tr>
                        <tr className="row justify-content-center my-4 py-4 px-4 mx-4">
                            <td className="w-50 text-left">{chosenList[4]}</td>
                            <td className="w-50 text-left">{chosenList[5]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        }
        else{
            return <div className="text-center container">{chosenList}</div>
        }
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return (
        {
            chosen: state.chosen
        }
    );
}

const mapDispatchToProps = (dispatch) => {
    return(
        {
        }
    );
}


export default connect(mapStateToProps,mapDispatchToProps)(Team);

