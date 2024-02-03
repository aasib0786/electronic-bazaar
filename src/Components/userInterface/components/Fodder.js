import React from "react";
import LeftFodder from "./LeftFodder";
import CenterFodder from "./CenterFodder";
import RightFodder from "./RightFodder";

export default function Fodder(){
    return(
        <div style={{color:'white',display:'flex',justifyContent:'center',width:'100%',background:'#1D1D1D'}}>
            <div style={{width:'33.5%',height:'110%',display:'flex',justifyContent:'center',padding:'3%'}}>
              <LeftFodder/>
            </div>
            <div style={{border:'1px solid white',margin:'3% 0% 3% 0%'}}/>
            <div style={{width:'33.5%',display:'flex',justifyContent:'center',padding:'3%'}}>
               <CenterFodder />
            </div>
            <div style={{border:'1px solid white',margin:'3% 0% 3% 0%'}}/>
            <div style={{width:'33.5%',display:'flex',justifyContent:'center',padding:'3%'}}>
              <RightFodder />
            </div>
        </div>
    )
}