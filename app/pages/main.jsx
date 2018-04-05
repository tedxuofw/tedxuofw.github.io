import React from 'react';
import ReactDOM from 'react-dom';


import {Link} from 'react-router-dom';
import {TEDNavbar} from '../components/tednavbar.jsx';
import {Flair} from '../components/flair.jsx';
import {TedButton} from '../components/tedbutton.jsx';
import {LandingVideo} from '../components/tedvideo.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {LinksSection} from '../components/linkssection.jsx';
import {CountdownSection} from '../components/countdownsection.jsx';
import {Speakers} from '../components/featuredspeakersection.jsx';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hideVideo: false, fixedBar: false };
        this.handleScroll = this.handleScroll.bind(this); // Also Important!
        this.closeVideo = this.closeVideo.bind(this);
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
        if(!this.hideVideo) {
            let scrollTop = window.pageYOffset;
            let video = document.getElementById('tedvideo');
            if(video) {
                
                let h = video.offsetTop + video.offsetHeight;
                console.log(h);
                if(scrollTop > (h)) {
                    this.setState({ hideVideo: true, fixedBar: true });
                    AOS.refresh();
                }
            }
        }
    }
    
    closeVideo() {
        this.setState({ hideVideo: true });
        AOS.refresh();
        setTimeout(function(){
            this.setState({ fixedBar: true });
            AOS.refresh();
        }.bind(this), 1000);
    }
    
	render() {
		return (
            <div>
                <LandingVideo id="houdini" hide={this.state.hideVideo} close={this.closeVideo}/>
                <TEDNavbar fixed={this.state.fixedBar} />
                <Section border='10%'>
                    <div id="topSection" style={{height: '90px'}}></div>
                    <center>
                        <div style={{fontSize: '32px', maxWidth: '475px'}}>
                            <b>At <span style={{color: "#E62B25"}}>TEDxUofW 2018</span>, we are building a community inspired to shape the future.</b>
                        </div>
                        <div style={{background: '#E62B25', height: '10px', width: '10vw', marginTop: '4vh', marginBottom: '4vw'}}></div>
                        <div style={{fontSize: '24px'}}><b>MAY 5, 2018</b> KANE HALL ROOM 130</div>
                        <br/><br/>
                        <TedButton name="Learn More" linkTo="/about/" />
                    </center>
                </Section>
                <Flair right/>
				<CountdownSection />
                <Section border='20%' bgColor='black'>
					<Speakers />
                </Section>
                <Flair left/>
                <LinksSection border='0%' />
                <Flair right />
                <TEDFooter />
            </div>
        );
	}
}