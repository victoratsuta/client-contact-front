import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Clients from './Clients';
import ClientEdit from './ClientEdit';
import ClientCreate from './ClientCreate';
import Login from "./Login";
import {connect} from "react-redux";


const PrivateRoute = ({ component: Component, auth, ...rest }) => {

    const isLoggedIn = auth.id

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    )
}


class App extends Component {

    constructor(props) {

        super(props)
    }

    render() {

        return (
            <Router>
                <Switch>

                    <Route  path="/login" component={Login}/>

                    <PrivateRoute auth={this.props.auth} path="/clients" component={Clients}/>
                    <PrivateRoute auth={this.props.auth} path="/client/create" component={ClientCreate}/>
                    <PrivateRoute auth={this.props.auth} path="/client/:id" component={ClientEdit}/>

                    <Redirect from='*' to='/login'/>

                </Switch>

            </Router>
        )
    }
}

const mapStateToProps = ({auth}) => {

    return {auth};
};

export default connect(mapStateToProps, {})(App);

