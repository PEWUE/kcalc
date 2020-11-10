import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import {Badge, ListGroup, ListGroupItem} from "reactstrap";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState(false);

    useEffect(() => {
        db.collection("ingredients")
            .get()
            .then(snapshot => {
                const tmp = [];
                snapshot.forEach(doc => {
                    tmp.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });
                setIngredients(tmp);
            });
    }, []);

    if (!ingredients) {
        return <h1>...</h1>
    }

    return (
        <div className="ingredients">
            <div className="ingredients-header">
                <h1>Składniki:</h1>
                <button className="add-ingredient">+ Dodaj składnik</button>
            </div>
            <ListGroup className="ingredient-list">
                {ingredients.map(el => {
                    return (
                        <ListGroupItem className="ingredient-name" key={el.id}>{el.name}
                            <Badge className="ingredient-info" pill>Tłuszcz: {el.fat}g</Badge>
                            <Badge className="ingredient-info" pill>Węglowodany: {el.carbs}g</Badge>
                            <Badge className="ingredient-info" pill>Białko: {el.protein}g</Badge>
                            <Badge className="ingredient-info" pill>Kcal: {el.kcal}kcal</Badge>
                            <div>
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash"></i>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    );
};

export default Ingredients;