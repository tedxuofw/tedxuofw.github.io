import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from './components/tednavbar.jsx';
import {TEDFooter} from './components/tedfooter.jsx';
import {Section} from './components/section.jsx';

export class Page extends React.Component {
	render() {
		return (
            <div>
                <TEDNavbar />
                <Section>
                    Section 1
                </Section>
                <Section>
                    Section 2
                </Section>
                <Section>
                    Section 3
                </Section>
                <Section>
                    Section 4
                </Section>
                <TEDFooter />
            </div>
        );
	}
}