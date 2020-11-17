import React, {useEffect, useState} from 'react';
import {Button, ListGroup} from "reactstrap";
import Meal from "./Meal";
import {db} from "./firebase";
import AddNewMeal from "./AddNewMeal";

const Meals = () => {

    const [addButtonToggle, setAddButtonToggle] = useState(false);
    const [meals, setMeals] = useState(false);

    useEffect(() => {
        db.collection("meals")
            .get()
            .then(snapshot => {
                const tmp = [];
                snapshot.forEach(doc => {
                    const meal = doc.data();
                    const ingredients = [];

                    meal.ingredients.forEach(({qty, ref}) => {
                        console.log("ing")
                        ref.get().then( d => {

                            ingredients.push({
                                ...d.data(),
                                qty
                            });
                            console.log(ingredients);
                        })
                    });
                    console.log("meal")

                    tmp.push({
                        ...meal,
                        id: doc.id,
                        ingredients
                    });
                })
                setMeals(tmp);
            });
    }, []);


    if (!meals) {
        return <h1>...</h1>
    }


    return (
        <div className="meals">
            <div className="meals-header">
                <h1>Posiłki:</h1>
                {!addButtonToggle ?
                    <Button className="toggle-button" onClick={() => setAddButtonToggle(prevState => !prevState)} color="success"><i className="fa fa-plus"></i> Dodaj składnik</Button>
                    :
                    <Button className="toggle-button" onClick={() => setAddButtonToggle(prevState => !prevState)} color="danger"><i className="fa fa-angle-double-up"></i>Zwiń formularz</Button>}
            </div>
            {addButtonToggle && <AddNewMeal/>}
            <ListGroup className="meals-list">
                {meals.map(meal => <Meal meal={meal} key={meal.id}/>)}
            </ListGroup>
        </div>
    );
};

export default Meals;