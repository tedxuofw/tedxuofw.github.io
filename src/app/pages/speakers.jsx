import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';

export class Speakers extends React.Component {
	render() {
                
		return (
            <div>
                <TEDNavbar index='1' />
                <Section title='Speakers'>
                    <List />
                </Section>
                <TEDFooter />
            </div>
        );
	}
}

class List extends React.Component {
	render() {
		return (
		<table className={css(styles.table)}>
			<tbody>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Erin Jones" 
							role="Superintendent"
							company="Office of Public Instruction"
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Erin Jones" 
							role="Superintendent"
							company="Office of Public Instruction"
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Name" 
							role="Role" 
							company="Company"
						/>
					</td>
				</tr>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Name" 
							role="Role" 
							company="Company"
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg"  
							title="Name" 
							role="Role" 
							company="Company"
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Name" 
							role="Role" 
							company="Company"
						/>
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

const styles = StyleSheet.create({
    table: {
		width: '100%',
	},
	tr: {
		padding: '1%',
	},
	td: {
		padding: '1%',
	},
});