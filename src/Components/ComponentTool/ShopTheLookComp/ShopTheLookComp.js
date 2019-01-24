import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Nav.js';
import GoBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import './ShopTheLookComp.css';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import ComponentImg from '../ComponentAssets/shop-the-look.png';
class ShopTheLookComp extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            direction: 'left',
            intro: '',
            ctaText: '',
            ctaUrl: '',
            quote: '',
            modalImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLModal.jpg',
            modalCta: '',
            lookImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLLook.jpg',
            lookCta: 'Shop this Look',
            lookRoomId: '',
            promoImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLPromo.jpg',
            promoUrl: '',
            socialImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLSocial.jpg',
            socialTitle: '',
            socialText: '',
            socialIconImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/icon.png',
            socialIconUrl: '',
            componentJSON:
                `[
    {
        "type": "client-group",
        "options": {
            "components": [
                {
                    "type": "stl",
                    "options": {
                        "title": "",
                        "direction": "left",
                        "intro": "",
                        "quote": "",
                        "cta": {
                            "text": "",
                            "url": ""
                        },
                        "modal": {
                            "image": "",
                            "cta": ""
                        },
                        "look": {
                            "image": "",
                            "cta": "",
                            "roomId": ""
                        },
                        "promo": {
                            "image": "",
                            "url": ""
                        },
                        "social": {
                            "image": "",
                            "title": "",
                            "text": "",
                            "iconImage": "",
                            "iconUrl": ""
                        }
                    }
                }
            ]
        }
    }
]`
        }
    }
    clearFields() {
        this.setState({
            title: '',
            direction: 'left',
            intro: '',
            ctaText: '',
            ctaUrl: '',
            quote: '',
            modalImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLModal.jpg',
            modalCta: '',
            lookImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLLook.jpg',
            lookCta: 'Shop this Look',
            lookRoomId: '',
            promoImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLPromo.jpg',
            promoUrl: '',
            socialImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/STLSocial.jpg',
            socialTitle: '',
            socialText: '',
            socialIconImage: '//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/icon.png',
            socialIconUrl: '',
            componentJSON:
                `[
    {
        "type": "client-group",
        "options": {
            "components": [
                {
                    "type": "stl",
                    "options": {
                        "title": "",
                        "direction": "left",
                        "intro": "",
                        "quote": "",
                        "cta": {
                            "text": "",
                            "url": ""
                        },
                        "modal": {
                            "image": "//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/stlModal.jpg",
                            "cta": ""
                        },
                        "look": {
                            "image": "//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/stlLook.jpg",
                            "cta": "",
                            "roomId": ""
                        },
                        "promo": {
                            "image": "//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/stlPromo.jpg",
                            "url": ""
                        },
                        "social": {
                            "image": "//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/stlSocial.jpg",
                            "title": "",
                            "text": "",
                            "iconImage": "//content.backcountry.com/promo_upload/bcs/2019/BC19_0001/icon.png",
                            "iconUrl": ""
                        }
                    }
                }
            ]
        }
    }
]`
        });
    }



    handleChange(prop, val) {
        this.setState({
            [prop]: val,

        }, () => {
            this.setState({
                componentJSON:
                    `[
    {
        "type": "client-group",
        "options": {
            "components": [
                {
                    "type": "stl",
                    "options": {
                        "title": "${this.state.title}",
                        "direction": "${this.state.direction}",
                        "intro": "${this.state.intro}",
                        "cta": {
                            "text": "${this.state.ctaText}",
                            "url": "${this.state.ctaUrl}"
                        },
                        "quote": "${this.state.quote}",
                        "modal": {
                            "image": "${this.state.modalImage}",
                            "cta": "${this.state.modalCta}"
                        },
                        "look": {
                            "image": "${this.state.lookImage}",
                            "cta": "${this.state.lookCta}",
                            "roomId": "${this.state.lookRoomId}"
                        },
                        "promo": {
                            "image": "${this.state.promoImage}",
                            "url": "${this.state.promoUrl}"
                        },
                        "social": {
                            "image": "${this.state.socialImage}",
                            "title": "${this.state.socialTitle}",
                            "text": "${this.state.socialText}",
                            "iconImage": "${this.state.socialIconImage}",
                            "iconUrl": "${this.state.socialIconUrl}"
                        }
                    }
                }
            ]
        }
    }
]`
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
                        <h1>Shop The Look</h1>
                        <div className="resetBtn" onClick={() => this.clearFields()}>Reset</div>
                    </div>

                    <div className="fullSection">
                        <div className="section oneThird">
                            <label>Title</label>
                            <input type='text' placeholder="Title" value={this.state.title} className="compInput" onChange={(e) => this.handleChange('title', e.target.value)} />

                            <p>Direction</p>
                            <div className="alignmentHolder">
                                <div className={this.state.direction === 'left' ? 'selected alignItem' : 'notSelected alignItem'} onClick={() => this.handleChange('direction', 'left')}>Left</div>
                                <div className={this.state.direction === 'right' ? 'selected alignItem' : 'notSelected alignItem'} onClick={() => this.handleChange('direction', 'right')}>Right</div>
                            </div>

                            <label>Intro</label>
                            <textarea type='text' placeholder="Intro" value={this.state.intro} className="compInput" onChange={(e) => this.handleChange('intro', e.target.value)} />

                            <label>CTA</label>
                            <input type='text' placeholder="Text" value={this.state.ctaText} className="compInput" onChange={(e) => this.handleChange('ctaText', e.target.value)} />
                            <input type='text' placeholder="Url" value={this.state.ctaUrl} className="compInput" onChange={(e) => this.handleChange('ctaUrl', e.target.value)} />

                            <label>Quote</label>
                            <textarea type='text' placeholder="Quote" value={this.state.quote} className="compInput" onChange={(e) => this.handleChange('quote', e.target.value)} />

                            <label>Modal</label>
                            <input type='text' placeholder="Image Url" value={this.state.modalImage} className="compInput" onChange={(e) => this.handleChange('modalImage', e.target.value)} />
                            <input type='text' placeholder="Cta Text" value={this.state.modalCta} className="compInput" onChange={(e) => this.handleChange('modalCta', e.target.value)} />

                            <label>Look</label>
                            <input type='text' placeholder="Image Url" value={this.state.lookImage} className="compInput" onChange={(e) => this.handleChange('lookImage', e.target.value)} />
                            <input type='text' placeholder="Cta Text" value={this.state.lookCta} className="compInput" onChange={(e) => this.handleChange('lookCta', e.target.value)} />
                            <input type='text' placeholder="Room Id" value={this.state.lookRoomId} className="compInput" onChange={(e) => this.handleChange('lookRoomId', e.target.value)} />

                            <label>Promo</label>
                            <input type='text' placeholder="Image Url" value={this.state.promoImage} className="compInput" onChange={(e) => this.handleChange('promoImage', e.target.value)} />
                            <input type='text' placeholder="Url" value={this.state.promoUrl} className="compInput" onChange={(e) => this.handleChange('promoUrl', e.target.value)} />

                            <label>Social</label>
                            <input type='text' placeholder="Image Url" value={this.state.socialImage} className="compInput" onChange={(e) => this.handleChange('socialImage', e.target.value)} />
                            <input type='text' placeholder="Title" value={this.state.socialTitle} className="compInput" onChange={(e) => this.handleChange('socialTitle', e.target.value)} />
                            <input type='text' placeholder="Text" value={this.state.socialText} className="compInput" onChange={(e) => this.handleChange('socialText', e.target.value)} />
                            <input type='text' placeholder="Icon Image" value={this.state.socialIconImage} className="compInput" onChange={(e) => this.handleChange('socialIconImage', e.target.value)} />
                            <input type='text' placeholder="Icon Url" value={this.state.socialIconUrl} className="compInput" onChange={(e) => this.handleChange('socialIconUrl', e.target.value)} />
                        </div>

                        <div className="section oneThird">
                            <div className="STLPreview">
                                <div className={this.state.direction === 'left' ? 'left STLColumn' : 'right STLColumn'}>
                                    <h1>{this.state.title}</h1>
                                    <p>{this.state.intro}</p>
                                    <button className={this.state.ctaText ? 'cta' : 'hidden'}>{this.state.ctaText}</button><br />
                                    <img src={'https:' + this.state.lookImage}className="STLlookImg" />
                                    <button className={this.state.direction === 'left' ? 'left cta-full' : 'right cta-full'}>{this.state.lookCta}</button>
                                    <h1 className="STLquote">{this.state.quote}</h1>
                                </div>
                                <div className="STLColumn">
                                    <img src={'https:' + this.state.promoImage}className="STLpromoImg" />
                                    <span className="horizontal social">
                                        <img src={'https:' + this.state.socialImage}  className="STLpromoImg" />
                                        <span className="vertical socialText">
                                            <img src={'https:' + this.state.socialIconImage}  className={this.state.socialIconImage ? 'STLIconImg' : 'hidden'} />
                                            <h3>{this.state.socialTitle}</h3>
                                            <p>{this.state.socialText}</p>
                                        </span>
                                    </span>


                                </div>

                            </div>
                        </div>
                        <div className="section oneThird">
                            <img src={ComponentImg} alt="compImg" className="compExampleImg" />

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
export default ShopTheLookComp;



// `[
//     {"type": "client-group",
//         "options": {
//             "components": [

//     {
//   "type": "stl",
//   "options": {
//     "title": "Ready for the Slopes",
//     "direction": "left",
//     "intro": "Skis and snowboards are precious cargo. Scroll down and get your gear to the slopes safely with our latest winter travel essentials.",
//     "quote": "",
//     "modal": {
//         "image": "//content.backcountry.com/promo_upload/bcs/2018/BC18_0368/STL/Ski_STL.jpg",
//         "cta": "Ready for the Slopes"
//     },
//     "look": {
//         "image": "//content.backcountry.com/promo_upload/bcs/2018/BC18_0368/STL/Ski_STL.jpg",
//         "cta": "Shop this Look",
//         "roomId": "1078607"
//     },
//     "promo": {
//         "image": "//content.backcountry.com/promo_upload/bcs/2018/BC18_0368/STL/Ski_Large.jpg",
//         "url": ""
//     },
//     "social": {
//         "image": "//content.backcountry.com/promo_upload/bcs/2018/BC18_0368/STL/Ski_Detail.jpg",
//         "title": "",
//         "text": "",
//         "iconImage": "",
//         "iconUrl": ""
//     }
//   }
// }
//                 ] 
//             }
//     }
// ]`