import React from 'react';
import axios from 'axios';

import RecipeList from './RecipeList';


class RecipeListView extends React.Component {
    state = {
        recipes: [],
        
    };

    // gets stories from the backend recipe database table upon mounting
    componentDidMount() {
        if (this.props.isLoggedIn === true) {
            console.log('Logged in, fetching recipes')
            return axios
                //.get('https://anthony-secret-family-recipes.herokuapp.com/api/recipes/:id/users', this.state.user_id)
                .get('http://localhost:2400/api/recipes/:id/users', this.state.user_id)
                .then(res => {
                    console.log('response', res.data.user_id);
                    this.setState(
                        {
                            recipes: res.data,
                            
                        }
                    );
                })
                .catch(err => {
                    console.log('Error retrieving recipes: ', err);
                });
        }
    }

    // renders the RecipeListView component and passes necessary props
    render() {
        return (
            <div className="recipe-list-page">
                <RecipeList
                    recipes={this.state.recipes}
                    isLoggedIn={this.props.isLoggedIn}
                />
            </div>
        );
    }
}

export default RecipeListView;