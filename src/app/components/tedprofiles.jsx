import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';

export class Profiles extends React.Component {
	render() {
		
		let profs = this.props.profiles;
		
		if (typeof this.props.team !== 'undefined' && this.props.team != "") {
			var arr = [];
			for (var i = 0; i < profs.length; i++) {
				if (profs[i].team == this.props.team) {
					arr.push(profs[i]);
				}
			}
			profs = arr;
		}
		
		var rows = [];
		
		var tWidth = this.state.width < 768 ? 1 : 3;
		
		for (var i = 0; i < profs.length; i+=tWidth) {
			//Create the row data
			var row;
			if (i+tWidth < profs.length) {
				row = profs.slice(i, i+tWidth);
			} else {
				row = profs.slice(i);
				
				for (var j = 0; j < tWidth - (profs.length - i); j++) {
					row.push({name:"", role:"", team:"", img:"/app/resources/images/generic.jpg"});
				}
			}
			//Use row data to create row and push to table
			rows.push(	
				<tr className={css(styles.tr)} key={"tr" + i}>
					{row.map((profile, index) => (
							<td className={css(styles.td)} key={"td" + index}>
								<Profile 
									img={profile.img} 
									title={profile.name} 
									role={profile.role}
									txt={profile.txt}
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
	
	//Below here is just handling window size, even after resize
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
}

const styles = StyleSheet.create({
    table: {
		width: '100%',
	},
	tr: {
		padding: '1%',
		height:'1px',
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