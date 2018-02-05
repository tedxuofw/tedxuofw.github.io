import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';

export class Profiles extends React.Component {
	render() {
		
		let profs = this.props.profiles;
		
		if (typeof this.props.team !== 'undefined') {
			var arr = [];
			for (var i = 0; i < profs.length; i++) {
				if (profs[i].team == this.props.team) {
					arr.push(profs[i]);
				}
			}
			profs = arr;
		}		
		
		var rows = [];
		
		for (var i = 0; i < profs.length; i+=3) {
			var row;
			if (i+3 < profs.length) {
				row = profs.slice(i, i+3);
			} else {
				row = profs.slice(i);
				for (var j = 0; j < 3 - (profs.length - i); j++) {
					row.push({name:"", role:"", team:"", img:"/app/resources/images/generic.jpg"});
				}
			}
			rows.push(	
				<tr className={css(styles.tr)} key={"tr" + i}>
					{row.map((profile, index) => (
							<td className={css(styles.td)} key={"td" + index}>
								<Profile 
									img={profile.img} 
									title={profile.name} 
									role={profile.role}
								/>
							</td>
						))}
				</tr>);
		}
		
		return (
			<table frame="void" className={css(styles.table)}>
				<tbody>
					{rows}
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
		':first-child': {
			paddingLeft: '0px',
		},
		':last-child': {
			paddingRight: '0px',
		},
	},
});