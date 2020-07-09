import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      //   flexGrow: 1,
      maxWidth: 1000,
      margin: '0 auto',
      marginTop: 100

    },
    paper: {
      borderTop: '30px solid yellow',
      borderBottom: '30px solid black',


      padding: 40,
      textAlign: 'center',
      // color: theme.palette.text.secondary,
      margin: 30,
      textTransform: 'uppercase',
      backgroundColor: 'cyan'

    },
    col: {
      color: 'gray',
      textDecorationLine: "underline"
    },
    txt: {
      color: "blue"
    },
    tx: {
      color: "red"
    },
  }),
);

export default function Countrys() {

  const [con, setcon] = useState([{}]);

  useEffect(() => {

    async function datalao() {

      const res = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      const respon = await res.json();
      // console.log(respon.countryitems[0][1]);
      setcon(respon.countryitems[0])

    } datalao();

  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="head">
         <h1>WORLD STATE</h1>
     </div>

      {
        Object.keys(con).map((val, ind) => {
          return (


            <Paper className={classes.paper} key={ind}>

              <h1 className={classes.col}>{con[val].title}</h1>
              <h3 className={classes.txt}><span>Total Cases</span><br />{con[val].total_cases}</h3>
              <h3 className={classes.tx}><span>Total Deaths</span><br />{con[val].total_deaths}</h3>
              <h3 className={classes.txt}><span>Total New Cases Today</span><br />{con[val].total_new_cases_today}</h3>
              <h3 className={classes.tx}><span>Total New Deaths Today</span><br />{con[val].total_new_deaths_today}</h3>
              <h3 className={classes.txt}><span>Total Recovered</span><br />{con[val].total_recovered}</h3>

            </Paper>

          )
        })
      }

    </div>
  );
}
