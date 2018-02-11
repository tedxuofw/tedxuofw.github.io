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
				marginLeft:'32vw',
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
				marginLeft:'48vw',
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
		height: '32vw',
		marginBottom:'7vh',
		marginTop:'7vh',
	},
    picture: {
		position:'absolute',
		width:'32vw',
		height:'auto',
    },
	title: {
		fontSize: '5vw',
		color:'white',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		marginTop:'4vh',
	},
    description: {
        fontSize: '2vw',
		color:'white',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
    },
	descriptioncontainer: {
		position:'absolute',
		width: '60%',
		height: '150px',
		marginTop:'15vw'
	},
	boderline: {
		background: '#CBCACD',
		position:'absolute',
        height: '.5vw',
        width: '100%',
		marginTop:'31.5vw',
	},
});