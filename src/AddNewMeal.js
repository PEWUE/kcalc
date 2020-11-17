import React, {useState} from 'react';
import {Col, Form, FormGroup, Input, Label} from "reactstrap";

const AddNewMeal = () => {

    const [name, setName] = useState("");

    return (
        <Form>
            <FormGroup className="row-label-input" row>
                <Label className="new-meal-label"
                       for="name"
                       xs={{size: 5, offset: 1}}>
                    Nazwa składnika:
                </Label>
                <Col xs={{size: 5, offset: 1}}>
                    <Input className="new-meal-input"
                           value={name}
                           type="text"
                           name="name"
                           id="name"
                           onChange={e => setName(e.target.value)}
                           placeholder="np. Sałatka z kurczakiem"/>
                </Col>
            </FormGroup>
            <FormGroup className="row-label-input" row>
                <Label className="new-meal-label"
                       xs={{size: 5, offset:1}}>
                    Ilość i składnik:
                </Label>
            </FormGroup>
        </Form>
    );
};

export default AddNewMeal;