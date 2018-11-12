import React from "react";
import "./House.css"

const House = props => {
    const { name, image, id, coatOfArms, favorite, deleteHouse } = props;

    return(
        <div className="house_name">
            <h3>{name}</h3>
            <img className="image_cover" src={image} alt="crest_logo" />
            <p>Coat of Arms: {coatOfArms}</p>
            {favorite && (
                <button className="fav-btn" onClick={favorite}>Add</button>
            )}

            {deleteHouse && (
                <button className="delete-btn" onClick={()=>deleteHouse(id)}>Delete</button>
            )}
        </div>
    );
}

export default House;