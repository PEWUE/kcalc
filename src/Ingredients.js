import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import {Button, ListGroup} from "reactstrap";
import AddNewIngredient from "./AddNewIngredient";
import Ingredient from "./Ingredient";
import {toast} from "react-toastify";

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
        setAddButtonToggle(false);
    }

    const handleDelete = id => {
        db.collection("ingredients").doc(id)
            .delete()
            .then(() => {
                setIngredients(prevState => prevState.filter(ingredient => ingredient.id !== id));
                toast.error("Usunięto składnik", {autoClose: 2500});
            })
            .catch(error => {
                console.log("Error removing document:", error);
            })
    }

    const handleEdit = editedIngredient => {
        setIngredients(prevState => {
            return prevState.map(prevIngredient => {
                if(prevIngredient.id === editedIngredient.id) {
                    return editedIngredient;
                }
                return prevIngredient;
            })
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
            <ListGroup className="ingredients-list">
                {ingredients.map(ingredient => <Ingredient ingredient={ingredient} onDelete={handleDelete} onEdit={handleEdit} key={ingredient.id}/>)}
            </ListGroup>
        </div>
    );
};

export default Ingredients;