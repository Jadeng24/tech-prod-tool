import React, { Component } from 'react';
import './ComponentTool.css';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';
import brandHeroImg from './ComponentAssets/brand-hero.png';
import StoryImg from './ComponentAssets/story-image.png';
import ShopTheLookImg from './ComponentAssets/shop-the-look.png';
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
                        <Link to="/component/brand-hero">
                            <span className="compLink">Brand Hero</span>
                            <img src={brandHeroImg} alt="compImg" className="linkImg" />
                        </Link>

                        <Link to="/component/story-image">
                            <span className="compLink">Story Image</span>
                            <img src={StoryImg} alt="compImg" className="linkImg" />
                        </Link>

                        <Link to="/component/shop-the-look">
                            <span className="compLink">Shop The Look</span>
                            <img src={ShopTheLookImg} alt="compImg" className="linkImg" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ComponentTool;


