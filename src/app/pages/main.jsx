import React from 'react';
import ReactDOM from 'react-dom';


import {Link} from 'react-router-dom';
import {TEDNavbar} from '../components/tednavbar.jsx';
import {LandingVideo} from '../components/tedvideo.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {LinksSection} from '../components/multilinksection.jsx';
import {Speakers} from '../components/featuredspeakersection.jsx';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showVideo: true };
        this.handleScroll = this.handleScroll.bind(this); // Also Important!
    }
    
    componentDidMount() {
        document.title = "TEDx - University of Washington";
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = window.pageYOffset;
        const video = document.getElementById('tedvideo');
        const h = video.offsetTop + video.offsetHeight;
        
        if(scrollTop > (h)) {
            this.setState({ showVideo: false });
            video.muted = true;
            video.display = 'none';
        }
    }
    
	render() {
		return (
            <div>
                <LandingVideo id="houdini" show={this.state.showVideo} />
                <TEDNavbar fixed={!this.state.showVideo} />
                <Section border='10%'>
                    <div style={{height: '90px'}}></div>
                    Section 1
                </Section>
                <Section border='20%' bgColor='black'>
					<Speakers />
                </Section>
                <LinksSection border='0%' />
                <TEDFooter />
            </div>
        );
	}
}