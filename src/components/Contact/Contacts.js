import {connect} from 'react-redux';
import React, {Component} from 'react';
import "react-table/react-table.css";
import {ValidatorForm} from 'react-form-validator-core';
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import {createContactAction} from "./actions";
import {Grid, Row} from "react-bootstrap";

class ClientList extends Component {

    constructor(props) {

        super(props)

        this.state = {
            client: {},
            newContact : {
                address : '',
                post_code : '',
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            client: nextProps.client,
            newContact : {...this.state.newContact, client_id : nextProps.client.id}
        })

    }

    handleSubmit() {

        this.props.createContactAction(this.state.newContact)

    }

    handleChange(e) {

        this.setState(
            {
                newContact:
                    {
                        ...this.state.newContact,
                        [e.target.name]: e.target.value
                    }
            }
        )

    }

    render() {

        const client = this.state.client

        return (

            <div>

                {client.contacts
                    ?
                    client.contacts.map((contact, key) => {

                        // console.log(contact)

                        return  <Contact key={key} contact={contact}></Contact>

                    })
                    : ''}

                    <div>

                        <ContactForm
                            add={true}
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            address={this.state.newContact.address}
                            post_code={this.state.newContact.post_code}
                        />

                    </div>

            </div>

        );
    }
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps, {
    createContactAction
})(ClientList);
