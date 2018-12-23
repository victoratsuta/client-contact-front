import React, {Component} from 'react';
import "react-table/react-table.css";
import {ValidatorForm} from 'react-form-validator-core';
import TextValidator from "./TextValidator";
import {Button, Col, Grid, Row} from "react-bootstrap";


class ClientForm extends Component {

    render() {

        return (


            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={6} >

                        <ValidatorForm
                            ref="form"
                            onSubmit={this.props.handleSubmit}
                        >
                            <TextValidator
                                onChange={this.props.handleChange}
                                name="email"
                                value={this.props.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />

                            <TextValidator
                                onChange={this.props.handleChange}
                                name="first_name"
                                value={this.props.first_name}
                                validators={['required', 'maxStringLength:255']}
                                errorMessages={['this field is required', 'Field is too long']}
                            />

                            <TextValidator
                                onChange={this.props.handleChange}
                                name="last_name"
                                value={this.props.last_name}
                                validators={['required', 'maxStringLength:255']}
                                errorMessages={['this field is required', 'Field is too long']}
                            />

                            <Button type="submit" bsStyle="success">Submit</Button>

                        </ValidatorForm>

                    </Col>
                </Row>
            </Grid>



        );
    }
}


export default ClientForm
