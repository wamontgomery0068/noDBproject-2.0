import React, { Component } from 'react';
import './CrestList.css';

// import axios from 'axios';

class CrestList extends Component {
    constructor(){
        super()

        this.state = {
            Crests: []
        }
        // this.handleCrests = this.handleCrests.bind(this)
        // this.addtoList = this.addtoList.bind(this)
    }

    // handleCrests(){
    //     axios.get('http://localhost:3008/api/gameofthrones/houses/crest').then( response => {
    //         console.log(response)
    //         this.setState({Crests:response.data})
    //     })
    // }

    // addtoList(){
    //     console.log(this.state.Crests)
    //     axios.post('http://localhost:3008/api/gameofthrones/houses/crest').then( response =>{
    //         console.log(response)
    //         this.setState({Crests: response.data})
    //     });
    // }

    render(){
        let Crests = this.state.Crests.filter( (element) => {return element.image}).map( (element, index) => {
            return (
                <div key={ index }>
                <img className="image-crest" src={element.image} alt="crest-logo">{element.image}</img>
                </div>
            )
        })
        return (
            <card className="Individual_Crest">{Crests}</card>
        )
    }
}

export default CrestList;