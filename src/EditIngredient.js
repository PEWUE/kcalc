import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {db} from "./firebase";
import {toast} from "react-toastify";

const EditIngredient = ({ingredient, onEditIngredient}) => {

    const [name, setName] = useState(ingredient.name);
    const [kcal, setKcal] = useState(ingredient.kcal);
    const [fat, setFat] = useState(ingredient.fat);
    const [carbs, setCarbs] = useState(ingredient.carbs);
    const [protein, setProtein] = useState(ingredient.protein);

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            id: ingredient.id,
            name,
            kcal,
            fat,
            carbs,
            protein
        }

        db.collection("ingredients")
            .doc(ingredient.id)
            .set(data)
            .then(() => {
                onEditIngredient(data);
                toast.warn("Zapisano zmiany", {autoClose: 2500});
            })
            .catch(error => {
                console.log("Error editing document", error);
            })
    }

    return (
        <section className="edit-ingredient-section">
            <Form onSubmit={handleSubmit}>
                <FormGroup className="row-label-input" row>
                    <Label className="edit-ingredient-label"
                           for="name"
                           xs={{size: 5, offset: 1}}>
                        Nazwa składnika:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="edit-ingredient-input"
                               value={name}
                               type="text"
                               name="name"
                               id="name"
                               onChange={e => setName(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="edit-ingredient-label"
                           for="kcal"
                           xs={{size: 5, offset: 1}}>
                        Wartość energetyczna:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="edit-ingredient-input"
                               value={kcal}
                               type="number"
                               name="kcal"
                               id="kcal"
                               onChange={e => setKcal(parseFloat(e.target.value))}/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="edit-ingredient-label"
                           for="fat"
                           xs={{size: 5, offset: 1}}>
                        Ilość tłuszczów:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="edit-ingredient-input"
                               value={fat}
                               type="number"
                               name="fat"
                               id="fat"
                               onChange={e => setFat(parseFloat(e.target.value))}/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="edit-ingredient-label"
                           for="carbs"
                           xs={{size: 5, offset: 1}}>
                        Ilość węglowodanów:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="edit-ingredient-input"
                               value={carbs}
                               type="number"
                               name="carbs"
                               id="carbs"
                               onChange={e => setCarbs(parseFloat(e.target.value))}/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="edit-ingredient-label"
                           for="protein"
                           xs={{size: 5, offset: 1}}>
                        Ilość białek:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="edit-ingredient-input"
                               value={protein}
                               type="number"
                               name="protein"
                               id="protein"
                               onChange={e => setProtein(parseFloat(e.target.value))}/>
                    </Col>
                </FormGroup>
                <Col xs={{offset: 7}}>
                    <Button className="save-button" color="warning">Zapisz</Button>
                </Col>
            </Form>
        </section>
    );
};

export default EditIngredient;