import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Link} from 'react-router-dom';

export class TedButton extends React.Component {
	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.linkButton)}>
					<Link className={css(styles.link)} to={this.props.linkTo}>{this.props.name}</Link>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		textAlign:'center',
	},
	linkButton : {
		display:'inline-block',
		minWidth:'10vw',
		height:'5vw',
		paddingRight:'1vw',
		paddingLeft:'1vw',
		marginRight:'0px',
		marginLeft:'0px',
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
    },
});