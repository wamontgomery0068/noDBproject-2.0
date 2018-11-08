import React, { Component } from 'react';
// import NameList from './NameList';
import './Houses.css';

import axios from 'axios';

class Houses extends Component {
    constructor(){
        super()

        this.state = {
            Houses: [],
            List: []
        }
        // this.handleCharacters = this.handleCharacters.bind(this)
        // this.addtoFavsList = this.addtoFavsList.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3008/api/gameofthrones/houses/').then( response => {
            console.log(response)
            this.setState({Houses:response.data})
        });
    }

    // handleCharacters(e){
    //     this.setState({favList: e.target.value})
    // }

    // addtoFavsList(){
    //     axios.post('http://localhost:3008/api/characters/').then( response =>[
    //         console.log(response)
    //     ])
    // }

    render(){
        console.log(this.state.Houses)
        let House = this.state.Houses.filter( (element) => {return element.name}).map( (element, index) => {
            return (
                <div key={ index }>
                {element.name}
                </div>
            )
        })

        return (
            <div className="Inner_Container">
                <div className="Left_Container">
                    <div className="Left_Title">
                        {/* <h2>Houses</h2> */}
                    </div>
                    <div className="House_Names">
                        <p>{House}</p>
                    </div>
                </div>
                <div className="Right_Container">
                    <div className="Right_Title"></div>
                    <div className="Name_List"></div>
                </div>
            </div>
        )
    }

}

export default Houses;