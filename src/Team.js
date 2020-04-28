import React, {Component} from 'react';
import {connect} from 'react-redux';

class Team extends Component
{
    render(){
        console.log(this.props.chosen.length);
        const chosenList = this.props.chosen.length > 0 ? (this.props.chosen.map(pokemon=>{
            return (<div>{pokemon.data.name}</div>);
        })):(<div>No teammates chosen yet!</div>);

        return <div>{chosenList}</div>
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
