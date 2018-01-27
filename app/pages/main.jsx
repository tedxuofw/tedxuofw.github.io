import React from 'react';
import ReactDOM from 'react-dom';


import {Link} from 'react-router-dom';
import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {FeaturedSpeaker} from '../components/featuredspeaker.jsx';

export class Home extends React.Component {
    
    componentDidMount() {
        document.title = "TEDx - University of Washington";
    }
    
	render() {
		return (
            <div>
                <TEDNavbar />
                <Section border='0%'>
                    Section 1
                </Section>
                <Section border='0%'>
                    <FeaturedSpeaker img="/app/resources/images/generic.jpg" name="Erin Jones" desc="Office of Public Instruction"/>
                </Section>
                <Section border='0%'>
                    Section 3
                </Section>
                <TEDFooter />
            </div>
        );
	}
}