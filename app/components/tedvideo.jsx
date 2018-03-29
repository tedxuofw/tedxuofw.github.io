
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Section} from './section.jsx';
import {StyleSheet, css} from 'aphrodite';

export class LandingVideo extends React.Component {
    render() {
        const componentClasses = [styles.houdini];
        const hide = this.props.hide;
        
        if(hide) { componentClasses.push(styles.hide); }
        
        return (
            <div id="houdini-wrapper" className={css(componentClasses)}>
                <div className={css(styles.videoContent)}>
                    <video className={css(styles.video)} id='tedvideo' poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/sp-poster.jpg" autoPlay onEnded={() => this.props.close()} muted>
                        <source src="./app/resources/videos/moonshot.mp4" type="video/mp4" />
                    </video>
                    <div className={css(styles.textCopy)} onClick={() => this.props.close()} >
                        <center><i className="fa fa-angle-down fa-2x" aria-hidden="true"></i></center>
                    </div>
                </div>
            </div>
        );    
        AOS.refresh();
    }
}

LandingVideo.propTypes = {
    hide: PropTypes.bool.isRequired
};


const styles = StyleSheet.create({
    houdini: {
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        maxHeight: '100vh',
        transition: 'max-height 0.5s ease-in-out'
    },
    hide: {
        maxHeight: '0vh',
    },
    videoContent : {
        position: 'relative',
        zIndex: '5',
    },

    video: {
        top: '0%',
        left: '0%',
        position: 'relative',
        maxWidth: '100%', 
        maxHeight: '100%',
        width: 'auto', 
        height: 'auto',
        objectFit: 'fill',
        zIndex: '1',
    },

    textCopy: {
        position: 'absolute',
        top: '75%',
        width: '100%',
        zIndex: '2',
        color: 'white'
    }

});
