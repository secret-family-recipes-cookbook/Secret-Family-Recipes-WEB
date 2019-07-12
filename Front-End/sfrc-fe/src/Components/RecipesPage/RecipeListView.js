import React from 'react';
import axios from 'axios';

import RecipeList from './RecipeList';
import AddRecipeForm from '../AddRecipePage/AddRecipeForm'
import authenticate from '../Authentication/Authenticate'


class RecipeListView extends React.Component {
    state = {
        recipes: [],
        editMode: false,
    };

    updateRecipe = () => {
        console.log("Hello world");
        
            // this.setState({
            //             recipe: {
            //                 ...this.state.recipe,
            //                 user_id: this.props.user_id
            //             }
            //         }, () => { 
            //console.log('setting recipe to state', this.state.recipe);
            //console.log(this.props.user_id);
            // axios call to post recipe to recipe table
            return axios
                
                .put(`https://anthony-secret-family-recipes.herokuapp.com/api/recipes/${this.state.recipe.id}`, this.state.recipe)
                //.put(`http://localhost:2400/api/recipes/${this.state.recipe.id}`, this.state.recipe)
                .then(res => {
                    console.log(res);
                    window.location = "/recipes";
                })
                .catch(err => {
                    console.log(err);
                    alert("Sorry, there was an error while saving your recipe.");
                })
        // })
    }

    handleChange = e => {
        this.setState({
            recipe: {
                ...this.state.recipe,
                [e.target.name]: e.target.value
            }
        });
    };


    toggleMode = (currentRecipe) => {
        
        this.setState(prevState => ({
            editMode: !prevState.editMode,
            recipe: {
                ...currentRecipe
            }
        }));
    }

    // gets stories from the backend recipe database table upon mounting
    componentDidMount() {
    
    }

    // renders the RecipeListView component and passes necessary props
    render() {
        if (!this.state.editMode) {
            return (
            
            <div className="recipe-list-page">
                {this.props.recipes.map(recipe =>
                <RecipeList
                recipe={recipe}
                deleteRecipe={this.props.deleteRecipe}
                isLoggedIn={this.props.isLoggedIn}
                toggleMode={this.toggleMode}
                handleChange={this.handleChange}>
                </RecipeList>)}
                
                
            </div>
            )
    } else {
        return (
            <div>              
            {this.props.recipes.map(recipe =>
                <AddRecipeForm
                    handleChange={this.handleChange}
                    recipe={this.state.recipe}
                    addRecipe={this.updateRecipe}
                    toggleMode={this.toggleMode}
                ></AddRecipeForm>)}
            </div>  
        )
    }
}
}

export default authenticate(RecipeListView);