import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Recipe from './recipie';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Home = () => {
    // const Application_ID = "df96bbad";
    // const Application_Keys = "2647868114acbdcdb2351e0c7664118d";
    // const req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${Application_ID}&app_key=${Application_Keys}`

    const app_ID = "10ec3f21";
    const app_Keys = "51a1cb1b8ba12ff927e0da7eb7c46b6d";
    const req = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${app_ID}&app_key=${app_Keys}`

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios.post(req)
            .then((res) => {

                setRecipes(res.data.hits)
            })
    }, [])

    console.log(recipes[0]);
    console.log(recipes[0]?.recipe.image);

    return (
        <>
            <Form>
                <input type="text" />
                <Button type="submit"> Search </Button>
            </Form>
           {recipes.map(recipe => (
  <Recipe 
   title={recipe.recipe.label}
   cole={recipe.recipe.calories}
   image={recipe.recipe.image}
  />
           ))}
          

        </>
    );
}
