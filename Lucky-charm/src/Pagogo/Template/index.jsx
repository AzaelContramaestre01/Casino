import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useState } from 'react';
import Popup from '../../components/Popup';
import { UserContext } from '../../contexts/UserContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #483D8B 76%, #FFFFFF 100%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '100%',
    padding: '0 30px',
  },
  tableBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100,
    width: '80%',
  },
  table: {
    minWidth: 650,
    background: 'linear-gradient(45deg, #4B0082 30%, #FFFFFF 80%)',
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  paper: {
    position: 'absolute',
    width: 400,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  btn: {
    background: 'linear-gradient(45deg, #DAA520 30%, #FFFFFF 90%)',
  },
}));

const Pagogo = () => {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.title}>
              FREE TO PLAY
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <Button size="large" variant="outlined" color="primary" className={classes.btn} onClick={handleOpen}>GAME ON</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.subtitle}>
              RECORD
            </Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper} className={classes.tableBox}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">SLOT 1</TableCell>
                <TableCell align="right">SLOT 2</TableCell>
                <TableCell align="right">SLOT 3</TableCell>
                <TableCell align="right">TIME</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user?.record?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.slot1}</TableCell>
                  <TableCell align="right">{row.slot2}</TableCell>
                  <TableCell align="right">{row.slot3}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {open && (<Popup open={open} setOpen={setOpen} />)}
    </>
  );
};

export default Pagogo;
