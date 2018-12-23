import {connect} from 'react-redux';
import React, {Component} from 'react';
import "react-table/react-table.css";
import {getClientAction, sendClientAction} from "./actions";
import {ValidatorForm} from 'react-form-validator-core';
import TextValidator from "../../components/TextValidator";
import Contacts from "../../components/Contact/Contacts";
import Menu from "../../components/Menu";
import { withRouter } from 'react-router-dom'
import ClientForm from "../../components/ClientForm";

class ClientList extends Component {

    constructor(props) {

        super(props)

        this.state = {
            client: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentWillMount() {

        this.props.getClientAction(this.props.match.params.id)

    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            client: nextProps.client
        })

    }

    handleSubmit() {

        this.props.sendClientAction(this.state.client)

    }

    handleChange(e) {

        this.setState(
            {
                client:
                    {
                        ...this.state.client,
                        [e.target.name]: e.target.value
                    }
            }
        )

    }

    render() {

        const client = this.state.client

        return (

            <div>

                <Menu history={this.props.history}/>


                <ClientForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    email={client.email}
                    first_name={client.first_name}
                    last_name={client.last_name}
                />

                <Contacts client={client}></Contacts>

            </div>

        );
    }
}

function mapStateToProps({client}) {
    return {
        client
    };
}

export default withRouter(connect(mapStateToProps, {
    getClientAction,
    sendClientAction
})(ClientList));
