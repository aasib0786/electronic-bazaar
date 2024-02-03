import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {serverURL} from "../../../services/FetchNodeServices"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";


var useStyles = makeStyles({
    dots:{
          '& .slick-dots li.slick-active button::before': {
            color:'#fffff',
            opacity:1
          },
          '& .slick-dots li button::before': {
            color:'#fff',
            fontSize:'12px',
            opacity:0.4,
          },
          '& .slick-dots li ':{

            margin:'20px 2px',


          }

    }

})

export default function MainSlider({banners}){
    var classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplaySpeed:3000,
        autoplay:true,
        focusOnSelect:true
      };
    // var data = ['b1.webp','b2.webp','b3.webp','b4.webp','b5.gif','b6.webp']
     const ShowSlider=()=>{
        return (banners.map((item)=>{
            return(<div >
           <img src={`${serverURL}/images/${item}` } style={{width:'100%'}}/>
            </div>)
                    })
           )
        
     }
    return(<div style={{width:'100%', marginTop:'10px'}}  >
          <Slider {...settings} className={classes.dots} >
          {ShowSlider()}
          </Slider>
    </div>)
}