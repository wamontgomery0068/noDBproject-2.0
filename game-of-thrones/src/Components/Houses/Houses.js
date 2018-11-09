import React, { Component } from 'react';
// import Crests from '../Crests/CrestList';
import './Houses.css';

import axios from 'axios';

class Houses extends Component {
    constructor(){
        super()

        this.state = {
            Houses: [],
            Crests: []
        }
        this.handleCrests = this.handleCrests.bind(this)
        this.addtoList = this.addtoList.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3008/api/gameofthrones/houses/').then( response => {
            // console.log(response)
            this.setState({Houses:response.data})
        });
    }

    handleCrests(index){
        axios.get('http://localhost:3008/api/gameofthrones/houses/crest').then( response => {
            console.log(response)
            let copyOfCrests = this.state.Crests
            copyOfCrests.push(response.data[index])
            console.log(copyOfCrests)
            this.setState({Crests:copyOfCrests})
        })
        // console.log(index)
    }

    addtoList(){
        console.log(this.state.Crests)
        axios.post('http://localhost:3008/api/gameofthrones/crest').then( response =>{
            console.log(response)
            this.setState({Crests: response.data})
        });
    }

    render(){
        // console.log(this.state)
        let Houses = this.state.Houses.filter( (element) => {return element.name}).map( (element, index) => {
            return (
                <div key={ index }>
                <p>{element.name}</p>
                <button onClick={()=> this.handleCrests(index)}>Add</button>
    
                </div>
            )
        })

        let Crests = this.state.Crests.map( (element, index) => {
            return (
                <card key={ index }>
                <div className="Display_Card">
                    <div className="Dislay_Crest">
                        <img className="crest-image" src={element.image} alt="crest-logo"/>
                        <div>{element.coatOfArms}</div>
                    </div>
                </div>
                </card>
            )
        })
        return (
            <div className="Inner_Container">
                <div className="Left_Container">
                    <div className="Left_Title">
                        <h2>Explore Individual Houses</h2> 
                    </div>
                    <div className="House_Names">
                        <p>{Houses}</p>
                    </div>
                </div>
                <div className="Right_Container">
                    <div className="Right_Title">
                        <h2>House Crests</h2>
                    </div>
                    <div className="Crest_List">
                    {Crests}
                    </div>
                </div>
            </div>
        )
    }

}

export default Houses;