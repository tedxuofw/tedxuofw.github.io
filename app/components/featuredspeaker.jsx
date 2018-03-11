import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class FeaturedSpeaker extends React.Component {
	
	constructor(props) {
		super(props);
		var k = "";
		for (var i = 0; i < 10; i++) {
			var n = Math.floor(Math.random()*26);
			k += String.fromCharCode(97 + n);
		}
		this.state = {key: k}; //Key is set because scrolling anchors are global, so each FeaturedSpeaker needs a unique name.
	}
	
	render() {
		var descstyle;
		var picstyle;
		var textstyle;
		var direction1;
		var direction2;
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
			direction1='left';
			direction2='right';
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
			direction1='right';
			direction2='left';
		}
		
		return (
			<div className={css(styles.sectioncontainer)} id={"trigger-appear-"+this.state.key} >
				<div style={descstyle} className={css(styles.descriptioncontainer)} 
						data-aos={"fade-"+direction2} data-aos-duration="700" data-aos-anchor={"#trigger-appear-"+this.state.key} data-aos-anchor-placement="bottom-bottom">
						
					<p style={textstyle} className={css(styles.title)}> {this.props.name} </p>
					<p style={textstyle} className={css(styles.description)}> {this.props.desc} </p>
				</div>
				<span className={css(styles.boderline)}  
						data-aos={"flip-"+direction2} data-aos-duration="700" data-aos-anchor={"#trigger-appear-"+this.state.key} data-aos-anchor-placement="bottom-bottom" />
				<img src={this.props.img} style={picstyle} className={css(styles.picture)} 
						data-aos={"fade-"+direction1} data-aos-duration="700" data-aos-anchor={"#trigger-appear-"+this.state.key} data-aos-anchor-placement="bottom-bottom" />
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
		textTransform:'normal',
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