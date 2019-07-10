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
            dropdownOpen: false,
        };

        this.toggle = this.toggle.bind(this);
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

    // toggles the dropdown 
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    // makes axios call to post recipe & ingredients
    addRecipe = e => {
        e.preventDefault();
        if (!this.state.recipe.title || !this.state.recipe.ingredients || this.state.recipe.directions) {
            alert("Please fill out title, ingredients, and directions.");
        } else {
            // axios call to post recipe to recipe table
            axios
                .post(' endpoint for posting recipe', this.state.recipe)
                .then(res => {
                    console.log(res);
                    this.setState({
                        recipe: {
                            title: '',
                            source: '',
                            ingredients: '',
                            directions: '',
                            category: ''
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
                    toggle={this.toggle}
                    isOpen={this.state.dropdownOpen}
                />
            </div>
        )
    }
}

export default AddRecipeView;