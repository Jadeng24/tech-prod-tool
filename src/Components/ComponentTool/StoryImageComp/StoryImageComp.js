import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import brandHero from '../ComponentAssets/brand-hero.png';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import HighlightOff from '@material-ui/icons/HighlightOff';
class StoryImageComp extends Component {
    constructor() {
        super()

        this.state = {
            imageUrl: '',
            alignment: '',
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
            },`
        return (
            <div>
                <Nav />
                <div className="mainContent">
                    <h1>StoryImageComp</h1>
                    <h3>Select which components will be used:</h3>
                    {/* <img src={brandHero} alt="compImg" className='compImg' onClick={()=>this.onSelect()}/> */}
                    <p>Image Url</p>
                    <input type='text' value={this.state.imageUrl} className="compInput" onChange={(e) => this.handleChange('imageUrl', e.target.value)} />

                   <p>Alignment</p>
                    <input type='text' value={this.state.alignment} className="compInput" onChange={(e) => this.handleChange('alignment', e.target.value)} />
                    <p>Title</p>
                    <input type='text' value={this.state.title} className="compInput" onChange={(e) => this.handleChange('title', e.target.value)} />
                    <p>Text</p>
                    <input type='text' value={this.state.text} className="compInput" onChange={(e) => this.handleChange('text', e.target.value)} />


                      <br/><HighlightOff onClick={()=>this.clearFields()}/>
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