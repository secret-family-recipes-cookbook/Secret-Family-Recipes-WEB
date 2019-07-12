import React from 'react';
import axios from 'axios';

import RecipeList from './RecipeList';


class RecipeListView extends React.Component {
    state = {
        recipes: [],
        
    };

    // gets stories from the backend recipe database table upon mounting
    componentDidMount() {
    
    }

    // renders the RecipeListView component and passes necessary props
    render() {
        return (
            <div className="recipe-list-page">
                {                 
                 this.props.recipes.map(recipe =>
                <RecipeList
                recipe={recipe}
                deleteRecipe={this.props.deleteRecipe}
                isLoggedIn={this.props.isLoggedIn}></RecipeList>
                    )}
            </div>
        );
    }
}

export default RecipeListView;