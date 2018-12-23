import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logoutAction} from "../routes/Login/actions";
import {Nav, Navbar, NavItem} from "react-bootstrap";

class Menu extends Component {

    constructor(props) {

        super(props)

        this.logout = this.logout.bind(this)
    }

    logout(){

        console.log(this.props.history)

        this.props.logoutAction(this.props.history)

    }

    render() {

        return (
           <div className={'row'}>

               <Navbar>
                   <Navbar.Header>
                       <Navbar.Brand>
                           Clients
                       </Navbar.Brand>
                   </Navbar.Header>
                   <Nav>
                       <NavItem eventKey={1} href="#">
                           <Link to={`/clients`}>Clients List</Link>
                       </NavItem>
                       <NavItem eventKey={2} href="#">
                           <Link to={`/client/create`}>Create Client</Link>
                       </NavItem>
                       <NavItem eventKey={2} href="#">
                           <button onClick={this.logout}>Log out</button>
                       </NavItem>

                   </Nav>
               </Navbar>

           </div>
        );
    }


}


function mapStateToProps({clients}) {
    return {
        clients
    };
}

export default withRouter(connect(mapStateToProps, {
    logoutAction
})(Menu));