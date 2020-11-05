import React from 'react';


const Recipe = ({title,link, ingredients,image}) => {
    return(
        <div className="recipe">
            <h1> {title} </h1>
            {/* <p> {ingre} </p> */}
            <h4>Ingredients : </h4>
            <ol className="ol">
                {ingredients.map(ingre =>(
                    <li> {ingre.text} </li>
                ))}
            </ol>
            <p className="a">{link }</p>
           <img src={image} alt="" className="img" />
        </div>
    );
}
export default Recipe;