import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// main logo
import bcLogo from '../Assets/bcLogo.png';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            toggleMenu: false
        }

        this.toggleMenuFunc = this.toggleMenuFunc.bind(this);
    }
    toggleMenuFunc() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        });
    }
    render() {
        return (
            <div className='NavHolder'>
                <Link to={'/'}><img className="bcLogo" src={bcLogo} alt="BC"/></Link>
                <div className='Nav'>
                    
                    <Link to={'/'}><div className='imgLinkHolder'><p className='linkName'>Component builder</p></div></Link>
                    {/* <Link to={'/'}><div className='imgLinkHolder'><p className='linkName'>Banners</p></div></Link> */}

                    {/*===| DROP DOWN MENU |=================================*/}
                    {/* <div className={this.state.toggleMenu ? 'dropDownMenuHolder' : 'dropDownMenuHolder hideHolder'}>
                        <div className={this.state.toggleMenu ? 'dropDownMenu displayMenu' : 'dropDownMenu hideMenu'}>

                            <div className='menuSectionHolder'>

                                <div className={this.state.toggleMenu ? 'menuPageLinksHolder showLinks' : 'menuPageLinksHolder hideLinks'}>
                                    <Link to={'/landing'}><p className='menuPageLink'>landing</p></Link>
                                    <Link to={'/projects'}><p className='menuPageLink'>PROJECTS</p></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Nav;