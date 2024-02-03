import React from "react";
import ps from "../../../assets/ps1.webp"
import { Button } from "@mui/material";

export default function BuyNow(){
    return(
        <div style={{background:'black', width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{width:'38%',padding:'15px',display:'flex',alignItems:'center'}}>
            <span><img src={ps} width={'35px'}/></span>
            <span style={{justifyContent:'center',marginLeft:'10px',fontWeight:'bold',color:'white'}}>LG 260 Litres 2 Star Frost Free Double Door Refrigerator with Multi... <br/>&#x20b9;10000 </span>
        </div>
        <div style={{width:'38%',padding:'15px',display:'flex',justifyContent:'center'}}>
            <span><Button style={{color:'black',background:'#12DAA8',padding:'10px 50px 10px 50px',borderRadius:'10px'}}>BuyNow</Button></span>
            <span><Button style={{color:'white',background:'#353535',marginLeft:'10px',padding:'10px 40px 10px 40px',border:'1px solid white',borderRadius:'10px'}}>Add to cart</Button></span>
        </div>
        </div>
    )
}