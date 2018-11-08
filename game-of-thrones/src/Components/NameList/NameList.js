import React, { Component } from 'react';
import './NameList.css';

import axios from 'axios';

class NameList extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    // componentDidMount(){
    //     axios.get('http://localhost:3008/api/gameofthrones/houses/').then( response => {
    //         console.log(response)
    //         this.setState({Houses:response.data})
    //     });
    // }

    render(){
        return (
            <div className="Right_Container"></div>
        )
    }
}

export default NameList;