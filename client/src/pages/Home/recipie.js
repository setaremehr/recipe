import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setViewerLikes } from "../Viewer/ViewerReducer";
// import Comp from './comp';
import '../../App.css';
import Save from './saveRecipe';

const Recipe = ({ title, link, ingredients, image, id }) => {
    const dispatch = useDispatch()
    const { likes } = useSelector(state => state.viewer);
    const clickHandler = async (recipe_id) => {
        // dispatch(setViewerLikes(10))
        const result = await fetch("/api/like", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({ recipe_id, user_id: "taradehdari" }) })
        //     .then(r => r.json())
        //     .then(r => console.log(r));
        dispatch(setViewerLikes(await result.json()))
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
                <button 
                    className="button" 
                    style= {{backgroundColor: likes.some(e => e.recipe_id === id)? "red":"blue"} }
                    data={id} 
                    onClick={() => clickHandler(id)}><FontAwesomeIcon 
                    icon={faHeart} 
                    /> 
                    <Link to={{pathname: '/Save'}}></Link> </button>
                <button className="button"> <Link className="a" to={{
                    pathname: `/comp/${id}`
                    ,
                    state: { comp: title }
                }}> View Datails </Link> </button>
                {/* <button className="button" >  Save Me </button> */}
            </div>
        </div>
        // </div> 
    );
}


ReactDom.render (React.createElement (Save, null), document.getElementById('root'));
export default Recipe;