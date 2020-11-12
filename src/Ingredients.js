import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import {Button, Badge, ListGroup, ListGroupItem, Alert} from "reactstrap";
import AddNewIngredient from "./AddNewIngredient";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState(false);
    const [addButtonToggle, setAddButtonToggle] = useState(false);

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

    const handleAdd = newIngredient => {
        setIngredients(prevState => [...prevState, newIngredient]);
    }

    const handleDelete = id => {
        db.collection("ingredients").doc(id)
            .delete()
            .then(() => {
                setIngredients(prevState => prevState.filter(ingredient => ingredient.id !== id));
            })
            .catch(error => {
                console.log("Error removing document:", error);
            })
    }


    if (!ingredients) {
        return <h1>...</h1>
    }

    return (
        <div className="ingredients">
            <div className="ingredients-header">
                <h1>Składniki:</h1>
                {!addButtonToggle ?
                    <Button className="toggle-button" onClick={() => setAddButtonToggle(prevState => !prevState)} color="success"><i className="fa fa-plus"></i> Dodaj składnik</Button>
                    :
                    <Button className="toggle-button" onClick={() => setAddButtonToggle(prevState => !prevState)} color="danger"><i className="fa fa-angle-double-up"></i>Zwiń formularz</Button>}
            </div>
            {addButtonToggle && <AddNewIngredient onAddIngredient={handleAdd}/>}
            <ListGroup className="ingredient-list">
                {ingredients.map(el => {
                    return (
                        <ListGroupItem className="ingredient-card" key={el.id}>
                            <p className="ingredient-name">{el.name}</p>
                            <Badge className="ingredient-info" pill>Tłuszcz: {el.fat}g</Badge>
                            <Badge className="ingredient-info" pill>Węglowodany: {el.carbs}g</Badge>
                            <Badge className="ingredient-info" pill>Białko: {el.protein}g</Badge>
                            <Badge className="ingredient-info" pill>Kcal: {el.kcal}kcal</Badge>
                            <div>
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash" onClick={() => handleDelete(el.id)}></i>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    );
};

export default Ingredients;