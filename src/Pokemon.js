import React,{Component} from 'react';
import {connect} from 'react-redux';

class Pokemon extends Component{



    toggleChosen = e => {
        if(e.target.parentElement.classList.contains('portrait') && !e.target.parentElement.classList.contains('chosen') && this.props.chosen.length < 6){
            const filteredMon = this.props.pokemon.filter(mon=>{
                return e.target.alt === mon.data.name;
            })[0];
            this.props.addChosen(filteredMon);
        }
        else if(e.target.classList.contains('portrait') && !e.target.classList.contains('chosen') && this.props.chosen.length < 6){
            const filteredMon = this.props.pokemon.filter(mon=>{
                return e.target.childNodes[0].alt === mon.data.name;
            })[0];
            this.props.addChosen(filteredMon);
        }
        else if(e.target.parentElement.classList.contains('portrait') && e.target.parentElement.classList.contains('chosen')){
            const filteredMon = this.props.pokemon.filter(mon=>{
                return e.target.alt === mon.data.name;
            })[0];
            this.props.removeChosen(filteredMon);
        }
        else if(e.target.classList.contains('portrait') && e.target.classList.contains('chosen')){
            const filteredMon = this.props.pokemon.filter(mon=>{
                return e.target.childNodes[0].alt === mon.data.name;
            })[0];
            this.props.removeChosen(filteredMon);
        }
    }
    render(){
        const pokemonList = this.props.pokemon.length === 151 ? (this.props.pokemon.map(mon => {
            return(
                 <span className={this.props.chosen.includes(mon) ? 'portrait chosen' : 'portrait'} key={mon.id} onClick={e=>{this.toggleChosen(e)}}>
                    <img alt={mon.data.name} src={mon.data.sprites.front_default}></img>
                </span>
            )
            })):(<p>Loading pok&eacute;mon...</p>);
        return(
            <div>
                {pokemonList}
            </div>
         );
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
            addChosen: pokemon=>{dispatch({type:"ADD_CHOSEN", pokemon:pokemon})},
            removeChosen:pokemon=>{dispatch({type:"REMOVE_CHOSEN", pokemon:pokemon})}
        }
    );
}


export default connect(mapStateToProps,mapDispatchToProps)(Pokemon);
