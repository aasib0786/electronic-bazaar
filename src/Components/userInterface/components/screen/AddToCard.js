import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import Coupon from "../CouponComponents";
import AddProductCard from "../AddProductCard";
import CartCheckOutComponents from "../CartCheckOutComponents";
import { useSelector } from "react-redux";
import { useStyles } from "./projectCss";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import shoppingimage from "../../../../assets/shoppingcart.png"

export default function AddToCard() {
  var classes = useStyles()
  var cart = useSelector(state => state.mycart)
  var cartproduct = Object.values(cart)
  console.log("cartproduct::",cartproduct)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [refrace, setRefrace] = useState(false)

  const removeCart=()=>{
    return(
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50vh'}}>
        <div style={{}}>
        <img src={shoppingimage} width={200} />
        </div>
      </div>
    )
  }

  return (<div className={classes.AddToCard}  >
    <div>
    <div style={{ position: 'sticky', top:0, zIndex:3 }}>
      <Header />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', width: matches ? '95%' : '75%', flexDirection: 'column' }}>

        <div style={{ display: 'flex', marginTop: '2%', fontWeight: 'bold', fontSize:'2.5vh' }}>YOUR CARD</div>

        {matches?<></>:<div style={{ display: 'flex', marginTop: '2%', alignItems: 'center' }}>
          <Button style={{ background: '#12DAA8', width: '8%', fontSize: '0.8vw', color: '#121212' }}>Sign In</Button>
          <span style={{ display: 'flex', marginLeft: '2%', fontWeight: 'bold', fontSize: '1vw' }}>to check out faster</span>
        </div>}
        {cartproduct.length==0?<>{removeCart()}</>:
        <div style={{ display: 'flex', width: '100%', flexDirection: matches ? 'column' : 'row' }}>
          <div style={{ background: '#0000', width: matches ? '100%' : '65%' }}>
            <div style={{ marginTop:matches?'8%': '4%' }}>
              <Coupon />
            </div>
            <div style={{ marginTop: '4%' }}>
              <AddProductCard setRefrace={setRefrace} refrace={refrace} cartproduct={cartproduct} />
            </div>
          </div>

          <div style={{ margin: matches ? '3% 0% 0% 0% ' : '3% 0% 0% 2% ', width: matches ? '100%' : '33%', position: 'sticky', zIndex: 1, top: 80 }}>
            <CartCheckOutComponents cartproduct={cartproduct} title='check out' />
          </div>

        </div>}
      </div>
    </div>
    </div>
  </div>)
}