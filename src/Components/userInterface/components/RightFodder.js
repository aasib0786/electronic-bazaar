import React from "react";
import FodderSearchComponent from "./FodderSearchComponent";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function RightFodder(){
    return(
        <div style={{width:'100%',fontWeight:'bold'}}>
           <span> PRODUCTS </span>
           <div style={{display:'flex'}}>
           <div style={{padding:'-5% 5% 5% 5%'}}>
           <p>Televisions & Accessories</p>
           <p>Home Appliances</p>
           <p>Phones & Wearables</p>
           <p>Computers & Tablets</p>
           <p>Kitchen Appliances</p>
           <p>Audio & Video</p>
           <p>Health & Fitness</p>
           </div>
           <div style={{padding:'0% 5% 5% 5%'}}>
           <p>Grooming & Personal Care</p>
           <p>Cameras & Accessories</p>
           <p>Smart Devices</p>
           <p>Gaming</p>
           <p>Accessories</p>
           <p>Top Brands</p>
           </div>
           </div>
        </div>
    )
}