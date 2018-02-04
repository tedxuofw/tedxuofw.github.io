import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';
import {LinkSection} from '../components/linksection.jsx';
import {InputArea} from '../components/inputarea.jsx';

export class LinksSection extends React.Component {
    render(){
        return (
			<div className={css(styles.section)}>
				<LinkSection title="Get your tickets now!" color="#000000" bgColor="#FFFFFF">
					<Button name="Attend" linkTo="/attend"/>
				</LinkSection>
				
				<LinkSection title="Questions or comments?" color="#FFFFFF" bgColor="#000000">
					<Button name="Contact" linkTo="/contact"/>
				</LinkSection>
				
				<LinkSection title="Stay updated by signing up for our mailing list below!" color="#000000" bgColor="#FFFFFF">
					<InputArea ghostText="Enter your email here" buttonName="Submit" name="Sign up"/>
				</LinkSection>
			</div>
		);
    }
}

class Button extends React.Component {
	render() {
		return (
			<div className={css(styles.linkButton)}>
				<Link className={css(styles.link)} to={this.props.linkTo}>{this.props.name}</Link>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	section: {
        minHeight: '75vh',
        background: 'white',
		margin:'0px',
        paddingTop: '50px',
        paddingBottom: '50px'
    },
	linkButton: {
		width:'12vw',
		height:'5vw',
		marginLeft:'43vw',
		marginRight:'45vw',
		marginBottom:'10vh',
		marginTop:'2vh',
        lineHeight: '5vw',
        textAlign: 'center',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '2vw',
        fontFamily: 'AvenirBlack',
        transition: 'opacity 0.2s ease-out',
		textTransform:'uppercase',
        ":hover" : {
            opacity: ".8",
            transition: 'opacity 0.2s ease-out'
        },
	},
    link : {
        color: 'white',
        textDecoration: 'none',
    }
	
});