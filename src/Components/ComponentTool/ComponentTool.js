import React, { Component } from 'react';
import './ComponentTool.css';
import Nav from '../Nav/Nav.js';
// import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import HighlightOff from '@material-ui/icons/HighlightOff';
import brandHero from './ComponentAssets/brand-hero.png'
import subCatMenu from './ComponentAssets/sub-cat-menu.png'
class ComponentTool extends Component {
    constructor() {
        super()

        this.state = {
            components: '',
            title: '',
            subTitle:'',
            body:'',
            imageUrl: '/promo_upload/bcs/brand/',

            selectedComponents: `{
                "type": "body",
                "options": {
                    "title": "53 YEARS OF INNOVATION.",
                    "subTitle": "Since 1965, Smith has pioneered advanced products to fuel fun beyond walls.",
                    "body": "Everything Smith does, every pillar in their character delivers on one simple idea: they exist to fuel fun beyond walls through the advanced products that are optimized, styled right, and made better. Whether you’re chasing the next storm cycle or ripping corduroy on a bluebird day—pursue your thrill."
                }
                }`,
        }
        this.onChange = this.onChange.bind(this);
    }
    onSelect(id) {
        if (id && id.length) {

        }
    }
    clearFields() {
        this.setState({
            title:'',
            subTitle:'',
            body:'',
            imageUrl: '',
        });
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        }, () => console.log('state', this.state))
    }
    onChange(val) {
        console.log('change', val);
    }
    render() {
        const header = `{
            "type": "body",
            "options": {
                "title": "${this.state.title}",
                "subTitle": "${this.state.subTitle}",
                "body": "${this.state.body}"
            }
            }`
            const callout = `{
                "type": "story-image",
                "options": {
                    "breakpointImages": {
                    "base": "${this.state.imageUrl}",
                    "small": "${this.state.imageUrl}",
                    "large": "${this.state.imageUrl}"
                    },
                    "position": "${this.state.alignment}",
                    "title": "${this.state.title}",
                    "text": "${this.state.body}"
                }
                },`
        return (
            <div>
                <Nav />
                <div className="mainContent">

                    <h1>Component Tool</h1>
                    <h3>Select which components will be used:</h3>
                    <div className="componentSelector">
                        <img src={brandHero} alt="compImg" className='compImg' onClick={()=>this.onSelect()}/>
                        <img src={subCatMenu} alt="compImg" className='compImg' />
                    </div>
                   

                    <p>Header</p>
                    <input type='text' value={this.state.title} className="compInput" onChange={(e) => this.handleChange('title', e.target.value)} />
                    <p>Image Url</p>
                    <input type='text' value={this.state.imageUrl} className="compInput"onChange={(e) => this.handleChange('imageUrl', e.target.value)} />
                    
                    <p>Body</p>
                    <input type='text' value={this.state.body} className="compInput" onChange={(e) => this.handleChange('body', e.target.value)} />

                     <br/><HighlightOff onClick={()=>this.clearFields()}/>
                    <div className="editor"><AceEditor
                        mode="json"
                        theme="github"
                        fontSize={16}
                        showGutter={true}
                        highlightActiveLine={true}
                        onChange={this.onChange}
                        value={callout}
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
export default ComponentTool;


