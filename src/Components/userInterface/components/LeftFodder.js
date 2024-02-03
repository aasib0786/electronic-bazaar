import React from "react";
import FodderSearchComponent from "./FodderSearchComponent";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function LeftFodder(){
    return(
        <div style={{width:'80%'}}>
           <span style={{fontWeight:'bold'}}> CONNECT WITH US </span>
           <div style={{width:'90%'}}>
            <FodderSearchComponent />
           </div>
           <div style={{display:'flex'}}>
            <span style={{padding:'5%'}}><YouTubeIcon fontSize="large"/></span>
            <span style={{padding:'5%'}}><FacebookIcon fontSize="large"/></span>
            <span style={{padding:'5%'}}><InstagramIcon fontSize="large"/></span>
            <span style={{padding:'5%'}}><TwitterIcon fontSize="large"/></span>
           </div>
           <div style={{marginTop:'10%'}}>
            <span>© Copyright 2023 Croma. All rights reserved</span>
           </div>
        </div>
    )
}