import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// import Comp from './comp';
import '../../App.css';
import Save from './saveRecipe';

const Recipe = ({ title, link, ingredients, image, id }) => {
    const clickHandler = (recipe_id) => {
        fetch("/likeRecipe", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({ recipe_id, hello: "world" }) })
            .then(r => r.json())
            .then(r => console.log(r));
    }
    return (
        // <div className="container">
        <div className="recipe" >
            {/* <div className=""> */}
            <img src={image} alt={title} className="imgbox" />
            <h3 className="title"> {title}  </h3>

            <h4>Ingredients : </h4>
            <h5 className="">
                {ingredients.map(ingre => (
                    <p> {ingre.text} </p>
                ))}
            </h5>
            {/* <p className="a">{link}</p> */}
            <div className="butt">
                <button className="button" data={id} onClick={() => clickHandler(id)}><FontAwesomeIcon icon={faHeart} className="" /> <Link to={{pathname: '/Save'}}></Link> </button>
                <button className="button"> <Link className="a" to={{
                    pathname: `/comp/${id}`
                    ,
                    state: { comp: title }
                }}> View Datails </Link> </button>
                {/* <button className="button" >  Save Me </button> */}
            </div >
        </div>
        // </div>
    );
}

ReactDom.render (React.createElement (Save, null), document.getElementById('root'));
export default Recipe;