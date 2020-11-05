import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './recipie';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../App.css';
// import { Container } from '@material-ui/core';
// import Jumbotron from 'react-bootstrap/Jumbotron';

export const Home = () => {
    // const Application_ID = "df96bbad";
    // const Application_Keys = "2647868114acbdcdb2351e0c7664118d";
    // const req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${Application_ID}&app_key=${Application_Keys}`

    const app_ID = "10ec3f21";
    const app_Keys = "51a1cb1b8ba12ff927e0da7eb7c46b6d";
    let searchItem = 'chicken'
    let req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${searchItem}&app_id=${app_ID}&app_key=${app_Keys}`

    const [recipes, setRecipes] = useState([]);
    const [getInput, setGetInput] = useState("");

    useEffect(() => {
        axios.post(req)
            .then((res) => {
                const uri = res.data.hits[0].recipe.uri;
                const recipe = uri.split("#")[1]
                console.log(recipe);
                const id = recipe.split("_")[1]
                console.log(id);

                setRecipes(res.data.hits)
            })
    }, [])

    const submitForm = (event) => {
        event.preventDefault();
        searchItem = getInput;
        console.log(searchItem);
        req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${searchItem}&app_id=${app_ID}&app_key=${app_Keys}`
        axios.post(req)
            .then((res) => {
                setRecipes(res.data.hits)
                // console.log();
            })
    }
    const getValue = e => {
        setGetInput(e.target.value);
        // setGetInput('');
    }

    return (
        <>
            <div className="App">
                <Form onSubmit={submitForm} className="form">
                    <input type="text" value={getInput} onChange={getValue} className="input" />
                    <Button type="submit" className="button"> Search </Button>
                </Form>

                <div className="eachRecipe">
                    {recipes.map((recipe, index) => {
                        const x = recipe.recipe.uri.split("#")[1]
                        //    console.log(x);
                        const id = x.split("_")[1]
                        console.log(id);
                        return (
                            <Recipe
                                key={id}
                                title={recipe.recipe.label}
                                // ingre={recipe.recipe.ingredientLines}
                                ingredients={recipe.recipe.ingredients}
                                link={<a href={recipe.recipe.shareAs} target="_blank">Click here to see more datails</a>}
                                image={recipe.recipe.image}
                                id={id}

                            />
                        )
                    })}
                </div>

            </div>
        </>
    );
}
