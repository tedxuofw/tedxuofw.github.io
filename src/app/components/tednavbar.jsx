import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

export class TEDNavbar extends React.Component {
    render(){
        var links = [ {text: 'About', className: 'tednavlink', link: '/about'},
                      {text: 'Speakers', className: 'tednavlink', link: '/speakers'},
                      {text: 'Sponsors', className: 'tednavlink', link: '/sponsors'},
                      {text: 'Contact', className: 'tednavlink', link: '/contact'},
                      {text: 'Attend', className: 'tednavlink tednavgold', link: '/attend'}]
        
        return (
            <nav id='tednav' href='#'>
                <span className='tednavcontainer'>
                    <img id='tednavlogo' src="/app/resources/images/logo-red.png" />
                </span>
                <span className='tednavcontainer'>
                    { 
                        links.map((item, index) => { 
                            if(index == this.props.index) {item.className += ' active'}
                            return <span className={item.className} key={item.text}><Link to={item.link}>{item.text}</Link></span> 
                        }) 
                    }
                </span>
            </nav>
        );
    }
}

/*
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
    tednavgold: {
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: 'gold'
    }
});

*/