import React from 'react';
import axios from 'axios';

import IndivRecipe from './IndivRecipe';

class IndivRecipeView extends React.Component {
    state = {
        recipe: []
    };

    componentDidMount() {
        axios
            .get('endpoint to get specific recipe/:id')
            .then(res => {
                console.log('response', res.data)
            })
    }

    render() {
        return (
            <IndivRecipe 
                recipe={this.props.recipe}
                match={this.props.match}
            />
        )
    }
}

export default IndivRecipeView;