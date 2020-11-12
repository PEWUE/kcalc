import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {db} from "./firebase";

const AddNewIngredient = ({onAddIngredient}) => {

    const [name, setName] = useState("");
    const [kcal, setKcal] = useState("");
    const [fat, setFat] = useState("");
    const [carbs, setCarbs] = useState("");
    const [protein, setProtein] = useState("");


    const handleSubmit = e => {
        e.preventDefault();

        db.collection("ingredients")
            .add({
                name,
                kcal,
                fat,
                carbs,
                protein
            })
            .then(data => {
                onAddIngredient({
                    name,
                    kcal,
                    fat,
                    carbs,
                    protein,
                    id: data.id
                })
            })
            .catch(error => {
                console.log("Error adding document: ", error);
            })
    }


    return (
        <section className="new-ingredient-section">
            <Form onSubmit={handleSubmit}>
                <FormGroup className="row-label-input" row>
                    <Label className="new-ingredient-label"
                           for="name"
                           xs={{size: 5, offset: 1}}>
                        Nazwa składnika:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="new-ingredient-input"
                               value={name}
                               type="text"
                               name="name"
                               id="name"
                               onChange={e => setName(e.target.value)}
                               placeholder="np. Ser gouda"/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="new-ingredient-label"
                           for="kcal"
                           xs={{size: 5, offset: 1}}>
                        Wartość energetyczna:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="new-ingredient-input"
                               value={kcal}
                               type="number"
                               name="kcal"
                               id="kcal"
                               onChange={e => setKcal(e.target.value)}
                               placeholder="np. 250 [kcal]"/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="new-ingredient-label"
                           for="fat"
                           xs={{size: 5, offset: 1}}>
                        Ilość tłuszczów:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="new-ingredient-input"
                               value={fat}
                               type="number"
                               name="fat"
                               id="fat"
                               onChange={e => setFat(e.target.value)}
                               placeholder="np. 16.3 [g]"/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="new-ingredient-label"
                           for="carbs"
                           xs={{size: 5, offset: 1}}>
                        Ilość węglowodanów:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="new-ingredient-input"
                               value={carbs}
                               type="number"
                               name="carbs"
                               id="carbs"
                               onChange={e => setCarbs(e.target.value)}
                               placeholder="np. 2 [g]"/>
                    </Col>
                </FormGroup>
                <FormGroup className="row-label-input" row>
                    <Label className="new-ingredient-label"
                           for="protein"
                           xs={{size: 5, offset: 1}}>
                        Ilość białek:
                    </Label>
                    <Col xs={{size: 5, offset: 1}}>
                        <Input className="new-ingredient-input"
                               value={protein}
                               type="number"
                               name="protein"
                               id="protein"
                               onChange={e => setProtein(e.target.value)}
                               placeholder="np. 5.5 [g]"/>
                    </Col>
                </FormGroup>
                <Col xs={{offset: 7}}>
                    <Button className="add-button" color="success">Dodaj składnik</Button>
                </Col>
            </Form>
        </section>
    );
};

export default AddNewIngredient;