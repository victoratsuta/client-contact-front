import {connect} from 'react-redux';
import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {deleteClientAction, getClientsAction} from "./actions";
import {Link} from "react-router-dom";
import Menu from "../../components/Menu";
import AddWithCsv from "../../components/AddWithCsv";
import {Col, Grid, Row} from "react-bootstrap";

class ClientList extends Component {

    constructor(props) {

        super(props)

        this.deleteClient = this.deleteClient.bind(this)
    }

    deleteClient(id) {

        this.props.deleteClientAction(id, this.props.clients.current_page)

    }

    render() {

        const columns = [
            {
                Header: 'Email',
                accessor: 'email' // String-based value accessors!
            },
            {
                Header: 'First Name',
                accessor: 'first_name' // String-based value accessors!
            },
            {
                Header: 'Last Name',
                accessor: 'last_name' // String-based value accessors!
            },
            {
                Header: 'Actions',
                columns: [{
                    Header: 'Edit',
                    accessor: 'id',
                    Cell: row => (
                        <div>
                            <Link to={`/client/${row.value}`}>
                                Edit
                            </Link>
                        </div>
                    )
                },
                    {
                        Header: 'Delete',
                        accessor: 'id',
                        Cell: row => (
                            <div>
                                <button onClick={() => {
                                    this.deleteClient(row.value)
                                }}>Delete
                                </button>
                            </div>
                        )
                    }
                ]
            },
        ]

        return (

            <div>

                <Menu history={this.props.history}/>

                <AddWithCsv/>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>

                            <ReactTable
                                columns={columns}
                                data={this.props.clients.data} // should default to []
                                pages={this.props.clients.last_page} // should default to -1 (which means we don't know how many pages we have)
                                loading={this.props.clients.loading}
                                manual // informs React Table that you'll be handling sorting and pagination server-side
                                onFetchData={(state) => {

                                    this.props.getClientsAction(state.page)

                                }}
                            />

                        </Col>
                    </Row>
                </Grid>


            </div>

        );
    }
}

function mapStateToProps({clients}) {
    return {
        clients
    };
}

export default connect(mapStateToProps, {
    getClientsAction,
    deleteClientAction
})(ClientList);
