import React from 'react';
import ReactDOM from 'react-dom';


import {Link} from 'react-router-dom';
import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {LinksSection} from '../components/multilinksection.jsx';
import {FeaturedSpeaker} from '../components/featuredspeaker.jsx';

export class Home extends React.Component {
	render() {
		return (
            <div>
                <TEDNavbar />
                <Section border='0%'>
                    Section 1
                </Section>
                <Section border='0%'>
					Section 2
                </Section>
                <LinksSection border='0%' />
                <TEDFooter />
            </div>
        );
	}
}