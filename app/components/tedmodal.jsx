import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Modal extends React.Component {
    close(e) {
        if(this.props.onClose) {
            this.props.onClose();
        }
    }
    
    render() {
        if(this.props.isOpen === false) {
            return null;
        }
        
        return (
            <div>
                <div className={css(styles.modal)}>
                    <div className={css(styles.top)}>
                        <div className={css(styles.imagecontainer)}>
                            <img className={css(styles.image)} src={this.props.modalImage}/>
                            <div className={css(styles.infoname)}>{this.props.modalText}</div>
                        </div>
                        <div className={css(styles.info)}>
                            <span className={css(styles.close)} onClick={() => this.close()}>
                                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.bottom)}>
                        {this.props.modalText}                    
                    </div>
                </div>
                <div className={css(styles.backdrop)} onClick={e => this.close(e)}/>
            </div>
        )
    }
}



const styles = StyleSheet.create({
	modal: {
        position: 'fixed',
        top: '5%',
        bottom: '5%',
        left: '25%',
        right: '25%',
        zIndex: '9099',
        background: '#fff'
	},
    backdrop: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9098',
        background: 'rgba(0, 0, 0, 0.3)'
    },
    top: {
        background: '#E62B1E',
        height: '50%',
        color: 'white'
    },
    bottom: {
        height: '50%',
        overflowY: 'scroll',
        paddingTop: '25px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '25px',
        
        "::-webkit-scrollbar": {
            width: '8px',
            backgroundColor: '#F5F5F5',
        },
        "::-webkit-scrollbar-track": {
            //WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
            borderRadius: '4px',
            backgroundColor: '#F5F5F5',
        },
        "::-webkit-scrollbar-thumb": {
            borderRadius: '4px',
            //WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: '#CCC',
        }
    },
    imagecontainer: {
        maxWidth: '100%',
        height: '100%',
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        margin: '0',
        float: 'left',
    },
    image: {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        float: 'left',
        height: '100%',
        zIndex: '9998'
    }, 
    info: {
        width: '50%',
        float: 'right'
    },
    infoname: {
        float: 'right',
        zIndex: '9999'
    },
    close: {
        position: 'absolute',
        top: '5px',
        right: '5px'
    }
                                 
});