import React, {Component} from "react";
import {Button, ControlLabel, FormGroup} from "react-bootstrap";
import "./Login.scss";
import {connect} from "react-redux";
import {loginAction} from "./actions";
import {ValidatorForm} from "react-form-validator-core";
import TextValidator from "../../components/TextValidator";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "test@gmail.com",
            password: "password"
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.loginAction(this.state, this.props.history)
    }

    render() {
        return (
            <div className={'container d-flex'}>


                <div className={'row'}>

                    <div className="Login" style={{maxWidth: 500, margin: 'auto', marginTop: 200}}>
                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>

                                <TextValidator
                                    onChange={this.handleChange}
                                    name="email"
                                    value={this.state.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <TextValidator

                                    onChange={this.handleChange}
                                    name="password"
                                    value={this.state.password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />

                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                            </Button>
                        </ValidatorForm>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({}) => {

    return {};
};

export default connect(mapStateToProps, {
    loginAction
})(Login);