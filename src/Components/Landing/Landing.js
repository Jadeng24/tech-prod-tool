import React, { Component } from 'react';
import './Landing.css';
import Nav from '../Nav/Nav.js';
import MenuIcon from '@material-ui/icons/Menu';
class Landing extends Component {
    constructor() {
        super() 

        this.state = {

        }
    }
    render() {

        return (
            <div>
                <Nav />
                <div className="mainContent">
                    {/* <MenuIcon/> */}
                    <h1>i asd fas dfasdfas dfasd f<br/>am jaden and heres the tool</h1>hello there i am jaden
                </div>
            </div>
        )
    }
}
export default Landing;