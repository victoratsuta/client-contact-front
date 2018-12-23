import {connect} from 'react-redux';
import React, {Component} from 'react';
import "react-table/react-table.css";
import {createClientAction, getClientAction, sendClientAction} from "./actions";
import Menu from "../../components/Menu";
import {withRouter} from 'react-router-dom'
import ClientForm from "../../components/ClientForm";

class ClientCreate extends Component {

    constructor(props) {

        super(props)

        this.state = {
            client: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit() {

        this.props.createClientAction(this.state.client, this.props.history)

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

            </div>

        );
    }
}

function mapStateToProps({}) {
    return {

    };
}

export default withRouter(connect(mapStateToProps, {
    createClientAction
})(ClientCreate));
