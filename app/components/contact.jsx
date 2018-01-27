import React from 'react';
import ReactDOM from 'react-dom';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';


export class Contact extends React.Component {
     
    render() {        
        return (
            
            
            
            
            <div className={css(styles.tedcontact)}>
                <div className={css(styles.tedcontactheader)}>
                <div className={css(styles.tedheadertitle)}>{this.props.title}</div>
                <div className={css(styles.tedheadersubtitle)}>{this.props.subtitle}</div>    
                </div>
                 <div className={css(styles.contactformcontain)}>   
                     <form >
        <FormGroup controlId="formControlsText">
          
          <FormControl type="text" placeholder="Name" />
            <FormControl type="text" placeholder="Email" />
            <FormControl type="text" placeholder="Subject" />
            <FormControl type="text" placeholder="Message" />
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>
      </form>
                     
            </div>
                </div>
           
        );
    }
}


const styles = StyleSheet.create({
    tedcontact: {
        margin: '60px 20px 30px 20px',
        overflow: 'auto'
    },
    tedcontactheader:{
        margin: '0px 0px 0px 0px',
        padding: '28px 177px 50.31px 177px',
      background: '#E62B25'
    },
    tedheadertitle: {
        lineHeight:'53px',
        fontFamily: 'Avenir',
        fontStyle: 'Medium',
        fontSize: '40px',
        color: 'White',
        textAlign: 'Center'
    },
     tedheadersubtitle: {
           fontFamily: 'Avenir',
        fontWeight: 'lighter',
         lineHeight:'53px',
        fontSize: '22px',
         textAlign: 'Center',
         color: 'White'
    },
    contactformcontain: {
        padding: '28px 177px 50.31px 177px',
        margin: '0px 0px 0px 0px',
         background: '#E5E5E5'
    }   
    
});