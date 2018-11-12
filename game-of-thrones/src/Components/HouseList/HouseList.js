import React, { Component } from 'react';
import './HouseList.css';
// import '../House/House';

import axios from 'axios';

class HouseList extends Component {
    constructor(){
        super()

        this.state = {
            houseDetails: [],
            exploreList: []
        }
        this.handleExploreList = this.handleExploreList.bind(this)
        // this.addtoList = this.addtoList.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3008/api/gameofthrones/house/details').then( response => {
            this.setState({houseDetails:response.data})
        });
    }

    handleExploreList(element){
        axios.post('http://localhost:3008/api/gameofthrones/explore/house/details', {element}).then( response => {
            console.log(response)
        });
    }
    
    // Arrow Function Practice
    // addtoList = id => {
    //     axios.post('http://localhost:3008/api/gameofthrones/house/crest', id)
    //     .then(response => this.setState({Crests: response.data}))
    // }

    // Arrow Function Practice
    deleteHouse = house => {
        axios.delete(`http://localhost:3008/api/gameofthrones/house/name/${house}`).then( response => this.setState({ Favorites: response.data}))
        .catch(e => console.log(e));
    };
    // Arrow Function Practice
    // deleteCrest = id => {
    //     axios.delete(`http://localhost:3008/api/gameofthrones/house/crest/${id}`)
    //     .then(response => {
    //         console.log(response.data)
    //         this.setState({Crests: response.data})}).catch(err=>console.log(err))
    // };

    render(){
        console.log(this.state.houseDetails)
        let Houses = this.state.houseDetails.map( (element, index) => {
            return (
                <div key={ index }>
                    <p>{element.name}</p>
                    <button onClick={()=> this.handleExploreList(element)}>Add</button>
                </div>
            )
        })
        // console.log(this.state.exploreList)
        let Details = this.state.exploreList.map( (element, index) => {
            return (
                <div key={ index }>
                <h3>{element.name}</h3>
                <img className="image-crest" src={element.image} alt="crest-logo" />
                <p>Coat of Arms: {element.coatOfArms}</p>
                </div>
            )
        })
        return (
            <div className="Inner_Container">
                <div className="Left_Container">
                    <div className="Left_Title">
                        <h2>Houses List</h2> 
                    </div>
                    <div className="House_Names">
                        {Houses}
                    </div>
                </div>
                <div className="Right_Container">
                    <div className="Right_Title">
                        <h2>Explore the Individual Houses</h2>
                    </div>
                    <div className="Crest_List">
                        {Details}
                    </div>
                </div>
            </div>
        );
    }
}

export default HouseList;