import React, {useEffect} from 'react';
import {Badge, ListGroupItem} from "reactstrap";

const Meal = ({meal}) => {
    useEffect(() => {
        console.log(meal);
    })

    return (
        <ListGroupItem className="meal-card">
            <p className="meal-name">{meal.name}</p>
            <Badge className="meal-info" pill>Tłuszcz: {(meal.ingredients.reduce((prev, curr) => prev += curr.fat * curr.qty / 100 ,0)).toFixed(1)}g</Badge>
            <Badge className="meal-info" pill>Węglowodany: {(meal.ingredients.reduce((prev, curr) => prev += curr.carbs * curr.qty / 100 ,0)).toFixed(1)}g</Badge>
            <Badge className="meal-info" pill>Białko: {(meal.ingredients.reduce((prev, curr) => prev += curr.protein * curr.qty / 100 ,0)).toFixed(1)}g</Badge>
            <Badge className="meal-info" pill>Kcal: {meal.ingredients.reduce((prev, curr) => prev += curr.kcal * curr.qty / 100 ,0)}kcal</Badge>
            <div>
                <i className="fa fa-edit"></i>
                <i className="fa fa-trash"></i>
            </div>
            {/*{editMode && <EditIngredient ingredient={ingredient} onEditIngredient={saveAndHide}/>}*/}
        </ListGroupItem>
    );
};

export default Meal;