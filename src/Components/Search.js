/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  divi : {
    marginTop : '5%' ,
  } ,
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Search() {
  const classes = useStyles();
  var curdat = new Date();
  var day = curdat.getDay().toString();
  if(day.length==1)
  day = '0'+ day;
  var mo = curdat.getMonth().toString();
  if(mo.length==1)
  mo = '0'+mo;
  var da = curdat.getFullYear() + '-' + mo + '-'+ day;
    return (
      
      <div className={classes.divi}>
        <h3>May you find time</h3>
      <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue= {da}
          InputLabelProps={{
            shrink: true,
          }}
        />
       <TextField
    id="time"
    label="Start Time"
    type="time"
    defaultValue="07:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
  <TextField
    id="time"
    label="End Time"
    type="time"
    defaultValue="07:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
  <Button variant="contained" color="primary" >
     Book
    </Button>
        </div>
  );
}