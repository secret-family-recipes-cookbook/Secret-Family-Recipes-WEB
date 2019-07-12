import React from 'react';

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RecipeList(props) {
    //event handler that routes to individual recipe card
    function routeToRecipe(e, recipe) {
        e.preventDefault();
        props.history.push(`/recipe-list/${recipe.id}`);
    }

    return (
        <div>
        <div><h1>Your recipes</h1></div>
        <div>
            {/* {props.recipes.filter((recipe) => (
                recipe.user_id = user.id
            )).map((recipe) => ( */}
            {props.recipes.map((recipe) => (
                
                    <div
                        onClick={e => routeToRecipe(e, recipe)}
                        className="recipe-card"
                        key={recipe.id}
                    >

                    <Card className="recipe-card-list">
                        <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardSubtitle>From the kitchen of: {recipe.source}</CardSubtitle>
                            <CardSubtitle>Category: {recipe.category}</CardSubtitle>
                        </CardBody>

                        <CardBody>
                            <CardText>{recipe.ingredients}</CardText>
                            <CardText>{recipe.instructions}</CardText>
                        </CardBody>
                    </Card>
                    </div>
             ))}  
            {/* ))} */}
        </div>
        </div>
    )
}

export default RecipeList;