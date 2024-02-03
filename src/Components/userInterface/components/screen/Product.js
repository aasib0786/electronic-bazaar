import { Checkbox, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductDitealImage from "../ProductDitealImage";
import ProductDitealText from "../ProductDitealText";
import ProductDitealSpecification from "../ProductDitealSpecification";
import BuyNow from "../BuyNow";
import { useLocation } from "react-router-dom";


var useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    background: '#191919',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default function Product(props) {
  var location = useLocation(props)
  var p = location.state.product
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  var classes = useStyles()
  // const [Buynow , setBuyNow] = useState('false')
  const [product,setProduct] =useState(p)
  console.log('aasib:1:',product)
  const[refrace , setRefrace] = useState(false)

const handelWheel=()=>{
  alert('hihi')
}


  return (
    <div>
      <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: 10 }} >
        <div style={{ width: '100%' }} >
          <Header />
        </div>
      </Grid>
      <div  className={classes.root} >
      <Grid container spacing={0} style={{width:matches?'90%':'75%'}} >
        

        <Grid item  xs={matches?12:6} fullWidth style={{marginTop:'2%', /* position:matches?'sticky ':<></>*/}}>

          <Grid item xs={12} style={{display: 'flex',position: matches ? 'none' : 'sticky', top: 120 }}>
            <ProductDitealImage setProduct={setProduct}  product={product} style={{ display: 'flex', flexDirection: 'rows' }} />
          </Grid>
        </Grid>

        <Grid  item xs={matches?12:6} style={{ marginTop: '2%', color: 'white',width:'100%' }}>
          <ProductDitealText setRefrace={setRefrace} refrace={refrace} setProduct={setProduct} product={product} />
        </Grid>
        <Grid onwheel={handelWheel} item xs={12} >
          <ProductDitealSpecification />
        </Grid>
        
      </Grid>
      
      </div>
      {/* <Grid item xs={12} style={{position:'sticky',bottom:0,zIndex:3}}>
        <div onWheel >
          <BuyNow/>
        </div>
      </Grid> */}
       
    </div>
  )
}