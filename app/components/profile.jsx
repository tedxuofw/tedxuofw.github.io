import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';
import {Modal} from './tedmodal.jsx';

export class Profile extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = { x: 0, y: 0, rect:null, mouseInside:false};
		this.mouseLeave = this.mouseLeave.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
	}
	
	_onMouseMove(e) {
		this.setState({ x: e.clientX, y: e.clientY, rect:ReactDOM.findDOMNode(this.obj).getBoundingClientRect()});
		
	}
	
	mouseLeave() {
		this.setState({x:this.state.x, y:this.state.y, rect:this.state.rect, mouseInside:false});
	}
	
	mouseEnter(e) {
		this.setState({x: e.clientX, y: e.clientY, rect:this.state.rect, mouseInside:true});
	}
	
	descriptionProfile() {
		var style = {height:this.props.large? '' : '22vw', overflow:'auto',};
		return (
			<div style={style} className={css(styles.descriptioncontainer)}>
				<span className={css(styles.teddescriptionbar)} />
				<p className={css(styles.description)}> {this.props.txt} </p>
			</div>
		);
	}
	
	blankProfile() {
		return (
			<div className={css(styles.blank)}>
				<div className={css(styles.tedprofile)}>
					<img src={this.props.img} className={css(styles.profilepicture)} />
				</div>
			</div>
		);
	}
	
	teamProfile() {
		const leftTolerance = 0;
		const middleTolerance = 100;
		const rightTolerance = 0;
		const defaultImg = "/app/resources/images/generic.jpg";
		
		var xPercent = 50;
		var img = "/app/resources/images/team/" + this.props.title.toLowerCase().replace(/\s+/g, '-');
		
		if (this.state.rect != null && this.state.mouseInside) {
			
			var rect = this.state.rect;
			
			const relXPos = this.state.x - rect.x;
		
			xPercent = Math.trunc(relXPos / rect.width * 100);
			
			if (xPercent < leftTolerance) {
				img += "-left";
			} else if (xPercent < leftTolerance + middleTolerance) {
				img += "-front";
			} else if (xPercent < leftTolerance + middleTolerance + rightTolerance){
				img += "-right";
			}
		}
		img += ".jpg";
		
<<<<<<< HEAD
		var textContainerStyle = {color:'#000000', opacity: this.state.mouseInside?'0':'1'};
=======
		var textContainerStyle = {color:'#000000'};
>>>>>>> 4f1dda82659ec831483702c7c5d71c5e73296fda
		var titleStyle = {fontSize: this.props.large ? '6vw' : '2vw'};
		var descStyle = {fontSize: this.props.large ? '4.5vw' : '1.5vw'};
		
		return (
			<div className={css(styles.tedprofile)} onMouseMove={this._onMouseMove.bind(this)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} ref={(input) => {this.obj = input}} >
				<div style={textContainerStyle}>
<<<<<<< HEAD
					<p style={titleStyle} className={css(styles.title)}> {this.props.title} </p>
=======
					<p style={titleStyle} className={css(styles.subtitleone)}> {this.props.title} </p>
>>>>>>> 4f1dda82659ec831483702c7c5d71c5e73296fda
					<p style={descStyle} className={css(styles.subtitletwo)}> {this.props.role} </p>
				</div>
				<img src={img} className={css(styles.profilepicture)} onError={(e)=>{e.target.src=defaultImg}}/>
			</div>
		);
	}
	
	speakerProfile() {
		const defaultImg = "/app/resources/images/generic.jpg";
		var titleStyle = {fontSize: '2vw'};
		var descStyle = {fontSize: '1.5vw'};
		return (
			<div className={css(styles.tedprofile)}>
				<p style={titleStyle} className={css(styles.title)}> {this.props.title} </p>
				<p style={descStyle} className={css(styles.subtitleone)}> {this.props.company} </p>
				<p style={descStyle} className={css(styles.subtitletwo)}> {this.props.role} </p>
				<img src={this.props.img} 
<<<<<<< HEAD
                       onClick={() => this.props.openModal(this.props.img, this.props.title, this.props.role)} 
					   onError={(e)=>{e.target.src=defaultImg}}
                       className={css(styles.profilepicture)} />
=======
                       onClick={() => this.props.openModal(this.props.img, this.props.title, this.props.role, this.props.bio)} 
					   onError={(e)=>{e.target.src=defaultImg}}
                       className={css(styles.profilepicture, styles.hover)} />
>>>>>>> 4f1dda82659ec831483702c7c5d71c5e73296fda
			</div>
		);
	}

	render() {
		
		if (!(typeof this.props.txt === 'undefined')) {
			return this.descriptionProfile();
		}
		
		if (this.props.title == "") {
			return this.blankProfile();
		}
		
		if (typeof this.props.company === 'undefined') {
			return this.teamProfile();
		} else {
			return this.speakerProfile();
		}
	}
}

const styles = StyleSheet.create({
	tedprofile: {
		width: '100%',
		minWidth: '70px',
		maxWidth: '600px',
		position: 'relative',
	},
    profilepicture: {
        display: 'block',
		width:'100%',
		maxHeight:'100%',
        overflowY: 'hidden',
		opacity:'1',
		
    },
    hover: {
       ':hover': {
			opacity: '0.9'
        } 
    },
	title: {
		position: 'absolute',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		margin:'10% 0px 0px 7%',
		color:'white',
		textShadow:'1px 1px #555',
	},
    subtitleone: {
		position: 'absolute',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
		margin:'75% 0px 0px 7%',
		color:'white',
		textShadow:'1px 1px #666',
    },
	subtitletwo: {
		position: 'absolute',
		fontWeight: 'normal',
        fontFamily: 'Avenir',
		margin:'85% 0px 0px 7%',
		color:'white',
		textShadow:'1px 1px #666',
	},
	
	blank: {
		opacity:'0',
	},
	
	descriptioncontainer: {
		width: '100%',
		minWidth: '70px',
		maxWidth: '600px',
		position: 'relative',
	},
	description: {
		fontWeight: 'normal',
        fontFamily: 'Avenir',
		height:'85%',
		fontSize:'14px',
		marginTop:'10%',
		marginBottom:'0px',
	},
	teddescriptionbar: {
        background: '#E62B25',
		position:'absolute',
        height: '5%',
        width: '100%',
        marginLeft: '0px',
        marginBottom: '0px',
		marginTop:'0px',
    },
});