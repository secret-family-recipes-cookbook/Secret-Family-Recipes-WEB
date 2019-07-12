import React from 'react';

import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class RecipeList extends React.Component {
    constructor(props){
        super(props);
    }

   
    //event handler that routes to individual recipe card
    routeToRecipe(e, recipe) {
        e.preventDefault();
        this.props.history.push(`/recipe-list/${recipe.id}`);
    }

    handleDelete = () => {
        this.props.deleteRecipe(this.props.recipe.id,this.props.recipe.user_id)
    }

    handleEdit = () => {
        this.props.toggleMode(this.props.recipe)
    }

    render() {
        
        return (
                    <div>
                        <Card className="recipe-card-list">
                         <CardBody>
                             <CardTitle>{this.props.recipe.title}</CardTitle>
                           <CardSubtitle>From the kitchen of: {this.props.recipe.source}</CardSubtitle>
                             <CardSubtitle>Category: {this.props.recipe.category}</CardSubtitle>
                         </CardBody>
                         <CardBody>
                             <CardText>{this.props.recipe.ingredients}</CardText>
                             <CardText>{this.props.recipe.instructions}</CardText>
                         </CardBody>
                         <CardBody>
                             <Button onClick={this.handleEdit.bind(this)}>Edit</Button>
                             <Button onClick={this.handleDelete.bind(this)}>Delete</Button>
                         </CardBody>
                        </Card>
                     </div>
        )
    }

}

export default RecipeList;