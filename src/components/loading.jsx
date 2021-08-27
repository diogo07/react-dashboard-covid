import React from 'react';
import ReactLoading from "react-loading";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    zIndex: 10000,
    color: 'white'
  }
});

export default function Loading(props) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.root} open={props.open} >
      <ReactLoading type="bubbles" color="#eee" />
    </Backdrop>
  )

}