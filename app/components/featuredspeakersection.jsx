import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {FeaturedSpeaker} from '../components/featuredspeaker.jsx';
import {TedButton} from '../components/tedbutton.jsx';

export class Speakers extends React.Component {
	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.headercontainer)}>
					<p className={css(styles.header)}>Featuring</p>
				</div>
				<FeaturedSpeaker 
					name="Erin Jones"
					desc="Office of Public Education"
					img="/app/resources/images/generic.jpg"
					flipped={true}
				/>
				<FeaturedSpeaker 
					name="Jasmine Samy"
					desc="Council of Islamic American Relations"
					img="/app/resources/images/generic.jpg"
					flipped={false}
				/>
				<FeaturedSpeaker 
					name="Jeannie Berwick"
					desc="One Equal Heart Foundation"
					img="/app/resources/images/generic.jpg"
					flipped={true}
				/>
				<TedButton name="View All Speakers" linkTo="/speakers" />
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
        fontFamily: 'AvenirBlack',
		fontSize:'4vw',
		color:'white',
		border:'solid',
		display:'inline-block',
		paddingLeft:'2vw',
		paddingRight:'2vw',
	},
	headercontainer: {
		width:'100%',
		color:'white',
		textAlign:'center',
	},
	container: {
		position:'relative',
		textTransform: 'uppercase',
		width: '100%',
		height: 'auto',
		margin:'0px, 0px, 0px, 0px',
	},
});