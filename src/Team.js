import React, {Component} from 'react';
import {connect} from 'react-redux';

class Team extends Component
{
    render(){
        console.log(this.props.chosen);
        const chosenList = this.props.chosen.length > 0 ? (this.props.chosen.map(pokemon=>{
            return (<div key={pokemon.data.id} className="member">
                    <img alt={pokemon.data.name} src={pokemon.data.sprites.front_default}/>
                    <div className="stats">
                        <p>{pokemon.data.name}</p>
                    </div>
                </div>);
        })):(<div>No teammates chosen yet!</div>);
        if(chosenList.length > 0)
        {
            return <div className="member-container">
                <div className="table table-borderless">
                    <div className="row justify-content-center my-4 py-4 px-4 mx-4">
                        <td>{chosenList[0]}</td>
                        <td>{chosenList[1]}</td>
                    </div>
                    <div className="row justify-content-center my-4 py-4 px-4 mx-4">
                        <td>{chosenList[2]}</td>
                        <td>{chosenList[3]}</td>
                    </div>
                    <div className="row justify-content-center my-4 py-4 px-4 mx-4">
                        <td>{chosenList[4]}</td>
                        <td>{chosenList[5]}</td>
                    </div>
                </div>
            </div>
        }
        else{
            return <div className="text-center member-container">{chosenList}</div>
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

