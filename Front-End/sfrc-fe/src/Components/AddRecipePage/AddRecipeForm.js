import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function AddRecipeForm(props) {

    // event handler that pushes the user to the recipes page upon recipe submission
    const handleClick = e => {
        e.preventDefault();
        props.addRecipe();
        window.location = "#/recipes"
    }

    const dropDownClick = e => {
        props.toggle();
    }

    return (
        <div className="RecipeForm">

            <Form>
                
                <FormGroup>
                    <Label for="exampleSelect">Recipe Category</Label>
                        <Input type="select" name="select" id="categorySelect">
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Dessert</option>
                            
                        </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="recipe-title">Recipe Title</Label>
                    <Input 
                        type="text" 
                        name="title" 
                        placeholder="The Best Lasagna Ever" 
                        onChange={props.handleChange}
                        value={props.recipe.title}
                        />
                </FormGroup>
            
                <FormGroup>
                    <Label for="recipe-source">Source</Label>
                    <Input 
                        type="text" 
                        name="country" 
                        placeholder="Grandma Sue" 
                        onChange={props.handleChange}
                        value={props.recipe.source}
                        />
                </FormGroup>

                <FormGroup>
                    <Label for="recipe-ingredients">Ingredients</Label>
                    <Input 
                        type="textarea" 
                        name="text" 
                        placeholder="..."
                        onChange={props.handleChange}
                        value={props.recipe.ingredients}
                    />
                </FormGroup>
            
                <FormGroup>
                    <Label for="recipe-directions">Directions</Label>
                    <Input 
                        type="textarea" 
                        name="text" 
                        placeholder="..."
                        onChange={props.handleChange}
                        value={props.recipe.directions}
                    />
                </FormGroup>
                <Button onClick={handleClick}>Add Recipe</Button>
           
            </Form>
        </div>
    )
    
}

export default AddRecipeForm;