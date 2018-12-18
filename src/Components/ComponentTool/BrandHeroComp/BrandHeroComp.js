import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import brandHero from '../ComponentAssets/brand-hero.png';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import HighlightOff from '@material-ui/icons/HighlightOff';
class BrandHeroComp extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    clearFields() {
        this.setState({
            title: '',
            subTitle: '',
            body: '',
        });
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        }, () => console.log(`state: ${this.state}`))
    }

    render() {

        return (
            <div>
                <Nav />
                <div className="mainContent">
                    <h1>BrandHeroComp</h1>
                    <h3>Select which components will be used:</h3>
                    <img src={brandHero} alt="compImg" className='compImg' onClick={()=>this.onSelect()}/>

                    <p>Header</p>
                    <input type='text' value={this.state.title} className="compInput" onChange={(e) => this.handleChange('title', e.target.value)} />
                    <p>Image Url</p>
                    <input type='text' value={this.state.subTitle} className="compInput" onChange={(e) => this.handleChange('imageUrl', e.target.value)} />

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
                        value={brandHero}
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