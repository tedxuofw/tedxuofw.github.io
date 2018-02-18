import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite/no-important';

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
        border: 'none',
        userSelect: 'none',
        cursor: 'pointer',
		display:'inline-block',
		minWidth:'10vw',
		height:'5vw',
		paddingRight:'1.5vw',
		paddingLeft:'1.5vw',
		marginRight:'0px',
		marginLeft:'0px',
		marginBottom:'10vh',
		marginTop:'3vw',
        lineHeight: '5vw',
        textAlign: 'center',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '14px',
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