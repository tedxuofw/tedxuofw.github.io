import React from 'react';
import ReactDOM from 'react-dom';


import {Link} from 'react-router-dom';
import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';

export class Home extends React.Component {
    
    componentDidMount() {
        document.title = "TEDx - University of Washington";
    }
    
	render() {
		return (
            <div>
                <TEDNavbar />
                <Section>
                    This is a test
                </Section>
                <Section>
                    Section 2
                </Section>
                <Section>
                    Section 3
                </Section>
                <TEDFooter />
            </div>
        );
	}
}