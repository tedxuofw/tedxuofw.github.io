import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';

export class Profiles extends React.Component {
	render() {
		return (
			<table className={css(styles.table)}>
				<tbody>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Jenny Liang" 
							role="Web Developer" 
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Jenny Liang" 
							role="Web Developer"
							company="Test Agency"
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Name" 
							role="Role" 
						/>
					</td>
				</tr>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Name" 
							role="Role" 
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg"  
							title="Name" 
							role="Role" 
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/generic.jpg" 
							title="Name" 
							role="Role" 
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