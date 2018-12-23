import React, {Component} from 'react';
import "react-table/react-table.css";
import {ValidatorForm} from 'react-form-validator-core';
import TextValidator from "../TextValidator";
import {Button, Col, Grid, Row} from "react-bootstrap";

class ContactForm extends Component {

    render() {

        return (


            <Grid style={{marginBottom : 30}}>
                <Row className="show-grid">
                    <Col xs={6} md={6}>

                        {this.props.add
                            ? <p>Add Contact</p>
                            : <p>Update Contact</p>}

                        <ValidatorForm
                            ref="form"
                            onSubmit={this.props.handleSubmit}
                        >
                            <TextValidator
                                onChange={this.props.handleChange}
                                name="address"
                                value={this.props.address}
                                validators={['required', 'maxStringLength:255']}
                                errorMessages={['this field is required', 'Field is too long']}
                            />

                            <TextValidator
                                onChange={this.props.handleChange}
                                name="post_code"
                                value={this.props.post_code}
                                validators={['required', 'maxStringLength:255']}
                                errorMessages={['this field is required', 'Field is too long']}
                            />

                            <Button type="submit" bsStyle="success">Save</Button>

                            {
                                this.props.handleDelete
                                    ? <Button bsStyle="danger" onClick={this.props.handleDelete}>Delete</Button>
                                    : ''
                            }
                        </ValidatorForm>

                    </Col>
                </Row>
            </Grid>


        );
    }
}


export default ContactForm
