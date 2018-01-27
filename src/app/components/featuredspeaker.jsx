import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class FeaturedSpeaker extends React.Component {
	render() {
		return (
			<div className={css(styles.sectioncontainer)}>
				<div className={css(styles.descriptioncontainer)}>
					<p className={css(styles.title)}> {this.props.name} </p>
					<p className={css(styles.description)}> {this.props.desc} </p>
				</div>
				<img src={this.props.img} className={css(styles.picture)} />
			</div>
		);
	}
}



const styles = StyleSheet.create({
	sectioncontainer: {
		position:'relative',
		width: '100%',
		height: 'auto',
		margin:'15px, 0px, 15px, 0px',
	},
    picture: {
		
		width:'320px',
		height:'auto',
		margin:'0px, 0px, 0px, 10%',
    },
	title: {
		textAlign:'center',
		fontSize: '45px',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		margin: '30px, 0px, 10px, 0px',
	},
    description: {
		textAlign:'center',
        fontSize: '30px',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
    },
	descriptioncontainer: {
		position:'absolute',
		backgroundColor:'#CBCACD',
		width: '60%',
		height: '150px',
		margin:'85px 0px 0px 40%',
	}
});