import React, { Component } from 'react';
import './ComponentTool.css';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';
class ComponentTool extends Component {
    constructor() {
        super();

        this.state = {
        }
        this.goToComponent = this.goToComponent.bind(this);
    }

    goToComponent(url) {
        window.location.assign(`/component/${url}`);
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="mainContent">
                    <h1>Component Tool</h1>
                    <h3>Select which components will be used:</h3>
                    <div className="componentSelector">
                        <Link to="/component/brand-hero"><div className="compLink">Brand Hero</div></Link>
                        <Link to="/component/story-image"><div className="compLink">Story Image</div></Link>
                        <Link to="/component/social"><div className="compLink">Social</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ComponentTool;


