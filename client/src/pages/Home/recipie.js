import React from 'react';


const Recipe = ({title,cole,image}) => {
    return(
        <div>
            <h1> {title} </h1>
            <p> {cole} </p>
           <img src={image} alt="" />
        </div>
    );
}
export default Recipe;