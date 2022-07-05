import React from 'react'
import Button from './Button'
import Card from './Card'
import  ReactDOM  from 'react-dom';

import classes from './ErrorModel.module.css';

const Backdrop=(props)=>{
    return <div className={classes.backdrop}/>;
}

const ModalOverlay=(props)=>{
    return(
        <Card classesName={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>
                {props.message}
            </p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    );
}

const ErrorModal=(props) =>{
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>,
        document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
            document.getElementById('overlay-root'))}
    </React.Fragment>
    
  )
}

export default ErrorModal;