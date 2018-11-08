import React, { Component } from 'react';
import Title from './Title/Title';
import './Header.css';

class Header extends Component {
    render(){
        const title= "Game of Thrones"
        return (
            <div className="Header_Container">
                <Title title={title} />
            </div>
        )
    }

}

export default Header;