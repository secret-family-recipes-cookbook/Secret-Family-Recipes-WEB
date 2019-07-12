import React from 'react';
import axios from 'axios';

import IndivRecipe from './IndivRecipe';

class IndivRecipeView extends React.Component {
    state = {
        recipes: []
    };

    // componentDidMount() {
    //     axios
    //         .get(`http://localhost:2400/api/recipes/${id}`, )
    //         .then(res => {
    //             console.log('response', res.data)
    //         })
    //         .catch(err => {
    //             console.log('Error retrieving recipe', err);
    //         });
    // }

    render() {
        return (
            <IndivRecipe 
                recipes={this.props.recipes}
                match={this.props.match}
            />
        )
    }
}

export default IndivRecipeView;