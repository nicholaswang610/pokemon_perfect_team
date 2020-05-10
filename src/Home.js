import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Pokemon from './Pokemon.js';
import {withRouter} from 'react-router-dom';
class Home extends Component
{
    componentDidMount(){
        console.log('MOUNTED');
        if(this.props.pokemon.length !== 151){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => {
                const data = res.data.results;
                const pokemon = data.map((mon, index)=>{
                    axios.get(mon.url).then(res=>{this.props.initializePokemon(res, index)});
                });
                return pokemon;
            });
        }
    }

    render(){
        console.log(this.props.pokemon);
        return <div className='container border my-3'>
            <p className="box-title text-center name">Choose your team</p>
            <Pokemon pokemon={this.props.pokemon}/>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return (
        {
            pokemon: state.pokemon
        }
    );
}
const mapDispatchToProps = (dispatch) => {
    return(
        {
            initializePokemon: (pokemon,index) => {dispatch({type:"INITIALIZE", pokemon:pokemon, id:index})},
        }
    );
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

const mapStateToProps = (state, ownProps) => {
    return (
        {
            pokemon: state.pokemon
        }
    );
}
const mapDispatchToProps = (dispatch) => {
    return(
        {
            initializePokemon: (pokemon,index) => {dispatch({type:"INITIALIZE", pokemon:pokemon, id:index})},
        }
    );
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
