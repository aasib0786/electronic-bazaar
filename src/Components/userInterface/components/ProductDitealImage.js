// import Slider from "react-slick";
// import { serverURL } from "../../../services/FetchNodeServices";
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import {Checkbox, Grid, Rating } from "@mui/material";
// import ps from "../../../assets/ps1.webp"
// import HomeIcon from '@mui/icons-material/Home';

// export default function ProductDitealImage(){
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.down('md'));

//     var settings = {
//         dots:false,
//         infinite: true,
//         speed: 500,
//         arrows:matches?false:true,
//         slidesToShow:matches?2:4,
//         slidesToScroll: 1,
//         focusOnSelect:true,
//         vertical:true
//       };
//     var data=[
//      {id:0,picture:'ps1.webp',brandname:'Morphy rechards',productname:"iron ",modelno:'Coral 100 vat.',price: 1695.00,offerprice: 956.00,rating:4},
//      {id:0,picture:'ps2.webp',brandname:'Apple',productname:"Smart Watch",modelno:'Coral 100 vat.',price: 1695.00,offerprice:956,rating:2},
//      {id:0,picture:'ps3.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price: 20000.00,offerprice: 10000.00,rating:3},
//      {id:0,picture:'ps4.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000.00,offerprice:10000.00,rating:1},
//      {id:0,picture:'ps5.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:2},
//      {id:0,picture:'ps6.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:4},
//      {id:0,picture:'ps7.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:5},  
//    ]
//       const ShowProductSlider=()=>{
//         return (data.map((item)=>{
//             return(
//               <div style={{width:'92%', marginLeft:'3%',display:'flex' ,justifyContent:'center', alignItems:'center',background:'black',borderRadius:'5%'}}>
//                   <img src={`${serverURL}/images/${item.picture}` } style={{width:'60%',flexDirection:'row'   }}/>
//                 </div>)
//                  })
//                  return (
//                   <div style={{ width: matches ? '95%' : '100%', display: 'flex', flexDirection: matches ? 'column' : 'row', position: matches ? 'none' : 'sticky', top: 65 }}>
          
//                       <div style={{ width: matches ? '100%' : '60%', transform: matches ? 'rotate(0deg)' : 'rotate(90deg)', marginLeft: matches ? '' : 'auto', marginRight: matches ? '' : '5%', marginTop: matches ? '' : '5%' }}>
          
//                           {matches ? <div style={{ width: '100%', display: 'flex', marginTop: '3%', backgroundColor: '' }}>
//                               <div style={{ marginLeft: 'auto' }}><Checkbox style={{ color: '#fff' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></div>
//                               <div><ShareOutlinedIcon style={{ color: '#fff', marginLeft: '10px', marginTop: '10px' }} /></div>
//                           </div> : <></>
//                           }
          
//                           {matches ?
//                               <></>
//                               : <div style={{ transform: matches ? 'none' : 'rotate(-90deg)', width: '100%', display: 'flex', justifyContent: 'right' }}>
//                                   <img src={`${serverURL}/images/${data[0]}`} width="80%" height="80%" />
//                               </div>
//                           }
          
//                           <div style={{ width: '100%', display: matches ? 'flex' : '', justifyContent: matches ? 'center' : '' }}>
//                               <Slider {...settings} className={classes.carouselDots} style={{ width: matches ? '50%' : '' }}>
//                                   {showSlider()}
//                               </Slider>
//                           </div>
//                       </div>
          
//                       {matches ? <></> : <div style={{ width: '15%', display: 'flex', marginTop: '3%' }}>
//                           <div><Checkbox style={{ color: '#fff'}} icon={<FavoriteBorder style={{fontSize:'2vw'}}/>} checkedIcon={<Favorite />} /></div>
//                           <div><ShareOutlinedIcon style={{ color: '#fff', marginLeft: '10px', marginTop: '10px',fontSize:'2vw' }} /></div>
//                       </div>
//                       }
//                   </div>
//               )
//           }
          
//           export default ProductVerticalImageSlider

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeServices";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Checkbox, useMediaQuery } from "@mui/material";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    carouselDots: {
        '& .slick-dots li.slick-active button:before': {
            color: '#fff',
            opacity: 1
        },
        '& .slick-dots li button::before': {
            fontSize: '7px',
            color: '#fff',
            opacity: 0.4
        },
        '& .slick-dots li': {
            margin: '2% -2px'
        }
    }
});

function ProductDitealImage(props) {
    var product=props.product
    var data = product?.picture.split(",")
    const matches = useMediaQuery('(max-width:800px)')
    const matches_sm = useMediaQuery('(max-width:400px)')
    const classes = useStyles()
    const [image,setImage]=useState('')
  console.log("PRODUCT PICTURE:",product)

    var settings = {
        dots: matches ? true : false,
        infinite: true,
        speed: 500,
        slidesToShow: matches ? 1 : 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        arrows: matches ? false : true,
    }

    
     const handleImageChange=(item)=>{
         setImage(item)
     }

    useEffect(function(){
        setImage(data[0])
    },[props])
    // var data=[
    //        {id:0,picture:'ps1.webp',brandname:'Morphy rechards',productname:"iron ",modelno:'Coral 100 vat.',price: 1695.00,offerprice: 956.00,rating:4},
    //        {id:0,picture:'ps2.webp',brandname:'Apple',productname:"Smart Watch",modelno:'Coral 100 vat.',price: 1695.00,offerprice:956,rating:2},
    //        {id:0,picture:'ps3.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price: 20000.00,offerprice: 10000.00,rating:3},
    //        {id:0,picture:'ps4.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000.00,offerprice:10000.00,rating:1},
    //        {id:0,picture:'ps5.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:2},
    //        {id:0,picture:'ps6.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:4},
    //        {id:0,picture:'ps7.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:5},  
    //      ]

    const showSlider = () => {
        return data.map((item) => {
            return (<div onClick={()=>handleImageChange(item)} style={{ width: '100%' }}>
                <img src={`${serverURL}/images/${item}`} style={{ borderRadius: '5px', border: matches ? '' : '0.5px solid #9A9A9A', transform: matches ? '' : 'rotate(-90deg)' }} width="90%" height="90%"></img>
            </div>)
        })
    }


    return (
        <div style={{ width: matches ? '95%' : '95%', display: 'flex', flexDirection: matches ? 'column' : 'row', position: matches ? 'none' : 'sticky', top: 0 }}>

            <div style={{ width: matches ? '100%' : '70%', transform: matches ? 'rotate(0deg)' : 'rotate(90deg)', marginLeft: matches ? '' : 'auto', marginRight: matches ? '' : '5%', marginTop: matches ? '' : '5%' }}>

                {matches ? <div style={{ width: '100%', display: 'flex', marginTop: '3%', backgroundColor: '' }}>
                    <div style={{ marginLeft: 'auto' }}><Checkbox style={{ color: '#fff' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></div>
                    <div><ShareOutlinedIcon style={{ color: '#fff', marginLeft: '10px', marginTop: '10px' }} /></div>
                </div> : <></>
                }

                {matches ?
                    <></>
                    : <div style={{ transform: matches ? 'none' : 'rotate(-90deg)', width: '100%', display: 'flex', justifyContent: 'right' }}>
                        <img src={`${serverURL}/images/${image}`} width="95%" height="95%" />
                    </div>
                }

                <div style={{ width: '110%', display: matches ? 'flex' : '', justifyContent: matches ? 'center' : ''}}>
                    <Slider {...settings} className={classes.carouselDots} style={{ width: matches ? '80%' : '' }}>
                        {showSlider()}
                    </Slider>
                </div>
            </div>

            {matches ? <></> : <div style={{ width: '15%', display: 'flex', marginTop: '3%' }}>
                <div><Checkbox style={{ color: '#fff'}} icon={<FavoriteBorder style={{fontSize:'2vw'}}/>} checkedIcon={<Favorite />} /></div>
                <div><ShareOutlinedIcon style={{ color: '#fff', marginLeft: '10px', marginTop: '10px',fontSize:'2vw' }} /></div>
            </div>
            }
        </div>
    )
}

export default ProductDitealImage