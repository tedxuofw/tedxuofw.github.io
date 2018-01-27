import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';

export class TEDNavbar extends React.Component {
    render(){
        var links = [ {text: 'About', className: 'tednavlink', link: '/about'},
                      {text: 'Speakers', className: 'tednavlink', link: '/speakers'},
                      {text: 'Sponsors', className: 'tednavlink', link: '/sponsors'},
                      {text: 'Contact', className: 'tednavlink', link: '/contacts'},
                      {text: 'Attend', className: 'tednavlink tednavgold', link: '/attend'}];
        
        
        
        return (
            <nav className={css(styles.tednav)} href='#'>
                    <Link to='/'><img className={css(styles.tednavlogo)} src="./app/resources/images/logo-red.png" /></Link>
                <span className={css(styles.tednavcontainer)}>
                    { 
                        links.map((item, index) => { 
                            if(index == this.props.index) {item.className += ' active'}
                            return <span className={item.className} key={item.text}><Link className={css(styles.tednavlinka)} to={item.link}>{item.text}</Link></span> 
                        }) 
                    }
                </span>
            </nav>
        );
    }
}

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    tednav: {
        backgroundColor: '#F5F5F5',
        height: '85px',
        lineHeight: '85px'
    },
    tednavlogo: {
        height: '70px',
        float: 'left',
        marginTop: '8px', 
        marginBottom: '7px',
        marginLeft: '12%' 
    }, 
    tednavcontainer: {
        marginLeft: '20%',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    tednavlinka: {
        color: 'black',
        margin: '0 10px 0 10px',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: '16px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease-out',
        textDecoration: 'none',
        ':hover' : {
            color: '#ab1814',
            transition: 'color 0.2s ease-out'
        }
    }
});