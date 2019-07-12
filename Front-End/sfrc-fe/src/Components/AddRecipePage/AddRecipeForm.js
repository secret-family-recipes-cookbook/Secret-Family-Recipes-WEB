import React from 'react';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function AddRecipeForm(props) {

    // event handler that pushes the user to the recipes page upon recipe submission
    // const handleClick = e => {
    //     e.preventDefault();
    //     props.addRecipe();
    //     window.location = "#/recipes"
    // }

    const dropDownClick = e => {
        props.toggle();
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.addRecipe()}

    return (
        <div className="RecipeForm">

            <Form onSubmit={submitHandler}>

                {/* <FormGroup>
                    <Label for="recipe-category">Recipe Category</Label>
                        <Input defaultValue="Breakfast" type="select" name="select" id="categorySelect" onChange={props.handleChange} value={props.recipe.category}>
                            <option name="category" value="Breakfast">Breakfast</option>
                            <option name="category" value="Lunch">Lunch</option>
                            <option name="category" value="Dinner">Dinner</option>
                            <option name="category" value="Dessert">Dessert</option>
                            
                        </Input>
                </FormGroup> */}

                    <FormGroup>
                        <Label for="recipe-category">Recipe Title</Label>
                            <Input 
                                type="text" 
                                name="category" 
                                placeholder="Breakfast" 
                                onChange={props.handleChange}
                                value={props.recipe.category}
                                required
                            />
                </FormGroup>

                <FormGroup>
                    <Label for="recipe-title">Recipe Title</Label>
                    <Input 
                        type="text" 
                        name="title" 
                        placeholder="The Best Lasagna Ever" 
                        onChange={props.handleChange}
                        value={props.recipe.title}
                        required
                        />
                </FormGroup>
            
                <FormGroup>
                    <Label for="recipe-source">Source</Label>
                    <Input 
                        type="text" 
                        name="source" 
                        placeholder="Grandma Sue" 
                        onChange={props.handleChange}
                        value={props.recipe.source}
                        required
                        />
                </FormGroup>

                <FormGroup>
                    <Label for="recipe-ingredients">Ingredients</Label>
                    <Input 
                        type="textarea" 
                        name="ingredients" 
                        placeholder="..."
                        onChange={props.handleChange}
                        value={props.recipe.ingredients}
                        required
                    />
                </FormGroup>
            
                <FormGroup>
                    <Label for="recipe-directions">Directions</Label>
                    <Input 
                        type="textarea" 
                        name="instructions" 
                        placeholder="..."
                        onChange={props.handleChange}
                        value={props.recipe.directions}
                        required
                    />
                </FormGroup>
                <Button type="submit">Add Recipe</Button>
           
            </Form>
        </div>
    )
    
}

export default AddRecipeForm;