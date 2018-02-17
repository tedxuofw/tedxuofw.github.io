import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';
import {InputArea} from '../components/inputarea.jsx';
import {TedButton} from '../components/tedbutton.jsx';

export class LinksSection extends React.Component {
    render(){
        return (
			<div className={css(styles.section)}>
				<LinkSection title="Get your tickets now!" color="#000000" bgColor="#FFFFFF">
					<TedButton name="Attend" linkTo="/attend"/>
				</LinkSection>
				
				<LinkSection title="Questions or comments?" color="#FFFFFF" bgColor="#000000">
					<TedButton name="Contact" linkTo="/contact"/>
				</LinkSection>
				
				<LinkSection title="Stay updated by signing up for our mailing list below!" color="#000000" bgColor="#FFFFFF">
					<InputArea ghostText="Enter your email here" buttonName="Sign up" name="Sign up"/>
				</LinkSection>
			</div>
		);
    }
}

const styles = StyleSheet.create({
	section: {
        minHeight: '75vh',
        background: 'white',
		margin:'0px',
        paddingTop: '0px',
        paddingBottom: '0px'
    },
});



class LinkSection extends React.Component {
    render(){
		var style = {
			backgroundColor:this.props.bgColor,
			color:this.props.color,
		}
        return (
			<div style={style} className={css(linkStyles.section)}>
				<div className={css(linkStyles.textcontainer)}>
					<p style={style} className={css(linkStyles.title)}> {this.props.title} </p>
				</div>
				{this.props.children}
			</div>
		);
    }
}



const linkStyles = StyleSheet.create({
	section: {
        minHeight: '5vh',
		height:'35vw',
		margin:'0px',
        paddingTop: '11.5vw',
        paddingBottom: '15vw'
    },
    title: {
        fontSize: '3vw',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
		marginTop:'0vw',
		textAlign: 'center',
		minHeight: '0vh',
    },
	textcontainer: {
		marginLeft:'30vw',
		width:'40vw',
	},
});