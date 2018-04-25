import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {SliderSection} from '../components/slidersection.jsx';
import {Descriptions} from '../components/meettheteam.jsx';
import {ConferenceSupport} from '../components/conferencesupport.jsx';

export class About extends React.Component {
    componentDidMount() {
        document.title = "About - TEDxUofW";
        window.scrollTo(0, 0);
    }
    
	render() {
		return (
            <div>
                <TEDNavbar index='0' />
                <SliderSection />
                <Section title="Meet the Team">
                    <Descriptions />
                </Section>
				<Section title='Our Conference Support' fontSize='4vw'>
					<ConferenceSupport />
				</Section>
                <TEDFooter />
            </div>
        );
	}
}