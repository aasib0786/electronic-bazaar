import { Grid } from "@mui/material";
import React from "react";
import Header from "../Header";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import ProductDetailsComponents from "../ProdectDetailComponents";
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductDetailsFillterComponents from "../ProductDetailsFillterComponents";
import FillterButtonComponents from "../FillterButtonComponents";
import { useLocation } from "react-router-dom";

var useStyles = makeStyles({
   root:{
    width:'100%',
    height:'100%',
    background:'#191919',
    display:'flex',
    //alignItems:'center',
    justifyContent:'center'
   }
})

export default function ProductSearch(){
  var location = useLocation()
  var data = location?.state?.data
  console.log('dataDATA:-',data)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var classes = useStyles()
    return(
        <div  >
            <Grid container spacing={0} className={classes.root} >
                <Grid item xs={12}  style={{position:'sticky' , top:'0' , zIndex:'3'}}>
                <div  >
                <Header/>
                </div>
                </Grid>
                {matches?<></>:<Grid item xs={3.5}  style={{color:'white' , marginTop:'5%' }}>
                 <ProductDetailsFillterComponents/>
                </Grid>}
                <Grid item xs={matches?12:8.5 }    style={{color:'white',borderLeft:matches?<></>:'2px solid #353535' , marginTop:'3%',padding:'0% 0.4% 0% ' }}>
                <div style={{fontSize:'30px',fontWeight:600}}>Best Deals on ACs</div>
                <div >
                <ProductDetailsComponents data={data}/>
                </div>
                </Grid>
                {matches?<Grid item xs={12} style={{position:'sticky' , bottom:'0' , zIndex:'3'}} >
                  <FillterButtonComponents/>
                </Grid>:<></>}
            </Grid>
        </div>
    )}