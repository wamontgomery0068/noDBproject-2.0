import React, { Component } from 'react';
import './Characters.css';

import axios from 'axios';

class Characters extends Component {
    constructor(){
        super()

        this.state = {
            Characters: [],
            favList: []
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
                <div className="Character_Box">
                    <div className="Characters">
                        <h2>Characters</h2>
                    </div>
                    <div className="Characters_List">
                        {Names}
                    </div>
                </div>
                <div className="Favorite_Box">
                    <div className="Favorites">
                        <h2>Favorites List</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default Characters;