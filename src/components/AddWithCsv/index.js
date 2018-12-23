import {connect} from 'react-redux';
import React, {Component} from 'react';
import "react-table/react-table.css";
import CSVReader from 'react-csv-reader'
import {updateWithCsvClientAction} from "./actions";
import {Col, ControlLabel, FormGroup, Grid, Row} from "react-bootstrap";

class AddWithCsv extends Component {

    constructor(props) {

        super(props)

        this.handleSuccess = this.handleSuccess.bind(this)

    }

    handleError() {

        alert('Error')

    }

    handleSuccess(result, filename) {

        filename = filename.split('.')
        if (filename[filename.length - 1] !== 'csv') {
            alert('Not a scv file')
        } else {

            this.props.updateWithCsvClientAction(result)

        }
    }


    render() {

        return (

            <Grid>
                <Row className="show-grid">
                    <Col xs={4} md={4}>

                        <FormGroup>
                            <ControlLabel>Upload clients with csv</ControlLabel>

                            <CSVReader
                                cssClass="csv-reader-input"
                                onFileLoaded={this.handleSuccess}
                                onError={this.handleError}
                                inputId="ObiWan"
                                inputStyle={{color: 'red'}}
                            />


                        </FormGroup>
                    </Col>
                </Row>
            </Grid>

        );
    }
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps, {
    updateWithCsvClientAction
})(AddWithCsv);
