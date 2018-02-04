import React from 'react';
import ReactDOM from 'react-dom';

import {Section} from './section.jsx';
import {StyleSheet, css} from 'aphrodite/no-important';

export class SliderSection extends Section {
    
    componentDidMount() {
        this.open('link0', 'tab0');
    }
    
    open(tab, content) {
        var tabcontent = ["tab0", "tab1", "tab2"];
        for (let i = 0; i < tabcontent.length; i++) {
            document.getElementById(tabcontent[i]).style.display = "none";
        }
        var tablinks = document.getElementById("infolinks").childNodes;
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" infoactive", "");
            tablinks[i].style.color = "#C5C5C5";
        }
        document.getElementById(content).style.display = "block";
        document.getElementById(tab).style.color = "#E62B25";
        document.getElementById(tab).className += " infoactive";
    }
    
    render(){
        return ( 
            <div className={css(styles.tedsection)} >
                <div className={css(styles.tedsectiontitle)}>
                    About
                    <span id="infolinks" className={css(styles.infotabgroup)}>
                        <span> </span>
                        <span className={css(styles.infotab)} id="link0" onClick={() => this.open('link0', 'tab0')}>TED</span>
                        <span className={css(styles.infotab)} id="link1" onClick={() => this.open('link1', 'tab1')}>x</span>
                        <span className={css(styles.infotab)} id="link2" onClick={() => this.open('link2', 'tab2')}>UofW</span>
                    </span>
                </div>
                
                <div id="tab0" className={css(styles.infotabcontent)}>
                    <p className={css(styles.infocontenttext)}>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.<br/><br/> The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.<br/><br/> Follow TED on Twitter at http://twitter.com/TEDTalks, or on Facebook at http://www.facebook.com/TED.</p>
                    <span className={css(styles.infocontentbutton)} onClick={() => this.open('link1', 'tab1')}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                    <div className={css(styles.infocontentclear)}></div>
                </div>
                <div id="tab1" className={css(styles.infotabcontent)}>
                    <p className={css(styles.infocontenttext)}>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p> 
                    <span className={css(styles.infocontentbutton)} onClick={() => this.open('link2', 'tab2')}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                    <div className={css(styles.infocontentclear)}></div>
                </div>
                <div id="tab2" className={css(styles.infotabcontent)}>
                    <p className={css(styles.infocontenttext)}>TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.</p>
                    <span className={css(styles.infocontentbutton)} onClick={() => this.open('link0', 'tab0')}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                    <div className={css(styles.infocontentclear)}></div>
                </div>
            </div>
        );
    }
}



const styles = StyleSheet.create({
    tedsection: {
        background: 'white',
        position: 'relative',

        paddingTop: '50px',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingBottom: '20px'
    },
    tedsectiontitle: {
        fontSize: '65px',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase'
    },
    infocontenttext: {
        display: 'table-cell',
        paddingRight: '90px'
    },
    infotab: {
        color: '#C5C5C5',
        textTransform: 'none',
        transition: 'color 0.2s ease-out',
		cursor: 'pointer'
    },
    infotabcontent: {
        display: 'table'
    },
    infocontentbutton: {
        display: 'table-cell',
        background: '#E62B25',
        color: 'white',
        width: 'px', 
        textAlign: 'center',
        verticalAlign: 'middle',
        transition: 'opacity 0.2s ease-out',
		cursor: 'pointer',
        ':hover': {
            opacity: '0.8',
            transition: 'opacity 0.2s ease-out'
        }
    },
    infocontentclear: {
        clear: 'both'
    }
});