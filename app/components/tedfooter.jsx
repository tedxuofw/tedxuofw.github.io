import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class TEDFooter extends React.Component {
    render(){
                
        return (
            <footer className={css(styles.tedfooter)}>
                <h3 className={css(styles.tedfooterh3)}>TEDxUofW 2018</h3>
                <p className={css(styles.tedfooterp)}>May 5, 2018</p>
                <p className={css(styles.tedfooterp)}>Kane Hall, Room 130</p>
                <img className={css(styles.tedfooterlogo)} src="/app/resources/images/logo-red.png" />
                <h4 className={css(styles.tedfooterh4)}><b>Envision the Future</b></h4>
                <div className={css(styles.tedfootergroup)}>
                    <a target="_blank" href="https://www.facebook.com/TEDxUofW/">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-facebook.png" />
                    </a>
                    <a target="_blank" href="https://twitter.com/tedxuofw?lang=en">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-twitter.png" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/tedxuofw/">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-instagram.png" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/user/TEDxUofWashington">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-youtube.png" />
                    </a>
                </div>
                <h5 className={css(styles.tedfooterh5)}>This independent TEDx event is</h5>
                <h5 className={css(styles.tedfooterh5)}>operated under license from TED.</h5>
                <br/>
            </footer>
        );
    }
}

const styles = StyleSheet.create({
    tedfooter: {
        backgroundColor: '#F5F5F5',
        textAlign: 'center',
        paddingTop: '25px',
    },
    tedfooterp: {
        fontWeight: 'bolder',
        fontSize: '16px',
        textTransform: 'uppercase',
        margin: '0',
    },
    tedfooterh3: {
        fontSize: '24px',
        color: '#E62B25',
        fontWeight: 'bold',
        marginTop: '0',
        marginBottom: '10px',
    },
    tedfooterh4: {
        fontSize: '18px',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
        margin: '5px',
    },
    tedfooterh5: {
        textAlign: 'center',
        lineHeight: '13px',
        fontSize: '12px',
        margin: '0',
    },
    tedfooterlogo: {
        width: '100px',
        margin: '15px 0 15px 0',
    },
    tedfootericon: {
        width: '36px',
        margin: '0 10px 0 10px',
        verticalAlign: 'middle',
        transition: 'opacity 0.2s ease-out',
        ':hover': {
            opacity: '0.8',
            transition: 'opacity 0.2s ease-out'
        }
    },
    tedfootergroup: {
        marginBottom: '20px',
    }
});