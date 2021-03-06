import React from 'react';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function AddRecipeForm(props) {


    const submitHandler = (e) =>{
        e.preventDefault();
        props.addRecipe()}

    return (
        <div className="recipesForm">

            <Form class= "recipesForm" onSubmit={submitHandler}>


                    <FormGroup class= "recipesForm">
                        <Label for="recipe-category">Recipe Category</Label>
                            <Input class= "recipesForm"
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
                        value={props.recipe.instructions}
                        required
                    />
                </FormGroup>
                <Button type="submit">Save Recipe</Button>
           
            </Form>
        </div>
    )
    
}

export default AddRecipeForm;