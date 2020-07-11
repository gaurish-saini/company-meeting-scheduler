import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function SimpleTable() {
  const classes = useStyles();
  const [rows,setRows] = useState([]);
  var curdat = new Date();
  var day = curdat.getDay().toString();
  if(day.length==1)
  day = '0'+ day;
  var mo = curdat.getMonth().toString();
  if(mo.length==1)
  mo = '0'+mo;
  var da = curdat.getFullYear() + '-' + mo + '-'+ day;
  //const [dat,setDate] = useState('7/8/2019');
  //const [dat,setDat] = useState(curdat.getDate() + '/' + curdat.getMonth() + '/' + curdat.getFullYear());
  const [dat,setDat] = useState(curdat.getDate() + '/' + curdat.getMonth() + '/' + curdat.getFullYear());
  const [nexi,setNexi] = useState(da);
  var API_URL = "http://fathomless-shelf-5846.herokuapp.com/api/schedule?date=" + dat ;
  useEffect(() => {
      axios.get(API_URL)
      .then(response=>response.data)
      .then((data) => {
          setRows(data)
      })
      .catch(err=>console.log(err))
  }, [API_URL]);
  const handleChange = (event) => {
    var tar = event.target.value.toString() ;
    var arr = tar.split('-');
    //var datapi = arr[2] + '/' + arr[1] + '/' + arr[0];
    //console.log(datapi);
    //setNexi(event.target.value);
    //console.log(nexi);
    setDat(arr[2] + '/' + arr[1] + '/' + arr[0]);
  };
  return (
    <div>
    <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue= {da}
        InputLabelProps={{
          shrink: true,
        }}
        onChange = {handleChange}
      />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Number</TableCell>
            <TableCell>Start_Time</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index+1}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.start_time}</TableCell>
              <TableCell align="right">{row.end_time}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
    <Button variant="contained" color="primary" >
     Previous
    </Button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="contained" color="primary" >
     Next
    </Button>
    </div>
    </div>
  );
}
