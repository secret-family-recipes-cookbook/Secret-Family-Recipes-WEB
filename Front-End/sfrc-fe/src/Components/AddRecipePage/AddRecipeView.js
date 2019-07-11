import React from 'react';
import axios from 'axios';

import AddRecipeForm from './AddRecipeForm';

class AddRecipeView extends React.Component {
    constructor() {
        super();
        this.state = {
            recipe: {
                title: '',
                source: '',
                ingredients: '',
                directions: '',
                category: '',
                user_id: '',
            },  
        };       
    }
    


    // updates the form fields to whatever the user types
    handleChange = e => {
        this.setState({
            recipe: {
                ...this.state.recipe,
                [e.target.name]: e.target.value
            }
        });
    };

    handleClick = () => {
        
        this.addRecipe();
        window.location = "#/recipes"
    }

    // makes axios call to post recipe & ingredients
    addRecipe = () => {
        
        if (!this.state.recipe.title || !this.state.recipe.ingredients || !this.state.recipe.directions || !this.state.recipe.category) {
            alert("Please fill out category, title, ingredients, and directions.");
        } else {
            this.setState({
                        recipe: Object.assign({}, this.state.recipe, {
                            user_id: this.props.user_id
                        })
                    })
            // axios call to post recipe to recipe table
            axios
                // .post('https://anthony-secret-family-recipes.herokuapp.com/api/recipes', this.state.recipe)
                .post('http://localhost:2400/api/recipes', this.state.recipe)
                .then(res => {
                    console.log(res);
                    
                })
                .catch(err => {
                    console.log(err);
                    alert("Sorry, there was an error while adding your recipe.");
                })
        }   
    }

    // renders the add recipe form component and passes it props
    render() {
        return (
            <div>
                <AddRecipeForm 
                    handleChange={this.handleChange}
                    recipe={this.state.recipe}
                    addRecipe={this.handleClick}
                
                />
            </div>
        );
    }
}

export default AddRecipeView;