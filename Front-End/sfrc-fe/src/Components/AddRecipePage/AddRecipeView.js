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
                instructions: '',
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



    // makes axios call to post recipe & ingredients
    addRecipe = () => {
        console.log("Hello world");
        
            this.setState({
                        recipe: {
                            ...this.state.recipe,
                            user_id: this.props.user_id
                        }
                    }, () => { 
            //console.log('setting recipe to state', this.state.recipe);
            //console.log(this.props.user_id);
            // axios call to post recipe to recipe table
            return axios
                
                //.post('https://anthony-secret-family-recipes.herokuapp.com/api/recipes', this.state.recipe)
                .post('http://localhost:2400/api/recipes', this.state.recipe)
                .then(res => {
                    console.log(res);
                    window.location = "/recipes";
                })
                .catch(err => {
                    console.log(err);
                    alert("Sorry, there was an error while adding your recipe.");
                })
        })}
    

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