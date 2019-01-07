import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Nav.js';
import GoBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import brandHeroImg from '../ComponentAssets/brand-hero.png';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

import HighlightOff from '@material-ui/icons/HighlightOff';

class BrandHeroComp extends Component {
    constructor() {
        super()

        this.state = {
            imageUrlMobile: '',
            imageUrl: '',
            logo: '',
            headline: '',
            ticketNumber: '',
            componentJSON:
                `{
    "type": "hero",
    "options": {
    "image": {
        "base": "",
        "small": "",
        "large": ""
    },
    "logo": "",
    "headline": ""
    }
}`
        }
    }
    clearFields() {
        this.setState({
            imageUrlMobile: '',
            imageUrl: '',
            logo: '',
            headline: '',
            ticketNumber: '',
            componentJSON:
                `{
    "type": "hero",
    "options": {
    "image": {
        "base": "",
        "small": "",
        "large": ""
    },
    "logo": "",
    "headline": ""
    }
}`
        });
    }

    setTicketNumber(val) {
        this.setState({
            ticketNumber: val,

        }, () => {
            console.log('this.state', this.state)
            this.setState({
                imageUrlMobile: `/promo_upload/bcs/2018/${this.state.ticketNumber}/hero-mobile.jpg`,
                imageUrl: `/promo_upload/bcs/2018/${this.state.ticketNumber}/hero.jpg`,
                logo: `/promo_upload/bcs/2018/${this.state.ticketNumber}/logo.jpg`,
                componentJSON:
                    `{
    "type": "hero",
    "options": {
    "image": {
        "base": "/promo_upload/bcs/2018/${this.state.ticketNumber}/hero-mobile.jpg",
        "small": "/promo_upload/bcs/2018/${this.state.ticketNumber}/hero.jpg",
        "large": "/promo_upload/bcs/2018/${this.state.ticketNumber}/hero.jpg"
    },
    "logo": "/promo_upload/bcs/2018/${this.state.ticketNumber}/logo.jpg",
    "headline": "${this.state.headline}"
    }
}`
            });
        });
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val,

        }, () => {
            this.setState({
                componentJSON:
                    `{
    "type": "hero",
    "options": {
    "image": {
        "base": "/promo_upload/bcs/2018/${this.state.ticketNumber}/hero-mobile.jpg",
        "small": "/promo_upload/bcs/2018/${this.state.ticketNumber}/hero.jpg",
        "large": "/promo_upload/bcs/2018/${this.state.ticketNumber}/hero.jpg"
    },
    "logo": "/promo_upload/bcs/2018/${this.state.ticketNumber}/logo.jpg",
    "headline": "${this.state.headline}"
    }
}`
            });
        });
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="mainContent">
                    <div className="titleHolder">
                        <Link to="/component-tool" className="goBackLink"><GoBackIcon className="icon" /></Link>
                        <h1>Brand Hero</h1>
                        <div className="resetBtn" onClick={() => this.clearFields()}>Reset</div>
                    </div>
                    <img src={brandHeroImg} alt="compImg" className="compExampleImg" />

                    <div className="fullSection">
                        <div className="section leftSection">
                            <label>Wrike Ticket Number</label>
                            <input type='text' placeholder="BC19_0307" value={this.state.ticketNumber} className="compInput" maxLength="12" onChange={(e) => this.setTicketNumber(e.target.value)} />
                            {this.state.previewMobile}
                            {this.state.previewDesktop}
                            <label>Headline</label>
                            <textarea type='text' placeholder="" value={this.state.headline} className="compInput" onChange={(e) => this.handleChange('headline', e.target.value)} />

                        </div>
                        <div className="section rightSection">
                            <img src={`http://content.backcountry.com${this.state.imageUrlMobile}`} alt="compImg" className='compImg' />
                            <img src={`http://content.backcountry.com${this.state.imageUrl}`} alt="compImg" className='compImg' />
                        </div>
                    </div>

                    <div className="editor"><AceEditor
                        mode="json"
                        theme="github"
                        fontSize={16}
                        showGutter={true}
                        highlightActiveLine={true}
                        onChange={this.onChange}
                        value={this.state.componentJSON}
                        name="UNIQUE_ID_OF_DIV"
                        width='100%'
                        minLines={15}
                        maxLines={50}
                        editorProps={{ $blockScrolling: true }}
                    />
                    </div>
                </div>
            </div>
        )
    }
}
export default BrandHeroComp;




