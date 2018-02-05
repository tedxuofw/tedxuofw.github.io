import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class LinkSection extends React.Component {
    render(){
		var style = {
			backgroundColor:this.props.bgColor,
			color:this.props.color,
		}
        return (
			<div style={style} className={css(styles.section)}>
				<div className={css(styles.textcontainer)}>
					<p style={style} className={css(styles.title)}> {this.props.title} </p>
				</div>
				{this.props.children}
			</div>
		);
    }
}



const styles = StyleSheet.create({
	section: {
        minHeight: '50vh',
		margin:'0px',
        paddingTop: '50px',
        paddingBottom: '50px'
    },
    title: {
        fontSize: '3vw',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
		marginTop:'8vw',
		textAlign: 'center',
    },
	textcontainer: {
		marginLeft:'30vw',
		width:'40vw',
	},
});