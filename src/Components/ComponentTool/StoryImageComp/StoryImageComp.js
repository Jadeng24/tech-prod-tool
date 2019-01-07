import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Nav.js';
import GoBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import './StoryImageComp.css';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import HighlightOff from '@material-ui/icons/HighlightOff';
import ComponentImg from '../ComponentAssets/story-image.png';
class StoryImageComp extends Component {
    constructor() {
        super()

        this.state = {
            imageUrl: '/promo_upload.backcountry.com/bc/2018/',
            alignment: 'left',
            title: '',
            text: '',
        }
    }
    clearFields() {
        this.setState({
            imageUrl: '',
            alignment: '',
            title: '',
            text: '',
        });
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        }, () => console.log(`state: ${this.state}`))
    }

    render() {
        const storyImage = `{
            "type": "story-image",
            "options": {
                "breakpointImages": {
                "base": "${this.state.imageUrl}",
                "small": "${this.state.imageUrl}",
                "large": "${this.state.imageUrl}"
                },
                "position": "${this.state.alignment}",
                "title": "${this.state.title}",
                "text": "${this.state.text}"
            }
}`
        return (
            <div>
                <Nav />
                <div className="mainContent">
                    <div className="titleHolder">
                        <Link to="/component-tool" className="goBackLink"><GoBackIcon className="icon" /></Link>
                        <h1>Story Image</h1>
                        <div className="resetBtn" onClick={() => this.clearFields()}>Reset</div>
                    </div>

                    <img src={ComponentImg} alt="compImg" className="compExampleImg" />

                    <h3>Select which components will be used:</h3>
                    <p>Image Url</p>
                    <input type='text' value={this.state.imageUrl} className="compInput" onChange={(e) => this.handleChange('imageUrl', e.target.value)} />

                    <p>Alignment</p>
                    <div className="alignmentHolder">
                        <div className={this.state.alignment === 'left' ? 'selected alignItem' : 'notSelected alignItem'} onClick={() => this.setState({ alignment: 'left' })}>Left</div>
                        <div className={this.state.alignment === 'center' ? 'selected alignItem' : 'notSelected alignItem'} onClick={() => this.setState({ alignment: 'center' })}>Center</div>
                        <div className={this.state.alignment === 'right' ? 'selected alignItem' : 'notSelected alignItem'} onClick={() => this.setState({ alignment: 'right' })}>Right</div>
                    </div>
                    <p>Title</p>
                    <input type='text' value={this.state.title} className="compInput" onChange={(e) => this.handleChange('title', e.target.value)} />
                    <p>Text</p>
                    <input type='text' value={this.state.text} className="compInput" onChange={(e) => this.handleChange('text', e.target.value)} />


                    <br /><HighlightOff onClick={() => this.clearFields()} />
                    <div className="editor"><AceEditor
                        mode="json"
                        theme="github"
                        fontSize={16}
                        showGutter={true}
                        highlightActiveLine={true}
                        onChange={this.onChange}
                        value={storyImage}
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
export default StoryImageComp;