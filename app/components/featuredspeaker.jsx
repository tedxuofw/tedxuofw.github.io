import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class FeaturedSpeaker extends React.Component {
	render() {
		var descstyle;
		var picstyle;
		var textstyle;
		if (this.props.flipped) {
			descstyle = {
				marginLeft:'35%',
			};
			picstyle = {
				marginLeft:'0vw',
			};
			textstyle = {
				textAlign:'right',
			};
		} else {
			descstyle = {
				marginLeft:'0vw',
			};
			picstyle = {
				marginLeft:'65%',
			};
			textstyle = {
				textAlign:'left',
			};
		}
		
		return (
			<div className={css(styles.sectioncontainer)}>
				<div style={descstyle} className={css(styles.descriptioncontainer)}>
					<p style={textstyle} className={css(styles.title)}> {this.props.name} </p>
					<p style={textstyle} className={css(styles.description)}> {this.props.desc} </p>
				</div>
				<span className={css(styles.boderline)} />
				<img src={this.props.img} style={picstyle} className={css(styles.picture)} />
			</div>
		);
	}
}



const styles = StyleSheet.create({
	sectioncontainer: {
		width: '100%',
		height: '21vw',
		marginBottom:'7vh',
		marginTop:'7vh',
	},
    picture: {
		position:'absolute',
		width:'35%',
		height:'auto',
    },
	title: {
		fontSize: '3vw',
		color:'white',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		marginTop:'0vw',
		marginBottom:'0vh',
	},
    description: {
        fontSize: '1.7vw',
		color:'white',
		fontWeight: 'normal',
        fontFamily: 'Avenir',
		marginTop:'1vw',
		marginBottom:'0vh',
    },
	descriptioncontainer: {
		position:'absolute',
		width: '65%',
		height: '150px',
		marginTop:'15%',
	},
	boderline: {
		background: '#CBCACD',
		position:'absolute',
        height: '0.5%',
        width: '100%',
		marginTop:'34.5%',
	},
});