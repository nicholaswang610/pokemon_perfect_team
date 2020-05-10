import React, {Component} from 'react';
import {connect} from 'react-redux';

class Team extends Component
{
    render(){
        console.log(this.props.chosen);
        const chosenList = this.props.chosen.length > 0 ? (this.props.chosen.map(pokemon=>{
            return (<div key={pokemon.data.id} className="member">
                    <div className="px-2 text-left">
                        <img alt={pokemon.data.name} src={pokemon.data.sprites.front_default}/>
                        <p className='name'>{pokemon.data.name}</p>
                    </div>
                </div>);
        })):(<div>No teammates chosen yet!</div>);
        if(chosenList.length > 0)
        {
            return <div>
                <div className="table table-borderless">
                    <div className="row my-4 py-4 px-4 mx-4">
                        <td className="w-50 text-left">{chosenList[0]}</td>
                        <td className="w-50 text-left">{chosenList[1]}</td>
                    </div>
                    <div className="row justify-content-center my-4 py-4 px-4 mx-4">
                        <td className="w-50 text-left">{chosenList[2]}</td>
                        <td className="w-50 text-left">{chosenList[3]}</td>
                    </div>
                    <div className="row justify-content-center my-4 py-4 px-4 mx-4">
                        <td className="w-50 text-left">{chosenList[4]}</td>
                        <td className="w-50 text-left">{chosenList[5]}</td>
                    </div>
                </div>
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

