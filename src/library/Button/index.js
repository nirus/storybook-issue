import React from 'react';
import Button from '@material-ui/core/Button';
import "./Button.scss";

export const ButtonMod = (props)=> <Button classes={{root: "test-button"}} {...props}>Hello Button</Button>
export default ButtonMod;