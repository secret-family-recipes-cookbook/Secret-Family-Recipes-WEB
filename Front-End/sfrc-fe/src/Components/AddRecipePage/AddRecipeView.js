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

    // makes axios call to post recipe & ingredients
    addRecipe = e => {
        e.preventDefault();
        if (!this.state.recipe.title || !this.state.recipe.ingredients || this.state.recipe.directions || this.state.recipe.category) {
            alert("Please fill out category, title, ingredients, and directions.");
        } else {
            // axios call to post recipe to recipe table
            axios
                // .post('https://anthony-secret-family-recipes.herokuapp.com/api/recipes', this.state.recipe)
                .post('http://localhost:2400/api/recipes', this.state.recipe)
                .then(res => {
                    console.log(res);
                    this.setState({
                        recipe: {
                            title: '',
                            source: '',
                            ingredients: '',
                            directions: '',
                            category: '',
                            user_id: ''
                        }
                    })
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
                    addRecipe={this.addRecipe}
                />
            </div>
        );
    }
}

export default AddRecipeView;