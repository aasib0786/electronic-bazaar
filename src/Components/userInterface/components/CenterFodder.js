import React from "react";
import FodderSearchComponent from "./FodderSearchComponent";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function CenterFodder(){
    return(
        <div style={{width:'100%',fontWeight:'bold'}}>
           <span> USEFUL LINKS </span>
           <div style={{display:'flex'}}>
           <div style={{padding:'-5% 5% 5% 5%'}}>
           <p>About Croma</p>
           <p>Help And Support</p>
           <p>FAQs</p>
           <p>Buying Guide</p>
           <p>Return Policy</p>
           <p>B2B Orders</p>
           <p>Store Locator</p>
           <p>E-Waste</p>
           </div>
           <div style={{padding:'0% 5% 5% 5%'}}>
           <p>Franchise Opportunity</p>
           <p>Site Map</p>
           <p>Careers At Croma</p>
           <p>Terms Of Use</p>
           <p>Disclaimer</p>
           <p>Privacy Policy</p>
           <p>Unboxed</p>
           <p>Gift Card</p>
           </div>
           </div>
        </div>
    )
}