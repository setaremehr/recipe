import React from 'react';
import { Link } from "react-router-dom";
const app_ID = "10ec3f21";
const app_Keys = "51a1cb1b8ba12ff927e0da7eb7c46b6d";

class Comp extends React.Component {
    state = {
        currentRecipe: {
            image: "",
            label: "",
            source: "",
            calories: "",
            dietLabels:"",
            healthLabels:"",
            shareAs:""
        }
    }
    componentDidMount = async () => {
        const title = this.props.location.state.comp;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${title}&app_id=${app_ID}&app_key=${app_Keys}`);
        const res = await req.json();
        const object = {
            label: res.hits[0].recipe.label,
            image: res.hits[0].recipe.image,
            source: res.hits[0].recipe.source,
            calories: res.hits[0].recipe.calories,
            dietLabels: res.hits[0].recipe.dietLabels[0],
            healthLabels: res.hits[0].recipe.healthLabels[0, 1, 2, 3],
            shareAs:  res.hits[0].recipe.shareAs
        }
        console.log(res);
        console.log(res.hits[0].recipe.ingredients)
        this.setState({ currentRecipe: object })
    }
    render() {
        // console.log(this.props);
        const recipe = this.state.currentRecipe;
        return (
            <div className="fresh">
                <div className="card">
               <div className="recipe-comp">
               <img className="imgg" src={recipe.image} />
                <h2 className="title">{recipe.label}</h2>
                <h3 className="publisher-comp ">
                    Publisher: <span> {recipe.source}</span>
                </h3>
                <h4 className="publisher-comp ">
                    Calories: <span> {recipe.calories}</span>
                </h4>
                <h4 className="publisher-comp ">
                    DietLabels: <span> {recipe.dietLabels} </span>
                </h4>
                <h4 className="publisher-comp ">
                    HealthLabels: <span> {recipe.healthLabels} </span>
                </h4>
                <p className="publisher-comp ">
                    Website: <span> <a className="a"href={recipe.shareAs}> click here to see more datails 🧸</a></span>
                </p>
                <button className="button-comp"> <Link to="/home" className="a">Go Home</Link> </button>

               </div>
            </div>
            </div>
        );
    }

}

export default Comp;  