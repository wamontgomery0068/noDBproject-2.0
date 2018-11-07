import React, { Component } from 'react';
import './CharactersList.css';

import axios from 'axios';

class CharacterList extends Component {
    constructor(){
        super()

        this.state = {
            Characters: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3008/api/characters/').then( response => {
            console.log(response)
            this.setState({Characters:response.data})
        });
    }

    render(){
        console.log(this.state.Characters)
        let Names = this.state.Characters.filter( (element) => {return element.name && element.name !==''})
        .map( (element, index) => {
            return (
                <div key={ index }>
                    <h3>{element.name}</h3>
                </div>
            )
        })

        return (
            <div className="Content_Container">
            {Names}
            </div>
        )
    }

}

export default CharacterList;