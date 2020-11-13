import React, {useState} from 'react';
import {Badge, ListGroupItem} from "reactstrap";
import EditIngredient from "./EditIngredient";

const Ingredient = ({ingredient, onDelete, onEdit}) => {

    const [editMode, setEditMode] = useState(false);

    const saveAndHide = data => {
        setEditMode(false);
        onEdit(data);
    }

    return (
        <ListGroupItem className="ingredient-card">
            <p className="ingredient-name">{ingredient.name}</p>
            <Badge className="ingredient-info" pill>Tłuszcz: {ingredient.fat}g</Badge>
            <Badge className="ingredient-info" pill>Węglowodany: {ingredient.carbs}g</Badge>
            <Badge className="ingredient-info" pill>Białko: {ingredient.protein}g</Badge>
            <Badge className="ingredient-info" pill>Kcal: {ingredient.kcal}kcal</Badge>
            <div>
                <i className="fa fa-edit" onClick={() => setEditMode(prevState => !prevState)}></i>
                <i className="fa fa-trash" onClick={() => onDelete(ingredient.id)}></i>
            </div>
            {editMode && <EditIngredient ingredient={ingredient} onEditIngredient={saveAndHide}/>}
        </ListGroupItem>
    );
};

export default Ingredient;