import React, { Component } from 'react';
import './Landing.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
// import MenuIcon from '@material-ui/icons/Menu';
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
                    <h1>Dashboard</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Landing;