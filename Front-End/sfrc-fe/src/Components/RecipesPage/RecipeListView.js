import React from 'react';
import axios from 'axios';

import RecipeList from './RecipeList';
import Axios from 'axios';

class RecipeListView extends React.Component {
    state = {
        recipes: [],
        user: ''
    };

    // gets stories from the backend recipe database table upon mounting
    componentDidMount() {
        if (this.props.isLoggedIn = true) {
            axios
                .get('endpoint to get recipes/userid', this.state.userid)
                .then(res => {
                    console.log('response', res.data.userid);
                    this.setState(
                        {
                            recipes: res.data.userid,
                            user: this.state.userid
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
                    recipes={this.props.recipes}
                    isLoggedIn={this.props.isLoggedIn}
                />
            </div>
        );
    }
}

export default RecipeListView;