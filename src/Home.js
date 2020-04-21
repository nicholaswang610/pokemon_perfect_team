import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Home extends Component
{
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => {
                const data = res.data.results;
                const pokemon = data.map(mon=>{
                    axios.get(mon.url).then(res=>{this.props.initializePokemon(res)});
                });
            });
    }
    render(){
        console.log(this.props);
        const pokemonList = this.props.pokemon.length === 151 ? (this.props.pokemon.map(mon => {
            return(
                <div>
                    <img src={mon.data.sprites.front_default}></img>
                </div>
            )
        })):(<p>Loading pok&eacute;mon...</p>)
        return <div>
            {pokemonList}
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return (
        {
            pokemon: state.pokemon
        }
    )
}
const mapDispatchToProps = (dispatch) => {
    return(
        {
            initializePokemon: pokemon => {dispatch({type:"INITIALIZE", pokemon:pokemon})}
        }
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);