import {connect} from 'react-redux';
import React, {Component} from 'react';
import "react-table/react-table.css";
import {ValidatorForm} from 'react-form-validator-core';
import TextValidator from "../TextValidator";
import {deleteContactAction, sendContactAction} from "./actions";
import ContactForm from "./ContactForm";

class Contact extends Component {

    constructor(props) {

        super(props)

        this.state = {
            contact: props.contact
        }


        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    componentWillReceiveProps(nextProp) {

        this.setState({
            contact: nextProp.contact
        })

    }

    handleDelete(){

        this.props.deleteContactAction(this.state.contact.id)

    }

    handleSubmit() {

        this.props.sendContactAction(this.state.contact)

    }

    handleChange(e) {

        this.setState(
            {
                contact:
                    {
                        ...this.state.contact,
                        [e.target.name]: e.target.value
                    }
            }
        )

    }

    render() {

        const contact = this.state.contact

        console.log('contact', contact)

        return (

            <ContactForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
                address={contact.address}
                post_code={contact.post_code}
            />

        );
    }
}

function mapStateToProps({}) {
    return {
    };
}

export default connect(mapStateToProps, {
    sendContactAction,
    deleteContactAction
})(Contact);
