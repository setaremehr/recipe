import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Recipe = ({title,link, ingredients,image,id}) => {
    const clickHandler = (recipe_id) => {
     fetch("/likeRecipe", {method: "post", headers:{"content-type":"application/json"}, body: JSON.stringify({recipe_id, hello: "world"})})
     .then(r => r.json() )
     .then(r => console.log(r));
    }
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
           <button data={id} onClick={() => clickHandler(id)}><FontAwesomeIcon icon={faHeart} className="fa"/>  </button>
        </div>
    );
}
export default Recipe;