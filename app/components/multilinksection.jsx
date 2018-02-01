import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {LinkSection} from '../components/linksection.jsx';

export class LinksSection extends React.Component {
    render(){
        return (
			<div className={css(styles.section)}>
				<LinkSection title="Get your tickets now!" color="#000000" bgColor="#FFFFFF">
					<button className={css(styles.linkButton)}>
						Attend
					</button>
				</LinkSection>
				<LinkSection title="Questions or comments?" color="#FFFFFF" bgColor="#000000">
					<button className={css(styles.linkButton)}>
						Contact
					</button>
				</LinkSection>
				<LinkSection title="Stay updated by signing up for our mailing list below!" color="#000000" bgColor="#FFFFFF">
					<button className={css(styles.linkButton)}>
						Sign up
					</button>
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
        paddingTop: '50px',
        paddingBottom: '50px'
    },
	linkButton: {
		width:'12vw',
		height:'6vw',
		marginLeft:'43vw',
		marginRight:'45vw',
		marginBottom:'10vh',
		marginTop:'2vh',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '2vw',
        fontFamily: 'AvenirBlack',
		textTransform:'uppercase',
	},
	
});