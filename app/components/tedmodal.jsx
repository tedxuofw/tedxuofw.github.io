import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Modal extends React.Component {
    close(e) {
        e.preventDefault();
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
                        </div>
                        <div className={css(styles.info)}>
                            <span className={css(styles.close)} onClick={() => this.close()}>
                                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.bottom)}>
                        {this.props.modalText}
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        
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
        top: '10%',
        bottom: '10%',
        left: '15%',
        right: '15%',
        zIndex: '9999',
        background: '#fff'
	},
    backdrop: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
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
        paddingTop: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '5px',
        
        "::-webkit-scrollbar": {
            width: '12px',
            backgroundColor: '#F5F5F5',
        },
        "::-webkit-scrollbar-track": {
            //WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
            //borderRadius: '6px',
            backgroundColor: '#F5F5F5',
        },
        "::-webkit-scrollbar-thumb": {
            //borderRadius: '6px',
            //WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: '#CCC',
        }
    },
    imagecontainer: {
        width: '50%',
        height: '100%',
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        margin: '0',
        float: 'left'
    },
    image: {
        position: 'absolute',
        display: 'block',
        minWidth: '100%',
        minHeight: '100%'
    }, 
    info: {
        width: '50%',
        float: 'right'
    },
    close: {
        position: 'absolute',
        top: '5px',
        right: '5px'
    }
                                 
});