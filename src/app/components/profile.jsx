import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Profile extends React.Component {
	render() {
		let company = this.props.company;
		
		if (typeof company === 'undefined') {
			return (
				<div className={css(styles.tedprofile)}>
					<p className={css(styles.title)}> {this.props.title} </p>
					<p className={css(styles.subtitleone)}> {this.props.role} </p>
					<img src={this.props.img} className={css(styles.profilepicture)} />
				</div>
			);
		} else {
			return (
				<div className={css(styles.tedprofile)}>
					<p className={css(styles.title)}> {this.props.title} </p>
					<p className={css(styles.subtitleone)}> {this.props.company} </p>
					<p className={css(styles.subtitletwo)}> {this.props.role} </p>
					<img src={this.props.img} className={css(styles.profilepicture)} />
				</div>
			);
		}
	}
}

const styles = StyleSheet.create({
	tedprofile: {
		width: '100%',
		minWidth: '250px',
		maxWidth: '600px',
		position: 'relative',
	},
    profilepicture: {
        display: 'block',
		width:'100%',
		height:'auto',
		opacity:'1',
		':hover': {
			opacity:'.7',
		},
    },
	title: {
		position: 'absolute',
		fontSize: '160%',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		margin:'10% 0px 0px 7%',
	},
    subtitleone: {
		position: 'absolute',
        fontSize: '120%',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
		margin:'75% 0px 0px 7%',
    },
	subtitletwo: {
		position: 'absolute',
        fontSize: '120%',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
		margin:'85% 0px 0px 7%',
	}
});