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
            {props.recipes.filter((recipe) => (
                recipe.userid = user.id
            )).map((recipe) => (
                <div>
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
                            <CardText>{recipe.directions}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecipeList;