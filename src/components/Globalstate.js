import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 100,
        marginBottom: 50


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderTop: '20px solid yellow',
        backgroundColor: 'cyan'

    },
    txt: {
        textTransform: "uppercase",
        color: "blue",
        // textDecorationLine: 'underline',       
    },
    global:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderTop: '20px solid yellow',
        backgroundColor: 'cyan',
        marginTop: 100,
        marginBottom: 50
            
    }
}));

export function Globalstate() {


    const [collectdata, setcollectdata] = useState({});

    useEffect(() => {

        async function getData() {

            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
            const data = await response.json();
            delete data.results[0].source;
            setcollectdata(data.results[0]);
            // console.log(data.results[0]);

            // const res = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
            // const coll = await res.json();
            // console.log(coll.countryitems[0][1].title)
            // setcon(coll.countryitems[0])
            // // console.log(coll.countryitems[0][2])



        } getData();


    }, [])



    const classes = useStyles();

    return (

            <div className={classes.root}>
<div className="head">
         <h1>GLOBAL STATE</h1>
     </div>
                {/* {
       Object.keys(con).map((vals,inde)=>{
         return(
           <li key={inde}>
             <span>{con[vals].title}</span>
             <span>{con[vals].total_cases}</span>
           </li>
         )
       })
     } */}
     
                <Grid container spacing={3}>

                    {
                        Object.keys(collectdata).map((val, ind) => {
                            return (

                                <Grid item xs={12} sm={4} key={ind} >

                                    <Paper className={classes.paper} elevation={3}>
                                        <h3 className={classes.txt}>{val.replace(/_/g, " ")}</h3>
                                        <h3>{collectdata[val]}</h3>
                                    </Paper>
                                </Grid>


                            )
                        })
                    }

                </Grid>
            </div>
        
    );
}
